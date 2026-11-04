export type CategoryType = 
  | 'vitamine'
  | 'minerali'
  | 'acidi_grassi'
  | 'nootropi'
  | 'aminoacidi'
  | 'erbe_adattogeni'
  | 'digestione'
  | 'longevita'
  | 'articolazioni';

export type TimeOfDay = 
  | 'mattina_digiuno' 
  | 'colazione_pasti' 
  | 'pranzo' 
  | 'pomeriggio' 
  | 'pre_allenamento' 
  | 'post_allenamento' 
  | 'cena' 
  | 'prima_dormire';

export type MealRequirement = 
  | 'stomaco_vuoto' 
  | 'stomaco_pieno_grassi' 
  | 'stomaco_pieno_qualsiasi' 
  | 'colazione_pasti'
  | 'indifferente';

export type LiverRiskLevel = 'sicuro_protettivo' | 'basso' | 'moderato' | 'alto_richiede_cicli';

export type SynergyType = 'assorbimento' | 'potenziamento' | 'attivazione' | 'protezione';

export type InteractionSeverity = 'critico' | 'alto' | 'moderato' | 'spaziare_orari';

export interface PositiveSynergy {
  targetSupplementId: string;
  targetSupplementName: string;
  synergyType: SynergyType;
  description: string;
  mechanism: string;
}

export interface Incompatibility {
  targetSupplementId: string;
  targetSupplementName: string;
  severity: InteractionSeverity;
  reason: string;
  recommendation: string;
}

export interface LiverSafetyInfo {
  riskLevel: LiverRiskLevel;
  hepatoprotective: boolean;
  impactDescription: string;
  cycleProtocol: {
    required: boolean;
    recommendedCycleWeeks?: number;
    recommendedBreakWeeks?: number;
    description: string;
  };
}

export interface TimingInfo {
  idealTimes: TimeOfDay[];
  mealRequirement: MealRequirement;
  instructions: string;
  avoidTimes?: string;
}

export interface Supplement {
  id: string;
  name: string;
  scientificName: string;
  category: CategoryType;
  categoryLabel: string;
  shortTagline: string;
  description: string;
  primaryBenefits: string[];
  recommendedDosage: string;
  bestForms: string[];
  timing: TimingInfo;
  liverSafety: LiverSafetyInfo;
  positiveSynergies: PositiveSynergy[];
  incompatibilities: Incompatibility[];
  targetGoals: string[];
}

export interface StackAnalysisResult {
  supplements: Supplement[];
  synergiesFound: {
    supA: Supplement;
    supB: Supplement;
    synergy: PositiveSynergy;
  }[];
  conflictsFound: {
    supA: Supplement;
    supB: Supplement;
    conflict: Incompatibility;
  }[];
  liverAssessment: {
    hepaticLoadScore: number; // 0 to 10
    hasHighRiskCompounds: boolean;
    hepatoprotectiveCount: number;
    warnings: string[];
    cycleAdvice: string[];
  };
  chronoSchedule: {
    slotId: TimeOfDay;
    slotLabel: string;
    description: string;
    items: Supplement[];
  }[];
}
