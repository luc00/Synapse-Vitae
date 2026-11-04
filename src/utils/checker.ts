import { SUPPLEMENTS_DATABASE } from '../data/supplements';
import { 
  Supplement, 
  StackAnalysisResult, 
  PositiveSynergy, 
  Incompatibility, 
  TimeOfDay 
} from '../types/supplement';

export function getSupplementById(id: string): Supplement | undefined {
  return SUPPLEMENTS_DATABASE.find(s => s.id === id);
}

export function searchSupplements(
  query: string,
  categoryFilter?: string,
  goalFilter?: string,
  liverFilter?: string
): Supplement[] {
  const q = query.trim().toLowerCase();

  return SUPPLEMENTS_DATABASE.filter(item => {
    // Text search
    if (q) {
      const matchName = item.name.toLowerCase().includes(q);
      const matchSci = item.scientificName.toLowerCase().includes(q);
      const matchTag = item.shortTagline.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchBenefits = item.primaryBenefits.some(b => b.toLowerCase().includes(q));
      if (!matchName && !matchSci && !matchTag && !matchDesc && !matchBenefits) {
        return false;
      }
    }

    // Category filter
    if (categoryFilter && categoryFilter !== 'tutti') {
      if (item.category !== categoryFilter) return false;
    }

    // Goal filter
    if (goalFilter && goalFilter !== 'tutti') {
      if (!item.targetGoals.includes(goalFilter)) return false;
    }

    // Liver filter
    if (liverFilter && liverFilter !== 'tutti') {
      if (liverFilter === 'protettivo' && !item.liverSafety.hepatoprotective) return false;
      if (liverFilter === 'cicli_obbligatori' && item.liverSafety.riskLevel !== 'alto_richiede_cicli') return false;
      if (liverFilter === 'sicuro' && item.liverSafety.riskLevel !== 'basso' && item.liverSafety.riskLevel !== 'sicuro_protettivo') return false;
    }

    return true;
  });
}

