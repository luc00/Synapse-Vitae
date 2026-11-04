import { Supplement } from '../../types/supplement';

export const VITAMINS_DATA: Supplement[] = [
  {
    id: 'vitamina-d3',
    name: 'Vitamina D3',
    scientificName: 'Colecalciferolo',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Ormone fondamentale per sistema immunitario, densità ossea e umore',
    description: 'La Vitamina D3 agisce nell’organismo come un pro-ormone steroideo, regolando l’espressione di oltre 1000 geni. È indispensabile per l’assorbimento intestinale del calcio e la funzione linfocitaria.',
    primaryBenefits: [
      'Regolazione ottimale del sistema immunitario innato e adattivo',
      'Assorbimento e omeostasi ematica del calcio',
      'Modulazione dell’umore e prevenzione dei cali stagionali (SAD)',
      'Sintesi e supporto della salute ormonale'
    ],
    recommendedDosage: '2.000 - 5.000 UI/giorno (monitorare 25(OH)D ematico)',
    bestForms: ['Colecalciferolo liquido in olio EVO o MCT', 'Gocce o softgel liposolubili'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere sempre con un pasto contenente grassi sani (uova, avocado, olio EVO) per massimizzare la biodisponibilità fino al 50% in più.',
      avoidTimes: 'Evitare la tarda sera: può interferire con la produzione fisiologica di melatonina.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Subisce una prima idrossilazione epatica in 25-idrossivitamina D. A dosaggi normali è sicura; dosi massicce non monitorate (>40.000 UI per mesi) possono causare ipercalcemia.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa nei mesi invernali (ottobre-aprile). Può essere ridotta o sospesa in estate se vi è esposizione solare diretta prolungata.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-k2',
        targetSupplementName: 'Vitamina K2 (MK-7)',
        synergyType: 'attivazione',
        description: 'La K2 indirizza il calcio nelle ossa e denti, impedendo la calcificazione arteriosa innescata dalla D3.',
        mechanism: 'La D3 stimola la sintesi di osteocalcina e MGP, ma è la K2 ad attivarle tramite carbossilazione.'
      },
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'attivazione',
        description: 'Il magnesio è il cofattore enzimatico indispensabile per convertire la D3 nella sua forma attiva 1,25(OH)2D.',
        mechanism: 'Tutti gli enzimi che metabolizzano la vitamina D richiedono magnesio; senza magnesio la D rimane inerte.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'cortisonici-o-sequestranti',
        targetSupplementName: 'Fibre sequestranti / Orlistat',
        severity: 'moderato',
        reason: 'Le resine leganti i grassi riducono drasticamente l’assorbimento intestinale delle vitamine liposolubili.',
        recommendation: 'Assumere a distanza di almeno 4 ore.'
      }
    ],
    targetGoals: ['immunita', 'articolazioni', 'umore_ansia', 'longevita']
  },
  {
    id: 'vitamina-k2',
    name: 'Vitamina K2',
    scientificName: 'Menachinone-7 (MK-7)',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Navigatore del calcio verso ossa e denti, protettore delle arterie',
    description: 'La Vitamina K2 nella forma MK-7 a lunga emivita carbossila la matrice Gla-protein (MGP) e l’osteocalcina, canalizzando il calcio nel tessuto osseo e prevenendone la deposizione nelle pareti arteriose.',
    primaryBenefits: [
      'Prevenzione della calcificazione arteriosa e rigidità vascolare',
      'Fissazione e mineralizzazione dell’osso',
      'Supporto della microcircolazione e salute cardiovascolare',
      'Sinergia biologica essenziale con la vitamina D3'
    ],
    recommendedDosage: '100 - 200 mcg/giorno',
    bestForms: ['Trans-Menachinone MK-7 da fermentazione naturale natto o biofermentato puro'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere insieme alla Vitamina D3 nello stesso pasto principale ricco di lipidi.',
      avoidTimes: 'Nessun orario negativo specifico, ideale di giorno con i pasti.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Molto sicura a livello epatico. Attenzione solo a chi assume anticoagulanti antagonisti della vitamina K (Warfarin/Coumadin).',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo insieme alla Vitamina D3.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-d3',
        targetSupplementName: 'Vitamina D3',
        synergyType: 'attivazione',
        description: 'Coppia biologica indissociabile per l’omeostasi del calcio.',
        mechanism: 'Previene il deposito ectopico di calcio nei vasi sanguigni stimolato dall’aumentato assorbimento da D3.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'anticoagulanti-warfarin',
        targetSupplementName: 'Anticoagulanti orali (Warfarin / Coumadin)',
        severity: 'critico',
        reason: 'La Vitamina K annulla direttamente l’effetto fluidificante del farmaco antivitamina-K, aumentando il rischio trombotico.',
        recommendation: 'Assoluto divieto di integrazione autonoma senza supervisione ematologica.'
      }
    ],
    targetGoals: ['salute_cuore', 'articolazioni', 'longevita']
  },
  {
    id: 'vitamina-c',
    name: 'Vitamina C',
    scientificName: 'Acido L-ascorbico / Ascorbato di sodio',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Antiossidante idrosolubile universale, sintesi del collagene e immunità',
    description: 'Cofattore per le prolil e lisil idrossilasi indispensabili per la tripla elica del collagene. Svolge azione antiossidante intracellulare, rigenera la vitamina E ossidata e potenzia i neutrofili e macrofagi.',
    primaryBenefits: [
      'Idrossilazione della prolina per la sintesi del collagene cutaneo e vascolare',
      'Potenziamento della fagocitosi e chemiotassi dei globuli bianchi',
      'Triplicazione dell’assorbimento intestinale del ferro non-eme',
      'Rigenerazione di altri antiossidanti (Vitamina E, Glutatione)'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno (frazionata in 2 dosi per saturazione dei trasportatori SVCT)',
    bestForms: ['Vitamina C Liposomiale', 'Ascorbato di sodio / Magnesio ascorbato (tamponata, non acida)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pranzo'],
      mealRequirement: 'indifferente',
      instructions: 'Frazionare in dosi da 500mg due volte al giorno; a dosi superiori a 1g in singola assunzione gran parte viene escreta con le urine.',
      avoidTimes: 'Evitare alte dosi la sera se sensibili (può dare lieve energia).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Sostegno antiossidante per gli epatociti. Protegge il fegato dall’ossidazione e rigenera il glutatione.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro. Soggetti con tendenza a calcoli renali da ossalato devono rimanere sotto 1g/giorno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro',
        synergyType: 'assorbimento',
        description: 'Aumenta l’assorbimento enterico del ferro fino a 3-4 volte.',
        mechanism: 'Mantiene il ferro nello stato ferroso solubile Fe2+.'
      },
      {
        targetSupplementId: 'collagene-idrolizzato',
        targetSupplementName: 'Collagene Idrolizzato',
        synergyType: 'attivazione',
        description: 'Cofattore obbligato per assemblare il collagene nei tessuti connettivi.',
        mechanism: 'Attivazione delle idrossilasi necessarie per la stabilità delle fibre di tropocollagene.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'articolazioni', 'longevita', 'energia']
  },
  {
    id: 'complesso-vitamine-b',
    name: 'Complesso Vitamine B Metilato',
    scientificName: 'B-Complex attivo (B1, B2, B3, B5, B6 P-5-P, Folato 5-MTHF, B12)',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Metabolismo energetico cellulare, ciclo della metilazione e sistema nervoso',
    description: 'Le vitamine del gruppo B sono i coenzimi della glicolisi e del ciclo di Krebs per convertire cibo in ATP, e guidano il ciclo della metilazione regolando i livelli tossici di omocisteina nel sangue.',
    primaryBenefits: [
      'Conversione efficiente dei macronutrienti in energia mitocondriale ATP',
      'Abbattimento dell’omocisteina ematica e protezione vascolare',
      'Sintesi di mielina, neurotrasmettitori (serotonina, dopamina, GABA)',
      'Supporto per chi possiede mutazioni genetiche MTHFR (grazie al metilfolato)'
    ],
    recommendedDosage: '1 capsula al giorno di complesso metilato bilanciato',
    bestForms: ['Forme bioattive: Piridossal-5-fosfato (B6), Metilcobalamina (B12), L-Metilfolato 5-MTHF (B9)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere sempre al mattino o a pranzo con cibo. Non assumere la sera: essendo energizzanti possono causare insonnia o sogni vividi.',
      avoidTimes: 'Evitare rigorosamente dopo le 17:00.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Essendo idrosolubili, gli eccessi vengono prontamente escreti con le urine. Attenzione solo a forme non attive di B6 (piridossina HCL) che ad altissime dosi croniche possono dare neuropatia.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo o a cicli di 3 mesi nei cambi di stagione.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'Potenziamento completo del ciclo energetico mitocondriale.',
        mechanism: 'Le vitamine B generano NADH/FADH2 che alimentano la catena di trasporto degli elettroni gestita da CoQ10.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'salute_cuore', 'focus_memoria', 'umore_ansia']
  },
  {
    id: 'vitamina-a-retinolo',
    name: 'Vitamina A (Retinolo & Carotenoidi)',
    scientificName: 'Retinil palmitato / Beta-carotene',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Differenziazione cellulare epiteliale, rodopsina visiva e immunità mucosale',
    description: 'La Vitamina A preformata è indispensabile per la rigenerazione della rodopsina retinica nella visione crepuscolare e per il mantenimento dell’integrità delle barriere mucosali (polmonari, intestinali e oculari).',
    primaryBenefits: [
      'Rigenerazione del pigmento visivo e prevenzione della secchezza oculare',
      'Differenziazione dei cheratinociti e guarigione cutanea',
      'Integrità immunitaria delle barriere epiteliali e mucose'
    ],
    recommendedDosage: '3.000 - 5.000 UI/giorno (massimo 10.000 UI da fonti preformate)',
    bestForms: ['Retinil palmitato in matrice oleosa', 'Complesso misto di Carotenoidi naturali'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Liposolubile: richiede grassi alimentari nel pasto per l’incorporazione nei chilomicroni.',
      avoidTimes: 'Evitare megadosi croniche non monitorate.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'ATTENZIONE ACCUMULO EPATICO: Il fegato immagazzina oltre l’80% della Vitamina A nelle cellule stellate (di Ito). Dosi superiori a 25.000 UI/die per mesi possono saturare la capacità di stoccaggio e innescare ipervitaminosi A e fibrosi epatica.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 4,
        description: 'Cicli di 8 settimane seguiti da 4 settimane di stop per dosi superiori a 5.000 UI.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco',
        synergyType: 'attivazione',
        description: 'Lo zinco è essenziale per sintetizzare la proteina di trasporto RBP che mobilita la vitamina A dal fegato.',
        mechanism: 'Cofattore per l’alcol deidrogenasi e per la proteina legante il retinolo (RBP).'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'farmaci-retinoidi-acne',
        targetSupplementName: 'Farmaci antiacneici retinoidi (Isotretinoina)',
        severity: 'critico',
        reason: 'Rischio di tossicità sistemica acuta ed epatotossicità grave per sovrapposizione recettoriale.',
        recommendation: 'Divieto assoluto di integrazione se in cura con isotretinoina.'
      }
    ],
    targetGoals: ['immunita', 'articolazioni', 'longevita']
  },
  {
    id: 'vitamina-e-tocoferoli',
    name: 'Vitamina E Completa (Tocotrienoli & Tocoferoli)',
    scientificName: 'D-alfa, beta, gamma, delta tocoferoli & tocotrienoli',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Antiossidante lipofilo sovrano delle membrane cellulari e vasi',
    description: 'La Vitamina E interrompe la reazione a catena della perossidazione lipidica nelle membrane cellulari e protegge le lipoproteine LDL dall’ossidazione aterogena. La miscela completa a 8 isomeri supera di gran lunga l’alfa-tocoferolo sintetico.',
    primaryBenefits: [
      'Protezione totale dei fosfolipidi di membrana dallo stress ossidativo',
      'Inibizione dell’ossidazione delle particelle LDL (prevenzione placche aterosclerotiche)',
      'Miglioramento della fluidità microvascolare e trofismo cutaneo'
    ],
    recommendedDosage: '200 - 400 UI di tocoferoli e tocotrienoli misti',
    bestForms: ['Tocomin / EVNol SupraBio tocotrienoli a spettro completo da olio di palma vergine sostenibile'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere con il pasto principale ricco di lipidi sani.',
      avoidTimes: 'Evitare contemporaneamente a farmaci anticoagulanti senza supervisione medica.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'A dosi fisiologiche (400 UI) riduce l’infiammazione e la fibrosi epatica nella steatoepatite non alcolica (NASH).',
      cycleProtocol: {
        required: false,
        description: 'Uso sicuro continuo per 3 mesi, con 2 settimane di pausa prima di ripetere.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'attivazione',
        description: 'La Vitamina C dona un elettrone al radicale tocoferile ossidato, rigenerando la Vitamina E attiva.',
        mechanism: 'Ciclo antiossidante redox intermembrana idro-lipofilo.'
      },
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'Doppia protezione anti-perossidativa per le membrane dei mitocondri.',
        mechanism: 'Azione coordinata contro i radicali perossidici lipidici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['salute_cuore', 'longevita', 'fegato_detox']
  },
  {
    id: 'benfotiamina-b1',
    name: 'Benfotiamina (Vitamina B1 Liposolubile)',
    scientificName: 'S-benzoylthiamine O-monophosphate',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Forma liposolubile di tiamina: scudo contro la glicazione (AGE) e neuropatia',
    description: 'La Benfotiamina attraversa le membrane cellulari con una biodisponibilità fino a 5 volte superiore rispetto alla tiamina cloridrato. Attiva l’enzima transchetolasi, deviando i prodotti intermedi tossici del glucosio e prevenendo i danni da glicazione a vasi, reni e nervi.',
    primaryBenefits: [
      'Blocco della formazione di composti di glicazione avanzata (AGE)',
      'Protezione dei nervi periferici e sollievo dalla neuropatia diabetica',
      'Supporto del metabolismo glucidico e della funzione endoteliale'
    ],
    recommendedDosage: '150 - 300 mg/giorno',
    bestForms: ['Benfotiamina pura standardizzata'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con il pasto contenente carboidrati.',
      avoidTimes: 'Evitare la sera inoltrata.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Molto sicura, non affatica la funzione epatica.',
      cycleProtocol: {
        required: false,
        description: 'Cicli di 12 settimane con 2 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acido-alfa-lipoico',
        targetSupplementName: 'Acido Alfa Lipoico (ALA)',
        synergyType: 'potenziamento',
        description: 'La coppia d’oro neurologica per proteggere le guaine nervose dai danni glicometabolici.',
        mechanism: 'Attivazione della transchetolasi congiunta alla rigenerazione antiossidante intra-assonale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['salute_cuore', 'longevita', 'focus_memoria']
  },
  {
    id: 'metilfolato-b9',
    name: 'L-Metilfolato (Folato Attivo 5-MTHF)',
    scientificName: 'Levomefolate calcium / (6S)-5-methyltetrahydrofolate',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Forma biologicamente attiva del folato per metilazione, DNA e omocisteina',
    description: 'Il 5-MTHF non necessita della conversione da parte dell’enzima MTHFR (spesso deficitario in individui con polimorfismo genetico C677T). Cede direttamente il gruppo metile per convertire l’omocisteina tossica in metionina.',
    primaryBenefits: [
      'Normalizzazione rapida dei livelli ematici di omocisteina vasotossica',
      'Sintesi corretta delle basi puriniche e pirimidiniche del DNA cellulare',
      'Supporto fondamentale durante la gravidanza e la chiusura del tubo neurale',
      'Sintesi delle monoammine cerebrali (dopamina, serotonina)'
    ],
    recommendedDosage: '400 - 800 mcg/giorno (fino a 1.000 mcg su prescrizione)',
    bestForms: ['Quatrefolic brevettato (sale di glucosamina del 5-MTHF)'],
    timing: {
      idealTimes: ['colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare l’acido folico sintetico non convertito che può saturare i recettori del folato.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Sostiene il ciclo epatico della metilazione e la produzione di fosfatidilcolina nel fegato.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa sicura.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-b12-metil',
        targetSupplementName: 'Vitamina B12 (Metilcobalamina)',
        synergyType: 'attivazione',
        description: 'Sinergia obbligata del ciclo della metionina sintasi.',
        mechanism: 'Senza B12 il metilfolato rimane intrappolato nella forma 5-MTHF (Methyl-Trap hypothesis).'
      }
    ],
    incompatibilities: [],
    targetGoals: ['salute_cuore', 'umore_ansia', 'longevita']
  },
  {
    id: 'vitamina-b12-metil',
    name: 'Vitamina B12 (Metilcobalamina)',
    scientificName: 'Methylcobalamin & Adenosylcobalamin',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Cofattore per eritropoiesi, mielinizzazione dei nervi ed energia',
    description: 'La metilcobalamina è la forma attiva citoplasmatica che ricicla l’omocisteina, mentre l’adenosilcobalamina è la forma mitocondriale che metabolizza l’acido metilmalonico per l’ATP.',
    primaryBenefits: [
      'Produzione e maturazione dei globuli rossi sani (prevenzione anemia megaloblastica)',
      'Mantenimento dell’integrità delle guaine mieliniche neuronali',
      'Eliminazione della stanchezza cronica e nebbia mentale nei regimi vegetariani/vegani'
    ],
    recommendedDosage: '500 - 1.000 mcg sublinguale al giorno',
    bestForms: ['Metilcobalamina sublinguale o combinata con adenosilcobalamina'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'La compressa sublinguale sciolta sotto la lingua bypassa il fattore intrinseco gastrico garantendo assorbimento diretto transmucosale.',
      avoidTimes: 'Evitare la sera tardi per possibile effetto stimolante.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Il fegato funge da principale riserva naturale di B12 per anni. Totalmente priva di tossicità anche a dosi elevate.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo, essenziale per vegetariani e vegani.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'metilfolato-b9',
        targetSupplementName: 'L-Metilfolato (5-MTHF)',
        synergyType: 'attivazione',
        description: 'Duo maestro per l’abbattimento dell’omocisteina e la replicazione del DNA.',
        mechanism: 'Reazione catalitica accoppiata della metionina sintasi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus_memoria', 'salute_cuore']
  },
  {
    id: 'pqq-pirrolochinolina',
    name: 'PQQ (Pirrolochinolina Chinone)',
    scientificName: 'Pyrroloquinoline quinone disodium salt',
    category: 'vitamine',
    categoryLabel: 'Vitamine & Longevità',
    shortTagline: 'Attivatore della biogenesi mitocondriale: stimola la nascita di nuovi mitocondri',
    description: 'Potente cofattore redox capace di sostenere decine di migliaia di cicli catalitici antiossidanti. Stimola il fattore CREB e il coattivatore trascrizionale PGC-1alfa, innescando la proliferazione e replicazione di nuovi mitocondri all’interno delle cellule senescenti.',
    primaryBenefits: [
      'Biogenesi mitocondriale: generazione di nuovi mitocondri giovani e funzionali',
      'Neuroprotezione profonda e stimolazione della memoria di lavoro',
      'Protezione del miocardio dall’ischemia e stress ossidativo'
    ],
    recommendedDosage: '10 - 20 mg/giorno',
    bestForms: ['BioPQQ da fermentazione naturale brevettata'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino insieme al CoQ10.',
      avoidTimes: 'Evitare nel tardo pomeriggio per non alterare il riposo notturno.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Protegge i mitocondri degli epatociti dall’invecchiamento e dal danno metabolico.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10 (Ubiquinolo)',
        synergyType: 'potenziamento',
        description: 'La celebre sinergia bioenergetica: PQQ crea nuovi mitocondri, CoQ10 ne alimenta l’ATP.',
        mechanism: 'Biogenesi mitocondriale (CREB/PGC-1a) abbinata al trasporto di elettroni respiratorio.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita', 'focus_memoria']
  },
  {
    id: 'biotina-b7',
    name: 'Biotina (Vitamina B7 / B8)',
    scientificName: 'D-Biotin pura',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Carbossilasi metaboliche, cheratinizzazione di capelli, unghie e pelle',
    description: 'Cofattore essenziale per cinque carbossilasi (tra cui la piruvato carbossilasi e l’acetil-CoA carbossilasi) indispensabili per la sintesi degli acidi grassi, gluconeogenesi e produzione della cheratina.',
    primaryBenefits: [
      'Rinforzo strutturale dello stelo dei capelli e spessore della lamina ungueale',
      'Supporto al metabolismo dei lipidi cutanei contro dermatiti seborroiche',
      'Regolazione enzimatica del metabolismo del glucosio'
    ],
    recommendedDosage: '1.000 - 5.000 mcg/giorno',
    bestForms: ['D-Biotina pura bioattiva'],
    timing: {
      idealTimes: ['colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere a colazione. ATTENZIONE: sospendere 48 ore prima degli esami del sangue perché può falsare i test tiroidei (TSH, FT4) e troponina nei saggi a base di streptavidina-biotina.',
      avoidTimes: 'Nessun orario negativo specifico.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Totale assenza di tossicità epatica; l’eccesso idrosolubile viene escreto con le urine.',
      cycleProtocol: {
        required: false,
        description: 'Cicli di 3 mesi per consentire il ciclo di crescita pilifera e ungueale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco',
        synergyType: 'potenziamento',
        description: 'Duo essenziale per contrastare telogen effluvium e debolezza ungueale.',
        mechanism: 'Sintesi coordinata della cheratina e proliferazione del bulbo pilifero.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'energia']
  },
  {
    id: 'myo-inositolo',
    name: 'Myo-Inositolo & D-Chiro-Inositolo',
    scientificName: 'cis-1,2,3,5-trans-4,6-cyclohexanehexol (rapporto 40:1)',
    category: 'vitamine',
    categoryLabel: 'Vitamine & Metabolismo',
    shortTagline: 'Secondo messaggero dell’insulina e TSH: ovaio policistico (PCOS) e glicemia',
    description: 'Spesso definito Vitamina B8, l’inositolo fa parte dei fosfolipidi di membrana e agisce come secondo messaggero per la trasduzione del segnale insulinico. Il rapporto fisiologico 40:1 tra Myo e D-Chiro-Inositolo ripristina l’ovulazione nella PCOS e migliora la sensibilità all’insulina.',
    primaryBenefits: [
      'Riequilibrio ormonale e regolarizzazione del ciclo mestruale nella PCOS',
      'Aumento della sensibilità cellulare all’insulina e controllo glicemico',
      'Miglioramento dell’umore, attacchi di panico e ansia (modulazione serotoninergica)'
    ],
    recommendedDosage: '2.000 - 4.000 mg/giorno in polvere o capsule',
    bestForms: ['Miscela in rapporto fisiologico plasmatico 40:1 (Myo-inositolo 2000mg + D-Chiro 50mg)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere diviso in due dosi da 2g al mattino e alla sera, preferibilmente lontano dal caffè (che può ridurne l’assorbimento).',
      avoidTimes: 'Evitare contemporaneamente a bevande ad alto contenuto di caffeina.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Agisce come fattore lipotropo nel fegato: previene l’accumulo di trigliceridi negli epatociti e contrasta la steatosi epatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa per almeno 3-6 mesi per osservare la regolarizzazione ormonale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'metilfolato-b9',
        targetSupplementName: 'Metilfolato (5-MTHF)',
        synergyType: 'potenziamento',
        description: 'Protocollo gold standard per la fertilità e l’equilibrio ovulatorio nella sindrome dell’ovaio policistico.',
        mechanism: 'Miglioramento congiunto della qualità ovocitaria e dei pathways di segnalazione recettoriale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'fegato_detox', 'salute_cuore']
  },
  {
    id: 'colina-cdp',
    name: 'Citicolina (CDP-Colina Cognizin)',
    scientificName: 'Cytidine 5\'-diphosphocholine',
    category: 'vitamine',
    categoryLabel: 'Vitamine & Nootropi',
    shortTagline: 'Precursore dell’Acetilcolina e sintesi della fosfatidilcolina neuronale',
    description: 'La citicolina dona sia colina per la sintesi del neurotrasmettitore della memoria Acetilcolina, sia citidina (convertita in uridina) per riparare la membrana fosfolipidica dei neuroni. Migliora la velocità di conduzione nervosa e la perfusione cerebrale.',
    primaryBenefits: [
      'Aumento dell’attenzione focalizzata e della velocità di richiamo mnemonico',
      'Riparazione e mantenimento delle membrane cellulari neuronali',
      'Protezione delle cellule gangliari retiniche (supporto nel glaucoma e salute visiva)'
    ],
    recommendedDosage: '250 - 500 mg/giorno',
    bestForms: ['Cognizin CDP-Colina brevettata'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino al risveglio per stimolare la concentrazione diurna.',
      avoidTimes: 'Evitare la sera per scongiurare sogni vividi e difficoltà nell’addormentamento.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La colina è il principale nutriente lipotropo per il fegato: indispensabile per sintetizzare VLDL ed espellere i grassi dagli epatociti. La carenza di colina causa direttamente steatosi epatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa sicura.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'lions-mane',
        targetSupplementName: 'Lion’s Mane',
        synergyType: 'potenziamento',
        description: 'Super-stack per memoria e neuroplasticità sinaptica.',
        mechanism: 'Disponibilità di colina per i terminali assonali stimolati dal fattore NGF.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus_memoria', 'fegato_detox', 'longevita']
  },
  {
    id: 'vitamina-b2-riboflavina',
    name: 'Vitamina B2 (Riboflavina-5-Fosfato)',
    scientificName: 'Riboflavina-5’-Fosfato Monosodico (Forma Coenzimatica Attiva FMN/FAD)',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Cofattore per emicrania, ciclo di Krebs mitocondriale e riciclo del glutatione',
    description: 'La forma coenzimatica attiva della riboflavina, precursore diretto di FAD e FMN. È indispensabile per il funzionamento della glutatione reduttasi e della catena di trasporto degli elettroni mitocondriale nei neuroni e nei miociti.',
    primaryBenefits: [
      'Prevenzione clinica dell’emicrania con aura e cefalea a grappolo (deficit mitocondriale)',
      'Attivazione della glutatione reduttasi che rigenera il glutatione epatico',
      'Cofattore per la conversione della vitamina B6 in P-5-P e del triptofano in niacina',
      'Salute della vista, della cornea e riduzione dell’affaticamento oculare'
    ],
    recommendedDosage: '50 - 400 mg/giorno (400 mg nel protocollo neurologico per l’emicrania)',
    bestForms: ['Riboflavina-5-Fosfato (R-5-P pura idrosolubile)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere al mattino a colazione. Nota innocua: colora le urine di un giallo neon brillante.',
      avoidTimes: 'Evitare la sera per prevenire leggera iperattivazione.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Essenziale per il fegato: senza B2 la glutatione reduttasi non può riciclare il glutatione ossidato.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano continuativo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'Sinergia mitocondriale neurologica per l’azzeramento dell’emicrania.',
        mechanism: 'Ricarica congiunta dei complessi I e II della fosforilazione ossidativa cerebrale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'longevita']
  },
  {
    id: 'vitamina-b3-niacinamide',
    name: 'Vitamina B3 (Niacinamide / Nicotinamide)',
    scientificName: 'Piridina-3-carbossammide (Niacinamide No-Flush)',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Forma no-flush della B3 per sintesi di NAD+, riparazione barriera cutanea e articolazioni',
    description: 'Forma di vitamina B3 che non induce la vasodilatazione cutanea pruriginosa (Flush). È incorporata direttamente nel NAD+ e NADP+, partecipando a oltre 400 reazioni enzimatiche cellulari per la produzione di ATP e la stabilità genomica.',
    primaryBenefits: [
      'Supporto alla biosintesi cellulare di NAD+ e riparazione enzimatica del DNA (PARP)',
      'Rinforzo della barriera lipidica cutanea contro acne, rosacea e iperpigmentazione',
      'Miglioramento della flessibilità articolare nell’osteoartrite senza flush cutaneo',
      'Protezione neuronale contro l’eccitotossicità cerebrale'
    ],
    recommendedDosage: '250 - 500 mg/giorno',
    bestForms: ['Niacinamide pura (senza acido nicotinico libero)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il cibo a colazione o pranzo.',
      avoidTimes: 'Evitare dosi massive (>3.000 mg/die) per prevenire sovraccarico epatico da metilazione.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'A dosaggi nutrizionali normali (<1g) è del tutto sicura; a dosi farmacologiche elevate (>3g) può innalzare reversibilmente gli enzimi epatici.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro fino a 500mg/die.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'tmg-betaina',
        targetSupplementName: 'TMG (Betaina)',
        synergyType: 'protezione',
        description: 'Compensa il consumo di gruppi metilici derivante dal metabolismo epatico della niacinamide.',
        mechanism: 'Previene la deplezione di SAMe epatico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'vitamina-b5-pantotenico',
    name: 'Vitamina B5 (Acido Pantotenico)',
    scientificName: 'D-Pantotenato di Calcio',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Sintesi del Coenzima A (CoA), ormoni steroidei surrenalici e guarigione cutanea',
    description: 'Il componente fondamentale del Coenzima A (CoA), la molecola cardine che governa il metabolismo dei carboidrati, grassi e proteine nel ciclo di Krebs, oltre alla sintesi di acetilcolina, colesterolo e ormoni steroidei surrenalici.',
    primaryBenefits: [
      'Sostegno alla corteccia surrenale nella produzione di ormoni anti-stress (cortisolo fisiologico)',
      'Regolazione della produzione sebacea nei follicoli pilosebacei (trattamento ad alto dosaggio per l’acne cistica)',
      'Accelerazione della proliferazione dei fibroblasti e riparazione delle ferite cutanee',
      'Sostegno alla sintesi di acetilcolina per la lucidità mentale'
    ],
    recommendedDosage: '100 - 500 mg/giorno (fino a 1-2g divisi nei protocolli dermatologici anti-acne)',
    bestForms: ['D-Pantotenato di Calcio purificato'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il Coenzima A è il perno del metabolismo lipidico ed energetico epatico; totally atossica.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano continuativo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-carnitina-tartrato',
        targetSupplementName: 'L-Carnitina',
        synergyType: 'potenziamento',
        description: 'Sinergia perfetta per la beta-ossidazione e combustione dei lipidi.',
        mechanism: 'La carnitina trasporta gli acidi grassi e il CoA li attiva per la degradazione mitocondriale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'vitamina-b6-p5p',
    name: 'Vitamina B6 (Piridossal-5-Fosfato P5P)',
    scientificName: 'Piridossal-5’-Fosfato Monoidrato (Forma Coenzimatica Attiva)',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Forma attiva immediata, sintesi di dopamina/GABA/serotonina e abbattimento omocisteina',
    description: 'La forma coenzimatica biologicamente attiva della B6. A differenza della piridossina cloridrato economica (che deve essere convertita nel fegato e può accumularsi causando neuropatie da tossicità paradossa), il P5P è subito disponibile per oltre 140 enzimi metabolici.',
    primaryBenefits: [
      'Cofattore primario per la decarbossilazione degli aminoacidi in neurotrasmettitori (serotonina, dopamina, GABA)',
      'Regolazione dei livelli di omocisteina attraverso la via della transolfurazione in cisteina',
      'Assoluta sicurezza neurologica (non induce la neuropatia sensoriale periferica tipica della piridossina HCl)',
      'Alleviamento della sindrome premestruale (ritenzione idrica ed irritabilità ormonale)'
    ],
    recommendedDosage: '20 - 50 mg/giorno',
    bestForms: ['Piridossal-5-Fosfato (P-5-P puro certificato)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a colazione o pranzo.',
      avoidTimes: 'Evitare la sera prima di dormire se provoca sogni troppo vividi o iperattività mentale.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Bypassa l’attivazione epatica piridossina-chinasi; non affatica gli epatociti e protegge la via del glutatione.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro fino a 50 mg/die.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'assorbimento',
        description: 'La combinazione sinergica classica per il sistema nervoso e la contrazione muscolare.',
        mechanism: 'Il P5P trasporta il magnesio attraverso la membrana plasmatica cellulare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'energia', 'sonno']
  },
  {
    id: 'vitamina-b8-ip6-inositolo',
    name: 'Inositolo Esafosfato (IP6 / Acido Fitico Purificato)',
    scientificName: 'Mio-Inositolo 1,2,3,4,5,6-Esachis diidrogenofosfato (IP6)',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Antiossidante chelante del ferro in eccesso, cellule NK e protezione renale',
    description: 'Polifosfato naturale derivato dalla crusca di riso purificata. Chela selettivamente il ferro libero in eccesso nei tessuti impedendo la reazione di Fenton, attiva potentemente le cellule Natural Killer e previene la formazione di cristalli di ossalato di calcio nei reni.',
    primaryBenefits: [
      'Chelazione selettiva del ferro redox-attivo libero senza alterare l’emoglobina o la ferritina fisiologica',
      'Attivazione della citotossicità delle cellule Natural Killer (NK) e sorveglianza immunitaria',
      'Inibizione della cristallizzazione e formazione dei calcoli renali di ossalato di calcio',
      'Protezione cellulare e genomica contro i danni da radiazioni e stress ossidativo'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno a digiuno',
    bestForms: ['IP6 purificato da crusca di riso (combinato con Myo-Inositolo puro)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a stomaco vuoto con acqua almeno 45 minuti prima dei pasti.',
      avoidTimes: 'Evitare durante i pasti principali per non inibire l’assorbimento dei minerali alimentari necessari.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Protegge il fegato dal danno da sovraccarico di ferro epatico e steatosi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane intervallati da 2 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'myo-inositolo',
        targetSupplementName: 'Myo-Inositolo',
        synergyType: 'potenziamento',
        description: 'La formula brevettata del Dr. Shamsuddin (IP6 + Inositolo): moltiplica l’effetto immunologico rispetto ai due componenti presi separatamente.',
        mechanism: 'Saturazione dei pool di inositolo fosfato intracellulari (IP1-IP6).'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita']
  },
  {
    id: 'vitamina-k1-fillochinone',
    name: 'Vitamina K1 (Fillochinone)',
    scientificName: 'Fitomenadione / Fillochinone da Foglie Verdi',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Fattori della coagulazione ematica epatica e metabolismo delle proteine Gla epatiche',
    description: 'La forma primaria vegetale della vitamina K presente nelle verdure a foglia scura. A differenza della K2 (che si distribuisce nelle ossa e vasi), la K1 viene captata in modo prioritario dal fegato per carbossilare i fattori di coagulazione sanguigna II, VII, IX e X.',
    primaryBenefits: [
      'Mantenimento della normale emostasi e coagulazione sanguigna',
      'Carbossilazione epatica dei fattori della cascata coagulativa',
      'Supporto complementare alla salute ossea e vascolare',
      'Assorbimento liposolubile enterico'
    ],
    recommendedDosage: '100 - 200 mcg/giorno',
    bestForms: ['Fillochinone naturale purificato in base lipidica'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere ai pasti con lipidi per favorire l’assorbimento.',
      avoidTimes: 'CONTROINDICAZIONE ASSOLUTA: Nei soggetti in terapia anticoagulante cumarinica (Warfarin/Coumadin/Sintrom) è vietata l’integrazione senza strettissimo controllo dell’INR.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Target primario: il fegato trattiene circa il 90% della K1 assorbita per la funzione emostatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa se la dieta è povera di verdure a foglia verde scura.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-d3',
        targetSupplementName: 'Vitamina D3',
        synergyType: 'potenziamento',
        description: 'Supporto combinato ai processi di regolazione epatica e ossea.',
        mechanism: 'Interazione genomica ormonale e carbossilativa.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'articolazioni']
  },
  {
    id: 'colina-bitartrato',
    name: 'Colina Bitartrato Pura',
    scientificName: 'Sale di Colina dell’Acido L-(+)-Tartarico',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Fattore lipotropo epatico economico, sintesi fosfolipidica e prevenzione steatosi',
    description: 'Forma pura ed economica del nutriente essenziale colina. Fornisce un apporto abbondante di colina libera per sintetizzare fosfatidilcolina nel fegato, prevenire l’accumulo patologico di trigliceridi negli epatociti e sostenere la guaina mielinica nervosa.',
    primaryBenefits: [
      'Prevenzione ed eliminazione del fegato grasso (steatosi epatica nutrizionale)',
      'Precursore della fosfatidilcolina e sfingomielina di tutte le membrane cellulari',
      'Sostegno alla sintesi di acetilcolina periferica e contrazione muscolare',
      'Fornitura di betaina per la via della metilazione epatica dell’omocisteina'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno',
    bestForms: ['Colina bitartrato pura polvere o capsule'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti.',
      avoidTimes: 'Non superare i 3.500 mg/die per evitare l’odore corporeo di pesce causato dalla trimetilammina (TMA).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il protettore lipotropo epatico per antonomasia: la carenza di colina è la causa primaria di steatosi indotta in laboratorio.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro, essenziale in chi non consuma regolarmente tuorli d’uovo o fegato.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'myo-inositolo',
        targetSupplementName: 'Myo-Inositolo',
        synergyType: 'potenziamento',
        description: 'La celebre coppia lipotropa Colina + Inositolo per la pulizia del fegato e il metabolismo lipidico.',
        mechanism: 'Sintesi coordinata di fosfatidilcolina e fosfatidilinositolo epatici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia']
  },
  {
    id: 'betacarotene-naturale',
    name: 'Betacarotene Naturale (da Dunaliella)',
    scientificName: 'Estratto di Carotenoidi Totali da Microalga Dunaliella Salina',
    category: 'vitamine',
    categoryLabel: 'Vitamine',
    shortTagline: 'Provitamina A naturale sicura autoregolata, fotoprotezione cutanea e mucose',
    description: 'Provitamina A estratta dalla microalga salina Dunaliella. A differenza della vitamina A preformata (retinolo), il betacarotene naturale viene convertito in vitamina A dagli enzimi intestinali ed epatici solo in base al reale fabbisogno dell’organismo, azzerando qualsiasi rischio di ipervitaminosi tossica.',
    primaryBenefits: [
      'Sicurezza totale: conversione fisiologica intelligente che azzera il rischio di sovradosaggio o tossicità epatica',
      'Fotoprotezione naturale interna della cute contro scottature solari ed eritemi estivi',
      'Potente potere antiossidante nei confronti dell’ossigeno singoletto nei tessuti epiteliali',
      'Mantenimento dell’integrità delle mucose e supporto alla vista crepuscolare'
    ],
    recommendedDosage: '7 - 15 mg/giorno (fornisce l’equivalente di 1.200-2.500 mcg RAE di Vitamina A)',
    bestForms: ['Carotenoidi misti naturali da Dunaliella salina in softgel (mai betacarotene sintetico isolato per fumatori)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere sempre ai pasti con cibi contenenti lipidi per consentire la formazione delle micelle di assorbimento.',
      avoidTimes: 'ATTENZIONE: Nei forti fumatori attivi evitare integratori ad alte dosi di betacarotene sintetico isolato (preferire sempre carotenoidi naturali completi).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'A differenza del retinolo che può accumularsi negli epatociti a dosi tossiche, il betacarotene non causa epatotossicità poiché la conversione cessa quando i depositi sono saturi.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per 2-4 mesi prima e durante l’estate.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-e-tocoferoli',
        targetSupplementName: 'Vitamina E',
        synergyType: 'potenziamento',
        description: 'Sinergia lipidica dermoprotettiva per una tintarella sana e priva di foto-danno.',
        mechanism: 'Doppia barriera antiossidante idrofobica negli strati cellulari cutanei.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'immunita']
  }
];

