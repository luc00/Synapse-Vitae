import { Supplement } from '../../types/supplement';

export const MUSHROOMS_DATA: Supplement[] = [
  {
    id: 'cordyceps',
    name: 'Cordyceps (Sinensis & Militaris)',
    scientificName: 'Cordyceps Militaris Estratto Titolato in Cordicepina e Adenosina',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'VO2 Max, produzione cellulare di ATP, ossigenazione polmonare e vigore sessuale',
    description: 'Il fungo dell’altopiano tibetano celebre per la sua capacità di aumentare l’efficienza respiratoria cellulare. I suoi nucleosidi bioattivi (cordicepina e adenosina) stimolano la sintesi di ATP mitocondriale e dilatano i bronchioli polmonari.',
    primaryBenefits: [
      'Aumento del VO2 Max e della capacità polmonare durante sforzi aerobici prolungati',
      'Accelerazione della risintesi di ATP cellulare (+30% nella bioenergetica epatica e muscolare)',
      'Sostegno alla produzione di testosterone e alla spermatogenesi',
      'Potente azione antivirale e immunomodulante (inibizione delle trascrittasi virali)'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno standardizzato al 30% in polisaccaridi e 0.5% cordicepina',
    bestForms: ['Cordyceps Militaris da corpo fruttifero coltivato su substrato biologico (ricco di cordicepina pura)', 'Estratto CS-4 fermentato'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione o 45-60 minuti prima di una sessione di allenamento aerobico o con sovraccarichi.',
      avoidTimes: 'Evitare rigorosamente dopo le 17:00 per rischio di tachicardia o insonnia da surplus di ATP.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Aumenta significativamente le scorte di ATP mitocondriale nel fegato e riduce la fibrosi epatica.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli di 8-12 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'rhodiola-rosea',
        targetSupplementName: 'Rhodiola Rosea',
        synergyType: 'potenziamento',
        description: 'La combinazione definitiva per atleti di resistenza (ciclismo, corsa, CrossFit): massima ossigenazione e resistenza alla fatica.',
        mechanism: 'Sinergia tra vasodilatazione broncopolmonare (adenosina) e modulazione catecolaminica (salidroside).'
      },
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'Ottimizzazione congiunta della respirazione cellulare mitocondriale.',
        mechanism: 'Rifornimento continuo di nucleotidi adenilici e trasporto di elettroni.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'longevita']
  },
  {
    id: 'reishi',
    name: 'Reishi (Ganoderma Lucidum)',
    scientificName: 'Ganoderma Lucidum Estratto (Fungo dell’Immortalità)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'Il fungo dell’immortalità: modulazione del sistema immunitario, sonno profondo e asse HPA',
    description: 'Il "Re degli Adattogeni" della medicina orientale. Contiene oltre 400 composti bioattivi, tra cui acidi ganoderici (triterpenoidi amari con struttura steroide-simile) e beta-(1,3)-(1,6)-glucani che orchestrano le risposte immunitarie senza iperstimolarle.',
    primaryBenefits: [
      'Modulazione intelligente del sistema immunitario (abbassa l’iperreattività allergica e stimola la sorveglianza NK)',
      'Azione calmante profonda sul sistema nervoso centrale e allungamento della fase di sonno REM',
      'Protezione cardiovascolare con riduzione della pressione arteriosa e inibizione dell’aggregazione piastrinica',
      'Protezione epatica contro steatosi e danno chimico indotto da farmaci'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno standardizzato al 30% in polisaccaridi e 2-4% in triterpeni',
    bestForms: ['Estratto a doppia estrazione idroalcolica (corpo fruttifero al 100%, non solo micelio su grano)', 'Polvere di spore di Reishi rotte a freddo'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere a cena o prima di coricarsi. I triterpenoidi sono liposolubili: l’assunzione con grassi ne moltiplica la biodisponibilità.',
      avoidTimes: 'Evitare al mattino se si desidera un effetto stimolante (il reishi induce calma parasimpatica profonda).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Gli acidi ganoderici sono potenti protettori epatocellulari: rigenerano gli epatociti e inibiscono la perossidazione lipidica.',
      cycleProtocol: {
        required: false,
        description: 'Può essere assunto continuativamente per 3-6 mesi; consigliata una pausa di 2 settimane ogni 3 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ashwagandha-ksm66',
        targetSupplementName: 'Ashwagandha KSM-66',
        synergyType: 'potenziamento',
        description: 'La combinazione adattogena serale sovrana: abbattimento totale dello stress e sonno rigenerante.',
        mechanism: 'Sinergia neuroendocrina tra acidi ganoderici e withanolidi sui recettori GABAergici e asse dello stress.'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'assorbimento',
        description: 'La vitamina C scompone i complessi polimerici ad alto peso molecolare dei beta-glucani del reishi.',
        mechanism: 'Aumenta significativamente l’assorbimento intestinale delle frazioni immunologicamente attive.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'sonno', 'longevita', 'umore_ansia']
  },
  {
    id: 'chaga-fungo',
    name: 'Chaga (Inonotus Obliquus)',
    scientificName: 'Estratto di Sclerozio di Inonotus Obliquus (Fungo della Betulla)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'Il più alto punteggio ORAC al mondo, acido betulinico, melanina e integrità del DNA',
    description: 'Parassita della betulla nelle foreste boreali siberiane. Ha uno dei punteggi di potere antiossidante (ORAC) più elevati mai registrati in natura. Assorbe e concentra la betulina della corteccia della betulla trasformandola in acido betulinico altamente biodisponibile.',
    primaryBenefits: [
      'Neutralizzazione radicalica suprema e protezione dell’integrità del DNA cellulare',
      'Protezione della pelle dai raggi UV e dai radicali liberi grazie all’enorme concentrazione di melanina naturale',
      'Modulazione della glicemia e miglioramento della sensibilità all’insulina',
      'Potente azione antinfiammatoria sulla mucosa gastrica e intestinale'
    ],
    recommendedDosage: '500 - 1.500 mg/giorno standardizzato al 30% in polisaccaridi e 2% acido betulinico',
    bestForms: ['Estratto selvatico a doppia estrazione idroalcolica raccolto esclusivamente da betulle vive'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione o sciolto in acqua calda come sostituto del caffè.',
      avoidTimes: 'Evitare l’assunzione continuativa se si soffre di calcoli renali di ossalato di calcio (il Chaga contiene una frazione naturale di ossalati).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’acido betulinico protegge le cellule epatiche da apoptosi e riduce la steatosi epatica.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane intervallati da 2 settimane di pausa per via del contenuto naturale di ossalati.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'resveratrolo',
        targetSupplementName: 'Resveratrolo',
        synergyType: 'potenziamento',
        description: 'Sinergia antiossidante totale contro l’invecchiamento cellulare e fotoinvecchiamento cutaneo.',
        mechanism: 'Attivazione simultanea di Nrf2 e sirtuine SIRT1.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'immunita']
  },
  {
    id: 'maitake-d-fraction',
    name: 'Maitake (Grifola Frondosa)',
    scientificName: 'Estratto di Grifola Frondosa Titolato in D-Fraction e MD-Fraction',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'D-Fraction immunoterapica, sensibilità insulinica e contrasto alla sindrome metabolica',
    description: 'Chiamato "fungo danzante" in Giappone. La sua frazione polisaccaridica brevettata (D-Fraction) contiene beta-1,6 e beta-1,3 glucani ramificati che stimolano potentemente i linfociti T citotossici, i macrofagi e le cellule Natural Killer, contrastando al contempo l’accumulo di adipe viscerale.',
    primaryBenefits: [
      'Attivazione massiccia dell’immunità cellulo-mediata e sorveglianza oncologica naturale',
      'Sensibilizzazione all’insulina e modulazione dei picchi glicemici post-prandiali (SX-Fraction)',
      'Riduzione dell’accumulo di lipidi epatici e miglioramento del profilo lipidico',
      'Regolazione fisiologica della pressione sanguigna'
    ],
    recommendedDosage: '800 - 1.500 mg/giorno standardizzato al 30% polisaccaridi (o 20-40 gocce D-Fraction pura)',
    bestForms: ['Estratto standardizzato in D-Fraction (Maitake D-Fraction Pro)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti principali.',
      avoidTimes: 'Nessun vincolo orario stringente.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Favorisce l’escrezione dei lipidi epatici e protegge dalla steatosi (fegato grasso).',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per 3-6 mesi consecutivi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'berberina-hcl',
        targetSupplementName: 'Berberina HCl',
        synergyType: 'potenziamento',
        description: 'Sinergia formidabile per la sindrome metabolica e steatosi epatica.',
        mechanism: 'La D-Fraction riduce l’infiammazione da citochine e la berberina attiva l’AMPK.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita', 'energia']
  },
  {
    id: 'shiitake-ahcc',
    name: 'Shiitake (Lentinula Edodes - AHCC)',
    scientificName: 'Estratto Miceliale di Lentinula Edodes Titolato in Lentinano e Alfa-Glucani (AHCC)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'Alfa-glucani a basso peso molecolare (AHCC), clearance virale HPV e cellule NK',
    description: 'Il micelio di Shiitake coltivato in coltura liquida produce AHCC (Active Hexose Correlated Compound), un composto unico ad altissima biodisponibilità ricco di alfa-1,4-glucani acetilati a basso peso molecolare (5.000 Dalton), clinicamente testato per accelerare la clearance dell’infezione da papillomavirus (HPV).',
    primaryBenefits: [
      'Aumento esponenziale dell’attività delle cellule Natural Killer (NK) e dell’interferone-gamma',
      'Supporto clinico documentato nella clearance delle infezioni virali persistenti (HPV e herpesvirus)',
      'Protezione epatica avanzata contro danni da chemioterapici e tossine ambientali',
      'Eritadenina per il metabolismo del colesterolo ematico'
    ],
    recommendedDosage: '1.000 - 3.000 mg/giorno (1g mantenimento, 3g protocollo HPV)',
    bestForms: ['AHCC brevettato giapponese da micelio di Shiitake', 'Lentinano purificato'],
    timing: {
      idealTimes: ['mattina_digiuno', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a stomaco vuoto: 1 ora prima dei pasti o la sera prima di dormire.',
      avoidTimes: 'Evitare di assumere con pasti molto ricchi di grassi che ne rallentano l’assorbimento enterico.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Utilizzato clinicamente in Giappone per la protezione epatica nei pazienti sottoposti a terapie aggressive.',
      cycleProtocol: {
        required: false,
        description: 'Protocolli tipici da 3 a 6 mesi di assunzione quotidiana.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco Picolinato',
        synergyType: 'potenziamento',
        description: 'La combinazione d’urto per l’eliminazione delle infezioni virali persistenti delle mucose.',
        mechanism: 'Gli alfa-glucani attivano le cellule NK mentre lo zinco blocca le polimerasi virali.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita']
  },
  {
    id: 'tremella-fuciformis',
    name: 'Tremella Fuciformis (Fungo della Neve)',
    scientificName: 'Estratto di Corpo Fruttifero di Tremella Fuciformis (Fungo Argentato)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'Idratazione cellulare profonda, acido ialuronico vegetale, pelle radiosa e barriera polmonare',
    description: 'Il segreto di bellezza imperiale della corte cinese (Yang Guifei). I suoi polisaccaridi idrofili hanno una capacità di trattenere l’acqua superiore a quella dell’acido ialuronico (fino a 500 volte il proprio peso), penetrando negli strati profondi dell’epidermide.',
    primaryBenefits: [
      'Idratazione, turgore ed elasticità cutanea dall’interno senza ritenzione idrica periferica',
      'Sostegno alla sintesi endogena di superossido dismutasi (SOD) dermica ed epatica',
      'Idratazione e protezione delle mucose delle vie respiratorie (tosse secca e irritazioni polmonari)',
      'Neuroprotezione contro l’aggregazione del peptide beta-amiloide'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno standardizzato al 30-50% in polisaccaridi glucuronoxilomannani',
    bestForms: ['Estratto secco di corpo fruttifero 100% puro solubile'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere con abbondante acqua al mattino.',
      avoidTimes: 'Nessuna limitazione.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Potenzia la SOD epatica e protegge gli epatociti dall’ossidazione cronica.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acido-ialuronico',
        targetSupplementName: 'Acido Ialuronico',
        synergyType: 'potenziamento',
        description: 'Doppia matrice igroscopica per idratazione cutanea ed articolare.',
        mechanism: 'Sinergia tra mucopolisaccaridi animali e vegetali.'
      },
      {
        targetSupplementId: 'collagene-idrolizzato',
        targetSupplementName: 'Collagene Idrolizzato',
        synergyType: 'potenziamento',
        description: 'La formulazione regina per la rigenerazione della matrice extracellulare del derma.',
        mechanism: 'Fornitura congiunta di catene amminoacidiche e idratazione osmotica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'articolazioni']
  },
  {
    id: 'turkey-tail',
    name: 'Turkey Tail (Coriolus Versicolor)',
    scientificName: 'Estratto di Trametes Versicolor Standardizzato in PSK e PSP',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'Polisaccaropeptidi PSK e PSP, modulazione immunitaria e rigenerazione del microbiota',
    description: 'Il fungo a ventaglio più studiato nella medicina oncologica integrata asiatica. Contiene il polisaccaride Krestin (PSK) e il polisaccaropeptide (PSP), approvati dal Ministero della Salute giapponese per supportare le difese immunitarie dei pazienti oncologici.',
    primaryBenefits: [
      'Potente stimolazione dei linfociti T-helper (CD4+) e dell’immunità antitumorale',
      'Azione prebiotica eccezionale: nutre selettivamente Bifidobacterium e Lactobacillus riducendo Clostridium',
      'Rigenerazione della mucosa intestinale danneggiata da terapie aggressive o antibiotici',
      'Protezione cellulare dallo stress ossidativo e dai radicali liberi'
    ],
    recommendedDosage: '1.000 - 3.000 mg/giorno standardizzato al 30-40% in polisaccaridi e 10% peptide legato',
    bestForms: ['Estratto standardizzato in PSK/PSP a doppia estrazione'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Protegge gli epatociti dall’infiammazione e sostiene la clearance epatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'attivazione',
        description: 'I beta-glucani del Turkey Tail fungono da super-prebiotico selettivo per i ceppi simbiotici.',
        mechanism: 'Aumento della produzione di acidi grassi a catena corta (SCFA) nel colon.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'digestione', 'longevita']
  },
  {
    id: 'agaricus-blazei',
    name: 'Agaricus Blazei Murrill (ABM)',
    scientificName: 'Estratto di Agaricus Subrufescens / Blazei (Fungo del Sole)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Funghi Medicinali & Adattogeni',
    shortTagline: 'Massima concentrazione di beta-glucani complessi, citochine e allergie',
    description: 'Originario della regione montuosa di Piedade in Brasile, è rinomato per possedere la più elevata percentuale assoluta di beta-(1,3)-(1,6)-D-glucani tra tutti i funghi medicinali. Riconfigura la polarizzazione dei macrofagi verso il fenotipo anti-infiammatorio M2.',
    primaryBenefits: [
      'Massima attivazione dei recettori dectina-1 sui macrofagi e cellule dendritiche',
      'Riequilibrio della risposta immunitaria Th1/Th2 (abbattimento delle risposte allergiche da IgE)',
      'Regolazione dei livelli di colesterolo e trigliceridi ematici',
      'Azione epatoprotettiva documentata nei pazienti con epatite cronica'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno',
    bestForms: ['Estratto secco standardizzato al 40% in beta-glucani bioattivi'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a colazione e pranzo con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Studi clinici confermano la riduzione delle transaminasi sieriche nei soggetti con affaticamento epatico.',
      cycleProtocol: {
        required: false,
        description: 'Cicli da 8-12 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'potenziamento',
        description: 'La combinazione d’elezione per spegnere riniti allergiche e asma stagionale.',
        mechanism: 'ABM riequilibra i linfociti Th1/Th2 e la quercetina stabilizza i mastociti bloccando l’istamina.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita']
  }
];