export function analyzeSupplementStack(selectedIds: string[]): StackAnalysisResult {
  const supplements = selectedIds
    .map(id => getSupplementById(id))
    .filter((s): s is Supplement => s !== undefined);

  const synergiesFound: {
    supA: Supplement;
    supB: Supplement;
    synergy: PositiveSynergy;
  }[] = [];

  const conflictsFound: {
    supA: Supplement;
    supB: Supplement;
    conflict: Incompatibility;
  }[] = [];

  // 1. Detect Synergies & Conflicts between pairs
  for (let i = 0; i < supplements.length; i++) {
    for (let j = i + 1; j < supplements.length; j++) {
      const a = supplements[i];
      const b = supplements[j];

      // Check synergies A -> B
      const synAB = a.positiveSynergies.find(syn => syn.targetSupplementId === b.id);
      if (synAB) {
        synergiesFound.push({ supA: a, supB: b, synergy: synAB });
      }

      // Check synergies B -> A (if not identical)
      const synBA = b.positiveSynergies.find(syn => syn.targetSupplementId === a.id);
      if (synBA && (!synAB || synBA.mechanism !== synAB.mechanism)) {
        synergiesFound.push({ supA: b, supB: a, synergy: synBA });
      }

      // Check conflicts A -> B
      const confAB = a.incompatibilities.find(c => c.targetSupplementId === b.id);
      if (confAB) {
        conflictsFound.push({ supA: a, supB: b, conflict: confAB });
      }

      // Check conflicts B -> A
      const confBA = b.incompatibilities.find(c => c.targetSupplementId === a.id);
      if (confBA && (!confAB || confBA.reason !== confAB.reason)) {
        conflictsFound.push({ supA: b, supB: a, conflict: confBA });
      }
    }
  }

  // 2. Assess Liver Impact & Safety
  let hepaticLoadRaw = 0;
  let highRiskCount = 0;
  let moderateRiskCount = 0;
  let hepatoprotectiveCount = 0;
  const liverWarnings: string[] = [];
  const cycleAdvice: string[] = [];

  supplements.forEach(sup => {
    if (sup.liverSafety.hepatoprotective) {
      hepatoprotectiveCount++;
      hepaticLoadRaw -= 0.5;
    }
    if (sup.liverSafety.riskLevel === 'alto_richiede_cicli') {
      highRiskCount++;
      hepaticLoadRaw += 3.5;
      liverWarnings.push(`⚠️ "${sup.name}" richiede monitoraggio e cicli rigorosi: ${sup.liverSafety.impactDescription}`);
      cycleAdvice.push(`${sup.name}: ${sup.liverSafety.cycleProtocol.description}`);
    } else if (sup.liverSafety.riskLevel === 'moderato') {
      moderateRiskCount++;
      hepaticLoadRaw += 1.8;
      if (sup.liverSafety.cycleProtocol.required) {
        cycleAdvice.push(`${sup.name}: Ciclo consigliato di ${sup.liverSafety.cycleProtocol.recommendedCycleWeeks || 8} settimane ON e ${sup.liverSafety.cycleProtocol.recommendedBreakWeeks || 2} settimane OFF.`);
      }
    } else {
      hepaticLoadRaw += 0.4;
    }
  });

  // Clamp load score to 0..10 scale
  let hepaticLoadScore = Math.max(1, Math.min(10, Math.round(hepaticLoadRaw)));
  if (supplements.length === 0) hepaticLoadScore = 0;

  if (highRiskCount >= 2) {
    liverWarnings.unshift(`🚨 ATTENZIONE SOVRACCARICO EPATICO: Stai assumendo 2 o più composti che richiedono cicli obbligatori (${highRiskCount} composti ad alto impegno per il citocromo P450). Si raccomanda di non assumerli nello stesso periodo o di inserire Cardo Mariano / NAC.`);
  }

  if (hepatoprotectiveCount > 0) {
    cycleAdvice.unshift(`🛡️ Presenza protettiva: Hai incluso ${hepatoprotectiveCount} integratore/i con azione epatoprotettiva (es. supporto glutatione o stabilizzazione delle membrane).`);
  }

  if (cycleAdvice.length === 0 && supplements.length > 0) {
    cycleAdvice.push('Tutti i composti selezionati hanno un profilo di sicurezza epatica elevato a dosaggi standard. Nessun ciclo vincolante, ma 1-2 settimane di scarico all’anno favoriscono il reset recettoriale.');
  }

  // 3. Generate Chrono-Schedule (Optimized daily time slots)
  const slotDefinitions: {
    slotId: TimeOfDay;
    slotLabel: string;
    description: string;
  }[] = [
    {
      slotId: 'mattina_digiuno',
      slotLabel: 'Mattina al Risveglio (A Digiuno)',
      description: 'Con 300ml d’acqua naturale, almeno 20-30 min prima di fare colazione.'
    },
    {
      slotId: 'colazione_pasti',
      slotLabel: 'Colazione (Con Cibo & Grassi Sani)',
      description: 'Durante la colazione; essenziale per vitamine liposolubili e polifenoli con lipidi.'
    },
    {
      slotId: 'pranzo',
      slotLabel: 'Pranzo (Metà Giornata)',
      description: 'Durante o subito dopo il pasto di metà giornata.'
    },
    {
      slotId: 'pomeriggio',
      slotLabel: 'Pomeriggio (15:00 - 17:00)',
      description: 'A stomaco vuoto o con spuntino leggero, supporto cognitivo ed energetico.'
    },
    {
      slotId: 'pre_allenamento',
      slotLabel: 'Pre-Workout (30-45 min prima)',
      description: 'Prima dello sforzo muscolare o dell’attività sportiva.'
    },
    {
      slotId: 'post_allenamento',
      slotLabel: 'Post-Workout (Subito Dopo)',
      description: 'Insieme allo shaker post-workout o al pasto di recupero con carboidrati/proteine.'
    },
    {
      slotId: 'cena',
      slotLabel: 'Cena (Sera)',
      description: 'Durante il pasto serale, formulazioni digestive o rilassanti.'
    },
    {
      slotId: 'prima_dormire',
      slotLabel: 'Prima di Coricarsi (Pre-Nanna)',
      description: '30-60 minuti prima di dormire, lontano da schermi luminosi.'
    }
  ];

function normalizeSlotId(slot: string): TimeOfDay {
  if (slot === 'sera') return 'cena';
  if (slot === 'notte') return 'prima_dormire';
  if (slot === 'mattina') return 'colazione_pasti';
  const validSlots: TimeOfDay[] = [
    'mattina_digiuno',
    'colazione_pasti',
    'pranzo',
    'pomeriggio',
    'pre_allenamento',
    'post_allenamento',
    'cena',
    'prima_dormire'
  ];
  if (validSlots.includes(slot as TimeOfDay)) {
    return slot as TimeOfDay;
  }
  return 'colazione_pasti';
}

  // Map each supplement to its best non-conflicting slot
  const slotAssignments: Record<TimeOfDay, Supplement[]> = {
    mattina_digiuno: [],
    colazione_pasti: [],
    pranzo: [],
    pomeriggio: [],
    pre_allenamento: [],
    post_allenamento: [],
    cena: [],
    prima_dormire: []
  };

  supplements.forEach(sup => {
    // Pick the primary ideal time
    const rawSlot = sup.timing.idealTimes[0] || 'colazione_pasti';
    const primarySlot = normalizeSlotId(rawSlot);

    if (!slotAssignments[primarySlot]) {
      slotAssignments[primarySlot] = [];
    }

    // Check if there is an active conflict in this slot already
    const conflictingAlreadyInSlot = slotAssignments[primarySlot].some(existing => {
      const conflictA = sup.incompatibilities.some(inc => inc.targetSupplementId === existing.id);
      const conflictB = existing.incompatibilities.some(inc => inc.targetSupplementId === sup.id);
      return conflictA || conflictB;
    });

    if (!conflictingAlreadyInSlot) {
      slotAssignments[primarySlot].push(sup);
    } else {
      // Find an alternate slot among idealTimes or fallback
      const altSlot = sup.timing.idealTimes.slice(1).map(normalizeSlotId).find(slot => {
        if (!slotAssignments[slot]) slotAssignments[slot] = [];
        return !slotAssignments[slot].some(existing => {
          return sup.incompatibilities.some(inc => inc.targetSupplementId === existing.id) ||
                 existing.incompatibilities.some(inc => inc.targetSupplementId === sup.id);
        });
      });

      if (altSlot) {
        slotAssignments[altSlot].push(sup);
      } else {
        // Fallback to dinner or lunch if morning was conflicting
        if (primarySlot === 'mattina_digiuno' || primarySlot === 'colazione_pasti') {
          slotAssignments['cena'].push(sup);
        } else {
          slotAssignments['colazione_pasti'].push(sup);
        }
      }
    }
  });

  const chronoSchedule = slotDefinitions
    .map(def => ({
      slotId: def.slotId,
      slotLabel: def.slotLabel,
      description: def.description,
      items: slotAssignments[def.slotId]
    }))
    .filter(slot => slot.items.length > 0);

  return {
    supplements,
    synergiesFound,
    conflictsFound,
    liverAssessment: {
      hepaticLoadScore,
      hasHighRiskCompounds: highRiskCount > 0,
      hepatoprotectiveCount,
      warnings: liverWarnings,
      cycleAdvice
    },
    chronoSchedule
  };
}
