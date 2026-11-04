import { Supplement } from '../../types/supplement';

export const HERBS_DATA: Supplement[] = [
  {
    id: 'ashwagandha-ksm66',
    name: 'Ashwagandha KSM-66',
    scientificName: 'Withania Somnifera Estratto Radicale KSM-66',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Adattogeno sovrano per abbattimento del cortisolo, forza muscolare e sonno ristoratore',
    description: 'Il più prestigioso estratto a spettro completo di radice di Withania somnifera, standardizzato al 5% di withanolidi con processo "green chemistry" a base di latte. Regola l’asse HPA, riduce il cortisolo sierico fino al 30% e sostiene il vigore maschile.',
    primaryBenefits: [
      'Riduzione marcata del cortisolo e modulazione dell’ansia cronica da stress',
      'Miglioramento della forza contrattile, massa magra e livelli di testosterone negli uomini',
      'Approfondimento del sonno e riduzione della latenza di addormentamento',
      'Stabilizzazione della tiroide (stimolo fisiologico della conversione T4-T3)'
    ],
    recommendedDosage: '300 - 600 mg/giorno (KSM-66 titolato al 5% withanolidi)',
    bestForms: ['KSM-66 (da sole radici)', 'Sensoril (da radici e foglie, più sedativo)'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere a cena o prima di andare a letto con un pasto contenente lipidi o latte vegetale/vaccino per favorire l’assorbimento dei withanolidi.',
      avoidTimes: 'Evitare al mattino se si sperimenta sonnolenza diurna o letargia.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Generalmente molto sicura. Rarissimi casi isolati di ipertransaminasemia sono stati riportati solo con estratti non titolati o adulterati con foglie non purificate.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Assumere per 8 settimane seguite da 2 settimane di scarico per prevenire l’appiattimento emotivo (apatia recettoriale dopaminergica).'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'La combinazione regina per l’azzeramento dello stress serale e recupero surrenalico.',
        mechanism: 'Duplice soppressione del tono simpatico e rilassamento miofasciale.'
      },
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco Picolinato',
        synergyType: 'potenziamento',
        description: 'Sinergia ormonale per il testosterone maschile e la fertilità seminale.',
        mechanism: 'L’ashwagandha abbassa il cortisolo che inibisce le cellule di Leydig mentre lo zinco è il cofattore steroideo.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'sonno', 'recupero_sport', 'energia']
  },
  {
    id: 'cardo-mariano-silimarina',
    name: 'Cardo Mariano (Silimarina)',
    scientificName: 'Silybum Marianum Estratto Standardizzato (Silimarina 80% / Silibina)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Rigenerazione epatocellulare, stabilizzazione di membrana e detossificazione profonda',
    description: 'Il fitoterapico epatico per eccellenza. Il complesso flavonolignano della silimarina (in particolare la silibina) stimola la RNA polimerasi I nei ribosomi degli epatociti, accelerando la sintesi proteica e la rigenerazione del fegato danneggiato.',
    primaryBenefits: [
      'Stimolazione della rigenerazione del tessuto epatico lesionato da tossine, alcol e farmaci',
      'Stabilizzazione della membrana degli epatociti, bloccando la penetrazione di sostanze tossiche',
      'Aumento delle scorte epatiche endogene di glutatione fino al 35%',
      'Potente azione anti-fibrotica e inibizione della perossidazione lipidica'
    ],
    recommendedDosage: '200 - 450 mg/giorno di silimarina standardizzata (o 150-300 mg di fitosoma di silibina)',
    bestForms: ['Silimarina fitosoma legata a fosfolipidi (Siliphos)', 'Estratto standardizzato all’80% silimarina'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere sempre ai pasti principali contenenti lipidi per migliorare la biodisponibilità altrimenti modesta della silibina.',
      avoidTimes: 'Nessun vincolo particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il gold standard medico mondiale per la protezione epatica (protettivo di Fase I e II).',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6-8 settimane, specialmente durante i periodi di reset epatico stagionale o dopo trattamenti farmacologici.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nac-n-acetilcisteina',
        targetSupplementName: 'N-Acetilcisteina (NAC)',
        synergyType: 'potenziamento',
        description: 'Lo scudo epatico definitivo: il cardo protegge la membrana cellulare e il NAC sintetizza glutatione all’interno.',
        mechanism: 'Protezione cellulare esterna e neutralizzazione intracellulare dei metaboliti reattivi.'
      },
      {
        targetSupplementId: 'carciofo-cinarina',
        targetSupplementName: 'Carciofo (Cinarina)',
        synergyType: 'potenziamento',
        description: 'Azione epatobiliare completa: epatoprotezione unita a forte stimolo coleretico ed escrezione biliare.',
        mechanism: 'La silimarina ripara gli epatociti e il carciofo attiva la Fase III drenando le tossine con la bile.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'digestione']
  },
  {
    id: 'berberina-hcl',
    name: 'Berberina HCl',
    scientificName: 'Alcaloide Isochinolinico da Berberis Aristata',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Attivatore dell’enzima di longevità AMPK, controllo glicemico, colesterolo e microbiota',
    description: 'Alcaloide vegetale brillante color oro. Agisce inibendo lievemente il complesso I della catena respiratoria mitocondriale, innalzando il rapporto AMP/ATP e accendendo l’interruttore metabolico supremo: l’AMPK (la via molecolare della metformina).',
    primaryBenefits: [
      'Drammatico miglioramento della sensibilità all’insulina e abbassamento dell’emoglobina glicata',
      'Upregulazione dei recettori epatici delle LDL (inibisce PCSK9), riducendo colesterolo e trigliceridi',
      'Modulazione benefica del microbiota intestinale (riduzione dei ceppi infiammatori Gram-negativi)',
      'Attivazione dell’autofagia cellulare e longevità mitocondriale'
    ],
    recommendedDosage: '500 mg due o tre volte al giorno (totale 1.000 - 1.500 mg/giorno)',
    bestForms: ['Berberina HCl pura', 'Berberina fitosoma (Berbevis)', 'Diidroberberina (5x biodisponibilità)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere 15-20 minuti prima o subito all’inizio dei due pasti principali più ricchi di carboidrati.',
      avoidTimes: 'Evitare categoricamente a stomaco vuoto o in digiuno prolungato (rischio ipoglicemia o coliche addominali).'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: true,
      impactDescription: 'Potente anti-steatosico per il fegato, ma inibisce fortemente diversi enzimi del citocromo P450 epatico (CYP3A4, CYP2D6, CYP2C9), rallentando il metabolismo di numerosi farmaci di sintesi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 3,
        description: 'Assumere per 8-10 settimane consecutive, seguite obbligatoriamente da 3-4 settimane di pausa per consentire il ripristino della flora batterica intestinale e degli enzimi epatici.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cardo-mariano-silimarina',
        targetSupplementName: 'Cardo Mariano (Silimarina)',
        synergyType: 'assorbimento',
        description: 'La silimarina inibisce la P-glicoproteina intestinale che rigetta la berberina nel lume, moltiplicandone l’assorbimento ematico.',
        mechanism: 'Sinergia biochimica che aumenta la biodisponibilità della berberina fino a 4 volte.'
      },
      {
        targetSupplementId: 'cromo-picolinato',
        targetSupplementName: 'Cromo Picolinato',
        synergyType: 'potenziamento',
        description: 'Coppia metabolica d’eccellenza per la glicemia e il controllo della fame nervosa.',
        mechanism: 'Azione combinata sulla cascata del recettore dell’insulina e sull’AMPK.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia']
  },
  {
    id: 'egcg-te-verde',
    name: 'EGCG (Epigallocatechina Gallato)',
    scientificName: 'Polifenolo Maggioritario di Camellia Sinensis (Tè Verde)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Potente polifenolo antiossidante, termogenesi, autofagia e inibizione COMT',
    description: 'La più potente catechina presente nelle foglie di tè verde non fermentato. Inibisce la catecol-O-metiltransferasi (COMT), prolungando l’attività di noradrenalina e dopamina, e innesca la biogenesi mitocondriale e la termogenesi nel tessuto adiposo bruno.',
    primaryBenefits: [
      'Stimolazione dell’ossidazione dei lipidi e della termogenesi fisiologica',
      'Protezione cardiovascolare ed endoteliale contro la perossidazione delle LDL',
      'Prolungamento della lucidità mentale e del tono dopaminergico',
      'Azione senolitica e antinfiammatoria sistemica'
    ],
    recommendedDosage: '300 - 500 mg di EGCG/giorno (NON superare MAI gli 800 mg/die secondo le linee guida EFSA)',
    bestForms: ['Estratto decaffeinato titolato >45% EGCG', 'Fitosoma di tè verde (Greenselect)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'REGOLA DI SICUREZZA ASSOLUTA: Assumere SEMPRE durante o subito dopo un pasto solido. Non assumere MAI a digiuno.',
      avoidTimes: 'VIETATO l’uso a stomaco vuoto: la concentrazione epatica rapida senza cibo è la causa documentata di tossicità epatica acuta da integratori di tè verde.'
    },
    liverSafety: {
      riskLevel: 'alto_richiede_cicli',
      hepatoprotective: false,
      impactDescription: 'A dosi elevate (>800mg) o assunto a digiuno, l’EGCG può indurre danno epatotossico dose-dipendente con innalzamento acuto delle transaminasi (ALT/AST).',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 3,
        description: 'Cicli rigidi: 6 settimane di assunzione con cibo, seguite da 3 settimane di pausa completa con controllo epatico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'assorbimento',
        description: 'La quercetina inibisce gli enzimi intestinali di metilazione, proteggendo l’EGCG dalla rapida degradazione.',
        mechanism: 'Aumenta i livelli plasmatici e l’emivita biologica delle catechine.'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'protezione',
        description: 'Stabilizza la molecola di catechina impedendone l’auto-ossidazione nel tubo digerente.',
        mechanism: 'Mantiene l’EGCG nello stato polifenolico ridotto attivo.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'focus']
  },
  {
    id: 'rhodiola-rosea',
    name: 'Rhodiola Rosea',
    scientificName: 'Estratto di Rhodiola Rosea (Radice d’Oro) Titolato al 3% Rosavine e 1% Salidroside',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Adattogeno stimolante anti-burnout, lucidità mentale sotto pressione e fatica fisica',
    description: 'Cresce nelle regioni artiche e alpine ad alta quota. I suoi composti fenolici, rosavina e salidroside, inibiscono temporaneamente le monoamino-ossidasi (MAO-A e MAO-B), preservando dopamina e serotonina, e aumentano la sintesi di ATP e creatinfosfato nei mitocondri.',
    primaryBenefits: [
      'Rapido recupero dalla stanchezza cronica da esaurimento psicofisico (burnout)',
      'Aumento della lucidità intellettuale, prontezza di riflessi e memoria sotto forte pressione',
      'Miglioramento della resistenza cardiorespiratoria e della performance atletica',
      'Modulazione del cortisolo e riequilibrio del tono dell’umore'
    ],
    recommendedDosage: '200 - 400 mg/giorno standardizzato al 3% rosavine e 1% salidroside',
    bestForms: ['Estratto secco SHR-5 originale svedese'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino appena svegli a digiuno o prima di colazione per la massima efficacia energizzante.',
      avoidTimes: 'Evitare categoricamente nel pomeriggio o alla sera (la spiccata azione stimolante impedirebbe l’addormentamento).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Il salidroside esercita azione protettiva contro l’apoptosi indotta da tossine negli epatociti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli raccomandati di 6 settimane seguiti da 2 settimane di stop per evitare che il corpo si adatti all’effetto adattogeno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'La combinazione energetica mitocondriale definitiva per chi deve affrontare sforzi prolungati.',
        mechanism: 'Resistenza allo stress sistemico unita alla ricarica della catena di trasporto degli elettroni.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'umore_ansia', 'recupero_sport']
  },
  {
    id: 'tongkat-ali',
    name: 'Tongkat Ali (Longjack)',
    scientificName: 'Estratto di Eurycoma Longifolia (standardizzato in Euripeptidi e Euricomanone)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Ottimizzazione del testosterone libero, liberazione da SHBG e potenza sessuale',
    description: 'Radice della foresta pluviale malese. Gli euripeptidi stimolano l’enzima CYP17 (17-alfa-idrossilasi) nei testicoli, accelerando la conversione del colesterolo in ormoni steroidei, e staccano il testosterone legato all’albumina e alla SHBG.',
    primaryBenefits: [
      'Aumento statisticamente significativo del testosterone totale e soprattutto libero',
      'Miglioramento della libido, della rigidità erettile e del volume seminale',
      'Riduzione del cortisolo e miglioramento dello stato di vigore e assertività',
      'Incremento della forza massimale negli allenamenti con sovraccarichi'
    ],
    recommendedDosage: '200 - 400 mg/giorno di estratto standardizzato in euricomanone (es. LJ100)',
    bestForms: ['LJ100 brevettato (100:1 titolato all’1% euricomanone e 22% euripeptidi)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere a colazione con cibo (può essere irritante per lo stomaco a digiuno per via del sapore estremamente amaro).',
      avoidTimes: 'Evitare la sera per possibile insonnia da iperattivazione ormonale.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Gli estratti concentrati di Longjack richiedono metabolismo epatico; l’uso prolungato non controllato di estratti non testati può sovraccaricare il parenchima.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Rigorosa ciclizzazione obbligatoria: 4 settimane ON e 2 settimane OFF (oppure 5 giorni ON e 2 giorni OFF a settimana) per preservare la sensibilità recettoriale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'boro-fruttoborato',
        targetSupplementName: 'Boro Fruttoborato',
        synergyType: 'potenziamento',
        description: 'La coppia più efficace per il testosterone libero: il boro dimezza l’SHBG e il Tongkat stimola la produzione.',
        mechanism: 'Doppia via di liberazione del testosterone circolante.'
      },
      {
        targetSupplementId: 'fadogia-agrestis',
        targetSupplementName: 'Fadogia Agrestis',
        synergyType: 'potenziamento',
        description: 'Celebre stack ormonale Huberman: LH ipofisario + conversione steroidea testicolare.',
        mechanism: 'Sinergia neuroendocrina ad alto impatto (richiede cicli rigorosi).'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport']
  },
  {
    id: 'maca-andina',
    name: 'Maca Peruviana (Lepidium Meyenii)',
    scientificName: 'Lepidium Meyenii Gelatinizzata (Maca Nera/Rossa)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Libido maschile e femminile, resistenza alla fatica, fertilità ed equilibrio endocrino',
    description: 'Tubero andino peruviano che cresce oltre i 4000 metri di altitudine. Ricco di macamidi e macaeni che agiscono come modulatori del sistema endocannabinoide (inibiscono la FAAH) e ottimizzano la comunicazione ipotalamo-ipofisi senza alterare direttamente i valori di testosterone.',
    primaryBenefits: [
      'Innalzamento della libido e del desiderio sessuale maschile e femminile',
      'Miglioramento della motilità e conteggio degli spermatozoi',
      'Aumento della resistenza fisica alla fatica e della sensazione di benessere vitale',
      'Attenuazione delle vampate di calore e sbalzi d’umore in perimenopausa (Maca Rossa)'
    ],
    recommendedDosage: '1.500 - 3.000 mg/giorno di polvere o estratto gelatinizzato',
    bestForms: ['Maca gelatinizzata (la cottura termica a pressione rimuove gli amidi indigesti)', 'Maca Nera (uomini) o Maca Rossa (donne)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con la colazione o miscelata in smoothie, frullati o porridge.',
      avoidTimes: 'Evitare la sera se provoca eccessiva attivazione energetica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Alimento tradizionale naturale secolare privo di tossicità; i composti antiossidanti proteggono il fegato.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per 2-4 mesi consecutivi. Consigliata una pausa di 2 settimane ogni 3 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'tongkat-ali',
        targetSupplementName: 'Tongkat Ali',
        synergyType: 'potenziamento',
        description: 'Massimo vigore e desiderio sessuale: la Maca stimola la via endocannabinoide e il Tongkat la componente steroidea.',
        mechanism: 'Azione complementare su parametri soggettivi di vitalità e oggettivi di vigore.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'umore_ansia']
  },
  {
    id: 'boswellia-serrata',
    name: 'Boswellia Serrata (AKBA 30%)',
    scientificName: 'Estratto di Gommoresina di Boswellia Serrata (ApresFlex / Casperome)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Inibitore selettivo della 5-LOX, dolori articolari acuti, artrosi e colite',
    description: 'La gommoresina dell’albero dell’incenso indiano. I suoi acidi boswellici, in particolare l’AKBA (acido acetil-11-cheto-beta-boswellico), sono gli unici composti naturali capaci di inibire direttamente la 5-lipossigenasi (5-LOX), bloccando la cascata dei leucotrieni infiammatori senza danneggiare la parete gastrica come i FANS.',
    primaryBenefits: [
      'Abbattimento rapido del dolore articolare, rigidità mattutina e infiammazione nella gonartrosi',
      'Riduzione dell’infiammazione intestinale nelle malattie infiammatorie croniche (MICI e colite)',
      'Protezione della cartilagine articolare dall’azione distruttiva delle metalloproteinasi (MMP-3)',
      'Azione antinfiammatoria ad alta tolleranza gastrica che non induce ulcere'
    ],
    recommendedDosage: '100 - 250 mg di estratto arricchito in AKBA (ApresFlex) o 400-800 mg di estratto standardizzato al 65%',
    bestForms: ['ApresFlex (standardizzato al 20-30% AKBA ad assorbimento rapido)', 'Casperome (fitosoma)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere ai pasti principali con un pasto ricco di lipidi (l’assorbimento degli acidi boswellici triplica in presenza di grassi).',
      avoidTimes: 'Evitare a stomaco completamente vuoto.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'A differenza dei FANS chimici che sono epatotossici e gastrolesivi, la boswellia non affatica il fegato e ne riduce le citochine infiammatorie.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per 3-6 mesi nei soggetti con osteoartrite.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'curcumina-piperina',
        targetSupplementName: 'Curcumina',
        synergyType: 'potenziamento',
        description: 'La duplice chemioterapia antinfiammatoria naturale: Curcumina blocca COX-2 e Boswellia blocca 5-LOX.',
        mechanism: 'Spegnimento congiunto dei due rami della cascata dell’acido arachidonico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita', 'digestione']
  },
  {
    id: 'artiglio-del-diavolo',
    name: 'Artiglio del Diavolo',
    scientificName: 'Estratto di Radice Secondaria di Harpagophytum Procumbens',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Antidolorifico naturale per mal di schiena, tendiniti e lombosciatalgie',
    description: 'Pianta selvatica del deserto del Kalahari. I suoi iridoidi glicosidici, guidati dall’arpagoside, inibiscono sia la via della cicloossigenasi (COX-2) sia la produzione di ossido nitrico inducibile (iNOS), con un’azione analgesica comparabile ai farmaci antinfiammatori non steroidei.',
    primaryBenefits: [
      'Alleviamento duraturo della lombalgia acuta e cronica (mal di schiena)',
      'Riduzione dell’infiammazione e del gonfiore nelle tendiniti e borsiti',
      'Miglioramento della mobilità articolare cervicale e lombare',
      'Stimolazione dei succhi gastrici e digestione grazie alle sostanze amare'
    ],
    recommendedDosage: '600 - 1.200 mg/giorno di estratto titolato almeno al 2.5-5% in arpagoside',
    bestForms: ['Estratto secco standardizzato al 5% arpagoside'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il cibo durante i pasti.',
      avoidTimes: 'Controindicato in soggetti con ulcera gastrica o duodenale attiva (le sostanze amare aumentano l’acido cloridrico).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Ben tollerato a livello epatico; gli iridoidi vengono degradati nel colon e metabolizzati normalmente.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane durante le fasi dolorose acute, seguiti da 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'boswellia-serrata',
        targetSupplementName: 'Boswellia Serrata',
        synergyType: 'potenziamento',
        description: 'Azione analgesica e antiflogistica potenziata su muscoli e tendini.',
        mechanism: 'Inibizione contemporanea di mediatori prostaglandinici e leucotrienici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'recupero_sport']
  },
  {
    id: 'carciofo-cinarina',
    name: 'Carciofo (Cinarina)',
    scientificName: 'Estratto di Cynara Scolymus Fogliare (titolato al 5% in Cinarina)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Coleretico, colagogo, drenaggio biliare (Fase III), digestione dei grassi e lipidi',
    description: 'Le foglie basali del carciofo contengono cinarina e acidi caffeilchinici. Agiscono aumentando sia la sintesi sia l’escrezione della bile da parte del fegato (coleresi e colagogia), favorendo la digestione dei pasti pesanti e l’eliminazione del colesterolo in eccesso.',
    primaryBenefits: [
      'Drenaggio biliare accelerato ed eliminazione delle tossine coniugate di Fase III',
      'Risoluzione rapida di gonfiore addominale, nausea, dispepsia e pesantezza post-prandiale',
      'Inibizione della biosintesi endogena di colesterolo negli epatociti (inibisce HMG-CoA reduttasi)',
      'Protezione epatica contro lo stress ossidativo'
    ],
    recommendedDosage: '300 - 600 mg due volte al giorno prima dei pasti',
    bestForms: ['Estratto secco titolato al 5% cinarina e 15% acidi caffeilchinici'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere 15-20 minuti prima di pranzo e cena con un bicchiere d’acqua abbondante.',
      avoidTimes: 'Controindicato in presenza di calcoli biliari ostruttivi o occlusione delle vie biliari.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Un autentico toccasana per il fegato: aumenta la secrezione di bile e protegge gli epatociti dalla morte cellulare programmata.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli di 4-6 settimane, specialmente durante i cambi di stagione o protocolli di pulizia epatica.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cardo-mariano-silimarina',
        targetSupplementName: 'Cardo Mariano',
        synergyType: 'potenziamento',
        description: 'Il duo perfetto per la detossificazione epatica: rigenerazione strutturale + drenaggio delle scorie.',
        mechanism: 'La silimarina protegge l’epatocita mentre il carciofo ne stimola l’efflusso biliare.'
      },
      {
        targetSupplementId: 'tarassaco-radice',
        targetSupplementName: 'Tarassaco Radice',
        synergyType: 'potenziamento',
        description: 'Drenaggio epatorenale completo e depurazione sistemica.',
        mechanism: 'Azione combinata sulla secrezione biliare e diuresi glomerulare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'longevita']
  },
  {
    id: 'tarassaco-radice',
    name: 'Tarassaco Radice (Dente di Leone)',
    scientificName: 'Estratto di Taraxacum Officinale Radice (titolato al 20% in Inulina e Taraxacina)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Drenaggio renale dei liquidi, depurazione biliare e nutrimento prebiotico',
    description: 'La radice del tarassaco racchiude principi amari sesquiterpenici che stimolano la funzionalità epatobiliare e un elevatissimo contenuto di inulina prebiotica. Contemporaneamente, le foglie e le radici favoriscono l’eliminazione idrica renale senza impoverire il corpo di potassio.',
    primaryBenefits: [
      'Eliminazione dei liquidi corporei in eccesso e riduzione della ritenzione idrica',
      'Stimolo della motilità gastrica e della secrezione enzimatica digestiva',
      'Nutrimento selettivo per il microbiota intestinale benefico (Bifidobatteri)',
      'Sostegno all’eliminazione renale delle tossine idrosolubili'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno',
    bestForms: ['Estratto secco concentrato di radice (rapporto 4:1)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pranzo'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino e a mezzogiorno con abbondante acqua.',
      avoidTimes: 'Evitare la sera per prevenire risvegli notturni per minzione.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Stimola il flusso di bile e protegge gli epatociti dall’accumulo di lipidi ossidati.',
      cycleProtocol: {
        required: false,
        description: 'Cicli da 4 settimane nei mesi primaverili o autunnali.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'carciofo-cinarina',
        targetSupplementName: 'Carciofo',
        synergyType: 'potenziamento',
        description: 'Sinergia drenante epato-biliare di riferimento.',
        mechanism: 'Stimolo sinergico delle vie di eliminazione dei reflui organici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'energia']
  },
  {
    id: 'desmodio-adscendens',
    name: 'Desmodio (Desmodium Adscendens)',
    scientificName: 'Estratto Fogliare di Desmodium Adscendens',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Crollo rapido delle transaminasi, riparazione del fegato da chemioterapia e farmaci pesanti',
    description: 'Pianta spontanea della foresta equatoriale africana, scoperta e introdotta nella medicina occidentale dal Dr. Pierre Tubéry. È il fitoterapico più rapido e potente noto per far crollare le transaminasi (AST/ALT) e proteggere gli epatociti durante terapie farmacologiche aggressive.',
    primaryBenefits: [
      'Rapida normalizzazione delle transaminasi epatiche elevate nel sangue',
      'Protezione cellulare epatica durante trattamenti farmacologici pesanti o intossicazioni',
      'Azione antiallergica e broncodilatatrice (inibisce la degranulazione dei mastociti)',
      'Prevenzione della necrosi cellulare negli epatociti'
    ],
    recommendedDosage: '400 - 800 mg/giorno di estratto secco concentrato (oppure decotto tradizionale)',
    bestForms: ['Estratto secco titolato in flavonoidi totali (minimo 0.5% vitexina)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a colazione e cena con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Epatoprotettore supremo d’emergenza medica fitoterapica.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per 3-4 settimane durante cicli farmacologici gravosi o dopo epatiti virali/tossiche.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cardo-mariano-silimarina',
        targetSupplementName: 'Cardo Mariano',
        synergyType: 'potenziamento',
        description: 'Il duo ospedaliero naturale per fegato intossicato.',
        mechanism: 'Il desmodio interviene sul danno acuto e il cardo ricostruisce la membrana epatocitaria.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'digestione']
  },
  {
    id: 'schisandra-chinensis',
    name: 'Schisandra Chinensis',
    scientificName: 'Estratto di Bacche di Schisandra Chinensis (Wu Wei Zi) Titolato in Schisandrine',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Fase I e Fase II epatica, resistenza alla fatica, vista notturna e longevità',
    description: 'La bacca dei cinque sapori della medicina tradizionale cinese. I suoi lignani (schisandrina, gomisina) sono eccezionali induttori coordinati sia della Fase I sia della Fase II della detossificazione epatica, aumentando il glutatione epatico e la lucidità mentale.',
    primaryBenefits: [
      'Coordinamento armonico della Fase I e Fase II epatica (previene accumulo di intermedi tossici)',
      'Aumento della resistenza fisica allo sforzo aerobico e alla fatica senza stimolanti sintetici',
      'Miglioramento dell’adattamento visivo all’oscurità e dell’acuità visiva',
      'Protezione neuronale e surrenalica contro lo stress cronico'
    ],
    recommendedDosage: '400 - 800 mg/giorno di estratto standardizzato al 2-9% in schisandrine totali',
    bestForms: ['Estratto secco standardizzato di bacche intere'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare la sera perché può provocare insonnia o sogni agitati.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Aumenta potentemente gli enzimi epatici antiossidanti glutatione reduttasi e GST (Glutatione S-Transferasi).',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli di 8 settimane seguiti da 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'rhodiola-rosea',
        targetSupplementName: 'Rhodiola Rosea',
        synergyType: 'potenziamento',
        description: 'La leggendaria combinazione adattogena russa (ADAPT-232) usata da cosmonauti e atleti olimpici.',
        mechanism: 'Resistenza sistemica estrema a ipossia, freddo e carichi mentali acuti.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'longevita']
  },
  {
    id: 'astragalo-radice',
    name: 'Astragalo Radice',
    scientificName: 'Estratto di Astragalus Membranaceus Radice (Astragaloside IV)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Attivazione della telomerasi, longevità cellulare, difese immunitarie e funzione renale',
    description: 'Pilastro tonico del Qi nella medicina cinese. Contiene polisaccaridi immunomodulatori e l’astragaloside IV, una molecola clinicamente studiata per la sua capacità di attivare transitoriamente l’enzima telomerasi, ritardando la senescenza cellulare e proteggendo i glomeruli renali.',
    primaryBenefits: [
      'Potenziamento delle difese immunitarie aspecifiche (linfociti NK e macrofagi)',
      'Attivazione della telomerasi e prolungamento della replicazione cellulare sana',
      'Protezione renale (riduzione della proteinuria e miglioramento della filtrazione glomerulare)',
      'Cardioprotezione e miglioramento della frazione di eiezione cardiaca'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno standardizzato al 10-20% in polisaccaridi o astragaloside IV',
    bestForms: ['Estratto ad alta titolazione in Astragaloside IV (TA-65 equivalente)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione. Ideale per la profilassi autunnale e invernale.',
      avoidTimes: 'Evitare durante infezioni febbrili acute in corso (secondo la MTC l’astragalo "intrappola il patogeno all’interno").'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Azione epatoprotettiva e antifibrotica documentata.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 4,
        description: 'Cicli da 3 mesi nei periodi freddi seguiti da 1 mese di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'reishi',
        targetSupplementName: 'Reishi (Ganoderma)',
        synergyType: 'potenziamento',
        description: 'La combinazione asiatica imperiale per longevità e immunità profonda.',
        mechanism: 'Sinergia tra polisaccaridi beta-glucani dell’astragalo e triterpeni del reishi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita', 'energia']
  },
  {
    id: 'echinacea-purpurea',
    name: 'Echinacea Purpurea',
    scientificName: 'Estratto di Pianta Intera e Radice di Echinacea Purpurea & Angustifolia',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Attivazione immediata dei globuli bianchi, barriera contro i malanni invernali',
    description: 'La pianta indigena nordamericana per eccellenza per le vie respiratorie. Le sue alchilamidi si legano ai recettori dei cannabinoidi CB2 sulle cellule immunitarie, stimolando la fagocitosi dei macrofagi e la secrezione di interleuchine difensive.',
    primaryBenefits: [
      'Riduzione della durata e severità del raffreddore e delle infezioni delle prime vie aeree',
      'Stimolo della chemiotassi e fagocitosi dei neutrofili',
      'Inibizione dell’enzima ialuronidasi batterico (blocca la diffusione dei patogeni nei tessuti)',
      'Azione antinfiammatoria sul cavo orale e sulla gola'
    ],
    recommendedDosage: '300 - 500 mg estratto standardizzato in polifenoli o alchilamidi',
    bestForms: ['Estratto fresco standardizzato di Echinacea purpurea (Echinaforce)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere ai pasti con acqua ai primissimi sintomi di malessere stagionale.',
      avoidTimes: 'Non utilizzare per oltre 10-14 giorni continuativi.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Lieve inibizione del citocromo CYP3A4; sicura nei cicli brevi prescritti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 2,
        recommendedBreakWeeks: 2,
        description: 'RIGOROSA REGOLA IMMUNITARIA: assumere massimo 10-14 giorni consecutivi, poi almeno 2 settimane di stop completo per non esaurire la risposta immunocitaria.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-picolinato',
        targetSupplementName: 'Zinco Picolinato',
        synergyType: 'potenziamento',
        description: 'Intervento tempestivo d’urto ai primi starnuti o bruciori di gola.',
        mechanism: 'L’echinacea mobilita i fagociti e lo zinco blocca la replicazione virale enterica/respiratoria.'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'Sinergia classica di supporto immunitario invernale.',
        mechanism: 'Aumento delle scorte di acido ascorbico nei globuli bianchi attivati.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita']
  },
  {
    id: 'sambuco-nero',
    name: 'Sambuco Nero (Sambucus Nigra)',
    scientificName: 'Estratto di Bacche di Sambucus Nigra Standardizzato in Antocianine (Sambucol)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Inattivazione delle emoagglutinine virali dell’influenza e difese respiratorie',
    description: 'Le bacche di sambuco nero contengono flavonoidi specifici che rivestono e neutralizzano le punte delle emoagglutinine dei virus influenzali (A e B), impedendo loro di penetrare attraverso la membrana delle cellule umane sane.',
    primaryBenefits: [
      'Blocco della penetrazione dei virus influenzali nelle cellule delle vie respiratorie',
      'Accorciamento di 3-4 giorni dei sintomi influenzali (febbre, dolori muscolari, tosse)',
      'Potentissimo potere antiossidante grazie al carico di cianidina-3-glucoside',
      'Fluidificazione del muco bronchiale e facilitazione dell’espettorazione'
    ],
    recommendedDosage: '300 - 600 mg di estratto secco standardizzato (o 10-15 ml sciroppo Sambucol)',
    bestForms: ['Estratto standardizzato in antocianine (Haschberg)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con il cibo durante l’inverno o raddoppiare la dose all’esordio dei sintomi.',
      avoidTimes: 'Nessuna controindicazione.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Le antocianine proteggono il fegato dal sovraccarico ossidativo febbrile.',
      cycleProtocol: {
        required: false,
        description: 'Uso quotidiano durante i mesi invernali o a cicli di 10 giorni.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'Scudo antivirale antiossidante completo per l’albero respiratorio.',
        mechanism: 'Protezione delle membrane epiteliali e inibizione del danno da citochine.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['immunita', 'longevita']
  },
  {
    id: 'zenzero-estratto',
    name: 'Zenzero Estratto (Gingeroli 5%)',
    scientificName: 'Estratto di Rizoma di Zingiber Officinale Roscoe (titolato al 5% in Gingeroli)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Svuotamento gastrico accelerato, anti-nausea, analgesico e modulatore COX/LOX',
    description: 'Il rizoma dello zenzero è una farmacia naturale. I suoi costituenti piccanti (gingeroli e shogaoli) stimolano il complesso mioelettrico migrante (MMC) dello stomaco velocizzando lo svuotamento gastrico, inibiscono i recettori 5-HT3 della nausea ed esercitano potente azione analgesica.',
    primaryBenefits: [
      'Risoluzione immediata della nausea (da viaggio, cinetosi, gravidanza o post-operatoria)',
      'Accelerazione dello svuotamento gastrico e risoluzione di pesantezza e reflusso gastrico',
      'Abbattimento del dolore articolare e dei crampi mestruali (dismenorrea acuta)',
      'Miglioramento della circolazione periferica e termogenesi'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno standardizzato al 5% di gingeroli totali',
    bestForms: ['Estratto secco ad alta concentrazione di gingeroli e shogaoli (Ginfort)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere 20 minuti prima o durante i pasti principali con un sorso d’acqua.',
      avoidTimes: 'Non assumere a stomaco completamente vuoto se si soffre di gastrite ipersecretiva.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Straordinario epatoprotettore: previene la steatosi epatica non alcolica (NAFLD) migliorando la sensibilità insulinica del fegato.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'curcumina-piperina',
        targetSupplementName: 'Curcumina',
        synergyType: 'potenziamento',
        description: 'Appartengono alla stessa famiglia botanica (Zingiberaceae): sinergia antinfiammatoria totale.',
        mechanism: 'Inibizione a largo spettro di citochine infiammatorie e NF-kB.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'articolazioni', 'longevita']
  },
  {
    id: 'cannella-di-ceylon',
    name: 'Cannella di Ceylon (Vera)',
    scientificName: 'Estratto di Corteccia di Cinnamomum Verum / Zeylanicum',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Sensibilizzazione insulinica, controllo glicemico ed esente da cumarina tossica',
    description: 'La vera cannella dello Sri Lanka (Cinnamomum verum), nettamente superiore alla cannella comune Cassia (che contiene altissime dosi di cumarina epatotossica). Contiene polimeri MHCP di metilidrossicalcone che mimano l’azione dell’insulina sui recettori cellulari.',
    primaryBenefits: [
      'Riduzione marcata della glicemia post-prandiale e dell’indice insulinemico',
      'Azione insulino-mimetica naturale sui recettori muscolari ed epatici',
      'Totale sicurezza epatica (priva dei livelli pericolosi di cumarina della cannella Cassia)',
      'Proprietà antimicrobiche intestinali e modulazione del microbiota'
    ],
    recommendedDosage: '500 - 1.500 mg/giorno di estratto acquoso o polvere di Ceylon pura',
    bestForms: ['Cinnamomum verum (Ceylon autentica)', 'Estratto acquoso Cinnulin PF privo di composti liposolubili tossici'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere insieme ai pasti che contengono carboidrati o cospargere su cibi come fiocchi d’avena o yogurt.',
      avoidTimes: 'Evitare di acquistare cannella Cassia economica per uso continuativo a lungo termine.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La cannella di Ceylon è sicura per il fegato (<0.004% di cumarina). ATTENZIONE alla Cassia che può causare epatite tossica per accumulo di cumarina.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro purché si verifichi che sia esclusivamente varietà Ceylon.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'berberina-hcl',
        targetSupplementName: 'Berberina HCl',
        synergyType: 'potenziamento',
        description: 'Doppio controllo glicemico naturale: la berberina attiva AMPK e la cannella mima l’insulina.',
        mechanism: 'Sinergia potente per l’azzeramento dell’insulino-resistenza.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'fieno-greco',
    name: 'Fieno Greco (Trigonella)',
    scientificName: 'Estratto di Semi di Trigonella Foenum-Graecum (4-Idrossiisoleucina e Furostanolo)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: '4-Idrossiisoleucina per glucosio, galattagogo e supporto ormonale maschile/femminile',
    description: 'I semi di fieno greco contengono un aminoacido non proteico unico al mondo: la 4-idrossiisoleucina. Questa sostanza stimola la secrezione di insulina glucosio-dipendente (agisce solo se la glicemia è elevata, azzerando il rischio di ipoglicemia) e saponine furostanoliche che sostengono la libido.',
    primaryBenefits: [
      'Regolazione glicemica fisiologica glucosio-dipendente',
      'Aumento naturale della produzione di latte materno nelle neomamme (galattagogo d’elezione)',
      'Sostegno al vigore sessuale maschile e ai livelli di testosterone libero (Testofen)',
      'Miglioramento del transito intestinale grazie alle mucillagini solubili (galattomannani)'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno standardizzato al 20% in 4-idrossiisoleucina o al 50% in saponine (Testofen)',
    bestForms: ['Testofen brevettato (per l’uomo)', 'Estratto purificato ad alto titolo di galattomannani'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere circa 15 minuti prima dei pasti principali con un bicchiere d’acqua colmo.',
      avoidTimes: 'Evitare in gravidanza (può indurre contrazioni uterine).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Riduce l’accumulo di grasso nel fegato e protegge le membrane cellulari epatiche.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane seguiti da 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cromo-picolinato',
        targetSupplementName: 'Cromo Picolinato',
        synergyType: 'potenziamento',
        description: 'Massima stabilità glicemica e azzeramento del picco insulinico post-pasto.',
        mechanism: 'Azione coordinata sul pancreas e sui recettori periferici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'digestione']
  },
  {
    id: 'gymnema-sylvestre',
    name: 'Gymnema Sylvestre (Gurmar)',
    scientificName: 'Estratto Fogliare di Gymnema Sylvestre (Gurmar - Distruttore dello Zucchero)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Blocco dei recettori linguali e intestinali dello zucchero, rigenerazione cellule beta',
    description: 'Chiamata "Gurmar" (distruttore dello zucchero) nella medicina ayurvedica. Gli acidi gymnemici si legano ai recettori del gusto dolce sulla lingua rendendo i dolci completamente insipidi per 1-2 ore, e contemporaneamente bloccano i recettori dell’assorbimento intestinale del glucosio.',
    primaryBenefits: [
      'Spegnimento immediato del desiderio psicologico di cibi zuccherini (craving da dolci)',
      'Riduzione dell’assorbimento intestinale degli zuccheri complessi e semplici',
      'Sostegno alla rigenerazione e vitalità delle cellule beta delle isole di Langerhans pancreatiche',
      'Aiuto insostituibile durante percorsi di perdita di peso e chetogenica'
    ],
    recommendedDosage: '300 - 500 mg due volte al giorno titolato al 25-75% in acidi gymnemici',
    bestForms: ['Estratto standardizzato al 75% in acidi gymnemici'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo', 'pomeriggio'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere 15 minuti prima del pasto o aprire la capsula direttamente sulla lingua al momento di un attacco compulsivo di fame di dolci.',
      avoidTimes: 'Evitare in caso di glicemia troppo bassa a digiuno.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Migliorando il metabolismo degli zuccheri protegge il parenchima epatico dalla steatosi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane alternati a 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'berberina-hcl',
        targetSupplementName: 'Berberina HCl',
        synergyType: 'potenziamento',
        description: 'La coppia vegetale più potente al mondo per azzerare la fame compulsiva e l’insulino-resistenza.',
        mechanism: 'La Gymnema blocca il gusto e l’assorbimento intestinale, la berberina brucia il glucosio cellulare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'fadogia-agrestis',
    name: 'Fadogia Agrestis',
    scientificName: 'Estratto del Fusto di Fadogia Agrestis',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Potente stimolazione dell’ormone luteinizzante (LH), testosterone e dimensioni testicolari',
    description: 'Pianta della tradizione nigeriana che stimola l’ipofisi a rilasciare l’ormone luteinizzante (LH). L’LH segnala direttamente alle cellule di Leydig testicolari di moltiplicare la sintesi di testosterone, con un aumento significativo del vigore maschile.',
    primaryBenefits: [
      'Incremento marcato dei livelli ematici di ormone luteinizzante (LH) e testosterone totale',
      'Aumento del volume e pienezza testicolare',
      'Miglioramento della motivazione, dell’aggressività positiva in palestra e dell’erezione',
      'Supporto ergogenico estremo per atleti di forza naturali'
    ],
    recommendedDosage: '300 - 600 mg/giorno (rapporto di estrazione 10:1 o 20:1)',
    bestForms: ['Estratto secco standardizzato certificato privo di metalli pesanti'],
    timing: {
      idealTimes: ['colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere rigorosamente al mattino con cibo abbondante.',
      avoidTimes: 'NON assumere a stomaco vuoto. NON assumere continuativamente senza cicli di scarico!'
    },
    liverSafety: {
      riskLevel: 'alto_richiede_cicli',
      hepatoprotective: false,
      impactDescription: 'A dosaggi elevati prolungati può presentare tossicità dose-dipendente a carico degli epatociti e dei tubuli renali.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 3,
        recommendedBreakWeeks: 2,
        description: 'RIGIDO PROTOCOLLO DI SICUREZZA: Massimo 3 settimane consecutive di assunzione, seguite OBBLIGATORIAMENTE da almeno 2-3 settimane di scarico totale. Monitorare transaminasi e creatinina.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'tongkat-ali',
        targetSupplementName: 'Tongkat Ali',
        synergyType: 'potenziamento',
        description: 'Il noto stack ormonale Huberman: la Fadogia eleva l’LH a monte e il Tongkat Ali ottimizza il testosterone a valle.',
        mechanism: 'Stimolazione a doppia cascata neuroendocrina.'
      },
      {
        targetSupplementId: 'cardo-mariano-silimarina',
        targetSupplementName: 'Cardo Mariano',
        synergyType: 'protezione',
        description: 'Protezione d’obbligo: preserva le membrane degli epatociti durante il ciclo di Fadogia.',
        mechanism: 'Epatoprotezione attiva contro il carico di alcaloidi concentrati.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport']
  },
  {
    id: 'saw-palmetto',
    name: 'Saw Palmetto (Serenoa Repens)',
    scientificName: 'Estratto Lipido-Sterolico di Serenoa Repens (titolato all’85-95% in Acidi Grassi)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Inibitore della 5-alfa reduttasi, salute prostatica e contrasto all’alopecia androgenetica',
    description: 'Le bacche della palma nana americana sono ricche di acidi grassi liberi e fitosteroli (beta-sitosterolo). Inibiscono gli isoenzimi 1 e 2 della 5-alfa reduttasi, impedendo la conversione del testosterone in diidrotestosterone (DHT), principale responsabile dell’ipertrofia prostatica e della calvizie maschile.',
    primaryBenefits: [
      'Miglioramento del flusso urinario e riduzione della nicturia (minzione notturna) nell’ipertrofia prostatica benigna (IPB)',
      'Riduzione del DHT locale a livello del cuoio capelluto (contrasto alla caduta dei capelli maschile)',
      'Inibizione dei recettori degli estrogeni prostatici e azione antinfiammatoria pelvica',
      'Assenza degli effetti collaterali sessuali tipici dei farmaci di sintesi (Finasteride)'
    ],
    recommendedDosage: '320 mg/giorno in singola dose (estratto lipido-sterolico standardizzato)',
    bestForms: ['Softgel di estratto lipido-sterolico puro titolato all’85-95% acidi grassi'],
    timing: {
      idealTimes: ['cena', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere ai pasti principali con un pasto ricco di grassi per favorire l’assorbimento della frazione lipidica.',
      avoidTimes: 'Nessun vincolo orario stringente.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Ottimo profilo di sicurezza epatica confermato da decenni di trial urologici europei.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per cicli lunghi di 6-12 mesi in caso di IPB o caduta dei capelli.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ortica-radice',
        targetSupplementName: 'Ortica Radice',
        synergyType: 'potenziamento',
        description: 'La combinazione urologica naturale gold standard europea per la prostata.',
        mechanism: 'La Serenoa blocca la 5-alfa reduttasi e l’ortica inibisce l’aromatasi e l’SHBG prostatica.'
      },
      {
        targetSupplementId: 'olio-semi-zucca',
        targetSupplementName: 'Olio di Semi di Zucca',
        synergyType: 'potenziamento',
        description: 'Fornisce delta-7-steroli che competono per i recettori del DHT nella prostata.',
        mechanism: 'Sinergia fitoterapica completa per le vie urinarie maschili.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita']
  },
  {
    id: 'ortica-radice',
    name: 'Ortica Radice (Urtica Dioica)',
    scientificName: 'Estratto di Radice di Urtica Dioica (titolato allo 0.8% in Beta-Sitosterolo e UDA)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Liberazione del testosterone da SHBG, inibizione aromatasi e benessere prostatico',
    description: 'Mentre le foglie di ortica sono usate per le allergie, la radice di ortica contiene lignani e una lectina unica (UDA, Urtica Dioica Agglutinin) che si legano con altissima affinità alla SHBG (Sex Hormone-Binding Globulin), impedendole di sequestrare il testosterone libero.',
    primaryBenefits: [
      'Aumento del testosterone libero mediante blocco competitivo dei siti di legame della SHBG',
      'Inibizione dell’enzima aromatasi che converte il testosterone in eccesso di estradiolo',
      'Riduzione della proliferazione delle cellule dello stroma prostatico',
      'Azione antinfiammatoria sulle vie urinarie maschili e femminili'
    ],
    recommendedDosage: '300 - 600 mg/giorno di estratto di sola radice',
    bestForms: ['Estratto secco di radice titolato al 5:1 o standardizzato in scopoletina'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Nessun vincolo particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Molto sicura; le proprietà antiossidanti supportano la detossificazione epatica e renale.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane alternati a 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'saw-palmetto',
        targetSupplementName: 'Saw Palmetto',
        synergyType: 'potenziamento',
        description: 'Coppia sinergica perfetta per il tratto genitourinario maschile.',
        mechanism: 'Blocco congiunto di conversione ormonale in DHT ed estrogeni.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  },
  {
    id: 'valeriana-officinalis',
    name: 'Valeriana Officinalis',
    scientificName: 'Estratto di Radice di Valeriana Officinalis Titolato allo 0.8% in Acidi Valerenici',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Induzione del sonno naturale, modulazione GABAergica e rilassamento miofasciale',
    description: 'La pianta sedativa più celebre della farmacopea europea. Gli acidi valerenici e i valepotriati inibiscono la degradazione enzimatica del GABA nel cervello e ne stimolano il rilascio sinaptico, facilitando l’induzione del sonno senza creare assuefazione farmacologica.',
    primaryBenefits: [
      'Significativa riduzione del tempo necessario per addormentarsi (latenza del sonno)',
      'Miglioramento dell’architettura e stabilità del sonno senza intontimento mattutino',
      'Sedazione della tachicardia su base ansiosa e delle somatizzazioni viscerali',
      'Rilassamento degli spasmi gastrointestinali e delle contratture muscolari da tensione'
    ],
    recommendedDosage: '300 - 600 mg di estratto circa 45 minuti prima di coricarsi',
    bestForms: ['Estratto secco standardizzato allo 0.8% in acidi valerenici'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere 30-60 minuti prima di andare a dormire con acqua tiepida.',
      avoidTimes: 'Evitare durante il giorno se si devono guidare veicoli o manovrare macchinari.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata dal fegato; sicura alle dosi raccomandate. Evitare di combinare con alcolici.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 1,
        description: 'Consigliati cicli di 4 settimane seguiti da 1 settimana di pausa per non assuefare i recettori del GABA.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'luppolo-estratto',
        targetSupplementName: 'Luppolo Estratto',
        synergyType: 'potenziamento',
        description: 'La sinergia sedativa tedesca per antonomasia (approvata dalla Commissione E).',
        mechanism: 'Azione complementare sui recettori centrali della melatonina e del GABA.'
      },
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'Rilassamento totale di mente e muscoli.',
        mechanism: 'Spegnimento del circuito di eccitazione corticale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'umore_ansia']
  },
  {
    id: 'passiflora-incarnata',
    name: 'Passiflora Incarnata',
    scientificName: 'Estratto di Parti Aeree di Passiflora Incarnata (Fiore della Passione) Titolato al 4% in Flavonoidi (Vitexina)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Ansiolitico naturale contro il rimuginio mentale notturno e l’ansia anticipatoria',
    description: 'Il rimedio d’eccellenza per la persona che non riesce a dormire a causa del flusso incontrollabile di pensieri e preoccupazioni ("cervello che non si spegne"). I flavonoidi (vitexina, isovitexina) modulano dolcemente i recettori GABA-A.',
    primaryBenefits: [
      'Spegnimento del flusso compulsivo di pensieri e rimuginio mentale serale',
      'Azione ansiolitica paragonabile a dosi moderate di benzodiazepine senza provocare dipendenza',
      'Antispasmodico su stomaco e colon irritabile causato da tensione nervosa',
      'Mantenimento della fase di sonno REM ristoratore'
    ],
    recommendedDosage: '300 - 500 mg la sera',
    bestForms: ['Estratto secco standardizzato al 4% in flavonoidi totali espressi come vitexina'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere a cena o prima di coricarsi. Può essere presa anche nel tardo pomeriggio in caso di ansia lavorativa acuta.',
      avoidTimes: 'Evitare prima di mettersi alla guida.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Profilo di sicurezza impeccabile; ampiamente tollerata senza tossicità d’organo.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile sia al bisogno sia in cicli di 4-6 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Sinergia distensiva anti-ansia ad azione rapida.',
        mechanism: 'Induzione simultanea di rilassamento corticale e stabilizzazione emotiva.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'umore_ansia']
  },
  {
    id: 'escolzia-californica',
    name: 'Escolzia (Papavero della California)',
    scientificName: 'Estratto di Parti Aeree di Eschscholzia Californica (titolato allo 0.2% in Protopina)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Sedativo profondo, analgesico notturno e azzeramento dei risvegli notturni',
    description: 'Appartiene alla famiglia delle Papaveraceae. A differenza dell’oppio, non contiene morfina né induce alcuna dipendenza: i suoi alcaloidi benzilisochinolinici (protopina, escolzina, criptopina) modulano i recettori del GABA e della serotonina, garantendo una notte priva di risvegli continui.',
    primaryBenefits: [
      'Eliminazione dei risvegli notturni multipli con difficoltà a riaddormentarsi',
      'Azione analgesica e miorilassante per dolori muscolo-scheletrici o mal di denti notturno',
      'Induzione di un riposo continuo, profondo e rigenerante',
      'Attenuazione dell’inquietudine motoria serale (Sindrome delle gambe senza riposo)'
    ],
    recommendedDosage: '300 - 600 mg prima di dormire',
    bestForms: ['Estratto secco titolato allo 0.2-0.35% in protopina'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere 30 minuti prima di mettersi a letto con mezzo bicchiere d’acqua.',
      avoidTimes: 'Non assumere al mattino o prima di guidare.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata dal fegato; ben tollerata nelle dosi terapeutiche.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 4 settimane seguiti da 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'melatonina',
        targetSupplementName: 'Melatonina',
        synergyType: 'potenziamento',
        description: 'Addormentamento immediato unito a sonno continuo senza risvegli alle 3 del mattino.',
        mechanism: 'La melatonina dà il via all’addormentamento e l’escolzia mantiene la profondità del sonno.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'umore_ansia']
  },
  {
    id: 'melissa-officinalis',
    name: 'Melissa Officinalis',
    scientificName: 'Estratto Fogliare di Melissa Officinalis Standardizzato (titolato al 7-12% in Acido Rosmarinico)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Inibitore della GABA-transaminasi, sonno sereno, spasmi addominali e tiroide iperattiva',
    description: 'Erba aromatica con delicata fragranza di limone. Il suo acido rosmarinico inibisce in modo potente e selettivo l’enzima GABA-transaminasi (GABA-T), che distrugge il GABA nel cervello, determinando un aumento netto e prolungato dei livelli del neurotrasmettitore della quiete.',
    primaryBenefits: [
      'Prolungamento della presenza di GABA nelle sinapsi cerebrali (inibizione di GABA-T)',
      'Rilassamento istantaneo degli spasmi dello stomaco da colite spastica o ansia somatica',
      'Miglioramento dell’attenzione calma e delle prestazioni di memoria sotto stress',
      'Lieve modulazione del recettore del TSH (utile in tendenza a ipertiroidismo o tachicardia)'
    ],
    recommendedDosage: '300 - 600 mg/giorno standardizzato al 7-12% in acido rosmarinico (Cyracos)',
    bestForms: ['Cyracos brevettato a spettro completo'],
    timing: {
      idealTimes: ['cena', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere la sera o nei momenti di somatizzazione ansiosa addominale.',
      avoidTimes: 'Evitare nei casi conclamati di grave ipotiroidismo cronico.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’acido rosmarinico è un eccezionale antiossidante epatico che protegge dalla fibrosi e dalla steatosi.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro fino a 3 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'valeriana-officinalis',
        targetSupplementName: 'Valeriana Officinalis',
        synergyType: 'potenziamento',
        description: 'Sinergia classica di farmacopea: la valeriana stimola il rilascio di GABA e la melissa ne impedisce la distruzione.',
        mechanism: 'Doppio meccanismo sinergico GABAergico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'umore_ansia', 'digestione']
  },
  {
    id: 'luppolo-estratto',
    name: 'Luppolo (Humulus Lupulus)',
    scientificName: 'Estratto di Coni Femminili di Humulus Lupulus (Umulone, Lupulone e 8-Prenilnaringenina)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Agonista dei recettori della melatonina, fitoestrogeno potente e sedativo serale',
    description: 'I coni femminili del luppolo contengono resine amare (umulone e lupulone) e 8-prenilnaringenina (il più potente fitoestrogeno vegetale noto). I suoi metaboliti attivano direttamente i recettori cerebrali della melatonina (MT1 e MT2), abbassando la temperatura corporea notturna.',
    primaryBenefits: [
      'Attivazione diretta dei recettori della melatonina con facilitazione del ritmo circadiano',
      'Sedazione della tensione nervosa, irrequietezza serale e agitazione notturna',
      'Attenuazione marcata delle vampate di calore notturne e insonnia in menopausa',
      'Azione antinfiammatoria e antibatterica mirata'
    ],
    recommendedDosage: '150 - 300 mg di estratto secco prima di coricarsi',
    bestForms: ['Estratto secco standardizzato di infiorescenze femminili'],
    timing: {
      idealTimes: ['prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere 30-45 minuti prima di andare a letto.',
      avoidTimes: 'Evitare negli uomini con ginecomastia o donne con tumori estrogeno-sensibili (per la presenza di 8-PN).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Lo xantoarmolo contenuto nel luppolo protegge gli epatociti dall’infiammazione epatica.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'valeriana-officinalis',
        targetSupplementName: 'Valeriana Officinalis',
        synergyType: 'potenziamento',
        description: 'La combinazione sedativa fitoterapica più documentata d’Europa.',
        mechanism: 'Stimolazione concomitante dei sistemi della melatonina e del GABA.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['sonno', 'umore_ansia']
  },
  {
    id: 'ginseng-rosso-coreano',
    name: 'Ginseng Rosso Coreano (Panax Ginseng)',
    scientificName: 'Estratto di Radice Fermentata al Vapore di Panax Ginseng C.A. Meyer (titolato al 10-15% in Ginsenosidi Rg1, Rb1, Rg3)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Il Signore di tutte le radici: vigore psicofisico, sintesi di NO endoteliale e longevità',
    description: 'La radice di Panax ginseng coltivata per 6 anni e trattata al vapore secondo la tradizione coreana. Questo processo trasforma i ginsenosidi classici in rari ginsenosidi bioattivi (Rg3, Rh1, Rh2 e Composto K), con una biodisponibilità straordinaria per la stimolazione dell’asse ipofisi-surrene, vasodilatazione e resistenza alla fatica.',
    primaryBenefits: [
      'Aumento netto dell’energia fisica, prontezza di riflessi e capacità di concentrazione sotto sforzo',
      'Stimolo alla sintesi di ossido nitrico endoteliale (miglioramento clinicamente provato della funzione erettile)',
      'Modulazione del sistema immunitario e aumento della resistenza alle infezioni respiratorie',
      'Miglioramento della sensibilità all’insulina e del metabolismo glucidico'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno standardizzato al 10-14% in ginsenosidi',
    bestForms: ['Estratto concentrato di Ginseng Rosso Coreano a 6 anni (KRG)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare tassativamente dopo le 15:00 (spiccata azione stimolante sul sistema nervoso).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'I ginsenosidi proteggono gli epatociti dall’ischemia e riducono l’accumulo di lipidi nel fegato.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6-8 settimane seguiti da 2-3 settimane di pausa per non incorrere in tachicardia o sovraeccitazione.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ginkgo-biloba',
        targetSupplementName: 'Ginkgo Biloba',
        synergyType: 'potenziamento',
        description: 'La celebre formula Gincosan: memoria, focus e circolazione cerebrale totale.',
        mechanism: 'Il ginseng energizza i neuroni e il ginkgo massimizza il flusso ematico microvascolare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'recupero_sport']
  },
  {
    id: 'eleuterococco-siberiano',
    name: 'Eleuterococco (Ginseng Siberiano)',
    scientificName: 'Estratto di Radice di Eleutherococcus Senticosus (titolato allo 0.8% in Eleuterosidi B ed E)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Adattogeno di endurance, resistenza aerobica, sistema immunitario senza ansia',
    description: 'Nativo delle foreste della taiga russa e cinese. A differenza del Panax ginseng (che è un potente stimolante neuro-eccitatorio), l’Eleuterococco esercita un’azione tonico-adattogena dolce ma profonda, aumentando la resistenza alla fatica aerobica e stimolando i linfociti T senza causare nervosismo o tachicardia.',
    primaryBenefits: [
      'Aumento dell’efficienza aerobica e risparmio di glicogeno muscolare ed epatico negli sportivi',
      'Potenziamento delle difese immunitarie (incremento dei linfociti T-helper e cellule NK)',
      'Adattamento fisiologico a climi rigidi, sbalzi termici e variazioni di pressione atmosferica',
      'Tonico privo di ansia: ideale per chi non tollera la caffeina o il Panax ginseng'
    ],
    recommendedDosage: '400 - 800 mg/giorno standardizzato allo 0.8% eleuterosidi',
    bestForms: ['Estratto secco standardizzato di radice intera'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare la sera prima di dormire.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Gli eleuterosidi aumentano le riserve di glicogeno epatico e proteggono gli epatociti dall’esaurimento da sforzo.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane durante i cambi stagionali o preparazioni atletiche.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cordyceps',
        targetSupplementName: 'Cordyceps',
        synergyType: 'potenziamento',
        description: 'Lo stack aerobico supremo: massimo VO2 Max e resistenza alla fatica prolungata.',
        mechanism: 'Sinergia tra sintesi di ATP e modulazione surrenalica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'immunita']
  },
  {
    id: 'epimedium-icariina',
    name: 'Epimedium (Horny Goat Weed)',
    scientificName: 'Estratto di Parti Aeree di Epimedium Grandiflorum titolato al 20-50% in Icariina',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Inibitore naturale selettivo della PDE-5, vasodilatazione cavernosa e densità ossea',
    description: 'Pianta della medicina tradizionale cinese. Il suo flavonoide prenilato primario, l’icariina, è l’unico inibitore naturale documentato dell’enzima fosfodiesterasi di tipo 5 (PDE-5, il bersaglio del Viagra), favorendo l’accumulo di cGMP, la vasodilatazione dei corpi cavernosi e la salute ossea.',
    primaryBenefits: [
      'Inibizione della PDE-5 con miglioramento del flusso ematico genitale e rigidità erettile',
      'Aumento della sintesi endoteliale di ossido nitrico (eNOS)',
      'Stimolo della differenziazione degli osteoblasti e prevenzione dell’osteoporosi',
      'Azione neuroprotettiva e sostegno alla dopamina centrale'
    ],
    recommendedDosage: '250 - 500 mg di estratto (titolato al 20% o 50% in icariina pura)',
    bestForms: ['Estratto secco standardizzato al 50% icariina pura'],
    timing: {
      idealTimes: ['colazione_pasti', 'pre_allenamento'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere al mattino o 1-2 ore prima dell’attività con acqua.',
      avoidTimes: 'Evitare se si assumono farmaci nitrati per il cuore.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'L’icariina ha dimostrato proprietà epatoprotettive riducendo la steatosi epatica e l’infiammazione cronica.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'citrullina-malato',
        targetSupplementName: 'Citrullina Malato',
        synergyType: 'potenziamento',
        description: 'La combinazione vasodilatatrice naturale d’elezione: la citrullina produce cGMP e l’icariina ne impedisce la degradazione.',
        mechanism: 'Doppio meccanismo a cascata sul circuito NO/cGMP.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'recupero_sport', 'longevita']
  },
  {
    id: 'zafferano-estratto',
    name: 'Zafferano Puro (Crocina & Safranale)',
    scientificName: 'Estratto di Stimmi di Crocus Sativus Standardizzato (affron / Safr’Inside)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Antidepressivo naturale clinicamente comparato a fluoxetina, serenità e zero fame nervosa',
    description: 'I preziosi stimmi rossi del Crocus sativus. Numerosi trial clinici in doppio cieco hanno dimostrato che il suo estratto brevettato (affron) possiede un’efficacia equivalente agli antidepressivi SSRI nel migliorare il tono dell’umore e ridurre l’ansia, inibendo il reuptake di dopamina, serotonina e noradrenalina SENZA effetti collaterali sessuali o dipendenza.',
    primaryBenefits: [
      'Miglioramento documentato del tono dell’umore e dissoluzione di tristezza e apatia',
      'Riduzione marcata dell’ansia anticipatoria e dello stress emotivo',
      'Spegnimento degli attacchi compulsivi di fame serale (snacking) e fame emotiva',
      'Protezione dei fotorecettori retinici e miglioramento della sensibilità al contrasto visivo'
    ],
    recommendedDosage: '30 mg esatti/giorno (dose standard validata clinicamente)',
    bestForms: ['affron brevettato (standardizzato al 3.5% in Lepticrosalides)', 'Safr’Inside'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino a colazione o prima di cena con un sorso d’acqua.',
      avoidTimes: 'Evitare megadosi massive (grammi) in gravidanza (può stimolare la contrattilità uterina; la dose di 30mg è sicura).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La crocina è un eccezionale antiossidante epatico che protegge gli epatociti dall’infiammazione e dalla fibrosi.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro per 3-6 mesi; i benefici sull’umore compaiono già dopo 2-4 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'La combinazione del buonumore calmo e sereno.',
        mechanism: 'Modulazione contemporanea di onde alfa e neurotrasmettitori monoaminici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'sonno', 'longevita']
  },
  {
    id: 'caralluma-fimbriata',
    name: 'Caralluma Fimbriata',
    scientificName: 'Estratto di Caralluma Fimbriata Standardizzato in Glicosidi Pregnanici (Slimaluma)',
    category: 'erbe_adattogeni',
    categoryLabel: 'Erbe & Adattogeni',
    shortTagline: 'Glicosidi pregnanici per il blocco della fame ipotalamica e inibizione citrato liasi',
    description: 'Cactus indiano commestibile usato da secoli dai cacciatori indigeni come "cibo della carestia" per sopprimere l’appetito durante lunghe battute di caccia. I suoi glicosidi pregnanici segnalano all’ipotalamo la sensazione di sazietà e inibiscono l’enzima ATP-citrato liasi bloccando la formazione di nuovo grasso corporeo.',
    primaryBenefits: [
      'Potente e naturale soppressione del senso di fame e della voracità ai pasti',
      'Riduzione del girovita e del grasso corporeo addominale negli studi clinici',
      'Inibizione dell’enzima citrato liasi (blocco della lipogenesi de novo)',
      'Mantenimento dei livelli di energia fisica durante diete ipocaloriche'
    ],
    recommendedDosage: '500 mg due volte al giorno (totale 1.000 mg/die) prima dei pasti',
    bestForms: ['Slimaluma brevettato standardizzato al 25% in glicosidi pregnanici'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere 30-45 minuti prima dei due pasti principali con un abbondante bicchiere d’acqua colmo.',
      avoidTimes: 'Evitare dopo aver già mangiato (deve agire prima del pasto sul centro ipotalamico della sazietà).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Bloccando la sintesi di nuovi acidi grassi, previene l’accumulo di trigliceridi negli epatociti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8-12 settimane durante percorsi di dimagrimento.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cromo-picolinato',
        targetSupplementName: 'Cromo Picolinato',
        synergyType: 'potenziamento',
        description: 'Controllo totale sia della fame quantitativa sia del craving di zuccheri.',
        mechanism: 'Azione a monte sull’ipotalamo e a valle sul recettore insulinico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita']
  }
];

