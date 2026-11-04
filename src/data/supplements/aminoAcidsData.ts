import { Supplement } from '../../types/supplement';

export const AMINO_ACIDS_DATA: Supplement[] = [
  {
    id: 'creatina-monoidrato',
    name: 'Creatina Monoidrato',
    scientificName: 'N-(Amminoimminometil)-N-metilglicina Creapure',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Rigenerazione immediata dell’ATP, potenza anaerobica, idratazione cellulare e focus cognitivo',
    description: 'Il supplemento ergogenico più studiato al mondo. Rifornisce rapidamente i depositi muscolari e cerebrali di fosfocreatina, permettendo la re-sintesi istantanea di ATP durante sforzi ad alta intensità e supportando la bioenergetica neuronale.',
    primaryBenefits: [
      'Aumento della forza massimale, potenza contrattile ed esplosività muscolare',
      'Idratazione intracellulare e stimolo alla sintesi proteica (ipertrofia miofibrillare)',
      'Potenziamento della memoria di lavoro e resistenza all’affaticamento mentale da privazione di sonno',
      'Neuroprotezione contro lo stress ossidativo e le lesioni traumatiche cerebrali'
    ],
    recommendedDosage: '3 - 5 g/giorno in assunzione costante (non necessaria fase di carico)',
    bestForms: ['Creatina Monoidrato micronizzata Creapure 200 mesh'],
    timing: {
      idealTimes: ['post_allenamento', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Ideale nel post-workout combinata con carboidrati o proteine per sfruttare il picco di insulina e accelerare il trasporto muscolare. Nei giorni di riposo, assumere a colazione con abbondante acqua.',
      avoidTimes: 'Evitare l’assunzione contemporanea con dosi massive di caffeina se provoca disturbi gastrointestinali.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’integrazione esogena di creatina riduce il dispendio epatico di S-adenosilmetionina (SAMe), risparmiando fino al 40% dei gruppi metilici del fegato.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa senza limiti di tempo. Mantenere un’idratazione idrica adeguata (almeno 35-40 ml/kg di peso corporeo).'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'beta-alanina',
        targetSupplementName: 'Beta-Alanina',
        synergyType: 'potenziamento',
        description: 'La combinazione definitiva per prestazioni anaerobiche lattacide: la creatina eroga energia immediata e la carnosina tampona gli ioni H+.',
        mechanism: 'Migliora la capacità di lavoro ad alta intensità e ritarda il cedimento muscolare fino al 25%.'
      },
      {
        targetSupplementId: 'solfato-di-vanadile',
        targetSupplementName: 'Solfato di Vanadile',
        synergyType: 'assorbimento',
        description: 'Aumenta l’uptake intracellulare nei miociti.',
        mechanism: 'Stimolo insulino-mimetico dei trasportatori CreaT.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia', 'focus', 'longevita']
  },
  {
    id: 'l-glutammina',
    name: 'L-Glutammina',
    scientificName: 'Acido 2-Ammino-4-carbamoilbutanoico Fermentato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Carburante primario degli enterociti, riparazione della barriera intestinale e difese immunitarie',
    description: 'L’aminoacido libero più abbondante nel plasma umano e nel tessuto muscolare. È il substrato energetico d’elezione per le cellule a rapida replicazione, in particolare gli enterociti dell’epitelio intestinale e i linfociti.',
    primaryBenefits: [
      'Ripristino della permeabilità intestinale (tight junctions) e risoluzione della Leaky Gut',
      'Riduzione del catabolismo muscolare in condizioni di forte stress metabolico o traumi',
      'Sostegno alla proliferazione dei linfociti intestinali associati alle mucose (GALT)',
      'Precursore del glutatione e donatore di azoto'
    ],
    recommendedDosage: '5 - 10 g/giorno (fino a 15-20g divisi in 3 dosi nei protocolli di riparazione intestinale acuta)',
    bestForms: ['L-Glutammina pura da fermentazione vegetale (Kyowa Quality)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'post_allenamento', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Sciogliere in acqua a temperatura ambiente (non calda!) e bere a stomaco vuoto almeno 20 minuti prima dei pasti.',
      avoidTimes: 'Non riscaldare o mescolare con bevande calde (la molecola si decompone in ammoniaca e glutammato).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Partecipa al ciclo dell’urea epatico smaltendo l’ammoniaca tossica. In caso di insufficienza epatica terminale monitorare l’ammoniemia.',
      cycleProtocol: {
        required: false,
        description: 'Protocolli tipici di 8-12 settimane per guarigione intestinale, oppure continuativo a 5g/die per atleti.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-carnosina',
        targetSupplementName: 'Zinco L-Carnosina',
        synergyType: 'potenziamento',
        description: 'La combinazione gold standard per ricostruire l’epitelio intestinale danneggiato.',
        mechanism: 'La glutammina alimenta la duplicazione cellulare e lo zinco stimola le proteine occludenti e l’adesione focale.'
      },
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'potenziamento',
        description: 'Crea l’ambiente mucosale ideale per l’attecchimento dei batteri simbiotici benefici.',
        mechanism: 'Ripristina il biofilm protettivo e riduce l’endotossiemia da LPS.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita', 'recupero_sport']
  },
  {
    id: 'citrullina-malato',
    name: 'Citrullina Malato',
    scientificName: 'L-Citrullina legata ad Acido D,L-Malico (rapporto 2:1)',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Sintesi massima di ossido nitrico, vasodilatazione endoteliale e smaltimento dell’acido lattico',
    description: 'La citrullina bypassa completamente l’estrazione epatica a differenza dell’arginina, innalzando i livelli plasmatici di L-arginina in modo triplo. L’acido malico allegato potenzia la respirazione mitocondriale nel ciclo di Krebs.',
    primaryBenefits: [
      'Potente vasodilatazione endoteliale (NO) e miglioramento dell’ossigenazione muscolare',
      'Riduzione dell’affaticamento muscolare e dei dolori muscolari a insorgenza ritardata (DOMS)',
      'Accelerazione del ciclo dell’urea e smaltimento rapido dell’ammoniaca tossica prodotta dallo sforzo',
      'Miglioramento dell’erezione e della flessibilità arteriosa periferica'
    ],
    recommendedDosage: '6 - 8 g (in rapporto 2:1) circa 45 minuti prima dell’allenamento',
    bestForms: ['Citrullina Malato 2:1 pura fermentata'],
    timing: {
      idealTimes: ['pre_allenamento', 'mattina_digiuno'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere 30-45 minuti prima della prestazione con 300-400 ml d’acqua a stomaco vuoto per una rapida assimilazione.',
      avoidTimes: 'Evitare l’assunzione contestuale con pasti iperlipidici che rallentano l’effetto vasodilatatore.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Intermedio fondamentale del ciclo dell’urea epatico: alleggerisce il fegato dal sovraccarico di ammonio metabolico.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile continuativamente nei giorni di allenamento o quotidianamente per il benessere cardiovascolare.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'potenziamento',
        description: 'Ottimizza il flusso di sangue e ossigeno durante lo sforzo e la successiva captazione di fosfati.',
        mechanism: 'L’ossido nitrico dilata i capillari facilitando il trasporto della creatina.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia', 'longevita']
  },
  {
    id: 'beta-alanina',
    name: 'Beta-Alanina',
    scientificName: 'Acido 3-Amminopropanoico CarnoSyn',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Precursore limitante della carnosina muscolare, potente tampone contro l’acidosi lattica',
    description: 'La beta-alanina si lega all’istidina nei miociti per formare carnosina, il principale tampone intracellulare di protoni idrogeno (H+). Permette di prolungare gli sforzi ad alta intensità (tra 1 e 4 minuti) ritardando il bruciore muscolare.',
    primaryBenefits: [
      'Aumento del 60-80% della concentrazione di carnosina muscolare',
      'Ritardo marcato dell’insorgenza di fatica neuromuscolare e del cedimento',
      'Incremento del volume di lavoro totale nelle serie ad alta intensità (HIIT e pesi)',
      'Azione antiossidante e anti-glicazione cellulare nei tessuti'
    ],
    recommendedDosage: '3.2 - 6.4 g/giorno (frazionati in 2-3 dosi da 1.6g per evitare parestesia)',
    bestForms: ['CarnoSyn brevettata pura a lento rilascio'],
    timing: {
      idealTimes: ['pre_allenamento', 'colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'La carica di carnosina è cronica e cumulativa (richiede 3-4 settimane). L’orario esatto è flessibile: suddividere le dosi per minimizzare il formicolio cutaneo transitorio (parestesia innocua).',
      avoidTimes: 'Non assumere più di 2g in singola dose rapida se si è sensibili alla parestesia cutanea.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata normalmente e priva di tossicità epatica o renale documentata.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 10,
        recommendedBreakWeeks: 4,
        description: 'Protocollo ottimale: 10-12 settimane di accumulo, seguite da 4 settimane di stop (la carnosina muscolare declina molto lentamente).'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'potenziamento',
        description: 'Combinazione regina per atleti di forza e sport ad alta intensità intermittente.',
        mechanism: 'La carnosina stabilizza il pH cellulare consentendo agli enzimi della creatina chinasi di operare alla massima velocità.'
      },
      {
        targetSupplementId: 'taurina',
        targetSupplementName: 'Taurina',
        synergyType: 'protezione',
        description: 'La beta-alanina e la taurina condividono lo stesso trasportatore TauT. Integrare taurina previene crampi da deplezione.',
        mechanism: 'Mantiene l’omeostasi elettrolitica e la contrattilità del miocardio.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia']
  },
  {
    id: 'taurina',
    name: 'Taurina Pura',
    scientificName: 'Acido 2-Amminoetansolfonico',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Osmolitico cellulare, coniugazione biliare, cardioprotezione e longevità',
    description: 'Aminoacido solforato condizionatamente essenziale. Agisce come potente stabilizzatore delle membrane cellulari, modulatore dei flussi intracellulari di calcio, agonista dei recettori GABA e substrato per la sintesi degli acidi biliari epatici.',
    primaryBenefits: [
      'Idratazione intracellulare e prevenzione di crampi muscolari da disidratazione',
      'Supporto alla contrattilità miocardica e riduzione della pressione sanguigna',
      'Coniugazione dei sali biliari epatici (acido taurocolico) per digerire i grassi',
      'Attivazione dell’enzima AMPK e promozione della longevità cellulare'
    ],
    recommendedDosage: '1.000 - 3.000 mg/giorno',
    bestForms: ['Taurina pura cristallina in polvere o capsule'],
    timing: {
      idealTimes: ['pre_allenamento', 'colazione_pasti', 'cena'],
      mealRequirement: 'indifferente',
      instructions: 'Pre-workout per idratazione cellulare o la sera a cena per la sua azione distensiva sul sistema nervoso.',
      avoidTimes: 'Nessuna limitazione specifica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Fondamentale per il fegato: gli acidi biliari coniugati con taurina sono meno epatotossici e fluidificano la bile, prevenendo la colestasi.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa sicura anche per lunghi periodi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'Potente duo rilassante neuromuscolare e modulatore dei canali ionici cardiaci.',
        mechanism: 'La taurina trattiene il magnesio e il potassio all’interno delle cellule miocardiche.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'longevita', 'sonno']
  },
  {
    id: 'l-arginina-akg',
    name: 'L-Arginina Alfa-Chetoglutarato (AAKG)',
    scientificName: 'Sale di L-Arginina con Alfa-Chetoglutarato (2:1)',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Pompa muscolare volumizzante, ossido nitrico e stimolo dell’ormone GH',
    description: 'L’arginina combinata con l’intermedio metabolico alfa-chetoglutarato. Migliora la tolleranza gastrica e la cessione di ossido nitrico rispetto all’arginina base, oltre a rifornire il ciclo di Krebs cellulare.',
    primaryBenefits: [
      'Potenziamento della vasodilatazione periferica durante sforzi anaerobici (Pump)',
      'Stimolo alla secrezione notturna fisiologica di GH (se assunta ad alto dosaggio a digiuno)',
      'Eliminazione dell’ammoniaca e scorie azotate nel fegato',
      'Sostegno alla sintesi endogena di collagene e guarigione delle ferite'
    ],
    recommendedDosage: '3.000 - 5.000 mg pre-allenamento',
    bestForms: ['AAKG 2:1 puro polvere o compresse'],
    timing: {
      idealTimes: ['pre_allenamento', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere 30 minuti prima dell’allenamento con acqua a stomaco vuoto. Se usata per il GH, assumere 5g a digiuno prima di dormire.',
      avoidTimes: 'Evitare nei soggetti con tendenza a infezioni ricorrenti da Herpes Simplex (l’arginina favorisce la replicazione dell’Herpesvirus; bilanciare con Lisina).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Partecipa direttamente al ciclo dell’urea epatica trasformando i composti ammoniacali in urea innocua.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane per evitare la desensibilizzazione endoteliale all’enzima eNOS.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'citrullina-malato',
        targetSupplementName: 'Citrullina Malato',
        synergyType: 'potenziamento',
        description: 'Combina il picco rapido dell’arginina con la concentrazione prolungata della citrullina per un rilascio costante di NO.',
        mechanism: 'Copertura temporale a doppio stadio dei recettori endoteliali.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'l-lisina',
        targetSupplementName: 'L-Lisina',
        severity: 'spaziare_orari',
        reason: 'Competizione per lo stesso sistema di trasporto Y+ degli aminoacidi basici.',
        recommendation: 'Assumere distanziate se l’obiettivo è il controllo dell’herpesvirus.'
      }
    ],
    targetGoals: ['recupero_sport', 'energia']
  },
  {
    id: 'bcaa-fermentati',
    name: 'BCAA Fermentati 2:1:1',
    scientificName: 'Aminoacidi Ramificati (L-Leucina, L-Isoleucina, L-Valina da Fermentazione)',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Anti-catabolico intra-allenamento e stimolo immediato di mTOR muscolare',
    description: 'I tre aminoacidi a catena ramificata nel rapporto fisiologico dorato 2:1:1 ottenuti per fermentazione vegetale di mais. Vengono metabolizzati direttamente nel muscolo scheletrico bypassando il metabolismo epatico.',
    primaryBenefits: [
      'Innesco della via anabolica mTORC1 mediato dalla leucina',
      'Protezione della massa magra durante allenamenti prolungati a digiuno',
      'Competizione con il triptofano a livello cerebrale (ritardo della fatica centrale)',
      'Substrato gluconeogenetico muscolare diretto durante la deplezione di glicogeno'
    ],
    recommendedDosage: '5 - 10 g durante o prima dell’allenamento (1g ogni 10 kg di peso corporeo)',
    bestForms: ['BCAA 2:1:1 Kyowa Quality solubilizzati istantanei'],
    timing: {
      idealTimes: ['pre_allenamento', 'post_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Sciogliere in borraccia e sorseggiare durante sessioni intense di allenamento, o bere immediatamente pre/post workout.',
      avoidTimes: 'Evitare nei soggetti diabetici con insulino-resistenza severa se assunti senza attività fisica (possono innalzare temporaneamente i BCAA plasmatici).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'I BCAA sono gli unici aminoacidi deaminati nel muscolo e non nel fegato. Utilizzati clinicamente nei pazienti cirrotici per ridurre l’encefalopatia epatica.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo nelle giornate di allenamento.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'potenziamento',
        description: 'Massimizza il recupero e la riparazione proteica post-sforzo.',
        mechanism: 'Stimolazione congiunta di sintesi proteica e reintegro energetico fosfageno.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia']
  },
  {
    id: 'eaa-essenziali',
    name: 'EAA (Aminoacidi Essenziali Completi)',
    scientificName: 'Complesso di 9 Aminoacidi Essenziali in Rapporto Stechiometrico',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Sintesi proteica completa a zero scorie azotate, ideale in definizione e digiuno',
    description: 'Fornisce tutti e 9 gli aminoacidi che il corpo umano non può sintetizzare autonomamente. Garantisce la massima sintesi proteica netta (Net Nitrogen Utilization vicina al 99%) senza sovraccaricare reni e fegato con scorie azotate.',
    primaryBenefits: [
      'Sintesi proteica muscolare completa superiore ai BCAA isolati',
      'Minimo impatto calorico ed escrezione di scorie azotate virtualmente nulla',
      'Mantenimento impeccabile della muscolatura nei periodi di forte deficit calorico',
      'Assorbimento completato in soli 20-25 minuti nell’intestino'
    ],
    recommendedDosage: '10 - 15 g/giorno',
    bestForms: ['Miscela EAA fermentata con rapporto basato sul profilo del latte materno/uovo (es. Master Amino Pattern)'],
    timing: {
      idealTimes: ['post_allenamento', 'colazione_pasti', 'mattina_digiuno'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a stomaco vuoto 20 minuti prima di mangiare o subito dopo l’allenamento.',
      avoidTimes: 'Non necessita di restrizioni temporali particolari.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Grazie al 99% di incorporazione proteica, non produce quasi ammoniaca né urea, alleggerendo drasticamente il lavoro degli epatociti.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa senza limiti temporali.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'potenziamento',
        description: 'La combinazione costruttiva muscolare per eccellenza.',
        mechanism: 'Fornisce sia i mattoni proteici completi (EAA) sia l’energia contrattile (Creatina).'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia', 'longevita']
  },
  {
    id: 'l-leucina',
    name: 'L-Leucina Pura',
    scientificName: 'Acido (2S)-2-Ammino-4-metilpentanoico',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Interruttore molecolare di mTOR e contrasto alla sarcopenia senile',
    description: 'Il più potente aminoacido anabolico. Agisce legandosi alla sestrina-2 cellulare, il sensore molecolare primario che accende il complesso mTORC1 e la traslazione dei ribosomi per avviare la sintesi proteica.',
    primaryBenefits: [
      'Superamento della soglia anabolica (Leucine Trigger) nei pasti a basso contenuto proteico',
      'Prevenzione attiva della sarcopenia negli anziani e convalescenti',
      'Accelerazione del recupero muscolare post-esercizio traumatico',
      'Preservazione della massa magra in diete chetogeniche o ipocaloriche'
    ],
    recommendedDosage: '2.5 - 5 g da aggiungere ai pasti principali',
    bestForms: ['L-Leucina fermentata istantanea'],
    timing: {
      idealTimes: ['pranzo', 'cena', 'post_allenamento'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Aggiungere al pasto principale o al frullato proteico per garantire almeno 3g di leucina totale a pasto.',
      avoidTimes: 'Evitare l’assunzione isolata cronica a dosi massive (>15g) senza altri aminoacidi per non sbilanciare isoleucina e valina.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Metabolizzata prevalentemente nel muscolo scheletrico; non appesantisce il fegato.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo come fortificazione dei pasti proteici.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'collagene-idrolizzato',
        targetSupplementName: 'Collagene Idrolizzato',
        synergyType: 'attivazione',
        description: 'Il collagene è carente di leucina: aggiungendola si converte un integratore connettivo in un potente stimolatore di sintesi proteica.',
        mechanism: 'Compensa il deficit amminoacidico sbloccando l’attivazione di mTOR.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'longevita']
  },
  {
    id: 'hmb-calcio',
    name: 'HMB (Calcio Idrossimetilbutirrato)',
    scientificName: 'Sale di Calcio dell’Acido Beta-Idrossi-Beta-Metilbutirrato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Massima protezione anti-catabolica muscolare in digiuno o immobilizzazione',
    description: 'Metabolita attivo della L-leucina (solo il 5% della leucina viene naturalmente convertito in HMB). Inibisce potentemente la via ubiquitina-proteasoma responsabile della distruzione delle proteine muscolari.',
    primaryBenefits: [
      'Blocco quasi totale del deperimento muscolare da allettamento o digiuno prolungato',
      'Minimizzazione del danno muscolare da sforzi eccentrici estremi (discese in montagna, sprint)',
      'Aumento della forza e massa magra nei soggetti sedentari o convalescenti',
      'Miglioramento della capacità aerobica e della riparazione tissutale'
    ],
    recommendedDosage: '3 g/giorno (divisi in 3 dosi da 1g o singola dose pre-workout)',
    bestForms: ['Calcio HMB puro in polvere o capsule', 'HMB acido libero (FA)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere 1g al mattino, 1g pre-workout e 1g la sera. In digiuno intermittente, assumere prima dell’allenamento a digiuno.',
      avoidTimes: 'Nessun vincolo particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Sostanza endogena fisiologica; non mostra alcuna tossicità epatica negli studi clinici decennali.',
      cycleProtocol: {
        required: false,
        description: 'Uso raccomandato durante fasi di ipocalorica severa, infortuni o blocchi di allenamento intenso.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'potenziamento',
        description: 'Duplice azione simultanea: la creatina accelera la ricostruzione e l’HMB impedisce la degradazione muscolare.',
        mechanism: 'Sinergia anti-catabolica e pro-anabolica convalidata da numerosi trial clinici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'longevita']
  },
  {
    id: 'acetil-l-carnitina',
    name: 'Acetil L-Carnitina (ALCAR)',
    scientificName: 'Ester Acetilico della L-Carnitina Cloridrato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Energia mitocondriale cerebrale, sintesi di acetilcolina e ossidazione dei grassi',
    description: 'Forma acetilata della carnitina in grado di oltrepassare facilmente la barriera emato-encefalica. Cede il proprio gruppo acetile per la biosintesi di acetilcolina (neurotrasmettitore della memoria e concentrazione) e trasporta gli acidi grassi nei mitocondri cerebrali.',
    primaryBenefits: [
      'Aumento della lucidità mentale, vigilanza, attenzione prolungata e focus analitico',
      'Supporto alla combustione e ossidazione mitocondriale dei lipidi a scopi energetici',
      'Rigenerazione delle fibre nervose periferiche e riduzione delle neuropatie',
      'Sostegno alla funzione e motilità degli spermatozoi'
    ],
    recommendedDosage: '500 - 1.500 mg/giorno',
    bestForms: ['Acetil L-Carnitina HCl pura'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pre_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino a digiuno o 45 minuti prima dell’allenamento/sessione di studio.',
      avoidTimes: 'Evitare rigorosamente dopo le 17:00: l’aumento del turnover di acetilcolina può causare insonnia o sonno frammentato.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Protegge il fegato dalla steatosi (fegato grasso) favorendo l’ingresso degli acidi grassi liberi nei mitocondri epatici per la beta-ossidazione.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Consigliati cicli di 8 settimane alternati a 2 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acido-alfa-lipoico',
        targetSupplementName: 'Acido Alfa Lipoico',
        synergyType: 'potenziamento',
        description: 'Celebre combinazione del Professor Ames (Berkeley) per il ringiovanimento mitocondriale e longevità cellulare.',
        mechanism: 'L’ALCAR alimenta il mitocondrio e l’ALA neutralizza i radicali liberi generati dall’aumentata respirazione.'
      },
      {
        targetSupplementId: 'colina-cdp',
        targetSupplementName: 'CDP-Colina',
        synergyType: 'attivazione',
        description: 'La colina fornisce il substrato colinergico e l’ALCAR fornisce il gruppo acetile per la sintesi massiccia di acetilcolina.',
        mechanism: 'Innalzamento sinaptico dei livelli di acetilcolina nell’ippocampo.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia', 'recupero_sport', 'longevita']
  },
  {
    id: 'l-carnitina-tartrato',
    name: 'L-Carnitina L-Tartrato (LCLT)',
    scientificName: 'Sale di L-Carnitina con Acido L-Tartarico (2:1)',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Aumento dei recettori degli androgeni nel muscolo e recupero da sforzi pesanti',
    description: 'Forma di carnitina con il più rapido tasso di assorbimento ematico nei tessuti muscolari periferici. Gli studi clinici dimostrano che upregola la densità dei recettori cellulari per il testosterone nel muscolo scheletrico.',
    primaryBenefits: [
      'Aumento della densità dei recettori androgeni nei miociti dopo l’allenamento con sovraccarichi',
      'Riduzione marcata del danno muscolare e della perdita di forza nei giorni successivi allo sforzo',
      'Miglioramento dell’ossigenazione tissutale e flusso ematico periferico',
      'Sostegno alla beta-ossidazione muscolare'
    ],
    recommendedDosage: '2.000 - 3.000 mg/giorno',
    bestForms: ['Carnipure LCLT brevettata pura'],
    timing: {
      idealTimes: ['colazione_pasti', 'post_allenamento'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con un pasto ricco di carboidrati o proteine post-workout (l’insulina attiva i trasportatori OCTN2 di carnitina nei miociti).',
      avoidTimes: 'Non necessita di particolari restrizioni.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Sostiene il metabolismo lipidico epatico senza sovraccaricare gli enzimi di fase I o II.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'potenziamento',
        description: 'Sinergia totale per il recupero post-esercizio con carboidrati.',
        mechanism: 'Entrambe le molecole traggono vantaggio dalla secrezione insulinica post-prandiale per la captazione muscolare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia']
  },
  {
    id: 'l-tirosina',
    name: 'L-Tirosina',
    scientificName: 'Acido 4-Idrossifenilalanina Fermentato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Precursore immediato di dopamina, noradrenalina e ormoni tiroidei sotto stress acuto',
    description: 'Aminoacido precursore fondamentale delle catecolamine cerebrali. In situazioni di stress psicofisico intenso, freddo, rumore o privazione di sonno, le riserve cerebrali di dopamina e noradrenalina si esauriscono: la tirosina ne previene il crollo.',
    primaryBenefits: [
      'Mantenimento della memoria operativa e delle funzioni esecutive sotto forte stress o fatica',
      'Sostegno alla motivazione, vigilanza mentale e tono dell’umore dopaminergico',
      'Precursore essenziale per la sintesi della tiroxina tiroidea (T4)',
      'Miglioramento delle prestazioni atletiche in condizioni ambientali avverse'
    ],
    recommendedDosage: '500 - 2.000 mg circa 30-45 minuti prima della prestazione stressante',
    bestForms: ['L-Tirosina pura a forma libera da fermentazione'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a stomaco vuoto 30 minuti prima della sessione impegnativa con acqua.',
      avoidTimes: 'Evitare la sera per prevenire ipervigilanza e insonnia. Controindicata in concomitanza con farmaci antidepressivi IMAO.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata normalmente attraverso la via della fumarilacetoacetato idrolasi nel fegato.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 1,
        description: 'Meglio assumerla al bisogno (giorni di forte stress, allenamenti pesanti) o in cicli da 4 settimane ON e 1 OFF.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Equilibrio perfetto tra lucidità motivazionale dopaminergica e calma mentale senza ansia.',
        mechanism: 'La tirosina sostiene le catecolamine mentre la teanina modula il tono glutammatergico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia', 'umore_ansia']
  },
  {
    id: 'n-acetil-l-tirosina',
    name: 'N-Acetil-L-Tirosina (NALT)',
    scientificName: 'Ester N-Acetilico della L-Tirosina',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Forma altamente solubile della tirosina per bevande e shot energetici nootropici',
    description: 'Modificazione chimica della tirosina che ne moltiplica la solubilità in acqua di oltre 20 volte rispetto alla tirosina base. Ideale per soluzioni liquide pre-workout e bevande nootropiche ad assorbimento immediato.',
    primaryBenefits: [
      'Totale e istantanea solubilità in qualsiasi liquido senza residui sabbiosi',
      'Rifornimento rapido dei neurotrasmettitori della concentrazione e della grinta',
      'Contrasto al calo di attenzione pomeridiano o da turni di lavoro notturni',
      'Minore carico amminoacidico totale a parità di solubilità'
    ],
    recommendedDosage: '350 - 700 mg/giorno',
    bestForms: ['NALT pura idrosolubile'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Sciogliere in acqua e bere prima dell’attività che richiede alta concentrazione.',
      avoidTimes: 'Evitare nel tardo pomeriggio o la sera.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Richiede la deacetilazione epatica da parte dell’aminoacilasi renale ed epatica per liberare tirosina attiva.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzo al bisogno nei giorni di studio o lavoro intensivo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'complesso-vitamine-b',
        targetSupplementName: 'Complesso Vitamine B',
        synergyType: 'attivazione',
        description: 'La vitamina B6 (P5P) è l’enzima cofattore per convertire la tirosina in L-dopa e dopamina.',
        mechanism: 'Attivazione della DOPA decarbossilasi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia']
  },
  {
    id: '5-htp-triptofano',
    name: '5-HTP (5-Idrossitriptofano da Griffonia)',
    scientificName: '5-Idrossi-L-triptofano da Griffonia Simplicifolia',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Precursore diretto della serotonina e della melatonina, controllo dell’umore e sazietà',
    description: 'Estratto dai semi della pianta africana Griffonia simplicifolia. Supera la barriera emato-encefalica senza competere con gli altri aminoacidi (a differenza del triptofano) e viene convertito direttamente in serotonina mediante una sola tappa enzimatica.',
    primaryBenefits: [
      'Innalzamento fisiologico della serotonina cerebrale (miglioramento del tono dell’umore)',
      'Precursore della sintesi notturna di melatonina nell’epifisi (favorisce l’addormentamento)',
      'Controllo degli attacchi compulsivi di fame serale di zuccheri (fame emotiva)',
      'Riduzione dell’ansia serale e delle tensioni miofasciali'
    ],
    recommendedDosage: '50 - 150 mg circa 45 minuti prima di cena o di coricarsi',
    bestForms: ['Estratto di Griffonia simplicifolia standardizzato al 98% in 5-HTP'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere la sera prima di cena o 45 minuti prima di andare a letto con un piccolo snack di carboidrati o a digiuno.',
      avoidTimes: 'CONTROINDICAZIONE ASSOLUTA: Non assumere MAI in combinazione con farmaci antidepressivi SSRI o IMAO per il rischio letale di sindrome serotoninergica!'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Una quota viene decarbossilata a livello periferico nel fegato e nell’intestino; dosi prolungate eccessive possono affaticare gli enzimi monoaminici epatici.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Non assumere in modo indefinito: cicli massimi di 6 settimane seguiti da 2-3 settimane di sospensione per prevenire down-regulation dei recettori 5-HT.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'Sinergia calmante serale per un rilassamento mentale e muscolare totale.',
        mechanism: 'Serotonina centrale combinata al blocco glutammatergico del magnesio.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'sonno']
  },
  {
    id: 'l-triptofano',
    name: 'L-Triptofano',
    scientificName: 'Acido (2S)-2-Ammino-3-(1H-indol-3-il)propanoico Fermentato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Aminoacido essenziale calmante, precursore di serotonina, melatonina e niacina (B3)',
    description: 'Aminoacido essenziale che segue la fisiologica via della triptofano 5-idrossilasi. Rispetto al 5-HTP offre una regolazione a feedback biologico controllata dall’organismo, evitando sbalzi acuti di neurotrasmettitori periferici.',
    primaryBenefits: [
      'Regolazione dolce e naturale del ritmo sonno-veglia senza intontimento mattutino',
      'Supporto al tono dell’umore, alla serenità e alla tolleranza allo stress',
      'Sintesi endogena di NAD+ attraverso la via delle chinurenine',
      'Riduzione della latenza di addormentamento nei casi di insonnia iniziale'
    ],
    recommendedDosage: '500 - 1.000 mg la sera',
    bestForms: ['L-Triptofano puro da fermentazione certificata privo di impurità'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere 45 minuti prima di coricarsi. Ideale con un piccolo carboidrato (es. una fetta biscottata) per stimolare l’insulina che allontana gli altri aminoacidi concorrenti dalla barriera emato-encefalica.',
      avoidTimes: 'Evitare pasti iperproteici nello stesso istante (gli altri aminoacidi competono per il trasportatore LAT1 cerebrale).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Circa il 90% del triptofano viene metabolizzato nel fegato attraverso la via della chinurenina.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli periodici di 8 settimane seguiti da 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-b6-p5p',
        targetSupplementName: 'Vitamina B6 (P-5-P)',
        synergyType: 'attivazione',
        description: 'La vitamina B6 è il cofattore indispensabile per la decarbossilazione in serotonina.',
        mechanism: 'Senza B6 il triptofano viene deviato verso la produzione di acidi chinolinici infiammatori.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'umore_ansia']
  },
  {
    id: 'glicina-pura',
    name: 'Glicina Pura',
    scientificName: 'Acido Amminoacetico Cristallino',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Abbassamento della temperatura corporea centrale, sonno profondo e sintesi di collagene/glutatione',
    description: 'Il più piccolo e semplice degli amminoacidi, dotato di un sapore naturalmente dolce. Nel cervello funge da neurotrasmettitore inibitorio aprendo i canali del cloro nei recettori della glicina del tronco encefalico, vasodilatando i vasi periferici e inducendo il sonno profondo.',
    primaryBenefits: [
      'Rapido abbassamento della temperatura corporea centrale che innesca il sonno profondo (SWS)',
      'Precursore primario per la biosintesi del glutatione epatico e del collagene connettivale',
      'Azione neuroprotettiva, antinfiammatoria e stabilizzatrice della barriera emato-encefalica',
      'Dolcificante naturale a zero impatto glicemico per tisane serali'
    ],
    recommendedDosage: '3 - 5 g circa 30 minuti prima di coricarsi',
    bestForms: ['Polvere cristallina pura solubile al 100%'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Sciogliere 3-5 grammi in una tazza di camomilla o acqua tiepida la sera. Ha un gradevole sapore zuccherino naturale.',
      avoidTimes: 'Nessuna controindicazione.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Fondamentale per la Fase II della detossificazione epatica (coniugazione con glicina) per eliminare acido benzoico, salicilati e acidi biliari tossici.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzo quotidiano continuativo a tempo indeterminato; assenza totale di tossicità.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nac-n-acetilcisteina',
        targetSupplementName: 'N-Acetilcisteina (NAC)',
        synergyType: 'attivazione',
        description: 'La celebre combinazione GlyNAC: fornisce i due precursori limitanti per quadruplicare il glutatione intracellulare.',
        mechanism: 'Ripristina le difese antiossidanti e la bioenergetica mitocondriale nei soggetti over 40.'
      },
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'Combinazione d’eccellenza per la quiete neuromuscolare notturna e assenza di risvegli.',
        mechanism: 'Azione inibitoria combinata su midollo spinale e corteccia cerebrale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'longevita', 'articolazioni', 'umore_ansia']
  },
  {
    id: 'gaba-acido',
    name: 'GABA (Acido Gamma-Aminobutirrico)',
    scientificName: 'Acido 4-Amminobutanoico da Fermentazione Naturale (PharmaGABA)',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Principale freno neurochimico inibitorio del sistema nervoso centrale e dell’ansia somatica',
    description: 'Il neurotrasmettitore inibitorio primario del corpo umano. Sebbene la sua permeabilità attraverso la barriera emato-encefalica sia selettiva, stimola potentemente i recettori GABAergici del sistema nervoso enterico (asse intestino-cervello) e del nervo vago.',
    primaryBenefits: [
      'Disattivazione rapida dello stato di allerta e ipervigilanza simpatica (effetto parasimpatico)',
      'Riduzione della tensione fisica somatica, tremori da stress e battito cardiaco accelerato',
      'Stimolo alla secrezione notturna di ormone della crescita (GH)',
      'Rilassamento dei visceri addominali contratti da ansia somatizzata'
    ],
    recommendedDosage: '250 - 750 mg la sera',
    bestForms: ['PharmaGABA fermentato naturalmente da Lactobacillus hilgardii'],
    timing: {
      idealTimes: ['prima_dormire', 'cena'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a stomaco vuoto la sera con mezzo bicchiere d’acqua.',
      avoidTimes: 'Evitare alla guida o durante compiti che richiedono allerta reattiva immediata.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Catabolizzato dall’enzima GABA transaminasi nei reni e nel fegato senza metaboliti tossici.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Usare a cicli di 4 settimane o solo al bisogno per evitare tolleranza recettoriale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Azione sinergica sul recettore GABA-A: la teanina ne sensibilizza l’affinità e il GABA ne apre i canali.',
        mechanism: 'Induzione rapida di onde cerebrali alfa rilassanti.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'sonno']
  },
  {
    id: 'l-lisina',
    name: 'L-Lisina',
    scientificName: 'Acido (2S)-2,6-Diamminoesanoico Cloridrato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Inibizione dell’Herpes Simplex, sintesi di collagene e assorbimento del calcio',
    description: 'Aminoacido essenziale indispensabile per la sintesi proteica e la reticolazione del collagene. È l’antagonista competitivo primario dell’arginina: privando l’Herpesvirus simplex dell’arginina necessaria alla duplicazione, ne blocca la manifestazione erpetica labiale o genitale.',
    primaryBenefits: [
      'Prevenzione e blocco delle recidive di Herpes simplex labiale e zoster',
      'Idrossilazione della lisina in idrossilisina per la stabilità delle fibre di collagene',
      'Miglioramento dell’assorbimento intestinale del calcio e prevenzione dell’osteoporosi',
      'Riduzione dell’ansia cronica attraverso l’attivazione parziale dei recettori delle benzodiazepine'
    ],
    recommendedDosage: '1.000 - 3.000 mg/giorno (fino a 3g divisi nella fase acuta erpetica)',
    bestForms: ['L-Lisina HCl pura'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a digiuno al mattino per la massima biodisponibilità antivirale.',
      avoidTimes: 'Evitare l’assunzione contemporanea con integratori di L-Arginina o cibi ricchi di cioccolato/frutta a guscio se si vuole bloccare l’herpes.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata normalmente attraverso la via della saccaropina nel fegato.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo a 1000 mg/die come profilassi, o cicli di 10 giorni a 3000 mg/die durante le recidive.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'La celebre sinergia di Pauling per le arterie e la sintesi di matrice connettivale resistente.',
        mechanism: 'La vitamina C idrossila la prolina e la lisina rendendo la fibra di collagene inextensibile.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'l-arginina-akg',
        targetSupplementName: 'L-Arginina',
        severity: 'alto',
        reason: 'L’arginina contrasta l’azione antivirale della lisina stimolando la replicazione virale.',
        recommendation: 'Sospendere l’arginina durante gli sfoghi erpetici.'
      }
    ],
    targetGoals: ['immunita', 'articolazioni', 'longevita']
  },
  {
    id: 'same-adenosilmetionina',
    name: 'SAMe (S-Adenosil-L-Metionina)',
    scientificName: 'S-Adenosil-L-Metionina Disolfato Tosilato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Donatore universale di metili, tono dell’umore, cartilagini articolari e fegato',
    description: 'Composto fisiologico prodotto nel fegato dalla combinazione di ATP e metionina. È il donatore di metili per oltre 100 reazioni biochimiche vitali: sintesi di neurotrasmettitori (dopamina, serotonina), fosfolipidi di membrana, sintesi di glutatione e protezione della cartilagine.',
    primaryBenefits: [
      'Potente azione antidepressiva e modulatrice del tono dell’umore (approvato clinicamente)',
      'Alleviamento del dolore e rigenerazione dei proteoglicani nell’artrosi e gonartrosi',
      'Protezione cellulare epatica e fluidificazione del flusso biliare (antidoto alla colestasi)',
      'Rigenerazione delle membrane neuronali e miglioramento della trasmissione sinaptica'
    ],
    recommendedDosage: '200 - 400 mg/giorno (fino a 800-1600 mg sotto monitoraggio medico)',
    bestForms: ['Compresse gastroresistenti con rivestimento enterico (la molecola si degrada istantaneamente nell’acido gastrico)'],
    timing: {
      idealTimes: ['mattina_digiuno'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino appena svegli a stomaco vuoto, almeno 30 minuti prima di colazione, con un bicchiere d’acqua.',
      avoidTimes: 'Evitare la sera perché può provocare insonnia da iperattivazione catecolaminica. Controindicato nel disturbo bipolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Uno dei più potenti epatoprotettori esistenti in medicina: reintegra il glutatione epatico e previene la tossicità indotta da alcol e farmaci.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli di 8 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-b12-metil',
        targetSupplementName: 'Vitamina B12',
        synergyType: 'attivazione',
        description: 'B12 e folato sono necessari per riciclare l’omocisteina risultante dal SAMe in nuova metionina.',
        mechanism: 'Evita l’accumulo di S-adenosilomocisteina che inibirebbe il SAMe stesso.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'articolazioni', 'longevita']
  },
  {
    id: 'agmatina-solfato',
    name: 'Agmatina Solfato',
    scientificName: '1-(4-Amminobutil)guanidina Solfato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Neurotrasmettitore clonidinico, modulazione del dolore neuropatico e ossido nitrico selettivo',
    description: 'Derivato dalla decarbossilazione dell’arginina, agisce come neurotrasmettitore e neuromodulatore atipico. Modula selettivamente le isoforme dell’ossido nitrico sintasi (inibisce iNOS infiammatoria e nNOS, preservando eNOS vascolare) e blocca i recettori NMDA.',
    primaryBenefits: [
      'Alleviamento duraturo del dolore neuropatico periferico e delle nevralgie',
      'Miglioramento dell’umore e attenuazione della depressione resistente',
      'Potenziamento della vascolarizzazione muscolare e della sensibilità all’insulina',
      'Prevenzione della tolleranza ai farmaci analgesici e modulazione della dipendenza'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno',
    bestForms: ['Agmatina solfato pura di grado farmaceutico'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a stomaco vuoto 30-45 minuti prima della prestazione o al mattino.',
      avoidTimes: 'Evitare l’assunzione contemporanea con proteine ad alto contenuto di arginina.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Inibisce l’enzima iNOS negli epatociti, riducendo le lesioni infiammatorie epatocellulari.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Utilizzare per cicli da 6 settimane seguiti da 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Potente sinergia analgesica e distensiva sul sistema nervoso centrale.',
        mechanism: 'Duplice modulazione recettoriale glutammatergica e imidazolinica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'umore_ansia', 'recupero_sport']
  },
  {
    id: 'bhb-chetoni-esogeni',
    name: 'BHB Sali Chetonici Esogeni',
    scientificName: 'Complesso di D-Beta-Idrossibutirrato legato a Calcio, Sodio e Magnesio',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Chetosi immediata, carburante cerebrale alternativo al glucosio e soppressione della fame',
    description: 'Sali del corpo chetonico principale fisiologico. Permettono di innalzare i livelli ematici di chetoni a 1.0 - 2.5 mmol/L in soli 15-30 minuti senza necessità di giorni di digiuno o dieta chetogenica rigida, offrendo un substrato energetico mitocondriale ultra-pulito.',
    primaryBenefits: [
      'Innalzamento istantaneo dell’energia mentale e rimozione della nebbia cognitiva',
      'Erogazione di ATP con un consumo di ossigeno inferiore del 28% rispetto al glucosio',
      'Potente soppressione dell’ormone della fame grelina e stabilizzazione glicemica',
      'Inibizione dell’inflammasoma NLRP3 e riduzione dello stato infiammatorio sistemico'
    ],
    recommendedDosage: '10 - 15 g di sali di BHB sciolti in 500 ml d’acqua',
    bestForms: ['D-BHB enantiomero puro (forma biologicamente identica) legata a minerali bilanciati (goBHB)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Bere a digiuno al mattino per prolungare il digiuno intermittente o 30 minuti prima di una sessione di studio o endurance.',
      avoidTimes: 'Evitare di assumere insieme a pasti ricchi di carboidrati zuccherini per non vanificare l’ossidazione chetonica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Fornisce corpi chetonici già pronti bypassando la chetogenesi epatica e riducendo il fabbisogno di glicogenolisi nel fegato.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile al bisogno nei giorni di digiuno o di prestazioni mentali intense.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'olio-mct-c8',
        targetSupplementName: 'Olio MCT C8',
        synergyType: 'potenziamento',
        description: 'La combinazione definitiva per chetosi prolungata: il BHB eleva i chetoni subito e il C8 alimenta la chetogenesi successiva.',
        mechanism: 'Doppia curva cinetica di apporto chetonico nel flusso ematico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'longevita']
  },
  {
    id: 'l-ornitina',
    name: 'L-Ornitina Cloridrato',
    scientificName: 'Acido (2S)-2,5-Diamminopentanoico',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Detossificazione dell’ammoniaca, riduzione della fatica fisica e miglioramento del sonno profondo',
    description: 'Intermedio centrale del ciclo dell’urea epatico. Aiuta a smaltire rapidamente l’accumulo di ammoniaca nel sangue e nel liquido cefalorachidiano derivante da diete iperproteiche o sforzi muscolari prolungati.',
    primaryBenefits: [
      'Accelerazione del ciclo dell’urea e smaltimento delle tossine azotate',
      'Riduzione della fatica percepita e della sonnolenza post-prandiale',
      'Miglioramento della qualità del sonno attraverso la modulazione dell’asse dello stress',
      'Stimolo alla sintesi di poliammine necessarie per la proliferazione cellulare'
    ],
    recommendedDosage: '2.000 - 4.000 mg/giorno',
    bestForms: ['L-Ornitina HCl pura'],
    timing: {
      idealTimes: ['prima_dormire', 'post_allenamento'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere 30 minuti prima di andare a letto o subito dopo l’allenamento con acqua.',
      avoidTimes: 'Nessuna limitazione particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Pilastro del ciclo dell’urea: fondamentale per proteggere il fegato dall’iperammoniemia.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione per cicli di 4-8 settimane durante fasi di carico proteico o allenamento intenso.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'citrullina-malato',
        targetSupplementName: 'Citrullina Malato',
        synergyType: 'potenziamento',
        description: 'Sinergia d’eccellenza per il ciclo dell’urea epatico.',
        mechanism: 'Ornitina e citrullina cooperano all’interno della matrice mitocondriale epatica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'sonno', 'energia']
  },
  {
    id: 'l-carnosina-pura',
    name: 'L-Carnosina Pura',
    scientificName: 'Beta-Alanil-L-Istidina Pura Cristallina',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Anti-glicazione cellulare (blocca gli AGEs), ringiovanimento cellulare e longevità',
    description: 'Dipeptide idrosolubile concentrato nei muscoli e nel cervello. È il più potente inibitore naturale della glicazione proteica: si sacrifica legandosi agli zuccheri reattivi per impedire la formazione dei tossici prodotti avanzati di glicazione (AGEs), che irrigidiscono arterie, pelle e neuroni.',
    primaryBenefits: [
      'Blocco quasi totale della formazione di AGEs (Advanced Glycation End-products)',
      'Allungamento del limite di Hayflick e ringiovanimento morfologico dei fibroblasti senescenti',
      'Protezione neuronale contro l’accumulo di ioni rame e zinco eccitotossici',
      'Tamponamento degli ioni idrogeno (H+) intracellulari nei muscoli'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno divisi in due somministrazioni',
    bestForms: ['L-Carnosina pura fermentata di grado farmaceutico'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere a colazione e cena con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Protegge gli epatociti dall’ossidazione e dalla degenerazione fibrotica secondaria alla steatosi.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione quotidiana continuativa, fondamentale per gli over 45.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acido-alfa-lipoico',
        targetSupplementName: 'Acido Alfa Lipoico',
        synergyType: 'potenziamento',
        description: 'La combinazione anti-glicazione e anti-aging cellulare di riferimento mondiale.',
        mechanism: 'L’acido lipoico brucia il glucosio e la carnosina blocca la caramellizzazione delle proteine.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'recupero_sport', 'energia']
  },
  {
    id: 'l-serina-pura',
    name: 'L-Serina Pura',
    scientificName: 'Acido (2S)-2-Ammino-3-idrossipropanoico',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Precursore di D-serina e fosfatidilserina, contrasto al declino cognitivo (SLA/Alzheimer)',
    description: 'Aminoacido polare idrofilo che attraversa agevolmente la barriera emato-encefalica. Negli studi del celebre etnobotanico Paul Cox sul popolo dell’isola di Guam, l’apporto elevato di L-serina previene l’incorporazione della neurotossina BMAA nelle proteine cerebrali, proteggendo i motoneuroni.',
    primaryBenefits: [
      'Prevenzione del misfolding e aggregazione delle proteine neurotossiche cerebrali',
      'Precursore essenziale per la biosintesi di fosfatidilserina, sfingolipidi e D-serina',
      'Sostegno alla neurogenesi, plasticità sinaptica e trasmissione NMDA',
      'Miglioramento della memoria verbale e della velocità di risposta cognitiva'
    ],
    recommendedDosage: '1.000 - 3.000 mg/giorno (fino a 15-30g suddivisi nei protocolli neurodegenerativi)',
    bestForms: ['L-Serina pura polvere idrosolubile dal sapore naturalmente dolce'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'indifferente',
      instructions: 'Sciogliere in acqua, caffè o tisana al mattino e alla sera. Ha un sapore dolce simile alla glicina.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Partecipa alla biosintesi dei fosfolipidi epatici e all’esportazione dei trigliceridi dal fegato.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'fosfatidilserina',
        targetSupplementName: 'Fosfatidilserina',
        synergyType: 'potenziamento',
        description: 'Supporto neuronale lipidico e proteico congiunto.',
        mechanism: 'Fornitura del substrato primario per la sintesi dei fosfolipidi di membrana cerebrale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'longevita', 'sonno']
  },
  {
    id: 'l-prolina-connettivo',
    name: 'L-Prolina Pura',
    scientificName: 'Acido Pirrolidin-2-carbossilico Fermentato',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Mattone rigido della tripla elica di collagene, tendini, arterie e riparazione ferite',
    description: 'Aminoacido eterociclico la cui conformazione ad anello rigido pirrolidinico conferisce alla molecola di collagene la tipica struttura inextensibile a tripla elica. Insieme alla lisina e alla vitamina C, costituisce la base della rigenerazione vascolare e articolare.',
    primaryBenefits: [
      'Sintesi e idrossilazione in idrossiprolina per compattare la tripla elica di collagene',
      'Riparazione accelerata di lesioni tendinee, stiramenti muscolari e ferite chirurgiche',
      'Prevenzione della degradazione delle pareti arteriose e supporto all’endotelio',
      'Rinforzo della barriera connettivale intestinale e dermica'
    ],
    recommendedDosage: '500 - 1.500 mg/giorno',
    bestForms: ['L-Prolina pura fermentata da grado vegetale'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere con acqua al mattino.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata normalmente attraverso la prolina ossidasi epatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per 3-6 mesi durante recupero da infortuni o cicatrizzazioni.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-lisina',
        targetSupplementName: 'L-Lisina',
        synergyType: 'potenziamento',
        description: 'La formulazione sinergica connettivale di Linus Pauling.',
        mechanism: 'I due aminoacidi cardine del collagene idrossilati dalla vitamina C.'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'attivazione',
        description: 'La prolina necessita di acido ascorbico per diventare idrossiprolina.',
        mechanism: 'Attivazione dell’enzima prolil-idrossilasi ferro-dipendente.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita', 'recupero_sport']
  },
  {
    id: 'l-fenilalanina-dopamina',
    name: 'L-Fenilalanina',
    scientificName: 'Acido (2S)-2-Ammino-3-fenilpropanoico da Fermentazione',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Precursore della tirosina e delle endorfine naturali (D,L-PA), sazietà e prontezza',
    description: 'Aminoacido essenziale che viene convertito nel fegato in L-tirosina dall’enzima fenilalanina idrossilasi, fornendo il substrato per dopamina, adrenalina e noradrenalina. La forma DL-fenilalanina inibisce anche le encefalinasi cerebrali, prolungando l’effetto analgesico ed euforizzante delle endorfine.',
    primaryBenefits: [
      'Innalzamento della prontezza mentale, del drive motivazionale e dell’energia cognitiva',
      'Stimolo del rilascio dell’ormone colecistochinina (CCK), promuovendo la sazietà duratura ai pasti',
      'Prolungamento della durata delle endorfine cerebrali con riduzione della percezione del dolore cronico',
      'Supporto al tono dell’umore positivo e contrasto all’apatia'
    ],
    recommendedDosage: '500 - 1.500 mg/giorno a digiuno',
    bestForms: ['L-Fenilalanina pura o DL-Fenilalanina (DLPA)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino a stomaco vuoto almeno 30 minuti prima di colazione.',
      avoidTimes: 'CONTROINDICAZIONE ASSOLUTA nei soggetti affetti da fenilchetonuria (PKU). Evitare in concomitanza con farmaci antidepressivi IMAO.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata normalmente nel fegato se non si soffre della rara mutazione PKU.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6 settimane seguiti da 2 settimane di riposo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'complesso-vitamine-b',
        targetSupplementName: 'Complesso Vitamine B',
        synergyType: 'attivazione',
        description: 'B6, B9 e B12 sono cofattori obbligati per la conversione in neurotrasmettitori attivi.',
        mechanism: 'Sostegno della cascata enzimatica delle monoamine.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia', 'umore_ansia']
  },
  {
    id: 'l-istidina-pura',
    name: 'L-Istidina Pura',
    scientificName: 'Acido (2S)-2-Ammino-3-(1H-imidazol-4-il)propanoico',
    category: 'aminoacidi',
    categoryLabel: 'Aminoacidi & Peptidi',
    shortTagline: 'Cofattore limitante per la carnosina, guaina mielinica e metallotioneina',
    description: 'Aminoacido essenziale contenente un anello imidazolico. Si lega alla beta-alanina per formare carnosina all’interno del muscolo scheletrico e del cervello, ed è indispensabile per la sintesi della guaina mielinica che isola i nervi e per la chelazione dei metalli pesanti.',
    primaryBenefits: [
      'Substrato indispensabile per la sintesi endogena di carnosina nei miociti',
      'Mantenimento e riparazione della guaina mielinica dei nervi periferici',
      'Cofattore per la sintesi dell’emoglobina eritrocitaria (prevenzione dell’anemia)',
      'Precursore dell’istamina controllata per la risposta immunitaria e secrezione gastrica'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno',
    bestForms: ['L-Istidina pura a forma libera da fermentazione vegetale'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Evitare l’assunzione di megadosi isolate nei soggetti con sindrome da attivazione mastocitaria (MCAS) o intolleranza severa all’istamina.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’anello imidazolico partecipa al legame con i metalli pesanti epatici nella metallotioneina.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per cicli di 8-12 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'beta-alanina',
        targetSupplementName: 'Beta-Alanina',
        synergyType: 'potenziamento',
        description: 'La combinazione costruttiva per la carnosina intramuscolare.',
        mechanism: 'Fornisce entrambi i precursori per la sintesi della carnosina sintasi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia', 'longevita']
  }
];

