import { Supplement } from '../../types/supplement';

export const MINERALS_DATA: Supplement[] = [
  {
    id: 'magnesio-bisglicinato',
    name: 'Magnesio Bisglicinato',
    scientificName: 'Chelato di Magnesio con Glicina',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Forma altamente biodisponibile, priva di effetti lassativi, ottima per SNC e muscoli',
    description: 'Il magnesio è legato a due molecole di glicina. Questa conformazione chelata ne impedisce la precipitazione intestinale, favorendo l’assorbimento trans-epiteliale intatto e una potente azione rilassante neuromuscolare.',
    primaryBenefits: [
      'Riduzione dell’eccitabilità corticale e del cortisolo serale',
      'Rilassamento della muscolatura striata e liscia (prevenzione crampi)',
      'Cofattore in oltre 350 reazioni enzimatiche cellulari',
      'Supporto al sonno profondo ad onde lente (SWS)'
    ],
    recommendedDosage: '200 - 400 mg di magnesio elementare/giorno',
    bestForms: ['Bisglicinato chelato (Albion TRAACS)', 'Glicinato puro polvere o capsule'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Ideale 30-60 minuti prima di coricarsi. Può essere assunto anche a digiuno senza causare diarrea osmotica.',
      avoidTimes: 'Evitare l’assunzione concomitante con dosi elevate di calcio o ferro nello stesso momento.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il magnesio riduce lo stress ossidativo degli epatociti ed è essenziale per la produzione di ATP mitocondriale nel fegato.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano continuativo senza necessità di cicli di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-b6-p5p',
        targetSupplementName: 'Vitamina B6 (P-5-P)',
        synergyType: 'assorbimento',
        description: 'La vitamina B6 facilita il trasporto intracellulare del magnesio nei neuroni e nei miociti.',
        mechanism: 'La piridossina fosfato funge da carrier di membrana cellulare per il catione Mg2+.'
      },
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Sinergia sinaptica che promuove il rilascio di onde cerebrali alfa e inibisce i recettori NMDA.',
        mechanism: 'Duplice blocco del glutammato e stimolazione recettoriale GABA-A.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'spaziare_orari',
        reason: 'Competizione per il trasportatore DMT-1 degli ioni bivalenti nell’orletto a spazzola enterocitario.',
        recommendation: 'Spaziare le due somministrazioni di almeno 2 ore.'
      },
      {
        targetSupplementId: 'calcio-citrato',
        targetSupplementName: 'Calcio ad alto dosaggio (>500mg)',
        severity: 'spaziare_orari',
        reason: 'Rapporto Calcio/Magnesio sbilanciato riduce la percentuale di assorbimento del magnesio.',
        recommendation: 'Assumere il calcio a pranzo e il magnesio la sera.'
      }
    ],
    targetGoals: ['sonno', 'umore_ansia', 'energia', 'articolazioni']
  },
  {
    id: 'magnesio-l-treonato',
    name: 'Magnesio L-Treonato',
    scientificName: 'Magtein / L-Threonate di Magnesio',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Unico chelato in grado di superare efficacemente la barriera emato-encefalica',
    description: 'Sviluppato dai ricercatori del MIT, il L-treonato veicola specificamente il magnesio nel liquido cerebrospinale, aumentando la densità delle sinapsi nell’ippocampo e nella corteccia prefrontale.',
    primaryBenefits: [
      'Aumento significativo della densità sinaptica e della plasticità neuronale',
      'Miglioramento della memoria a breve e lungo termine',
      'Potenziamento della lucidità mentale e riduzione della nebbia cognitiva',
      'Supporto rigenerativo dell’architettura del sonno'
    ],
    recommendedDosage: '1.500 - 2.000 mg di Magtein (circa 144 mg di magnesio elementare)',
    bestForms: ['Magtein brevettato puro standardizzato'],
    timing: {
      idealTimes: ['pomeriggio', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Dividere la dose: 1 capsula nel pomeriggio per il focus e 2 capsule 45 min prima di dormire.',
      avoidTimes: 'Non assumere a stomaco vuoto se si soffre di gastrite acuta.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'L’acido treonico è un metabolita innocuo della vitamina C eliminato per via renale.',
      cycleProtocol: {
        required: false,
        description: 'Può essere assunto continuativamente per 3-6 mesi; consigliata 1 settimana di pausa ogni 3 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'apigenina',
        targetSupplementName: 'Apigenina',
        synergyType: 'potenziamento',
        description: 'Combinazione d’elezione nel protocollo Huberman per addormentamento rapido e sonno ristoratore.',
        mechanism: 'Magnesio blocca i canali del calcio presinaptici mentre l’apigenina stimola i recettori delle benzodiazepine.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'sonno', 'umore_ansia', 'longevita']
  },
  {
    id: 'magnesio-malato',
    name: 'Magnesio Malato',
    scientificName: 'Magnesio Dimalato',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Energia mitocondriale e riduzione del dolore muscolare cronico',
    description: 'Il magnesio legato all’acido malico, intermedio chiave del Ciclo di Krebs cellulare. È la formulazione d’eccellenza per la stanchezza cronica e il dolore miofasciale.',
    primaryBenefits: [
      'Stimolazione della fosforilazione ossidativa e produzione di ATP',
      'Riduzione della rigidità e indolenzimento muscolare mattutino',
      'Chelazione naturale dell’alluminio e metalli pesanti nei tessuti',
      'Ottima biodisponibilità senza sedazione'
    ],
    recommendedDosage: '300 - 500 mg di magnesio elementare/giorno',
    bestForms: ['Dimalato puro', 'Compresse a lento rilascio'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione per sfruttare l’effetto energizzante dell’acido malico.',
      avoidTimes: 'Evitare la sera prima di dormire per non stimolare eccessivamente il metabolismo energetico.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'L’acido malico partecipa al ciclo dell’urea e al metabolismo energetico epatico.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile in modo continuativo nei periodi di astenia o affaticamento.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'Sinergia mitocondriale massima per la catena di trasporto degli elettroni e resa aerobica.',
        mechanism: 'Acido malico fornisce substrato al ciclo dell’acido citrico mentre il CoQ10 trasferisce elettroni.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'spaziare_orari',
        reason: 'Competizione per trasportatori DMT-1.',
        recommendation: 'Spaziare di almeno 2 ore.'
      }
    ],
    targetGoals: ['energia', 'recupero_sport', 'articolazioni']
  },
  {
    id: 'magnesio-citrato',
    name: 'Magnesio Citrato',
    scientificName: 'Sale di Magnesio dell’Acido Citrico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Supporto per transito intestinale e alcalinizzazione renale',
    description: 'Forma altamente solubile di magnesio che unisce un rapido assorbimento sistemico a un benefico richiamo osmotico d’acqua nel colon, utile in caso di stipsi e calcoli renali di ossalato.',
    primaryBenefits: [
      'Regolarizzazione fisiologica del transito intestinale rallentato',
      'Azione alcalinizzante urinaria e inibizione della cristallizzazione di ossalato',
      'Rilassamento muscolare e riduzione della tensione addominale',
      'Assorbimento rapido nei tessuti periferici'
    ],
    recommendedDosage: '200 - 400 mg magnesio elementare/giorno',
    bestForms: ['Polvere effervescente idrosolubile', 'Capsule pure'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Sciogliere in acqua tiepida e bere la sera. Se l’effetto lassativo è eccessivo, dimezzare la dose.',
      avoidTimes: 'Evitare se si soffre di diarrea o alvo diarroico.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Il citrato è un intermedio metabolico naturale fisiologico ben tollerato.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile al bisogno o in cicli da 4-8 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'potassio-citrato',
        targetSupplementName: 'Potassio Citrato',
        synergyType: 'potenziamento',
        description: 'Potente duo alcalinizzante per contrastare l’acidosi metabolica e la calcolosi renale.',
        mechanism: 'I citrati legano il calcio urinario solubilizzandolo e innalzano il pH delle urine.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'energia', 'sonno']
  },
  {
    id: 'magnesio-taurato',
    name: 'Magnesio Taurato',
    scientificName: 'Chelato di Magnesio e Taurina',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Cardioprotettivo, stabilizzatore del ritmo cardiaco e della pressione arteriosa',
    description: 'Combinazione molecolare tra magnesio e l’aminoacido taurina. Entrambi condividono azioni antipertensive, antiaritmiche e regolatrici dell’eccitabilità dei miociti cardiaci.',
    primaryBenefits: [
      'Miglioramento della contrattilità e stabilità elettrofisiologica cardiaca',
      'Regolazione delicata della pressione arteriosa sistolica e diastolica',
      'Sensibilizzazione all’insulina e modulazione glicemica',
      'Azione calmante centrale senza interferenze gastriche'
    ],
    recommendedDosage: '150 - 300 mg magnesio elementare/giorno',
    bestForms: ['Taurato chelato puro in capsule'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti con acqua abbondante.',
      avoidTimes: 'Nessuna limitazione oraria particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La taurina è fondamentale per la coniugazione degli acidi biliari nel fegato e protegge le membrane cellulari epatiche.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano continuativo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'omega-3-epadha',
        targetSupplementName: 'Omega-3 (EPA/DHA)',
        synergyType: 'potenziamento',
        description: 'Sinergia cardiovascolare completa per endotelio, trigliceridi ed elasticità arteriosa.',
        mechanism: 'Magnesio modula i canali del calcio e gli omega-3 aumentano la fluidità di membrana.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'umore_ansia']
  },
  {
    id: 'zinco-picolinato',
    name: 'Zinco Picolinato',
    scientificName: 'Sale di Zinco dell’Acido Picolinico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Sintesi ormonale, difese antivirali e salute della pelle',
    description: 'Il legame con l’acido picolinico garantisce il più alto tasso di captazione enterocitaria tra i sali di zinco. Indispensabile per la funzione dei linfociti T, la sintesi di testosterone e la cicatrizzazione tissutale.',
    primaryBenefits: [
      'Inibizione della replicazione virale e sostegno dei linfociti T-helper',
      'Produzione ottimale di testosterone e modulazione dell’aromatasi',
      'Regolazione della produzione di sebo e controllo dell’acne',
      'Integrità della barriera della mucosa intestinale'
    ],
    recommendedDosage: '15 - 30 mg di zinco elementare/giorno',
    bestForms: ['Picolinato', 'Bisglicinato chelato', 'OptiZinc (monometionina)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere SEMPRE a stomaco pieno durante un pasto principale. A digiuno provoca frequentemente nausea gastrica acuta.',
      avoidTimes: 'Evitare rigorosamente l’assunzione a stomaco vuoto.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Stimola la produzione epatica di metallotioneina, proteina chiave che protegge il fegato dai radicali liberi e metalli pesanti.',
      cycleProtocol: {
        required: false,
        description: 'Se assunto a dosi >25mg al giorno per oltre 8 settimane, è indispensabile integrare 1-2mg di Rame.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'attivazione',
        description: 'La quercetina funge da ionoforo dello zinco, trasportandolo attraverso il doppio strato lipidico cellulare.',
        mechanism: 'Aumenta la concentrazione intracellulare di Zn2+, bloccando la polimerasi virale.'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'Combinazione d’elezione per difese immunitarie e sintesi accelerata di collagene cutaneo.',
        mechanism: 'Stimolo congiunto su fagocitosi, sintesi di anticorpi e cross-linking del collagene.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'rame-bisglicinato',
        targetSupplementName: 'Rame',
        severity: 'alto',
        reason: 'Lo zinco stimola la metallotioneina enterocitaria che intrappola avidamente il rame, causandone deplezione ematica.',
        recommendation: 'Assumere lo zinco a pranzo e il rame a cena (o spaziare di almeno 4-6 ore).'
      },
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'alto',
        reason: 'Competizione mutua per il trasportatore DMT-1.',
        recommendation: 'Distanziarli di almeno 3 ore.'
      }
    ],
    targetGoals: ['immunita', 'energia', 'longevita']
  },
  {
    id: 'zinco-carnosina',
    name: 'Zinco L-Carnosina (PepZin GI)',
    scientificName: 'Complesso Chelatato Zinco-L-Carnosina',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Cicatrizzazione della mucosa gastrica, anti-ulcera e gastrite',
    description: 'Composto brevettato giapponese in cui lo zinco e la carnosina aderiscono specificamente alle lesioni dell’epitelio gastrico e duodenale, stimolando la riparazione della barriera gastrica e inibendo l’Helicobacter pylori.',
    primaryBenefits: [
      'Rigenerazione delle ulcere e riduzione del reflusso gastroesofageo',
      'Protezione della barriera mucosale contro farmaci FANS e alcol',
      'Azione antinfiammatoria mirata sulla mucosa intestinale (Leaky Gut)',
      'Fornitura continua di zinco a rilascio lento e privo di nausea'
    ],
    recommendedDosage: '75 mg due volte al giorno (equivalenti a circa 16 mg di zinco elementare totale)',
    bestForms: ['PepZin GI brevettato'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere dopo i pasti o prima di coricarsi con mezzo bicchiere d’acqua.',
      avoidTimes: 'Evitare in concomitanza con antiacidi contenenti alluminio o magnesio ad alte dosi.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La carnosina è un potente antiossidante epatico che previene la perossidazione lipidica.',
      cycleProtocol: {
        required: false,
        description: 'Cicli tipici da 8 a 12 settimane in caso di gastrite o permeabilità intestinale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-glutammina',
        targetSupplementName: 'L-Glutammina',
        synergyType: 'potenziamento',
        description: 'Protocollo gold standard per la rigenerazione delle giunzioni serrate (tight junctions) intestinali.',
        mechanism: 'La glutammina nutre gli enterociti mentre lo zinco-carnosina promuove l’espressione delle claudine e occludine.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita']
  },
  {
    id: 'rame-bisglicinato',
    name: 'Rame Bisglicinato',
    scientificName: 'Chelato di Rame con Glicina',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Sintesi di emoglobina, mielina, collagene e bilanciamento dello zinco',
    description: 'Cofattore essenziale per la ceruloplasmina, la citocromo c ossidasi mitocondriale e la lisil ossidasi. Indispensabile per prevenire le anemie non responsive al ferro e l’ingrigimento precoce dei capelli.',
    primaryBenefits: [
      'Mobilizzazione e incorporazione del ferro nell’emoglobina',
      'Sintesi dell’enzima superossido dismutasi (Cu/Zn SOD)',
      'Mantenimento della guaina mielinica e dei neurotrasmettitori',
      'Sintesi di elastina e collagene vascolare'
    ],
    recommendedDosage: '1 - 2 mg di rame elementare/giorno',
    bestForms: ['Bisglicinato chelato', 'Gluconato di rame'],
    timing: {
      idealTimes: ['cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere a cena o in orario separato dallo zinco.',
      avoidTimes: 'Non assumere nello stesso momento in cui si assume zinco o ferro.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Il fegato è il principale organo di deposito ed escrezione del rame via bile. Un sovradosaggio cronico (>5-10mg/die) può indurre tossicità epatica cumulativa.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 4,
        description: 'Non eccedere i 2mg/die. Effettuare cicli o monitorare ceruloplasmina e rame sierico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro Bisglicinato',
        synergyType: 'attivazione',
        description: 'Il rame è indispensabile per l’attività dell’efaestina e ceruloplasmina che ossidano Fe2+ a Fe3+ per il legame con la transferrina.',
        mechanism: 'Senza rame, il ferro rimane intrappolato nelle cellule e non raggiunge il midollo osseo.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco',
        severity: 'alto',
        reason: 'Assunzione simultanea blocca l’assorbimento del rame nell’intestino tenue.',
        recommendation: 'Spaziare di almeno 4 ore.'
      }
    ],
    targetGoals: ['energia', 'immunita', 'longevita']
  },
  {
    id: 'ferro-bisglicinato',
    name: 'Ferro Bisglicinato',
    scientificName: 'Chelato di Ferro Ferroso (Fe2+) con Glicina',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Forma altamente assorbibile, non provoca stipsi né gastrite',
    description: 'La molecola di ferro è protetta da due anelli di glicina, rimanendo neutra e stabile nel succo gastrico. Questo previene la formazione di radicali liberi nell’intestino, azzerando stitichezza e dolori colici.',
    primaryBenefits: [
      'Rapido ripristino dei depositi di ferritina ed emoglobina',
      'Miglioramento del trasporto di ossigeno ai tessuti e riduzione della fatica',
      'Supporto cognitivo, della memoria e della termoregolazione corporea',
      'Rinforzo del bulbo pilifero e contrasto al diradamento da sideropenia'
    ],
    recommendedDosage: '14 - 30 mg di ferro elementare/giorno (secondo prescrizione ed esami ematici)',
    bestForms: ['Ferrochel (Bisglicinato ferroso puro)', 'Ferro liposomiale'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino a stomaco vuoto con una spremuta d’arancia o integratore di Vitamina C per triplicare la captazione.',
      avoidTimes: 'Evitare assolutamente l’assunzione con caffè, tè nero, latte o formaggi: i polifenoli e il calcio riducono l’assorbimento fino all’80%.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Il ferro in eccesso si accumula negli epatociti innescando la reazione di Fenton e perossidazione lipidica. Assumere ESCLUSIVAMENTE se la ferritina sierica è bassa documentata da esami.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 4,
        description: 'Monitorare emocromo e ferritina ogni 60-90 giorni. Sospendere appena i valori rientrano nel range ottimale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'assorbimento',
        description: 'La Vitamina C mantiene il ferro nello stato bivalente ridotto Fe2+, solubile e pronto per il trasportatore DMT-1.',
        mechanism: 'Riduzione chimica diretta e chelazione solubile nel lume duodenale.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'calcio-citrato',
        targetSupplementName: 'Calcio',
        severity: 'critico',
        reason: 'Il calcio inibisce potentemente sia il ferro eme sia il non-eme legandosi agli stessi canali di efflusso basolaterale.',
        recommendation: 'Spaziare di almeno 4 ore.'
      },
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio',
        severity: 'alto',
        reason: 'Competizione cationica diretta per l’assorbimento enterico.',
        recommendation: 'Ferro al mattino a digiuno, magnesio la sera a cena.'
      }
    ],
    targetGoals: ['energia', 'recupero_sport', 'longevita']
  },
  {
    id: 'seleniometionina',
    name: 'Seleniometionina (Selenio)',
    scientificName: 'L-Selenometionina Organica',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Cofattore tiroideo, conversione T4 in T3 e glutatione perossidasi',
    description: 'Forma organica naturale del selenio in cui il minerale è incorporato nell’aminoacido metionina. È indispensabile per gli enzimi deiodinasi tiroidei e per la potente difesa antiossidante della glutatione perossidasi (GPx).',
    primaryBenefits: [
      'Supporto alla conversione periferica degli ormoni tiroidei da inattivo T4 ad attivo T3',
      'Protezione della tiroide dagli anticorpi anti-TPO nella tiroidite di Hashimoto',
      'Attivazione della glutatione perossidasi per neutralizzare l’acqua ossigenata intracellulare',
      'Miglioramento della spermatogenesi e motilità degli spermatozoi'
    ],
    recommendedDosage: '100 - 200 mcg/giorno (non superare la dose massima di 200 mcg)',
    bestForms: ['L-Seleniometionina', 'Lievito arricchito di selenio'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere durante la colazione o il pranzo con un pasto.',
      avoidTimes: 'Evitare mega-dosi croniche: il margine di sicurezza del selenio è stretto (limite tossicità 400 mcg/die).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Aumenta le scorte epatiche di selenoproteine antiossidanti, proteggendo il fegato dal danno da perossidi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 4,
        description: 'Consigliati cicli di 3 mesi seguiti da 1 mese di pausa per evitare accumulo nei tessuti ungueali e piliferi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-e-tocoferoli',
        targetSupplementName: 'Vitamina E',
        synergyType: 'potenziamento',
        description: 'Sinergia antiossidante classica: la Vitamina E protegge le membrane cellulari e il selenio neutralizza i perossidi citosolici.',
        mechanism: 'Azione cooperativa nei compartimenti idrofobici e idrofilici cellulari.'
      },
      {
        targetSupplementId: 'iodio-kelp',
        targetSupplementName: 'Iodio',
        synergyType: 'attivazione',
        description: 'Equilibrio tiroideo perfetto: lo iodio è il mattone strutturale e il selenio ne guida l’attivazione enzimatica.',
        mechanism: 'Previene il danno ossidativo dei tireociti provocato dall’eccesso di perossido di idrogeno durante la sintesi ormonale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'energia', 'longevita']
  },
  {
    id: 'iodio-kelp',
    name: 'Iodio da Kelp',
    scientificName: 'Estratto di Ascophyllum Nodosum / Kelp',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Substrato essenziale per la sintesi degli ormoni tiroidei e metabolismo basale',
    description: 'Fonte naturale biologica di iodio ottenuta da alghe marine atlantiche. Lo iodio è l’elemento chimico fondamentale incorporato nella tirosina per dare vita alla tiroxina (T4) e triiodotironina (T3).',
    primaryBenefits: [
      'Mantenimento dell’eutiroidismo e del corretto dispendio energetico a riposo',
      'Supporto alle funzioni cognitive e alla salute del sistema nervoso',
      'Mantenimento di una pelle idratata e sana',
      'Regolazione della temperatura corporea e della vitalità'
    ],
    recommendedDosage: '150 - 225 mcg/giorno',
    bestForms: ['Kelp standardizzato titolato in iodio organico', 'Potassio ioduro'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare la sera perché può manifestare un lieve effetto stimolante sul metabolismo.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzato principalmente dalla ghiandola tiroidea ed escreto per via renale.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa se la dieta è priva di sale iodato e frutti di mare.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'seleniometionina',
        targetSupplementName: 'Seleniometionina',
        synergyType: 'attivazione',
        description: 'Protegge la ghiandola tiroidea dall’ossidazione durante la sintesi ormonale.',
        mechanism: 'La selenoperossidasi smaltisce l’H2O2 generata dalla tireoperossidasi (TPO).'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'cromo-picolinato',
    name: 'Cromo Picolinato',
    scientificName: 'Complesso di Cromo Trivalente (Cr3+) e Acido Picolinico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Migliora la sensibilità insulinica e controlla gli attacchi di fame di zuccheri',
    description: 'Il cromo trivalente fa parte della cromomodulina, un oligopeptide a basso peso molecolare che amplifica il segnale del recettore dell’insulina, favorendo l’ingresso del glucosio nelle cellule muscolari.',
    primaryBenefits: [
      'Riduzione dell’insulino-resistenza e stabilizzazione dei picchi glicemici post-prandiali',
      'Attenuazione drastica del craving per dolci e carboidrati raffinati',
      'Supporto alla ricomposizione corporea e al mantenimento della massa magra',
      'Miglioramento del profilo lipidico sierico'
    ],
    recommendedDosage: '200 - 400 mcg/giorno',
    bestForms: ['Cromo picolinato', 'Cromo polinicotinato'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere circa 15-20 minuti prima dei pasti principali contenenti carboidrati.',
      avoidTimes: 'Evitare a stomaco completamente vuoto se si soffre di ipoglicemia reattiva.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Riducendo l’iperglicemia e l’insulino-resistenza sistemica, previene la lipogenesi de novo epatica e la steatosi (fegato grasso).',
      cycleProtocol: {
        required: false,
        description: 'Cicli da 8 a 12 settimane in concomitanza con percorsi di ricomposizione corporea.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'berberina-hcl',
        targetSupplementName: 'Berberina HCl',
        synergyType: 'potenziamento',
        description: 'Coppia sinergica suprema per il metabolismo glucidico e l’attivazione di AMPK.',
        mechanism: 'La berberina upregola i recettori dell’insulina e il cromo ne potenzia la trasduzione del segnale intracellulare.'
      },
      {
        targetSupplementId: 'acido-alfa-lipoico',
        targetSupplementName: 'Acido Alfa Lipoico',
        synergyType: 'potenziamento',
        description: 'Favorisce la traslocazione dei trasportatori GLUT-4 alla membrana muscolare.',
        mechanism: 'Stimolazione sinergica della captazione periferica di glucosio non dipendente da dosi eccessive di insulina.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'boro-fruttoborato',
    name: 'Boro Fruttoborato',
    scientificName: 'Calcio Fruttoborato / Boro Organico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Ottimizzazione del testosterone libero, SHBG e salute articolare',
    description: 'Il boro è un oligoelemento bioattivo che modula l’emivita degli ormoni steroidei. Riduce significativamente la globulina legante gli ormoni sessuali (SHBG), aumentando la frazione biodisponibile di testosterone ed estradiolo.',
    primaryBenefits: [
      'Aumento del testosterone libero mediante abbassamento di SHBG nel sangue',
      'Riduzione dei marker infiammatori sistemici articolari (PCR e TNF-alfa)',
      'Prolungamento dell’emivita della vitamina D circolante nel plasma',
      'Mantenimento della densità minerale ossea e ritenzione di magnesio'
    ],
    recommendedDosage: '6 - 10 mg/giorno',
    bestForms: ['Calcio fruttoborato', 'Boro citrato'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare l’assunzione continuativa senza pause per prevenire adattamenti ormonali.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Viene metabolizzato rapidamente ed escreto nelle urine senza appesantire il citocromo P450 epatico.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 2,
        recommendedBreakWeeks: 1,
        description: 'Protocollo ottimale: 2 settimane ON seguite da 1 settimana OFF per evitare il rimbalzo dei livelli di estrogeni.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-d3',
        targetSupplementName: 'Vitamina D3',
        synergyType: 'potenziamento',
        description: 'Il boro inibisce l’enzima 24-idrossilasi che degrada la Vitamina D, aumentandone l’emivita ematica.',
        mechanism: 'Conserva livelli plasmatici stabili di calcidiolo più a lungo.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'articolazioni', 'longevita']
  },
  {
    id: 'silicio-organico',
    name: 'Silicio Organico (Estratto di Bambù)',
    scientificName: 'Monometilsilanotriolo / Estratto Secco di Bambusa Arundinacea',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Sintesi del collagene osseo, cartilagini, capelli e flessibilità arteriosa',
    description: 'Il silicio è essenziale per l’attivazione della prolil-idrossilasi, enzima indispensabile per la sintesi della matrice di collagene e glicosaminoglicani nelle ossa, nei tendini e nelle pareti dei vasi sanguigni.',
    primaryBenefits: [
      'Aumento della densità e robustezza della trabecolatura ossea',
      'Rinforzo strutturale della corteccia di capelli fragili e unghie deboli',
      'Mantenimento dell’elasticità arteriosa contrastando l’irrigidimento da calcio',
      'Supporto alla riparazione dei legamenti e tendini lesionati'
    ],
    recommendedDosage: '40 - 80 mg di silicio elementare/giorno (da 500 mg estratto di bambù 75%)',
    bestForms: ['Estratto secco di Bambù (titolato >70% in silicio naturale)', 'Monometilsilanotriolo liquido'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere preferibilmente al mattino con un bicchiere d’acqua abbondante.',
      avoidTimes: 'Nessuna controindicazione oraria.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Totalmente atossico a dosaggi nutrizionali; l’eccesso viene prontamente filtrato dai glomeruli renali.',
      cycleProtocol: {
        required: false,
        description: 'Cicli raccomandati di 2-3 mesi durante la primavera e l’autunno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'collagene-idrolizzato',
        targetSupplementName: 'Collagene Idrolizzato',
        synergyType: 'potenziamento',
        description: 'Fornisce il cofattore minerale per assemblare le catene peptidiche del collagene nei tessuti connettivi.',
        mechanism: 'Il silicio funge da ponte di legame tra glicosaminoglicani e proteine strutturali.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita']
  },
  {
    id: 'potassio-citrato',
    name: 'Potassio Citrato',
    scientificName: 'Sale di Potassio dell’Acido Citrico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Equilibrio elettrolitico, controllo della pressione arteriosa e alcalinizzazione',
    description: 'Principale catione intracellulare dell’organismo. Controbilancia l’eccesso dietetico di sodio, favorisce la vasodilatazione periferica, la trasmissione nervosa e la prevenzione dei calcoli renali di acido urico.',
    primaryBenefits: [
      'Regolazione fisiologica della pressione sanguigna e riduzione del carico vascolare',
      'Eliminazione della ritenzione idrica extracellulare causata dal sodio',
      'Prevenzione di crampi muscolari e debolezza muscolare da sudorazione',
      'Innalzamento del pH urinario e prevenzione della litiasi renale'
    ],
    recommendedDosage: '400 - 800 mg di potassio elementare/giorno',
    bestForms: ['Potassio citrato', 'Potassio bicarbonato'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere sempre con cibo e abbondante acqua. Non assumere in compresse solide concentrate a stomaco vuoto per evitare irritazioni della mucosa gastrica.',
      avoidTimes: 'Non assumere in caso di insufficienza renale o con farmaci ACE-inibitori o risparmiatori di potassio senza consulto medico.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Sicuro per il fegato; la sua escrezione è quasi interamente a carico dei reni.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile nei periodi caldi o di intensa attività sportiva.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-citrato',
        targetSupplementName: 'Magnesio Citrato',
        synergyType: 'potenziamento',
        description: 'La pompa sodio-potassio ATPasi richiede magnesio per funzionare e trattenere il potassio dentro la cellula.',
        mechanism: 'Se il magnesio è carente, il potassio viene disperso nelle urine e non penetra nei miociti.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'longevita']
  },
  {
    id: 'manganese-gluconato',
    name: 'Manganese Gluconato',
    scientificName: 'Sale di Manganese (II) dell’Acido Gluconico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Superossido dismutasi mitocondriale (Mn-SOD) e sintesi di proteoglicani',
    description: 'Il manganese è il cuore metallico dell’enzima Mn-SOD presente all’interno dei mitocondri, responsabile della prima linea di difesa contro i radicali liberi generati dalla respirazione cellulare.',
    primaryBenefits: [
      'Difesa antiossidante primaria all’interno della matrice mitocondriale',
      'Cofattore per le glicosiltransferasi necessarie alla formazione della cartilagine articolare',
      'Metabolismo degli amminoacidi, del colesterolo e dei carboidrati',
      'Attivazione della protrombina per la normale coagulazione del sangue'
    ],
    recommendedDosage: '2 - 5 mg/giorno',
    bestForms: ['Gluconato di manganese', 'Bisglicinato chelato'],
    timing: {
      idealTimes: ['pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con il pasto di mezzogiorno.',
      avoidTimes: 'Evitare l’assunzione contemporanea ad alte dosi di ferro o calcio.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Il manganese viene eliminato principalmente attraverso la secrezione biliare epatica. In presenza di colestasi o danno epatico grave può accumularsi nei gangli della base cerebrali.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 4,
        description: 'Non superare mai la dose giornaliera raccomandata. Cicli periodici di 2 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'glucosamina-solfato',
        targetSupplementName: 'Glucosamina Solfato',
        synergyType: 'potenziamento',
        description: 'Supporto sinergico per la rigenerazione della cartilagine articolare logorata.',
        mechanism: 'Il manganese attiva gli enzimi che incorporano la glucosamina nei proteoglicani articolari.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'alto',
        reason: 'Competizione per il medesimo carrier intestinale DMT-1.',
        recommendation: 'Distanziarli di almeno 3-4 ore.'
      }
    ],
    targetGoals: ['articolazioni', 'energia', 'longevita']
  },
  {
    id: 'molibdeno-chelato',
    name: 'Molibdeno Chelato',
    scientificName: 'Molibdato di Sodio Chelato con Aminoacidi',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Detossificazione dei solfiti, metabolismo di alcol e acido urico',
    description: 'Il molibdeno è il cofattore indispensabile dell’enzima solfito ossidasi, che converte i solfiti tossici (intolleranze da vino, cibo conservato) in solfati innocui, e dell’aldeide ossidasi coinvolta nel metabolismo dei farmaci e dell’acetaldeide.',
    primaryBenefits: [
      'Neutralizzazione immediata dell’intolleranza ai solfiti e ai composti solforati',
      'Sostegno alla detossificazione dell’acetaldeide dopo il consumo di alcolici',
      'Regolazione dei livelli ematici di acido urico tramite la xantina ossidasi',
      'Prevenzione dell’accumulo di sostanze neurotossiche solforate'
    ],
    recommendedDosage: '50 - 150 mcg/giorno',
    bestForms: ['Molibdato di sodio', 'Aminoacido chelato di molibdeno'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere ai pasti.',
      avoidTimes: 'Evitare megadosi prolungate (>500 mcg/die) che possono innalzare eccessivamente l’escrezione renale di rame.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Essenziale per il fegato: l’aldeide ossidasi e la xantina deidrogenasi epatica non possono degradare metaboliti tossici in assenza di molibdeno.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo o al bisogno in caso di intolleranza ai composti solfurei (es. assunzione di NAC o aglio).'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nac-n-acetilcisteina',
        targetSupplementName: 'N-Acetilcisteina (NAC)',
        synergyType: 'protezione',
        description: 'Impedisce l’accumulo di solfiti nei soggetti con polimorfismi SUOX lenti che assumono NAC ad alte dosi.',
        mechanism: 'Garantisce il rapido smaltimento ossidativo dei metaboliti intermedi dello zolfo.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'longevita']
  },
  {
    id: 'litio-orotato',
    name: 'Litio Orotato (Microdosaggio)',
    scientificName: 'Monoidrato di Litio Orotato (Microdose Nutrizionale)',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Microdosaggio neuroprotettivo, autofagia cerebrale e stabilizzazione umorale',
    description: 'Il microdosaggio nutrizionale di litio orotato (1-5 mg di litio elementare, nulla a che vedere con i dosaggi psichiatrici di carbonato da 900-1200 mg) stimola la sintesi del BDNF cerebrale e inibisce l’enzima GSK-3beta.',
    primaryBenefits: [
      'Inibizione della glicogeno sintasi chinasi-3 (GSK-3beta) e stimolo all’autofagia neuronale',
      'Incremento del BDNF (Brain-Derived Neurotrophic Factor) e neurogenesi ippocampale',
      'Stabilizzazione dell’umore e attenuazione della reattività emotiva allo stress cronico',
      'Protezione dei telomeri cerebrali e longevità cognitiva'
    ],
    recommendedDosage: '1 - 5 mg di litio elementare/giorno (Microdose)',
    bestForms: ['Litio orotato puro in capsule'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a cena o prima di dormire con un bicchiere d’acqua abbondante.',
      avoidTimes: 'Non assumere in gravidanza o in caso di grave insufficienza renale.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'A microdosaggi nutrizionali (1-5mg) non presenta tossicità epatica né renale; viene eliminato per via renale.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Consigliati cicli di 8 settimane intervallati da 2 settimane di sospensione.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-l-treonato',
        targetSupplementName: 'Magnesio L-Treonato',
        synergyType: 'potenziamento',
        description: 'Potente duo sinergico per neuroplasticità e protezione della sinaptogenesi.',
        mechanism: 'Azione coordinata su recettori NMDA, GSK-3beta e densità delle spine dendritiche.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'focus', 'longevita']
  },
  {
    id: 'solfato-di-vanadile',
    name: 'Solfato di Vanadile',
    scientificName: 'Vanadile Solfato Idrossido',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Insulino-mimetico cellulare, stoccaggio del glicogeno muscolare e vascolarizzazione',
    description: 'Composto inorganico del vanadio con comprovata azione insulino-mimetica. Attiva le tirosin-chinasi dei recettori cellulari senza stimolare la secrezione pancreatica di insulina, veicolando glucosio e aminoacidi nei muscoli.',
    primaryBenefits: [
      'Aumento dell’uptake cellulare di glucosio nel muscolo scheletrico (volumizzazione)',
      'Miglioramento del recupero post-workout e ripristino delle scorte di glicogeno',
      'Riduzione della glicemia basale e supporto all’efficienza metabolica',
      'Sensazione di pienezza muscolare costante durante sforzi anaerobici'
    ],
    recommendedDosage: '10 - 25 mg/giorno',
    bestForms: ['Solfato di vanadile puro'],
    timing: {
      idealTimes: ['post_allenamento', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere immediatamente con il pasto post-workout ricco di carboidrati complessi e proteine.',
      avoidTimes: 'Evitare a stomaco vuoto per possibile insorgenza di crampi gastrici o ipoglicemia.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Il vanadio può accumularsi nel tessuto epatico e renale se assunto a dosi elevate per periodi non controllati.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 4,
        description: 'Rigoroso protocollo ciclico: massimo 4 settimane di uso continuo seguite da 4 settimane di stop completo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'creatina-monoidrato',
        targetSupplementName: 'Creatina Monoidrato',
        synergyType: 'assorbimento',
        description: 'Massimizza la captazione di creatina e nutrienti all’interno della fibra muscolare.',
        mechanism: 'L’effetto insulino-mimetico stimola i cotrasportatori sodio-creatina sarcolammici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['recupero_sport', 'energia']
  },
  {
    id: 'calcio-citrato',
    name: 'Calcio Citrato',
    scientificName: 'Sale di Calcio dell’Acido Citrico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Forma di calcio a elevata solubilità, non necessita di acido gastrico',
    description: 'A differenza del calcio carbonato, il citrato si dissolve agevolmente anche in presenza di ipocloridria o con l’uso di farmaci gastroprotettori (IPP), riducendo al minimo il rischio di costipazione e formazione di calcoli.',
    primaryBenefits: [
      'Mantenimento della densità minerale ossea (prevenzione osteopenia)',
      'Supporto alla contrazione muscolare e alla coagulazione sanguigna',
      'Trasmissione sinaptica e rilascio di neurotrasmettitori',
      'Ottima tollerabilità gastrica negli over 50'
    ],
    recommendedDosage: '400 - 600 mg di calcio elementare/giorno (da frazionare)',
    bestForms: ['Calcio citrato puro', 'Idrossiapatite microcristallina'],
    timing: {
      idealTimes: ['pranzo'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere a pranzo. Non superare i 500 mg di calcio elementare per singola somministrazione per saturazione dei recettori.',
      avoidTimes: 'Non assumere contemporaneamente a ferro, zinco o magnesio.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Sicuro per il fegato. Attenzione ai dosaggi sistemici per prevenire calcificazioni ectopiche vascolari.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa se l’apporto alimentare di latticini o acque calciche è insufficiente.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-d3',
        targetSupplementName: 'Vitamina D3',
        synergyType: 'assorbimento',
        description: 'La Vitamina D3 stimola la sintesi della calbindina, proteina carrier che trasporta il calcio attraverso l’enterocita.',
        mechanism: 'Senza Vitamina D viene assorbito solo il 10-15% del calcio introdotto.'
      },
      {
        targetSupplementId: 'vitamina-k2',
        targetSupplementName: 'Vitamina K2 (MK-7)',
        synergyType: 'protezione',
        description: 'La K2 impedisce al calcio di depositarsi nelle pareti delle arterie e nei reni, veicolandolo nell’idrossiapatite ossea.',
        mechanism: 'Attivazione carbossilativa di Osteocalcina e Matrix Gla Protein (MGP).'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'critico',
        reason: 'Il calcio blocca il passaggio del ferro attraverso la membrana basolaterale enterocitaria.',
        recommendation: 'Spaziare di almeno 4 ore.'
      },
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio',
        severity: 'alto',
        reason: 'Competizione diretta per i canali ionici cellulari.',
        recommendation: 'Calcio a pranzo, magnesio alla sera.'
      }
    ],
    targetGoals: ['articolazioni', 'longevita']
  },
  {
    id: 'calcio-mcha',
    name: 'Calcio Idrossiapatite Microcristallina (MCHA)',
    scientificName: 'Microcrystalline Hydroxyapatite Complex',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Matrice minerale ossea bioidentica con collagene di tipo I e fattori di crescita',
    description: 'Complesso naturale derivato da osso bovino neozelandese da pascolo che replica esattamente la composizione chimica dell’osso umano (rapporto fisiologico 2:1 calcio-fosforo con matrice peptidica di collagene e osteocalcina).',
    primaryBenefits: [
      'Rimineralizzazione ossea attiva superiore rispetto a qualunque sale di calcio isolato',
      'Preservazione della microarchitettura e resistenza meccanica trabecolare',
      'Assorbimento fisiologico lento che non provoca picchi calcemici ematici bruschi',
      'Fornitura simultanea di oligoelementi ossei (boro, silicio, zinco)'
    ],
    recommendedDosage: '500 - 1.000 mg di MCHA (fornisce circa 250-500 mg calcio elementare)',
    bestForms: ['Estratto MCHA certificato esente da BSE/metalli pesanti'],
    timing: {
      idealTimes: ['pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il pasto principale.',
      avoidTimes: 'Evitare contemporaneamente a ferro o antibiotici tetracicline/chinoloni.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Composto fisiologico bioidentico ben metabolizzato.',
      cycleProtocol: {
        required: false,
        description: 'Uso raccomandato per cicli di 6-12 mesi in osteopenia conclamata.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-k2',
        targetSupplementName: 'Vitamina K2 (MK-7)',
        synergyType: 'attivazione',
        description: 'La K2 attiva la matrice proteica di osteocalcina contenuta nell’idrossiapatite ossea.',
        mechanism: 'Carbossilazione enzimatica dei residui di glutammato osseo.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'critico',
        reason: 'Inibizione massiva dell’assorbimento di ferro non-eme.',
        recommendation: 'Assumere a distanza di 4 ore.'
      }
    ],
    targetGoals: ['articolazioni', 'longevita']
  },
  {
    id: 'zinco-monometionina',
    name: 'Zinco Monometionina (OptiZinc)',
    scientificName: 'Complesso 1:1 di Zinco e L-Metionina',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Massimo assorbimento anche in presenza di fitati e fibre vegetali',
    description: 'OptiZinc lega lo zinco con l’aminoacido metionina. A differenza dei sali inorganici, non si lega ai fitati o alle fibre della crusca o dei legumi, rendendolo ideale per vegetariani e vegani.',
    primaryBenefits: [
      'Resistenza all’inibizione esercitata da cereali integrali, legumi e fibre',
      'Potente azione antiossidante e protezione della retina oculare',
      'Sostegno alla barriera cutanea e stimolazione della sintesi proteica muscolare',
      'Minore incidenza di fastidio gastrico rispetto al solfato'
    ],
    recommendedDosage: '15 - 30 mg di zinco elementare/giorno',
    bestForms: ['OptiZinc brevettato (Zinco-L-Metionina pura)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il pranzo o la cena.',
      avoidTimes: 'Evitare l’assunzione a stomaco completamente vuoto.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La metionina funge da donatore di metili e precursore del glutatione epatico.',
      cycleProtocol: {
        required: false,
        description: 'Se utilizzato oltre le 8 settimane a dosi piene (>25mg), abbinare 1 mg di rame in orario separato.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-a-retinolo',
        targetSupplementName: 'Vitamina A',
        synergyType: 'attivazione',
        description: 'Lo zinco è il cofattore della proteina che lega e trasporta il retinolo (RBP) dal fegato ai tessuti periferici.',
        mechanism: 'Senza zinco la vitamina A rimane bloccata nei depositi epatici.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'rame-bisglicinato',
        targetSupplementName: 'Rame',
        severity: 'alto',
        reason: 'Competizione enterica mediata da metallotioneina.',
        recommendation: 'Spaziare di 4-6 ore.'
      }
    ],
    targetGoals: ['immunita', 'energia', 'longevita']
  },
  {
    id: 'ferro-sucrosomiale',
    name: 'Ferro Sucrosomiale (Sideral)',
    scientificName: 'Pirofosfato Ferrico Avvolto in Matrice Sucrosomiale di Fosfolipidi e Sucroesteri',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Bypassa l’assorbimento classico DMT-1, assorbito per endocitosi con zero disturbi gastrici',
    description: 'Tecnologia farmaceutica innovativa italiana in cui il ferro pirofosfato è racchiuso in una sfera sucrosomiale costituita da fosfolipidi e sucroesteri di acidi grassi. Bypassa totalmente l’acido gastrico e il trasportatore DMT-1 duodenale, venendo assorbito per endocitosi tramite le cellule M intestinali.',
    primaryBenefits: [
      'Biodisponibilità clinicamente paragonabile al ferro per via endovenosa senza effetti collaterali',
      'Assenza totale di nausea gastrica, feci nere, bruciore o stitichezza',
      'Assorbibile anche in presenza di cibo, caffè, tè, calcio e farmaci antiacidi gastroprotettori',
      'Rapida risalita di ferritina ed emoglobina nelle anemie resistenti al ferro solfato'
    ],
    recommendedDosage: '14 - 30 mg di ferro elementare/giorno (1 capsula di Sideral Forte)',
    bestForms: ['Sideral brevettato puro con tecnologia Sucrosomiale'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pranzo'],
      mealRequirement: 'indifferente',
      instructions: 'Può essere assunto a qualunque orario, con o senza cibo, anche contestualmente al caffè o latte.',
      avoidTimes: 'Nessun vincolo alimentare grazie alla membrana sucrosomiale protettiva.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Il ferro sucrosomiale viene captato intatto dal sistema reticolo-endoteliale e rilasciato fisiologicamente nel fegato senza liberare ioni ferro liberi pro-ossidanti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 4,
        description: 'Monitorare ferritina ed emocromo ogni 60-90 giorni.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'Supporto sinergico all’eritropoiesi midollare.',
        mechanism: 'Stimolo congiunto alla sintesi dell’eme.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'longevita']
  },
  {
    id: 'iodio-lugol',
    name: 'Iodio / Ioduro di Potassio (Soluzione Lugol)',
    scientificName: 'Miscela 1:2 di Iodio Elementare (I2) e Ioduro di Potassio (KI)',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Doppia forma ionica e molecolare per tiroide, tessuto mammario e prostata',
    description: 'La storica formulazione del Dr. Jean Lugol del 1829. Fornisce sia lo ioduro (KI, captato specificamente dalla ghiandola tiroidea) sia lo iodio molecolare (I2, captato prioritariamente dal tessuto mammario femminile, ovaie e prostata).',
    primaryBenefits: [
      'Risoluzione e prevenzione della mastopatia fibrocistica e dolore mammario femminile',
      'Saturazione fisiologica dei tireociti prevenendo la captazione di alogeni tossici (cloro, bromo, fluoro)',
      'Azione antisettica e mucolitica sistemica naturale',
      'Sostegno al metabolismo basale e alla temperatura corporea'
    ],
    recommendedDosage: '1 - 2 gocce di soluzione al 2% o 5% disciolte in un bicchiere d’acqua (o 150-300 mcg in microdose)',
    bestForms: ['Soluzione Lugol pura grado USP farmaceutico'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Diluire le gocce in un bicchiere d’acqua o succo al mattino. Non assumere mai la soluzione concentrata non diluita.',
      avoidTimes: 'Evitare la sera per non disturbare il sonno. Controindicata nell’ipertiroidismo e morbo di Basedow.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzato principalmente dalla tiroide ed escreto dai reni.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Consigliati cicli di 8 settimane intervallati da 2 settimane di stop; monitorare TSH, FT3 e FT4.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'seleniometionina',
        targetSupplementName: 'Seleniometionina (Selenio)',
        synergyType: 'attivazione',
        description: 'ABBINAMENTO IMPRESCINDIBILE: mai assumere iodio ad alte dosi senza adeguato selenio.',
        mechanism: 'Il selenio previene la tireoidite ossidativa scudo contro l’H2O2 generata dalla perossidasi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'magnesio-orotato',
    name: 'Magnesio Orotato',
    scientificName: 'Sale di Magnesio dell’Acido Orotico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Cardioprotezione clinica avanzata, sintesi di pirimidine e ipertrofia cardiaca',
    description: 'Il magnesio chelato con acido orotico (un precursore pirimidinico necessario per la biosintesi di RNA e DNA cellulare). Penetra con estrema facilità attraverso le membrane dei cardiomiociti, migliorando la tolleranza all’ischemia e la contrattilità cardiaca.',
    primaryBenefits: [
      'Miglioramento documentato della frazione di eiezione e della capacità funzionale cardiaca',
      'Riduzione di extrasistoli, aritmie e palpitazioni da ipomagnesiemia cardiaca',
      'Aumento della sintesi di glicogeno e composti fosforati ad alta energia nel miocardio',
      'Ottima tollerabilità gastrica con assorbimento tissutale superiore'
    ],
    recommendedDosage: '500 - 1.500 mg di magnesio orotato (fornisce 32-100 mg di magnesio elementare purissimo cardiotropo)',
    bestForms: ['Magnesio orotato puro farmaceutico (Magnerot equivalente)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’acido orotico sostiene la rigenerazione degli epatociti e la sintesi di nucleotidi epatici.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro, ideale negli sportivi di endurance e nei cardiopatici.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'La coppia d’oro per il muscolo cardiaco (protocollo di cardiologia metabolica del Dr. Sinatra).',
        mechanism: 'Rifornimento simultaneo di magnesio intracellulare e navette elettroniche ATP.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita', 'recupero_sport']
  },
  {
    id: 'calcio-pidolato',
    name: 'Calcio Pidolato (Piroglutammato)',
    scientificName: 'Sale di Calcio dell’Acido L-Piroglutammico',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Trasporto cellulare accelerato, densità ossea rapida ed eccellente tollerabilità',
    description: 'Il calcio è legato all’acido piroglutammico (pidolato), una molecola endogena fisiologica presente nel liquido extracellulare. Questa conformazione facilita l’attraversamento trans-cellulare attivo, rendendo il calcio disponibile per le ossa in tempi dimezzati rispetto al carbonato.',
    primaryBenefits: [
      'Rapido incremento della densità minerale ossea (Brimex/Calcio Pidolato)',
      'Massima tollerabilità gastrointestinale (nessun gonfiore, stipsi o meteorismo)',
      'Biodisponibilità indipendente dal livello di acidità gastrica',
      'Supporto rapido alla rimarginazione delle fratture ossee'
    ],
    recommendedDosage: '500 - 1.000 mg di calcio pidolato (fornisce 70-140 mg di calcio elementare ad alta cessione)',
    bestForms: ['Flaconcini bevibili o bustine idrosolubili di calcio pidolato puro'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere preferibilmente durante o dopo i pasti.',
      avoidTimes: 'Non assumere nello stesso orario in cui si assume ferro.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'L’acido piroglutammico è un intermedio naturale del ciclo gamma-glutamilico epatico del glutatione.',
      cycleProtocol: {
        required: false,
        description: 'Cicli da 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-d3',
        targetSupplementName: 'Vitamina D3',
        synergyType: 'assorbimento',
        description: 'La D3 massimizza l’incorporazione del pidolato di calcio nelle trabecole ossee.',
        mechanism: 'Stimolazione della calbindina enterocitaria.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        severity: 'alto',
        reason: 'Competizione cationica intestinale.',
        recommendation: 'Spaziare di 3 ore.'
      }
    ],
    targetGoals: ['articolazioni', 'longevita']
  },
  {
    id: 'germanio-organico-ge132',
    name: 'Germanio Organico (Ge-132)',
    scientificName: 'Bis-Carbossietil Germanio Sesquiossido (Ge-132)',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Ossigenazione cellulare, produzione di interferone-gamma e supporto oncologico naturale',
    description: 'Sintetizzato dal Dr. Kazuhiko Asai in Giappone. La sua conformazione molecolare organica racchiude ponti di ossigeno che donano atomi di ossigeno ai tessuti in condizioni di ipossia, stimolando la produzione naturale di interferone gamma e macrofagi.',
    primaryBenefits: [
      'Aumento dell’efficienza nell’utilizzo dell’ossigeno cellulare in condizioni di ipossia tissutale',
      'Potente induzione della produzione di interferone-gamma naturale ed attivazione dei linfociti T',
      'Proprietà antiossidanti contro i radicali liberi e protezione da radiazioni',
      'Regolazione del potenziale elettrico di membrana cellulare'
    ],
    recommendedDosage: '50 - 150 mg/giorno',
    bestForms: ['Ge-132 originale organico sesquiossido puro certificato (MAI germanio inorganico/diossido tossico!)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino a stomaco vuoto con acqua.',
      avoidTimes: 'ATTENZIONE: Assicurarsi rigorosamente che si tratti della forma ORGANICA (Ge-132). Il germanio inorganico (diossido di germanio) è nefrotossico!'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'La forma organica Ge-132 è priva di tossicità ed escreta intatta per via renale entro 24-48 ore.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6 settimane seguiti da 2 settimane di riposo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'reishi',
        targetSupplementName: 'Reishi',
        synergyType: 'potenziamento',
        description: 'Il Reishi selvatico è una delle fonti naturali più ricche di tracce di germanio organico.',
        mechanism: 'Sinergia micoterapica e minerale sull’immunità cellulo-mediata.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita', 'energia']
  },
  {
    id: 'selenito-di-sodio',
    name: 'Selenito di Sodio (Forma Inorganica)',
    scientificName: 'Sale Disodico dell’Acido Selenioso (Na2SeO3)',
    category: 'minerali',
    categoryLabel: 'Minerali',
    shortTagline: 'Forma inorganica rapida per glutatione perossidasi, non si accumula nei tessuti come la metionina',
    description: 'A differenza della seleniometionina (che viene incorporata genericamente nelle proteine strutturali muscolari al posto della metionina), il selenito di sodio inorganico viene utilizzato DIRETTAMENTE ed ESCLUSIVAMENTE per la sintesi delle selenoproteine ed enzimi GPx, venendo prontamente eliminato l’eccesso.',
    primaryBenefits: [
      'Incorporazione selettiva immediata nella glutatione perossidasi (GPx) senza sequestro muscolare',
      'Prevenzione dell’accumulo aspecifico nei tessuti a lungo termine',
      'Protezione cellulare rapida contro agenti ossidanti acuti e chemioterapici',
      'Sostegno alla funzionalità tiroidea'
    ],
    recommendedDosage: '100 - 200 mcg/giorno di selenio elementare',
    bestForms: ['Selenito di sodio in soluzione acquosa o compresse gastroresistenti'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a digiuno al mattino.',
      avoidTimes: 'Non assumere nello stesso momento in cui si assume Vitamina C ad alte dosi (la Vitamina C riduce chimicamente il selenito in selenio elementare insolubile non assorbibile!).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Sintetizza direttamente la selenoproteina P epatica protettiva.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 4,
        description: 'Cicli da 8 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-e-tocoferoli',
        targetSupplementName: 'Vitamina E',
        synergyType: 'potenziamento',
        description: 'La sinergia antiossidante membrana-citosol.',
        mechanism: 'Protezione congiunta della catena lipidica e citoplasmatica.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C ad alto dosaggio',
        severity: 'alto',
        reason: 'La vitamina C riduce chimicamente il selenito a selenio metallico inerte nel tubo digerente.',
        recommendation: 'Spaziare di almeno 2 ore.'
      }
    ],
    targetGoals: ['immunita', 'longevita']
  }
];

