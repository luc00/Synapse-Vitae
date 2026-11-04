import { Supplement } from '../../types/supplement';

export const NOOTROPICS_DATA: Supplement[] = [
  {
    id: 'lions-mane',
    name: 'Lion’s Mane (Hericium)',
    scientificName: 'Hericium Erinaceus (Fungo Criniera di Leone)',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Stimolazione del NGF e BDNF, neurogenesi, memoria e mielinizzazione assonale',
    description: 'Fungo medicinale straordinario ricco di ericenoni (nel corpo fruttifero) ed erinacine (nel micelio). È l’unico composto naturale capace di oltrepassare la barriera emato-encefalica e indurre attivamente la sintesi del Nerve Growth Factor (NGF).',
    primaryBenefits: [
      'Induzione del fattore di crescita nervoso (NGF) e neuroplasticità sinaptica',
      'Miglioramento della memoria a breve e lungo termine e della velocità di elaborazione',
      'Protezione e ricostruzione della guaina mielinica dei neuroni',
      'Azione antinfiammatoria sulla mucosa gastrica e modulazione immunitaria'
    ],
    recommendedDosage: '1.000 - 3.000 mg di estratto standardizzato titolato al 30% in polisaccaridi ed ericenoni',
    bestForms: ['Estratto a doppia estrazione (acqua + alcool) corpo fruttifero + micelio'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione. L’effetto neurotrofico è cumulativo e si manifesta pienamente dopo 3-4 settimane di assunzione quotidiana.',
      avoidTimes: 'Evitare la tarda sera se provoca sogni vividi o leggera ipervigilanza.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'I polisaccaridi beta-glucani proteggono le cellule epatiche dai danni infiammatori e sostengono la rigenerazione tissutale.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per 3-6 mesi. Consigliata 1 settimana di pausa ogni 12 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'alpha-gpc',
        targetSupplementName: 'Alpha-GPC',
        synergyType: 'potenziamento',
        description: 'Mentre il Lion’s Mane induce nuove ramificazioni dendritiche, l’Alpha-GPC fornisce il carburante colinergico per formare le nuove sinapsi.',
        mechanism: 'Neurogenesi strutturale supportata da disponibilità neurotrasmettitoriale.'
      },
      {
        targetSupplementId: 'cordyceps',
        targetSupplementName: 'Cordyceps Militaris',
        synergyType: 'potenziamento',
        description: 'Potente stack micoterapico: focus neuronale e massimo ossigeno cellulare con produzione di ATP.',
        mechanism: 'Stimolo simultaneo su bioenergetica e fattori neurotrofici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'umore_ansia', 'longevita']
  },
  {
    id: 'l-teanina',
    name: 'L-Teanina',
    scientificName: 'Gamma-glutamiletilamide da Camellia Sinensis',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Calma vigile, induzione di onde alfa cerebrali e rimozione del nervosismo da caffeina',
    description: 'Aminoacido non proteico estratto dalle foglie di tè verde. Oltrepassa prontamente la barriera emato-encefalica entro 30 minuti, antagonizzando l’azione eccitatoria del glutammato sui recettori NMDA e stimolando la produzione di onde cerebrali alfa (8-14 Hz).',
    primaryBenefits: [
      'Induzione di uno stato di calma focalizzata e rilassamento senza causare sonnolenza',
      'Eliminazione totale di tachicardia, ansia e crash energetico causati dal caffè',
      'Incremento della memoria di lavoro visuo-spaziale e della flessibilità cognitiva',
      'Modulazione positiva dei neurotrasmettitori dopamina, serotonina e GABA'
    ],
    recommendedDosage: '100 - 200 mg (rapporto ideale 2:1 con la caffeina, es. 200 mg teanina con 100 mg caffeina)',
    bestForms: ['Suntheanine brevettata enantiomericamente pura al 100%'],
    timing: {
      idealTimes: ['colazione_pasti', 'pomeriggio', 'prima_dormire'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere con il caffè del mattino per un focus pulito, oppure la sera prima di dormire per calmare il rimuginio mentale.',
      avoidTimes: 'Nessuna limitazione oraria.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Azione protettiva documentata contro i danni epatici indotti da alcol e sostanze tossiche attraverso la regolazione del glutatione.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa senza assuefazione o dipendenza.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'magnesio-bisglicinato',
        targetSupplementName: 'Magnesio Bisglicinato',
        synergyType: 'potenziamento',
        description: 'Sinergia d’oro serale: disattiva il sistema simpatico e concilia un sonno profondo privo di risvegli.',
        mechanism: 'Azione coordinata sul blocco dei canali del calcio e stimolazione GABAergica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'umore_ansia', 'sonno']
  },
  {
    id: 'bacopa-monnieri',
    name: 'Bacopa Monnieri',
    scientificName: 'Estratto di Bacopa Monnieri (Brahmi) Synapsa/Bacognize',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Consolidamento della memoria a lungo termine, sintesi sinaptica e riduzione dell’ansia cognitiva',
    description: 'Pilastro millenario della medicina ayurvedica (Brahmi). I suoi principi attivi, i bacosidi A e B, stimolano la proliferazione delle ramificazioni dendritiche nei neuroni ippocampali e migliorano l’attività della colina-acetiltransferasi.',
    primaryBenefits: [
      'Aumento notevole del tasso di ritenzione e velocità di richiamo delle informazioni memorizzate',
      'Miglioramento dell’attenzione continua e riduzione degli errori nei test logici complessi',
      'Azione ansiolitica adattogena e modulazione dell’asse HPA (riduzione del cortisolo)',
      'Protezione antiossidante specifica contro la perossidazione lipidica cerebrale'
    ],
    recommendedDosage: '300 - 450 mg/giorno standardizzato al 50% in bacosidi',
    bestForms: ['Synapsa brevettata (focus/studio)', 'Bacognize brevettata (calma/ansia)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'I bacosidi sono liposolubili e possono essere pesanti a stomaco vuoto. Assumere sempre a colazione con grassi sani.',
      avoidTimes: 'Evitare a stomaco vuoto per possibile nausea o lieve letargia iniziale.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'I bacosidi innalzano i livelli epatici di catalasi e superossido dismutasi, proteggendo il parenchima.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 2,
        description: 'I massimi benefici sulla memoria emergono dopo 8-12 settimane di assunzione quotidiana. Fare poi 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'fosfatidilserina',
        targetSupplementName: 'Fosfatidilserina',
        synergyType: 'potenziamento',
        description: 'La combinazione definitiva per studenti e professionisti: memoria solida e abbattimento dello stress da esami.',
        mechanism: 'La bacopa stimola i dendriti mentre la fosfatidilserina ottimizza la fluidità della membrana sinaptica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'umore_ansia', 'longevita']
  },
  {
    id: 'alpha-gpc',
    name: 'Alpha-GPC',
    scientificName: 'L-Alfa-Glicerilfosforilcolina 50% / 99%',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Donatore di colina ad altissima biodisponibilità, picco di forza e sintesi di acetilcolina',
    description: 'Fosfolipide naturale precursore dell’acetilcolina e della fosfatidilcolina. Varcando rapidamente la barriera emato-encefalica, innalza i livelli di acetilcolina nel lobo frontale e stimola la secrezione ipofisaria dell’ormone della crescita (GH).',
    primaryBenefits: [
      'Immediato potenziamento della concentrazione, velocità di pensiero e prontezza di riflessi',
      'Incremento dell’output di forza esplosiva neuromuscolare negli atleti di potenza (+14% forza massimale)',
      'Prevenzione del declino cognitivo senile e riparazione della membrana cellulare neuronale',
      'Stimolo transitorio dell’ormone GH pre-allenamento'
    ],
    recommendedDosage: '300 - 600 mg prima della prestazione',
    bestForms: ['Alpha-GPC polvere al 50% (igroscopica protetta) o capsule pure al 99%'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pre_allenamento'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere 45 minuti prima dell’allenamento o della sessione di lavoro intellettuale con acqua.',
      avoidTimes: 'Evitare la sera dopo le 17:00 per scongiurare l’iperattività mentale e l’insonnia.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Fornisce colina al fegato, proteggendo dalla steatosi epatica e favorendo la sintesi di lipoproteine VLDL per esportare i trigliceridi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli di 8 settimane alternati a 2 settimane di stop per evitare accumulo sistemico di colina e TMAO.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'huperzina-a',
        targetSupplementName: 'Huperzina A',
        synergyType: 'potenziamento',
        description: 'La combinazione colinergica estrema: Alpha-GPC produce acetilcolina e Huperzina A ne impedisce la degradazione.',
        mechanism: 'Doppio meccanismo di incremento del neurotrasmettitore nello spazio intersinaptico.'
      },
      {
        targetSupplementId: 'uridin-monofosfato',
        targetSupplementName: 'Uridina Monofosfato',
        synergyType: 'potenziamento',
        description: 'Formula del Dr. Wurtman per la rigenerazione e densità delle sinapsi neuronali.',
        mechanism: 'Sintesi combinata di fosfatidilcolina cerebrale e aumento dei neuriti.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia', 'recupero_sport']
  },
  {
    id: 'fosfatidilserina',
    name: 'Fosfatidilserina (PS)',
    scientificName: '1,2-Diacil-sn-glicero-3-fosfo-L-serina da Lecitina di Soia o Girasole',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Abbassamento del cortisolo cronico, fluidità delle membrane cellulari e memoria',
    description: 'Fosfolipide maggioritario presente sul foglietto interno della membrana plasmatica dei neuroni. Regola la fluidità cellulare, l’attivazione della proteina chinasi C e modula l’asse ipotalamo-ipofisi-surrene, riducendo i picchi di cortisolo.',
    primaryBenefits: [
      'Riduzione marcata del cortisolo salivare ed ematico indotto da stress psicofisico e sovrallenamento',
      'Miglioramento della memoria a breve termine, denominazione dei volti e apprendimento numerico',
      'Attenuazione dei sintomi di stanchezza mentale da stress ossidativo',
      'Prevenzione dell’invecchiamento cerebrale approvata dalla FDA'
    ],
    recommendedDosage: '200 - 400 mg/giorno (fino a 600-800 mg per atleti in overreaching)',
    bestForms: ['Fosfatidilserina da lecitina di girasole certificata non-OGM (Sharp-PS)'],
    timing: {
      idealTimes: ['cena', 'post_allenamento', 'prima_dormire'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere a cena o subito dopo un allenamento intenso per abbattere il cortisolo post-esercizio.',
      avoidTimes: 'Nessuna controindicazione.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Componente strutturale fisiologica delle membrane cellulari epatiche; totalmente sicuro.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura per periodi continuativi di 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'omega-3-epadha',
        targetSupplementName: 'Omega-3 (DHA)',
        synergyType: 'attivazione',
        description: 'Il DHA si inserisce fisiologicamente nelle molecole di fosfatidilserina della corteccia cerebrale.',
        mechanism: 'Massimizza la fluidità di membrana e l’attività dei canali ionici.'
      },
      {
        targetSupplementId: 'ashwagandha-ksm66',
        targetSupplementName: 'Ashwagandha KSM-66',
        synergyType: 'potenziamento',
        description: 'La coppia anti-cortisolo più potente: abbattimento dell’ansia e rigenerazione del sistema surrenalico.',
        mechanism: 'Azione a monte sull’ipotalamo e a valle sulla corteccia surrenalica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'focus', 'recupero_sport', 'longevita']
  },
  {
    id: 'ginkgo-biloba',
    name: 'Ginkgo Biloba',
    scientificName: 'Estratto Fogliare di Ginkgo Biloba Standardizzato EGb 761',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Microcircolo cerebrale e periferico, memoria, acufeni e ossigenazione',
    description: 'Il più antico albero vivente sulla terra. Il suo estratto standardizzato contiene 24% di glicosidi flavonici e 6% di terpenoidi (ginkgolidi e bilobalide) che migliorano l’elasticità dei capillari, inibiscono il PAF (fattore attivante le piastrine) e aumentano la perfusione cerebrale.',
    primaryBenefits: [
      'Aumento del flusso sanguigno e dell’ossigenazione nei microcapillari cerebrali e vestibolari',
      'Riduzione di acufeni (ronzii auricolari), vertigini e sensazione di testa vuota da ridotto circolo',
      'Miglioramento della velocità di risposta cognitiva e della memoria di richiamo',
      'Protezione della retina e riduzione dell’intolleranza al freddo a mani e piedi (Sindrome di Raynaud)'
    ],
    recommendedDosage: '120 - 240 mg/giorno divisi in 2 somministrazioni',
    bestForms: ['Estratto standardizzato EGb 761 titolato al 24% ginkgoflavonoidi e 6% terpeni'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere a colazione e a pranzo con un bicchiere d’acqua.',
      avoidTimes: 'ATTENZIONE: Sospendere almeno 2 settimane prima di interventi chirurgici. Non associare a farmaci anticoagulanti (Warfarin, Cardioaspirina).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'I flavonoidi proteggono il fegato dall’ischemia da riperfusione. Attenzione all’acido ginkgolico (deve essere <5 ppm per evitare tossicità epato-renale).',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 4,
        description: 'Cicli di 3 mesi seguiti da 1 mese di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vinpocetina',
        targetSupplementName: 'Vinpocetina',
        synergyType: 'potenziamento',
        description: 'Sinergia microcircolatoria cerebrale di livello ospedaliero: vasodilatazione arteriolare selettiva.',
        mechanism: 'Azione complementare su viscosità ematica ed elasticità eritrocitaria.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'longevita', 'energia']
  },
  {
    id: 'huperzina-a',
    name: 'Huperzina A',
    scientificName: 'Alcaloide da Huperzia Serrata (Muschio Cinese)',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Inibitore potente e reversibile dell’acetilcolinesterasi, memoria e sogni lucidi',
    description: 'Composto sesquiterpenico naturale alcaloide estratto dall’Huperzia serrata. Inibisce potentemente l’enzima acetilcolinesterasi (AChE) che distrugge l’acetilcolina, prolungando drasticamente la presenza del neurotrasmettitore nello spazio sinaptico.',
    primaryBenefits: [
      'Straordinario consolidamento della memoria e assimilazione rapida di concetti complessi',
      'Neuroprotezione contro la tossicità da glutammato e lo stress ossidativo',
      'Potenziamento marcato della fase di sonno REM e facilitazione dei sogni lucidi',
      'Emivita cerebrale prolungata (fino a 12-14 ore di efficacia continua)'
    ],
    recommendedDosage: '100 - 200 mcg/giorno (Attenzione: MICROGRAMMI, non milligrammi!)',
    bestForms: ['Estratto standardizzato all’1% in Huperzina A pura'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione.',
      avoidTimes: 'Evitare l’uso quotidiano continuativo: sviluppa tolleranza e può provocare crampi muscolari da eccesso colinergico.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata nel fegato attraverso idrossilazione. A dosi corrette (microgrammi) è priva di epatotossicità.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 3,
        recommendedBreakWeeks: 1,
        description: 'Rigorosa ciclizzazione: 3-4 giorni ON e 3 giorni OFF a settimana, oppure 3 settimane ON e 1 settimana OFF per evitare down-regulation recettoriale.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'alpha-gpc',
        targetSupplementName: 'Alpha-GPC',
        synergyType: 'potenziamento',
        description: 'Stack colinergico ad altissimo impatto cognitivo.',
        mechanism: 'Fornitura del substrato seguita dal blocco della degradazione enzimatica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'longevita']
  },
  {
    id: 'vinpocetina',
    name: 'Vinpocetina',
    scientificName: 'Ester Etilico dell’Apovincamina da Vinca Minor',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Vasodilatatore cerebrale selettivo, captazione del glucosio e inibizione PDE1',
    description: 'Derivato semisintetico dell’alcaloide vincamina presente nella Pervinca. Ha la proprietà unica di dilatare specificamente i vasi sanguigni cerebrali senza provocare cadute pressorie sistemiche periferiche (nessun furto ematico), inibendo la fosfodiesterasi di tipo 1 (PDE1).',
    primaryBenefits: [
      'Aumento selettivo del flusso sanguigno nelle aree ischemiche o ipoperfuse del cervello',
      'Stimolo della captazione e utilizzo del glucosio e dell’ossigeno da parte dei neuroni',
      'Neuroprotezione contro l’eccitotossicità mediata dai canali voltaggio-dipendenti del sodio e calcio',
      'Miglioramento dell’acuità visiva e sollievo da ronzii alle orecchie'
    ],
    recommendedDosage: '10 - 30 mg/giorno (divisi in 2-3 dosi ai pasti)',
    bestForms: ['Vinpocetina pura in capsule'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere SEMPRE a stomaco pieno con un pasto: a digiuno l’assorbimento è solo del 7%, con il cibo sale al 60-100%.',
      avoidTimes: 'Evitare a stomaco vuoto. Non assumere la sera prima di dormire.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata dal fegato nel suo metabolita principale acido cis-apovincaminico (AVA), escreto per via biliare e renale.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane seguiti da 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ginkgo-biloba',
        targetSupplementName: 'Ginkgo Biloba',
        synergyType: 'potenziamento',
        description: 'La coppia di riferimento per l’irrorazione arteriosa cerebrale e microvascolare.',
        mechanism: 'La vinpocetina apre le arteriole e il ginkgo fluidifica il sangue nei capillari terminali.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia', 'longevita']
  },
  {
    id: 'mucuna-pruriens',
    name: 'Mucuna Pruriens',
    scientificName: 'Estratto di Mucuna Pruriens (Fagiolo di Velluto) L-Dopa 98%',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Fonte naturale concentrata di L-DOPA, dopamina, motivazione e prolattina',
    description: 'Pianta rampicante asiatica i cui semi contengono alte concentrazioni di Levodopa (L-Dopa) naturale. A differenza della dopamina periferica, la L-Dopa oltrepassa facilmente la barriera emato-encefalica venendo convertita in dopamina all’interno dei neuroni dopaminergici della substantia nigra.',
    primaryBenefits: [
      'Innalzamento rapido del drive motivazionale, della prontezza mentale e della fiducia in se stessi',
      'Inibizione fisiologica della secrezione ipofisaria di prolattina',
      'Aumento del testosterone e miglioramento della qualità e mobilità del liquido seminale',
      'Supporto alla fluidità motoria e al coordinamento neuromuscolare'
    ],
    recommendedDosage: '250 - 500 mg di estratto (titolato al 15-20% in L-Dopa) oppure 100-200 mg di L-Dopa pura naturale',
    bestForms: ['Estratto standardizzato al 98% L-Dopa pura naturale'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere a digiuno al mattino o 1 ora prima di un impegno ad alto carico psicologico.',
      avoidTimes: 'Evitare pasti iperproteici nello stesso momento (gli aminoacidi grandi neutri competono per l’assorbimento emato-encefalico).'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'La decarbossilazione periferica ad opera della DOPA decarbossilasi epatica produce metaboliti dopaminergici che richiedono coniugazione di Fase II.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'NON usare in modo continuativo: massimo 4 settimane consecutive o solo 2-3 volte a settimana al bisogno, per scongiurare tolleranza e down-regulation dei recettori D2.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'egcg-te-verde',
        targetSupplementName: 'EGCG Tè Verde',
        synergyType: 'attivazione',
        description: 'L’EGCG inibisce l’enzima DOPA decarbossilasi periferica nel sangue.',
        mechanism: 'Impedisce che la L-Dopa si trasformi in dopamina nel corpo periferico, consentendo al 90% in più di entrare nel cervello.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia', 'umore_ansia']
  },
  {
    id: 'gotu-kola',
    name: 'Gotu Kola (Centella Asiatica)',
    scientificName: 'Estratto di Hydrocotyle Asiatica (Centella Asiatica)',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Microcircolo venoso, sintesi di collagene cutaneo, longevità e rigenerazione dendritica',
    description: 'Antica erba nootropica della medicina orientale (Brahmi di Ceylon). Contiene saponine triterpeniche (asiaticoside, madecassoside e acido asiatico) che stimolano l’arborizzazione dei dendriti nell’ippocampo e migliorano il tono delle pareti venose.',
    primaryBenefits: [
      'Crescita e ramificazione dei dendriti neuronali per un potenziamento cognitivo durevole',
      'Rinforzo della parete dei vasi venosi e riduzione del gonfiore da insufficienza venosa e cellulite',
      'Stimolo massiccio della sintesi di collagene di tipo I e cicatrizzazione cutanea',
      'Calma mentale senza sonnolenza e riduzione dell’ansia generalizzata'
    ],
    recommendedDosage: '400 - 800 mg/giorno standardizzato al 10-20% in triterpeni totali',
    bestForms: ['Centellin brevettato', 'Estratto secco titolato 20% asiaticoside'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Evitare megadosi prolungate senza pause.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Mostra proprietà anti-fibrotiche epatiche in modelli sperimentali riducendo l’accumulo di tessuto connettivo negli epatociti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Consigliati cicli di 8 settimane seguiti da 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'diosmina-esperidina',
        targetSupplementName: 'Diosmina & Esperidina',
        synergyType: 'potenziamento',
        description: 'Stack venotonico definitivo per gambe pesanti, vene varicose e microcircolo.',
        mechanism: 'Azione congiunta su permeabilità capillare e tono della parete venosa.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'articolazioni', 'longevita']
  },
  {
    id: 'teacrina',
    name: 'Teacrina (TeaCrine)',
    scientificName: 'Acido 1,3,7,9-Tetrametilurico puro da Kucha Tea',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Energia ed euforia prolungata per 6-8 ore SENZA tolleranza, tachicardia o crash',
    description: 'Alcaloide purino affine alla caffeina estratto dal tè cinese Kucha. A differenza della caffeina, la teacrina attiva i recettori dopaminergici D1/D2 e blocca i recettori dell’adenosina SENZA provocare tachicardia, picchi pressori o tolleranza recettoriale dopo l’uso ripetuto.',
    primaryBenefits: [
      'Energia mentale e fisica stabile e sostenuta per oltre 6 ore consecutive',
      'Assenza di tolleranza o assuefazione (la stessa dose funziona identicamente giorno dopo giorno)',
      'Aumento della motivazione e dell’ottimismo attraverso il rilascio dopaminergico',
      'Nessun crollo energetico brusco (crash) al termine dell’effetto'
    ],
    recommendedDosage: '100 - 200 mg prima dell’impegno',
    bestForms: ['TeaCrine brevettata pura standardizzata'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino a colazione. Avendo un’emivita molto lunga, una sola dose al mattino copre l’intera giornata.',
      avoidTimes: 'Evitare tassativamente dopo le 14:00: la sua emivita di 16-20 ore impedirebbe il sonno notturno!'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzata dal citocromo CYP1A2 senza generare tossicità epatica ai dosaggi raccomandati.',
      cycleProtocol: {
        required: false,
        description: 'A differenza della caffeina, non richiede cicli di scarico forzati poiché non altera la sensibilità dei recettori.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Fluida concentrazione laser per giornate lavorative prolungate.',
        mechanism: 'Modulazione simultanea di adenosina, dopamina e onde cerebrali alfa.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus']
  },
  {
    id: 'sabroxy-oroxylum',
    name: 'Sabroxy (Oroxylum Indicum)',
    scientificName: 'Estratto di Corteccia di Oroxylum Indicum titolato al 10% in Oroxilina A',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Inibitore della ricaptazione della dopamina (DRI) naturale e modulatore GABA-A',
    description: 'Estratto brevettato dalla pianta Oroxylum indicum. Il suo flavone bioattivo principale, l’oroxilina A, è un inibitore naturale selettivo del trasportatore della dopamina (DAT), prolungando la disponibilità di dopamina nella corteccia prefrontale.',
    primaryBenefits: [
      'Focalizzazione prolungata e spinta motivazionale nei compiti noiosi o ripetitivi',
      'Aumento dell’espressione del BDNF nell’ippocampo',
      'Miglioramento dell’attenzione nei soggetti con tendenza alla distrazione (ADHD lieve)',
      'Modulatore allosterico negativo del recettore GABA per prevenire la nebbia mentale'
    ],
    recommendedDosage: '100 - 500 mg/giorno',
    bestForms: ['Sabroxy brevettato titolato al 10% in Oroxilina A'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere al mattino con cibo.',
      avoidTimes: 'Evitare la sera per prevenire insonnia.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'L’oroxilina A mostra attività epatoprotettiva riducendo la steatosi epatica e l’infiammazione indotta da lipidi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 1,
        description: 'Consigliate 4 settimane di assunzione seguite da 1 settimana di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'lions-mane',
        targetSupplementName: 'Lion’s Mane',
        synergyType: 'potenziamento',
        description: 'Sinergia neurotrofica e motivazionale per apprendimento avanzato.',
        mechanism: 'Azione congiunta su NGF e BDNF mediata da dopamina.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'energia']
  },
  {
    id: 'kanna-zembrin',
    name: 'Kanna (Sceletium Tortuosum - Zembrin)',
    scientificName: 'Estratto di Sceletium Tortuosum Standardizzato (Mesembrina)',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Inibitore naturale PDE4 e reuptake serotonina, rimozione rapida dell’ansia sociale',
    description: 'Succulenta del Sud Africa usata da millenni dai popoli San. I suoi alcaloidi (mesembrina e mesembrenone) agiscono come inibitori naturali della fosfodiesterasi 4 (PDE4) e blandi inibitori del reuptake della serotonina (SRI), disinnescando l’iperattività dell’amigdala.',
    primaryBenefits: [
      'Calma immediata dell’amigdala e dissoluzione dell’ansia sociale e prestazionale',
      'Miglioramento delle funzioni esecutive e della flessibilità cognitiva sotto stress',
      'Effetto rapido percepibile entro 30-60 minuti dall’assunzione singola',
      'Miglioramento del tono dell’umore e riduzione dell’irritabilità'
    ],
    recommendedDosage: '25 mg (Zembrin) o 50-100 mg estratto standardizzato',
    bestForms: ['Zembrin brevettato puro standardizzato'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti', 'pomeriggio'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino o 1 ora prima di un evento socialmente stressante (riunione, discorso pubblico).',
      avoidTimes: 'CONTROINDICAZIONE: Non associare MAI a farmaci antidepressivi SSRI o IMAO.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Profilo tossicologico di sicurezza eccellente documentato da studi clinici controllati.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6 settimane o uso sporadico al bisogno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-teanina',
        targetSupplementName: 'L-Teanina',
        synergyType: 'potenziamento',
        description: 'Lo stack della serenità assoluta: calma interiore e distacco dalle tensioni relazionali.',
        mechanism: 'Doppia modulazione su PDE4, serotonina e onde alfa.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['umore_ansia', 'focus']
  },
  {
    id: 'uridina-monofosfato',
    name: 'Uridina Monofosfato (UMP)',
    scientificName: 'Sale Disodico dell’Uridina-5’-Monofosfato',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Sintesi di fosfolipidi sinaptici, recettori dopaminergici e plasticità strutturale',
    description: 'Nucleotide naturale precursore chiave della sintesi dell’RNA cellulare e del CDP-diacilglicerolo. Nel cervello attiva i recettori P2Y2 stimolando la crescita degli assoni e la densità delle spine dendritiche nell’ippocampo.',
    primaryBenefits: [
      'Potenziamento della sinaptogenesi e della densità recettoriale dopaminergica D2',
      'Miglioramento dell’umore, della motivazione e della resilienza emotiva',
      'Supporto al rimodellamento dei circuiti cerebrali danneggiati',
      'Aumento della fluidità di pensiero verbale'
    ],
    recommendedDosage: '250 - 500 mg/giorno (assunzione sublinguale o orale)',
    bestForms: ['Uridina Monofosfato sale disodico puro'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il cibo. Molto efficace se lasciata sciogliere sotto la lingua per 2 minuti prima di deglutire.',
      avoidTimes: 'Nessuna limitazione specifica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’uridina è sintetizzata fisiologicamente dal fegato ed è essenziale per la rigenerazione degli epatociti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli di 8 settimane alternati a 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'omega-3-epadha',
        targetSupplementName: 'Omega-3 (DHA)',
        synergyType: 'attivazione',
        description: 'La combinazione Wurtman per la densità sinaptica: Uridina + DHA + Colina.',
        mechanism: 'Fornisce tutti i precursori limitanti per assemblare nuove membrane sinaptiche.'
      },
      {
        targetSupplementId: 'colina-cdp',
        targetSupplementName: 'CDP-Colina',
        synergyType: 'potenziamento',
        description: 'Massimizza la sintesi endogena di fosfatidilcolina cerebrale.',
        mechanism: 'Attivazione della via metabolica di Kennedy.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'umore_ansia', 'longevita']
  },
  {
    id: 'sulbutiamina',
    name: 'Sulbutiamina (Arcalion)',
    scientificName: 'Isobutirril-diestere della Tiamina Dimero',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Vitamina B1 liposolubile, anti-astenia profonda, memoria e timidezza sociale',
    description: 'Sviluppata in Giappone legando due molecole di tiamina con un ponte disolfuro lipofilo. Supera con estrema facilità la barriera emato-encefalica innalzando i livelli cerebrali di tiamina trifosfato (ThTP) e modulando la trasmissione glutammatergica e dopaminergica.',
    primaryBenefits: [
      'Risoluzione dell’astenia psicofisica cronica, apatia e stanchezza mattutina debilitante',
      'Miglioramento dell’estroversione, della loquacità e disinibizione sociale costruttiva',
      'Potenziamento della memoria episodica e dei tempi di reazione motoria',
      'Aumento della densità dei recettori della dopamina D1 nella corteccia prefrontale'
    ],
    recommendedDosage: '200 - 400 mg/giorno',
    bestForms: ['Sulbutiamina pura in polvere o capsule'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere SEMPRE a colazione con cibi grassi (è fortemente liposolubile).',
      avoidTimes: 'Evitare tassativamente dopo mezzogiorno per rischio concreto di insonnia.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Idrolizzata in tiamina e acido isobutirrico nel fegato e nel sangue; ben tollerata.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 3,
        recommendedBreakWeeks: 1,
        description: 'Utilizzare per cicli brevi di massimo 3-4 settimane o al bisogno (sviluppa tolleranza se assunta continuativamente).'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'alpha-gpc',
        targetSupplementName: 'Alpha-GPC',
        synergyType: 'potenziamento',
        description: 'Sinergia colinergica ed energetica ad altissima prestazione intellettuale.',
        mechanism: 'La tiamina sostiene gli enzimi di sintesi dell’acetilcolina e l’Alpha-GPC ne fornisce il substrato.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'focus', 'umore_ansia']
  },
  {
    id: 'dmae-dimetilaminoetanolo',
    name: 'DMAE (Deanol)',
    scientificName: '2-(Dimetilammino)etanolo Bitartrato',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Tono muscolare facciale, sogni vividi e precursore della colina',
    description: 'Composto organico correlato alla colina. Viene incorporato nei fosfolipidi di membrana neuronale e dermica, riducendo l’accumulo intracellulare di lipofuscina (il pigmento dell’invecchiamento cellulare noto come macchie senili).',
    primaryBenefits: [
      'Miglioramento della tonicità della muscolatura mimica del viso (effetto lifting nutrizionale)',
      'Eliminazione dell’accumulo di granuli di lipofuscina nei tessuti neuronali e cardiaci',
      'Aumento dell’attenzione vigile e lucidità nei compiti prolungati',
      'Induzione di sogni vividi e dettagliati se assunto prima di coricarsi'
    ],
    recommendedDosage: '150 - 350 mg/giorno',
    bestForms: ['DMAE Bitartrato puro'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere al mattino a colazione. Se provoca lieve tensione al collo o alla mandibola, ridurre la dose.',
      avoidTimes: 'Controindicato in gravidanza per potenziale effetto teratogeno sui tessuti embrionali in via di sviluppo.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Metabolizzato nel fegato tramite N-demetilazione in monometilaminoetanolo e colina.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli periodici di 6 settimane seguiti da 2 settimane di stop.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acido-alfa-lipoico',
        targetSupplementName: 'Acido Alfa Lipoico',
        synergyType: 'potenziamento',
        description: 'Celebre combinazione cosmeto-nutrizionale anti-aging per la compattezza della pelle.',
        mechanism: 'Azione congiunta su collagene, tono miofasciale e antiossidazione mitocondriale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'longevita']
  },
  {
    id: 'centrophenoxina-lucidril',
    name: 'Centrophenoxina (Lucidril / Meclofenossato)',
    scientificName: 'Ester Dimetilaminoetilico dell’Acido 4-Clorofenossiacetico',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Rimozione della lipofuscina (scorie dell’invecchiamento cerebrale), memoria e ossigeno',
    description: 'Nootropo anti-invecchiamento cerebrale sviluppato in Francia (Lucidril). È clinicamente validato per la sua capacità senza pari di rimuovere e degradare i depositi intracellulari di lipofuscina (i granuli di pigmento dell’invecchiamento che soffocano i neuroni anziani), aumentando la captazione di glucosio e ossigeno nella corteccia.',
    primaryBenefits: [
      'Eliminazione attiva della lipofuscina accumulata nei neuroni e nelle cellule miocardiche',
      'Miglioramento dell’attenzione, della memoria di fissazione e della lucidità mentale negli anziani',
      'Aumento del flusso ematico e della resistenza neuronale all’ipossia',
      'Donatore cerebrale ad alto rendimento di acetilcolina'
    ],
    recommendedDosage: '250 - 500 mg/giorno al mattino',
    bestForms: ['Centrophenoxina cloridrato pura in capsule'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a colazione con acqua.',
      avoidTimes: 'Evitare nel pomeriggio o la sera (può causare insonnia o tensione muscolare).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: false,
      impactDescription: 'Idrolizzata nel sangue e nel fegato in DMAE e p-clorofenossiacetato (PCPA); ben tollerata.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli periodici di 8 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'uridina-monofosfato',
        targetSupplementName: 'Uridina Monofosfato',
        synergyType: 'potenziamento',
        description: 'Sinergia strutturale di rigenerazione sinaptica.',
        mechanism: 'La Centrophenoxina pulisce la cellula e l’uridina stimola nuove ramificazioni assonali.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'longevita', 'energia']
  },
  {
    id: 'poligala-tenuifolia-yuanzhi',
    name: 'Poligala Tenuifolia (Yuan Zhi)',
    scientificName: 'Estratto di Radice di Polygala Tenuifolia titolato in Tenuifolina e Onjisaponine',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Connessione cuore-mente (MTC), rilascio di BDNF, neurogenesi e sonno ristoratore',
    description: 'Considerata nella medicina cinese una delle erbe più nobili (Yuan Zhi, "Volontà Elevata"), usata dai monaci taoisti per armonizzare la mente con le emozioni (connessione Shen-Cuore). Aumenta rapidamente l’espressione del BDNF ippocampale, inibisce la ricaptazione di triplice monoamina (serotonina, dopamina, noradrenalina) e favorisce un sonno ristoratore.',
    primaryBenefits: [
      'Induzione della sintesi di BDNF (Brain-Derived Neurotrophic Factor) e neurogenesi',
      'Miglioramento dell’umore, attenuazione dell’ansia e dissoluzione della nebbia emotiva',
      'Azione nootropica bilanciata: calma le emozioni e affina la lucidità intellettuale',
      'Supporto al consolidamento della memoria durante la fase di sonno notturno'
    ],
    recommendedDosage: '100 - 300 mg/giorno (estratto concentrato 20:1)',
    bestForms: ['Estratto secco di radice 20:1 idrosolubile ad assorbimento sublinguale/orale'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino per focus oppure la sera prima di cena per distensione emotiva.',
      avoidTimes: 'Evitare a stomaco completamente vuoto se si soffre di gastrite (le saponine possono essere lievemente irritanti).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Le onjisaponine mostrano proprietà protettive epatiche contro il danno da stress ossidativo.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 6 settimane alternati a 2 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'lions-mane',
        targetSupplementName: 'Lion’s Mane',
        synergyType: 'potenziamento',
        description: 'La coppia neurotrofica suprema: Lion’s Mane stimola il NGF e Poligala stimola il BDNF.',
        mechanism: 'Stimolazione a 360° dei due fattori di crescita neuronali cerebrali.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'umore_ansia', 'sonno', 'longevita']
  },
  {
    id: 'celastrus-paniculatus-semi',
    name: 'Celastrus Paniculatus (Albero dell’Intelletto)',
    scientificName: 'Olio / Estratto di Semi di Celastrus Paniculatus (Malkangani)',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'L’"Elisir della Memoria" ayurvedico, neuroprotezione colinergica e lucidità onirica',
    description: 'Chiamato "Pianta dell’Intelletto" (Medhya Rasayana) nei testi sacri vedici. I suoi semi racchiudono sesquiterpeni poliesteri (malkanguniolo, celapanina) che stimolano l’attività colinergica dell’ippocampo, accelerano l’apprendimento nei compiti complessi e promuovono il ricordo dei sogni lucidi.',
    primaryBenefits: [
      'Marcato potenziamento della capacità di apprendimento e ritenzione mnemonica',
      'Neuroprotezione ippocampale contro il danno da radicali liberi e glutammato',
      'Induzione di sogni nitidi, colorati e facilitazione del sogno lucido',
      'Riduzione dell’affaticamento mentale da studio prolungato'
    ],
    recommendedDosage: '5 - 15 gocce di olio puro spremuto a freddo (o 250-500 mg estratto secco)',
    bestForms: ['Olio di semi puro spremuto a freddo di Celastrus paniculatus'],
    timing: {
      idealTimes: ['colazione_pasti', 'prima_dormire'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere poche gocce su una zolletta di miele o in capsula con cibo. Se preso per i sogni lucidi, assumere 30 minuti prima di dormire.',
      avoidTimes: 'Evitare a stomaco vuoto per possibile retrogusto amarognolo pungente.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Antiossidante naturale privo di tossicità alle dosi raccomandate.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 4 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'bacopa-monnieri',
        targetSupplementName: 'Bacopa Monnieri',
        synergyType: 'potenziamento',
        description: 'La formulazione nootropica classica vedica per studenti ed oratori.',
        mechanism: 'Sinergia colinergica ed ippocampale su memoria e velocità mentale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['focus', 'longevita']
  },
  {
    id: 'fosfatidilcolina-pura',
    name: 'Fosfatidilcolina Pura (Lecitina Concentrata)',
    scientificName: '1,2-Diacil-sn-glicero-3-fosfocolina da Lecitina di Girasole Non-OGM',
    category: 'nootropi',
    categoryLabel: 'Nootropi & Cervello',
    shortTagline: 'Membrana cellulare, mielina, fluidità biliare (previene calcoli) e colina naturale',
    description: 'Il fosfolipide più abbondante di tutte le membrane cellulari umane. Fornisce colina legata a glicerolo e acidi grassi, indispensabile per fluidificare la bile epatica impedendo la cristallizzazione del colesterolo in calcoli biliari, e per mantenere l’integrità della guaina mielinica nervosa.',
    primaryBenefits: [
      'Fluidificazione della bile e prevenzione primaria della formazione di calcoli biliari',
      'Riparazione della struttura della membrana plasmatica degli epatociti e dei neuroni',
      'Supporto alla sintesi endogena di acetilcolina per la concentrazione mentale',
      'Assorbimento e solubilizzazione delle vitamine liposolubili e dei nutrienti lipofili'
    ],
    recommendedDosage: '1.200 - 3.600 mg/giorno ai pasti',
    bestForms: ['Softgel di Fosfatidilcolina concentrata al 35-50% da lecitina di girasole non-OGM (esente da soia)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con i pasti principali.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Un pilastro per il fegato: l’apporto di fosfatidilcolina è indispensabile per la secrezione di bile e l’esportazione dei trigliceridi epatici.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione quotidiana continuativa sicura a lungo termine.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cardo-mariano-silimarina',
        targetSupplementName: 'Cardo Mariano',
        synergyType: 'attivazione',
        description: 'La fosfatidilcolina si complessa naturalmente con la silibina formando il fitosoma a massimo assorbimento.',
        mechanism: 'Moltiplica la biodisponibilità intestinale dei flavonolignani epatici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus', 'digestione']
  }
];

