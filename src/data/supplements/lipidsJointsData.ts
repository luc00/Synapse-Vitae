import { Supplement } from '../../types/supplement';

export const LIPIDS_JOINTS_DATA: Supplement[] = [
  {
    id: 'omega-3-epadha',
    name: 'Omega-3 Trigliceridi (EPA & DHA)',
    scientificName: 'Acidi Grassi Polinsaturi Purificati in Forma Trigliceride Naturale (rTG)',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'Risoluzione dell’infiammazione cronica (SPM), trigliceridi, cuore e neuroprotezione',
    description: 'Acidi grassi polinsaturi a lunga catena estratti da piccoli pesci azzurri oceanici di acque fredde (acciughe, sardine) distillati molecolarmente ed esterificati nella forma naturale trigliceride ri-esterificata (rTG, con biodisponibilità superiore del 70% rispetto agli etil-esteri economici). Generano mediatori pro-risolutivi specializzati (SPM).',
    primaryBenefits: [
      'Abbattimento dei trigliceridi ematici e miglioramento del rapporto colesterolo totale/HDL',
      'Risoluzione attiva delle reazioni infiammatorie sistemiche (sintesi di resolvine e protectine)',
      'Preservazione della fluidità delle membrane sinaptiche neuronali e contrasto alla depressione (DHA)',
      'Protezione endoteliale, flessibilità delle arterie e modulazione della pressione sanguigna'
    ],
    recommendedDosage: '2.000 - 3.000 mg di olio di pesce totale (fornisce circa 1.000-1.500 mg di EPA e 500-1.000 mg di DHA)',
    bestForms: ['Forma Trigliceride (rTG) con certificazione IFOS a 5 Stelle (Total Oxidation Totox < 5)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere SEMPRE durante un pasto solido contenente grassi sani per stimolare il rilascio della lipasi pancreatica e della bile. Non si manifesta alcun ritorno di gusto di pesce se il prodotto ha un Totox basso.',
      avoidTimes: 'Evitare a stomaco completamente vuoto con sola acqua (verrebbe assorbito poco e provocherebbe lieve reflusso).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Straordinario rimedio per il fegato: riduce la lipogenesi epatica de novo ed è la terapia nutrizionale di prima scelta nella steatosi epatica non alcolica (fegato grasso).',
      cycleProtocol: {
        required: false,
        description: 'Assunzione quotidiana continuativa a lungo termine; fa parte dei nutrienti essenziali per la vita.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'curcumina-piperina',
        targetSupplementName: 'Curcumina',
        synergyType: 'potenziamento',
        description: 'La combinazione antinfiammatoria cellulare più potente al mondo.',
        mechanism: 'Gli omega-3 forniscono i substrati di risoluzione e la curcumina blocca a monte la cascata NF-kB.'
      },
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'assorbimento',
        description: 'La frazione lipidica degli omega-3 solubilizza il CoQ10 garantendone la massima assimilazione.',
        mechanism: 'Sinergia cardioprotettiva endoteliale e antiossidante vascolare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus', 'articolazioni', 'energia']
  },
  {
    id: 'olio-krill',
    name: 'Olio di Krill Antartico',
    scientificName: 'Estratto Lipidico di Euphausia Superba Ricco in Fosfolipidi e Astaxantina',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'EPA/DHA legati a fosfolipidi nativi con astaxantina naturale, zero reflusso e assorbimento rapido',
    description: 'Olio estratto dal minuscolo crostaceo antartico che vive nelle acque più incontaminate della Terra. A differenza dell’olio di pesce tradizionale, i suoi acidi grassi EPA e DHA sono legati a fosfatidilcolina (fosfolipidi) che si emulsionano spontaneamente in acqua, raddoppiandone la penetrazione cerebrale.',
    primaryBenefits: [
      'Integrazione immediata nelle membrane neuronali ed epatiche grazie alla matrice fosfolipidica',
      'Assoluta assenza di reflusso o ritorno di gusto di pesce (si solubilizza nei liquidi gastrici)',
      'Contenuto naturale di Astaxantina che protegge l’olio dall’ossidazione senza bisogno di additivi chimici',
      'Riduzione marcata della sindrome premestruale (PMS) e dei dolori dismenorroici'
    ],
    recommendedDosage: '1.000 - 1.500 mg/giorno (fornisce circa 250-300 mg di EPA/DHA biodisponibili e fosfolipidi)',
    bestForms: ['Superba Boost brevettato certificato MSC da pesca sostenibile nell’Oceano Australe'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a colazione o pranzo con un bicchiere d’acqua.',
      avoidTimes: 'Controindicato in soggetti con allergia grave ai crostacei marini.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La fosfatidilcolina contenuta nel krill rifornisce il fegato del donatore essenziale per esportare i trigliceridi con le lipoproteine VLDL.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro per tutto l’anno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'astaxantina-naturale',
        targetSupplementName: 'Astaxantina Naturale',
        synergyType: 'potenziamento',
        description: 'Rinforza ulteriormente la protezione antiossidante per pelle e retina.',
        mechanism: 'I fosfolipidi aumentano la captazione cellulare di xantofille.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus', 'articolazioni']
  },
  {
    id: 'olio-borragine-gla',
    name: 'Olio di Borragine (GLA 20%)',
    scientificName: 'Olio di Semi di Borago Officinalis Spremitura a Freddo (Acido Gamma-Linolenico)',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'Acido gamma-linolenico (GLA), sintesi di PGE1 antinfiammatoria, eczema e pelle idratata',
    description: 'La fonte vegetale più ricca al mondo di Acido Gamma-Linolenico (GLA, circa 20-24%). Il GLA bypassa l’enzima limitante delta-6-desaturasi (spesso bloccato da stress, fumo o invecchiamento), trasformandosi in DGLA che genera prostaglandine antinfiammatorie serie 1 (PGE1).',
    primaryBenefits: [
      'Straordinaria idratazione della pelle, risoluzione di dermatite atopica, eczema e desquamazione cutanea',
      'Inibizione dei leucotrieni infiammatori e riduzione della rigidità articolare nell’artrite reumatoide',
      'Riequilibrio ormonale femminile: attenuazione di mastodinia (tensione al seno) e irritabilità premestruale',
      'Mantenimento dell’elasticità delle membrane della barriera cutanea'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno di olio spremuto a freddo (fornisce 200-400 mg di GLA puro)',
    bestForms: ['Olio di borragine puro spremuto a freddo certificato privo di alcaloidi pirrolizidinici (PA-free)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere ai pasti principali.',
      avoidTimes: 'Verificare SEMPRE che il prodotto sia certificato "PA-free" (privo di alcaloidi tossici per il fegato).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’olio purificato privo di alcaloidi non appesantisce il fegato e ne modula le citochine infiammatorie.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane alternati a 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'omega-3-epadha',
        targetSupplementName: 'Omega-3 (EPA)',
        synergyType: 'attivazione',
        description: 'Sinergia biochimica fondamentale: l’EPA inibisce l’enzima delta-5-desaturasi, impedendo al GLA di convertirsi in acido arachidonico infiammatorio.',
        mechanism: 'Devia l’intero pool verso la sintesi di PGE1 antinfiammatorie pure.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'articolazioni']
  },
  {
    id: 'olio-mct-c8',
    name: 'Olio MCT C8 Puro (Acido Caprilico)',
    scientificName: 'Trigliceridi a Media Catena al 100% Acido Caprilico (C8:0) da Cocco',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'Chetosi rapida in 15 minuti, energia cerebrale senza carboidrati e sazietà prolungata',
    description: 'Composto esclusivamente da acido caprilico a 8 atomi di carbonio (C8). A differenza degli acidi grassi a catena lunga, i trigliceridi a media catena C8 bypassano il sistema linfatico e i sali biliari: entrano direttamente nella vena porta raggiungendo il fegato dove vengono convertiti in corpi chetonici entro 15 minuti.',
    primaryBenefits: [
      'Innalzamento istantaneo dei corpi chetonici ematici senza richiedere digiuni prolungati',
      'Carburante cerebrale pulito che supera la barriera emato-encefalica rimuovendo la nebbia mentale',
      'Potente soppressione del senso di fame (riduzione della secrezione di grelina) per 4-6 ore',
      'Proprietà antimicotiche e antibatteriche nel lume intestinale contro la Candida'
    ],
    recommendedDosage: '1 - 2 cucchiai al giorno (15 - 30 ml) o polvere microincapsulata con fibra di acacia',
    bestForms: ['Olio C8 al 100% (non miscela economica C8/C10) estratto da noci di cocco sostenibili'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pre_allenamento'],
      mealRequirement: 'indifferente',
      instructions: 'Aggiungere al caffè del mattino (Bulletproof coffee), tè o frullato proteico. Iniziare con 1 cucchiaino (5ml) per i primi giorni per abituare l’intestino.',
      avoidTimes: 'Evitare di assumere 30ml tutti in una volta se non si è abituati (può causare crampi o scariche osmotiche rapide).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Non richiede bile epatica per l’assorbimento; nel fegato subisce una chetogenesi rapida senza accumularsi nei depositi di trigliceridi epatici.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano continuativo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'bhb-chetoni-esogeni',
        targetSupplementName: 'BHB Sali Chetonici',
        synergyType: 'potenziamento',
        description: 'Doppia curva cinetica di chetosi: il BHB eleva subito i chetoni e il C8 li produce nel fegato per ore.',
        mechanism: 'Energia cerebrale costante per studio o digiuno intermittente.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'longevita']
  },
  {
    id: 'olio-olivello-spinoso',
    name: 'Olio di Olivello Spinoso (Omega-7)',
    scientificName: 'Estratto di Polpa e Semi di Hippophae Rhamnoides Ricco in Acido Palmitoleico',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'Omega-7 naturale per idratazione delle mucose intime, occhi secchi e sensibilità insulinica',
    description: 'La bacca di olivello spinoso racchiude l’Omega-7 (acido palmitoleico), un acido grasso monoinsaturo rarissimo in natura. È il costituente strutturale primario delle membrane delle mucose corporee: occhi, bocca, stomaco e tratto urogenitale femminile.',
    primaryBenefits: [
      'Risoluzione clinica della secchezza vaginale in menopausa (alternativa naturale alla terapia ormonale locale)',
      'Idratazione oculare profonda e sollievo dalla sindrome dell’occhio secco (Sjögren o lenti a contatto)',
      'Azione riparatrice sulle mucose dell’esofago e dello stomaco in caso di reflusso e gastrite',
      'Funzione di lipochina: stimola la captazione muscolare di glucosio e riduce i grassi nel fegato'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno di olio di polpa di olivello spinoso (SBA24)',
    bestForms: ['SBA24 brevettato estratto con anidride carbonica supercritica'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’acido palmitoleico agisce come molecola segnale (lipochina) che riduce la steatosi epatica e l’infiammazione del fegato.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per 3-6 mesi consecutivi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acido-ialuronico',
        targetSupplementName: 'Acido Ialuronico',
        synergyType: 'potenziamento',
        description: 'La cura definitiva dall’interno per mucose secche ed elasticità dei tessuti intimi ed oculari.',
        mechanism: 'I grassi omega-7 sigillano la barriera lipidica e l’acido ialuronico trattiene l’acqua.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'digestione']
  },
  {
    id: 'olio-cumino-nero',
    name: 'Olio di Cumino Nero (Nigella Sativa)',
    scientificName: 'Olio di Semi di Nigella Sativa Spremuto a Freddo (titolato al 5% in Timochinone)',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'Timochinone antiossidante, asma allergico, difese immunitarie e benessere metabolico',
    description: 'I semi neri di Nigella sativa vantano una storia millenaria descritta come "rimedio per ogni disturbo". Il suo principio fenolico bioattivo volatile, il timochinone, è un potente modulatore dell’immunità che inibisce i leucotrieni nelle vie aeree e abbassa i marker glicemici e infiammatori.',
    primaryBenefits: [
      'Riduzione marcata dei sintomi dell’asma bronchiale, rinite allergica e iperreattività respiratoria',
      'Abbassamento della glicemia a digiuno, colesterolo totale e pressione arteriosa',
      'Proprietà antibatteriche e antimicotiche sistemiche contro patogeni intestinali',
      'Protezione epatorenale e modulazione delle reazioni autoimmuni'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno di olio standardizzato in timochinone (o 1 cucchiaino di olio vergine)',
    bestForms: ['ThymoQuin brevettato (standardizzato al 3% o 5% timochinone a bassa acidità libera)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere ai pasti con acqua o cibo per prevenire lievi eruttazioni aromatiche.',
      avoidTimes: 'Evitare in gravidanza a dosi elevate (può stimolare la muscolatura uterina).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il timochinone è un accertato epatoprotettore: innalza il glutatione epatico e mitiga la tossicità da farmaci e metalli pesanti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane alternati a 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'potenziamento',
        description: 'La formula naturale suprema contro allergie respiratorie e riniti stagionali.',
        mechanism: 'Blocco sinergico di degranulazione mastocitaria e sintesi di leucotrieni bronchiali.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita', 'digestione']
  },
  {
    id: 'olio-semi-zucca',
    name: 'Olio di Semi di Zucca',
    scientificName: 'Olio di Semi di Cucurbita Pepo Spremuto a Freddo',
    category: 'acidi_grassi',
    categoryLabel: 'Acidi Grassi & Lipidi',
    shortTagline: 'Delta-7-steroli, benessere della prostata, vescica iperattiva e crescita dei capelli',
    description: 'Olio verde scuro ricco di acidi grassi essenziali (acido linoleico e oleico), fitosteroli specifici (delta-7-steroli) e zinco organico. I delta-7-steroli competono per i recettori del diidrotestosterone (DHT) nello stroma prostatico, riducendo la proliferazione cellulare e rinforzando lo sfintere vescicale.',
    primaryBenefits: [
      'Riduzione della nicturia (frequenti risvegli notturni per urinare) e del residuo urinario post-minzione',
      'Rinforzo del pavimento pelvico e controllo della vescica iperattiva nelle donne',
      'Stimolo alla ricrescita dei capelli negli uomini con alopecia androgenetica lieve',
      'Protezione antiossidante cardiovascolare grazie all’alto contenuto di tocoferoli'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno (o 1 cucchiaio da tavola di olio vergine crudo)',
    bestForms: ['Olio di semi di zucca stiriano spremuto a freddo al 100%'],
    timing: {
      idealTimes: ['cena', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere a cena con cibo.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'I tocoferoli naturali e gli acidi grassi insaturi proteggono gli epatociti dall’ossidazione lipidica.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'saw-palmetto',
        targetSupplementName: 'Saw Palmetto',
        synergyType: 'potenziamento',
        description: 'La combinazione fitoterapica standard per l’ipertrofia prostatica benigna maschile.',
        mechanism: 'Doppio blocco recettoriale su 5-alfa reduttasi e recettori androgeni prostatici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita']
  },
  {
    id: 'collagene-idrolizzato',
    name: 'Collagene Idrolizzato (Peptidi Bioattivi)',
    scientificName: 'Peptidi di Collagene Idrolizzato di Tipo I e III (Verisol / Peptan)',
    category: 'articolazioni',
    categoryLabel: 'Articolazioni & Connettivo',
    shortTagline: 'Peptidi bioattivi stimolatori di fibroblasti, spessore della pelle, tendini e cartilagini',
    description: 'Il collagene puro è una molecola titanica indigeribile (300.000 Dalton). L’idrolisi enzimatica controllata la spezza in corti peptidi bioattivi (prolina-idrossiprolina e idrossiprolina-glicina, 2.000-3.000 Dalton) che oltrepassano intatti la mucosa intestinale, segnalando ai fibroblasti e condrociti di sintetizzare nuovo collagene endogeno.',
    primaryBenefits: [
      'Aumento dimostrato dell’elasticità, densità ed idratazione della pelle con attenuazione delle rughe',
      'Rigenerazione delle fibre collagene dei tendini, legamenti e cartilagini articolari',
      'Rinforzo della lamina ungueale e aumento della velocità di crescita e spessore dei capelli',
      'Supporto alla barriera mucosa endoteliale e dell’intestino tenue'
    ],
    recommendedDosage: '5 - 10 g/giorno di polvere solubile neutra',
    bestForms: ['Peptidi bioattivi ottimizzati Verisol (per la pelle) o Fortigel (per le cartilagini) o Peptan'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Sciogliere in acqua, caffè, tè o succo al mattino o prima di andare a dormire. Totalmente insapore e solubile sia a caldo che a freddo.',
      avoidTimes: 'Nessuna controindicazione oraria.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Ricco in glicina (circa il 25% del totale), essenziale per la Fase II della detossificazione epatica e la sintesi di glutatione nel fegato.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa per anni; i risultati tangibili compaiono dopo 8-12 settimane di uso quotidiano.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'attivazione',
        description: 'La Vitamina C è il cofattore enzimatico indispensabile per la prolil-idrossilasi: senza vitamina C il collagene non si assembla.',
        mechanism: 'Idrossilazione della prolina e lisina per formare la tripla elica di collagene stabile.'
      },
      {
        targetSupplementId: 'acido-ialuronico',
        targetSupplementName: 'Acido Ialuronico',
        synergyType: 'potenziamento',
        description: 'La combinazione connettivale regina: il collagene fornisce le travi di sostegno e l’acido ialuronico l’idratazione.',
        mechanism: 'Rigenerazione simultanea delle componenti fibrillari e amorfe della matrice extracellulare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita', 'recupero_sport']
  },
  {
    id: 'acido-ialuronico',
    name: 'Acido Ialuronico a Pesi Molecolari Differenziati',
    scientificName: 'Sodio Ialuronato da Fermentazione di Streptococcus Zooepidemicus',
    category: 'articolazioni',
    categoryLabel: 'Articolazioni & Connettivo',
    shortTagline: 'Lubrificazione del liquido sinoviale articolare, rimpolpamento cutaneo e idratazione',
    description: 'Glicosaminoglicano non solforato capace di legare fino a 1.000 volte il proprio peso in molecole d’acqua. L’assunzione orale di sodio ialuronato a pesi molecolari differenziati (basso e medio peso) stimola i sinoviociti a secernere nuovo acido ialuronico ad alto peso nel liquido sinoviale articolare.',
    primaryBenefits: [
      'Ripristino della viscosità e delle proprietà ammortizzanti del liquido sinoviale articolare',
      'Riduzione dell’attrito osseo, crepitii e dolore nel movimento del ginocchio (gonartrosi)',
      'Rimpolpamento profondo dei tessuti dermici ed aumento del turgore cutaneo',
      'Supporto all’idratazione oculare e della mucosa dell’esofago'
    ],
    recommendedDosage: '100 - 200 mg/giorno',
    bestForms: ['ExceptionHYAL Star (spettro completo di pesi molecolari bioidentici)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere durante un pasto con un abbondante bicchiere d’acqua (l’idratazione idrica è indispensabile per consentire alla molecola di rigonfiarsi).',
      avoidTimes: 'Evitare se non si beve abbastanza acqua durante la giornata.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Molecola fisiologica degradata per via epatica dai recettori HARE (Hyaluronan Receptor for Endocytosis) senza scorie tossiche.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano continuativo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'collagene-idrolizzato',
        targetSupplementName: 'Collagene Idrolizzato',
        synergyType: 'potenziamento',
        description: 'Matrice dermica ed articolare completa.',
        mechanism: 'Integrazione perfetta tra la componente proteica fibrillare e il gel di idratazione interstiziale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita']
  },
  {
    id: 'glucosamina-solfato',
    name: 'Glucosamina Solfato (2KCl)',
    scientificName: 'D-Glucosamina Solfato Cloruro di Potassio',
    category: 'articolazioni',
    categoryLabel: 'Articolazioni & Connettivo',
    shortTagline: 'Substrato biosintetico dei glicosaminoglicani, rigenerazione cartilagine e artrosi',
    description: 'Amminosaccaride essenziale per la biosintesi endogena dei glicosaminoglicani (GAG) e dei proteoglicani che costituiscono l’impalcatura solida della cartilagine articolare. La forma solfato è clinicamente superiore alla glucosamina cloridrato grazie alla fornitura dello zolfo solfato biologicamente attivo.',
    primaryBenefits: [
      'Rallentamento della progressione radiografica del restringimento della rima articolare nella gonartrosi',
      'Riduzione del dolore cronico da sfregamento e miglioramento della flessibilità articolare',
      'Inibizione degli enzimi degradativi della cartilagine (collagenasi e aggrecanasi)',
      'Stimolazione dei condrociti a produrre nuova matrice extracellulare'
    ],
    recommendedDosage: '1.500 mg/giorno in singola dose o divisi ai pasti',
    bestForms: ['Glucosamina Solfato 2KCl purificata (da gusci di crostacei o vegetale da fermentazione)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con il cibo ai pasti principali.',
      avoidTimes: 'Prestare attenzione se si è severamente allergici ai crostacei (in tal caso scegliere la versione da fermentazione vegetale di mais).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Ben tollerata dal fegato; l’assorbimento sistemico è elevato e non altera gli indici epatici.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 4,
        description: 'I massimi benefici sull’articolazione emergono dopo 8-12 settimane. Fare cicli di 3 mesi seguiti da 1 mese di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'condroitina-solfato',
        targetSupplementName: 'Condroitina Solfato',
        synergyType: 'potenziamento',
        description: 'La celebre combinazione terapeutica reumatologica mondiale (studi GAIT).',
        mechanism: 'La glucosamina nutre la cartilagine e la condroitina ne previene la degradazione enzimatica trattenendo l’acqua.'
      },
      {
        targetSupplementId: 'msm-zolfo',
        targetSupplementName: 'MSM',
        synergyType: 'potenziamento',
        description: 'Triade protettiva per articolazioni sane, tendini e cartilagini.',
        mechanism: 'Apporto sinergico di zolfo biodisponibile per i ponti disolfuro.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'recupero_sport']
  },
  {
    id: 'condroitina-solfato',
    name: 'Condroitina Solfato Purificata',
    scientificName: 'Sodio Condroitina Solfato Bovina / Marina al 90-95%',
    category: 'articolazioni',
    categoryLabel: 'Articolazioni & Connettivo',
    shortTagline: 'Resistenza alla compressione della cartilagine articolare e inibizione delle elastasi',
    description: 'Polimero di glicosaminoglicani solforati che costituisce la porzione maggioritaria dell’aggrecano nella cartilagine. Grazie alle sue potenti cariche elettrostatiche negative, attrae e trattiene grandissime quantità di molecole d’acqua, fungendo da cuscino ammortizzatore contro le sollecitazioni meccaniche del peso corporeo.',
    primaryBenefits: [
      'Capacità di assorbire impatti meccanici e ammortizzare le forze di compressione articolare',
      'Inibizione diretta degli enzimi litici che distruggono la cartilagine (elastasi, ialuronidasi)',
      'Riduzione dell’infiammazione della membrana sinoviale (riduzione del versamento articolare)',
      'Miglioramento dell’autonomia di deambulazione e salita delle scale'
    ],
    recommendedDosage: '800 - 1.200 mg/giorno',
    bestForms: ['Condroitina solfato di grado farmaceutico purificata al >90% (Condrosulf equivalente)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere ai pasti principali con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Degradata nel colon dai batteri solfatasici; non presenta carico tossico per gli epatociti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 4,
        description: 'Cicli da 3 mesi alternati a 1 mese di riposo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'glucosamina-solfato',
        targetSupplementName: 'Glucosamina Solfato',
        synergyType: 'potenziamento',
        description: 'L’associazione scientificamente più solida per la rigenerazione articolare.',
        mechanism: 'Azione coordinata anabolica (glucosamina) e anti-catabolica (condroitina).'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita']
  },
  {
    id: 'msm-zolfo',
    name: 'MSM (Metilsulfonilmetano)',
    scientificName: 'Dimetilsulfone Puro di Grado Distillato OptiMSM',
    category: 'articolazioni',
    categoryLabel: 'Articolazioni & Connettivo',
    shortTagline: 'Zolfo organico biodisponibile, ponti disolfuro, analgesia articolare e capelli/unghie forti',
    description: 'Composto organo-solforato naturale composto per il 34% da zolfo elementare bioattivo. Cede zolfo per la formazione dei ponti disolfuro delle catene proteiche di cheratina e collagene, ed esercita una rapida azione antinfiammatoria riducendo l’espressione di citochine infiammatorie e spasmi muscolari.',
    primaryBenefits: [
      'Alleviamento del dolore e dell’infiammazione osteoarticolare e muscolare',
      'Fornitura dello zolfo indispensabile per formare i legami crociati di cheratina (capelli spessi e unghie dure)',
      'Riduzione del danno muscolare ossidativo e dei dolori post-allenamento intenso (DOMS)',
      'Azione antiallergica naturale (riduce l’adesione degli allergeni alle mucose respiratorie)'
    ],
    recommendedDosage: '1.500 - 3.000 mg/giorno (fino a 5g divisi in caso di dolore acuto)',
    bestForms: ['OptiMSM brevettato purificato con processo di quadrupla distillazione (purezza al 99.9%)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pranzo'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino e a mezzogiorno con abbondante acqua o spremuta d’arancia. Ha un sapore amarognolo se in polvere.',
      avoidTimes: 'Evitare la tarda sera: in alcuni soggetti può provocare leggera ipervigilanza o sogni vividi.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Lo zolfo del MSM sostiene la via della solfatazione di Fase II nel fegato per eliminare tossine fenoliche ed estrogeni in eccesso.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura continuativa a lungo termine.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'La combinazione costruttiva per il tessuto connettivo: lo zolfo forma i ponti e la vitamina C idrossila gli aminoacidi.',
        mechanism: 'Sintesi accelerata e stabilizzazione tridimensionale delle fibre di collagene ed elastina.'
      },
      {
        targetSupplementId: 'glucosamina-solfato',
        targetSupplementName: 'Glucosamina Solfato',
        synergyType: 'potenziamento',
        description: 'Sinergia articolare per dolore, gonfiore e recupero funzionale.',
        mechanism: 'Azione complementare su rimodellamento cartilagineo e sollievo nocicettivo.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'recupero_sport', 'longevita']
  },
  {
    id: 'collagene-uc-ii',
    name: 'Collagene Non Denaturato di Tipo II (UC-II)',
    scientificName: 'Collagene di Tipo II Nativo con Conformazione a Tripla Elica Intatta (UC-II)',
    category: 'articolazioni',
    categoryLabel: 'Articolazioni & Connettivo',
    shortTagline: 'Microdosaggio (40mg), tolleranza orale immunitaria e spegnimento dell’attacco autoimmune alla cartilagine',
    description: 'A differenza del collagene idrolizzato (che richiede 10 grammi e funge da mattone costruttivo), l’UC-II è collagene nativo non denaturato con tripla elica biologicamente intatta: ne bastano appena 40 mg al giorno. Agisce attraverso il fenomeno della tolleranza orale nelle placche di Peyer dell’intestino, istruendo i linfociti T-regolatori a spegnere la risposta autoimmune e l’attacco infiammatorio alla cartilagine articolare.',
    primaryBenefits: [
      'Microdose minuscola di appena 40 mg/die (una sola piccolissima capsula)',
      'Efficacia superiore di oltre il doppio rispetto alla combinazione classica Glucosamina + Condroitina',
      'Desensibilizzazione immunitaria e arresto della distruzione cartilaginea',
      'Miglioramento dell’estensione del ginocchio e della flessibilità articolare in atleti e anziani'
    ],
    recommendedDosage: '40 mg esatti/giorno (fornisce circa 10 mg di collagene UC-II nativo puro)',
    bestForms: ['UC-II brevettato originale Lonza'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'REGOLA DI EFFICACIA: Assumere tassativamente la sera prima di dormire a stomaco vuoto con un sorso d’acqua, affinché gli epitopi intatti interagiscano con le placche di Peyer intestinali senza essere denaturati da cibo o acidi.',
      avoidTimes: 'Evitare di assumere con pasti proteici abbondanti.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Agisce per via immunitaria mucosale enterica a micro-dosaggio: zero carico epatico o renale.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo raccomandato per almeno 90-180 giorni.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'boswellia-serrata',
        targetSupplementName: 'Boswellia Serrata',
        synergyType: 'potenziamento',
        description: 'Sollievo dal dolore rapido (Boswellia in 7 giorni) unito alla riparazione immunitaria a lungo termine (UC-II).',
        mechanism: 'Controllo infiammatorio acuto unito a tolleranza immunitaria duratura.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'recupero_sport', 'longevita']
  },
  {
    id: 'melatonina',
    name: 'Melatonina Pura (Sincronizzatore Circadiano)',
    scientificName: 'N-Acetil-5-metossitriptamina Pura',
    category: 'longevita',
    categoryLabel: 'Sonno & Ritmi Circadiani',
    shortTagline: 'Sincronizzazione circadiana, riduzione latenza sonno, riparazione mitocondriale notturna',
    description: 'Ormone pineale sincronizzatore del ritmo circadiano. Oltre a segnalare all’organismo l’inizio della notte biologica favorendo l’addormentamento rapido, è uno dei più potenti antiossidanti mirati all’interno della matrice mitocondriale cellulare, dove neutralizza i radicali liberi generati durante il giorno.',
    primaryBenefits: [
      'Rapida riduzione del tempo necessario per prendere sonno (latenza di addormentamento)',
      'Risincronizzazione immediata dell’orologio biologico dopo jet lag o turni di lavoro notturni',
      'Azione antiossidante intracellulare mitocondriale (supera qualsiasi barriera biologica)',
      'Modulazione del sistema immunitario e stimolo alla rigenerazione notturna dei tessuti'
    ],
    recommendedDosage: '0.5 - 1.0 mg circa 30-45 minuti prima di dormire (in Italia il limite ministeriale da banco è 1mg)',
    bestForms: ['Melatonina a doppio rilascio (50% immediata per addormentarsi + 50% ritardata per non svegliarsi alle 3 di notte)', 'Gocce sublinguali'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere esattamente 30-45 minuti prima di spegnere la luce per dormire, rigorosamente al buio o con luci soffuse calde.',
      avoidTimes: 'CONTROINDICAZIONE ASSOLUTA: Non assumere durante il giorno, alla luce del sole o prima di guidare. Non esporre gli occhi a schermi luminosi (smartphone, tablet) dopo averla assunta (la luce blu annulla l’effetto recettoriale).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Potente antiossidante epatico notturno: protegge gli epatociti dall’infiammazione da perossidi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 1,
        description: 'Utilizzare a cicli di 3-4 settimane durante i cambi di stagione o al bisogno nei viaggi, con 1 settimana di stacco per preservare la produzione endogena pineale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'La combinazione del sonno profondo per eccellenza: il magnesio rilassa i muscoli e la melatonina avvia l’architettura del sonno.',
        mechanism: 'Sinergia neurochimica tra recettori MT1/MT2 e inibizione glutammatergica.'
      },
      {
        targetSupplementId: 'apigenina',
        targetSupplementName: 'Apigenina',
        synergyType: 'potenziamento',
        description: 'Stack del sonno profondo: addormentamento rapido e distensione dei pensieri.',
        mechanism: 'Azione coordinata sul circuito talamico e recettori GABA-A.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'longevita']
  },
  {
    id: 'apigenina',
    name: 'Apigenina Pura (da Camomilla)',
    scientificName: '4’,5,7-Triidrossiflavone da Matricaria Chamomilla Standardizzata',
    category: 'longevita',
    categoryLabel: 'Sonno & Ritmi Circadiani',
    shortTagline: 'Agonista dei recettori delle benzodiazepine, inibitore di CD38 (salva-NAD+) e calma mentale',
    description: 'Flavonoide naturale isolato dai fiori di camomilla. Agisce legandosi come agonista naturale privo di dipendenza ai recettori delle benzodiazepine sul complesso GABA-A cerebrale. Inoltre, inibisce l’enzima CD38, impedendo la distruzione senile del NAD+ intracellulare.',
    primaryBenefits: [
      'Induzione di uno stato di distensione mentale privo di ansia o rimuginio notturno',
      'Potente inibitore naturale dell’enzima CD38, raddoppiando la disponibilità cellulare di NAD+',
      'Prolungamento della fase di sonno profondo ad onde lente (Slow-Wave Sleep)',
      'Azione antinfiammatoria e antispasmodica sulla muscolatura viscerale addominale'
    ],
    recommendedDosage: '50 mg pura prima di dormire',
    bestForms: ['Apigenina pura da camomilla al 98% in capsule'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere 30-45 minuti prima di coricarsi. Pilastro del sonno serale raccomandato nel protocollo del neuroscienziato Andrew Huberman.',
      avoidTimes: 'Evitare al mattino se si devono svolgere compiti che richiedono alta reattività.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Inibisce l’accumulo di lipidi epatici e modula l’espressione di geni anti-steatosici.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa per 2-4 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-l-treonato',
        targetSupplementName: 'Magnesio L-Treonato',
        synergyType: 'potenziamento',
        description: 'La combinazione serale definitiva Huberman per spegnere l’ansia e rigenerare il cervello durante la notte.',
        mechanism: 'Magnesio blocca i canali del calcio e l’apigenina stimola i recettori GABA-A.'
      },
      {
        targetSupplementId: 'nmn-nicotinamide',
        targetSupplementName: 'NMN',
        synergyType: 'attivazione',
        description: 'L’apigenina inibisce l’enzima CD38 che consuma avidamente il NAD+, permettendo al NAD+ generato da NMN di durare molto più a lungo.',
        mechanism: 'Inibizione del consumo enzimatico distruttivo di dinucleotidi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'longevita', 'umore_ansia']
  },
  {
    id: 'quercetina',
    name: 'Quercetina Diidrato (Fitosoma)',
    scientificName: '2-(3,4-Diidrossifenil)-3,5,7-triidrossi-4H-cromen-4-one Quercefit',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Ionoforo naturale dello zinco, stabilizzazione dei mastociti (antistaminico naturale) e senolitico',
    description: 'Il bioflavonoide più abbondante e studiato al mondo. Funge da "chiave molecolare" per aprire i canali di membrana cellulare e trasportare lo zinco intracellulare (ionoforo dello zinco), stabilizza le membrane dei mastociti spegnendo il rilascio di istamina nelle allergie e innesca la senolisi se abbinato alla fisetina.',
    primaryBenefits: [
      'Ionoforo dello zinco: quadruplica l’ingresso di Zn2+ nelle cellule per bloccare la replicazione virale',
      'Potente antistaminico naturale: stabilizza i mastociti riducendo starnuti, rinite e occhi lacrimanti',
      'Azione senolitica: favorisce la clearance delle cellule senescenti infiammatorie tessutali',
      'Miglioramento della salute endoteliale e della pressione arteriosa'
    ],
    recommendedDosage: '250 - 500 mg/giorno di quercetina fitosoma (Quercefit) o 500-1000 mg quercetina diidrato con bromelina',
    bestForms: ['Quercetina fitosoma (Quercefit, biodisponibilità fino a 20 volte superiore)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere ai pasti con cibi contenenti grassi per massimizzarne l’assorbimento.',
      avoidTimes: 'Evitare a stomaco vuoto.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Protegge il fegato dalla perossidazione lipidica, riduce le citochine infiammatorie epatiche e sostiene gli enzimi antiossidanti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 12 settimane alternati a 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco Picolinato',
        synergyType: 'attivazione',
        description: 'La combinazione antivirale e immunitaria per antonomasia.',
        mechanism: 'La quercetina funge da carrier aprendo la strada allo zinco all’interno della cellula.'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'La vitamina C ricicla la quercetina ossidata mantenendola attiva più a lungo nel flusso ematico.',
        mechanism: 'Rigenerazione continua del gruppo polifenolico ridotto.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita', 'energia']
  },
  {
    id: 'spirulina-clorella',
    name: 'Spirulina & Clorella Biologica',
    scientificName: 'Miscela 1:1 di Arthrospira Platensis e Chlorella Vulgaris con Parete Cellulare Rotta',
    category: 'longevita',
    categoryLabel: 'Superfood & Microalghe',
    shortTagline: 'Ficocianina, clorofilla chelante di metalli pesanti, multivitaminico naturale e proteine',
    description: 'La combinazione sovrana di microalghe unicellulari biologiche. La Spirulina apporta oltre il 65% di proteine nobili complete, vitamine del gruppo B, ferro e la preziosa ficocianina (pigmento blu antiossidante); la Clorella (con parete cellulare rotta meccanicamente) è la fonte naturale più concentrata di clorofilla, con comprovata capacità chelante di metalli pesanti (piombo, cadmio, mercurio) ed idrocarburi.',
    primaryBenefits: [
      'Chelazione ed eliminazione naturale di metalli pesanti e tossine ambientali accumulate nei tessuti',
      'Straordinario carico nutrizionale naturale: ferro biodisponibile, beta-carotene, vitamina B12 e minerali',
      'Potente azione antiossidante e inibitrice della perossidazione lipidica grazie alla ficocianina',
      'Sostegno alla vitalità, all’emopoiesi e alla resistenza fisica'
    ],
    recommendedDosage: '3 - 6 g/giorno in compresse o polvere miscelata in acqua o smoothie',
    bestForms: ['Compresse biologiche pure al 100% senza leganti, con Clorella a parete cellulare rotta (Broken Cell Wall)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pranzo'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere con abbondante acqua al mattino o prima dei pasti.',
      avoidTimes: 'Evitare la tarda sera: la ricchezza di micronutrienti stimola la vitalità energetica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Un toccasana per il fegato: protegge gli epatociti dall’avvelenamento da metalli e riduce significativamente gli enzimi epatici nei soggetti con steatosi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane seguiti da 2 settimane di stacco. Acquistare SOLO prodotti certificati privi di microcistine algali.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'assorbimento',
        description: 'La vitamina C moltiplica l’assorbimento dell’altissimo contenuto di ferro vegetale della spirulina.',
        mechanism: 'Riduzione del ferro non-eme nello stato ferroso bivalente Fe2+ prontamente assorbibile.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita', 'immunita']
  }
];
