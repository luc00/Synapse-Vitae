import { Supplement } from '../../types/supplement';

export const DIGESTIVE_DATA: Supplement[] = [
  {
    id: 'probiotici-multiceppo',
    name: 'Probiotici Multiceppo Gastroresistenti',
    scientificName: 'Miscela Simbiotica di Lattobacilli, Bifidobatteri e Spore (50 Miliardi CFU)',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Equilibrio dell’asse intestino-cervello, barriera mucosale e sintesi di neurotrasmettitori',
    description: 'Complesso ad alta concentrazione di ceppi batterici vivi documentati clinicamente (tra cui L. acidophilus NCFM, B. lactis HN019, L. rhamnosus GG) incapsulati con tecnologia a rilascio enterico per sopravvivere alla barriera acida dello stomaco e colonizzare il tenue e il crasso.',
    primaryBenefits: [
      'Ripristino della flora batterica simbiotica dopo trattamenti con antibiotici',
      'Riduzione di gonfiore addominale post-prandiale, meteorismo e disbiosi intestinale',
      'Modulazione dell’asse intestino-cervello (riduzione dell’ansia e miglioramento dell’umore)',
      'Produzione endogena di acidi grassi a catena corta (butirrato, acetato, propionato)'
    ],
    recommendedDosage: '1 - 2 capsule al giorno (25 - 50 miliardi CFU vivi)',
    bestForms: ['Capsule a rilascio mirato DRcaps a tecnologia microincapsulata'],
    timing: {
      idealTimes: ['mattina_digiuno', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino a digiuno con un bicchiere d’acqua a temperatura ambiente, circa 20-30 minuti prima della colazione (il pH dello stomaco a digiuno è meno acido rispetto al post-prandiale immediato).',
      avoidTimes: 'Non assumere insieme a bevande bollenti (il calore uccide i batteri vivi). Durante una terapia antibiotica, distanziare l’assunzione di almeno 3-4 ore.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Un microbiota integro riduce drasticamente il passaggio di lipopolisaccaridi batterici (LPS) infiammatori attraverso la vena porta al fegato, prevenendo la steatoepatite non alcolica (NASH).',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 6,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 4-6 settimane, seguiti da 2 settimane di pausa, alternando periodicamente i ceppi batterici utilizzati per favorire la biodiversità.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-glutammina',
        targetSupplementName: 'L-Glutammina',
        synergyType: 'potenziamento',
        description: 'La glutammina nutre le cellule epiteliali creando il terreno ideale per l’attecchimento dei ceppi probiotici.',
        mechanism: 'Riparazione della barriera cellulare unita a ricolonizzazione microbica favorevole.'
      },
      {
        targetSupplementId: 'inulina-fos',
        targetSupplementName: 'Inulina FOS',
        synergyType: 'attivazione',
        description: 'Combinazione simbiotica perfetta: il prebiotico (inulina) nutre selettivamente i probiotici assunti.',
        mechanism: 'Fermentazione selettiva con moltiplicazione dei ceppi batterici nel cieco e colon discendente.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita', 'umore_ansia']
  },
  {
    id: 'betaina-hcl',
    name: 'Betaina HCL con Pepsina',
    scientificName: 'Betaina Cloridrato con Pepsina di Origine Suina',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Ripristino dell’acidità gastrica fisiologica, digestione delle proteine e assorbimento B12/minerali',
    description: 'La causa più frequente di reflusso gastrico, gonfiore e pesantezza sopra i 40 anni non è l’iperacidità, bensì l’ipocloridria (carenza di acido cloridrico nello stomaco). La betaina HCL abbassa il pH gastrico a 1.5-2.0, attivando la pepsina e serrando ermeticamente il cardias.',
    primaryBenefits: [
      'Chiusura fisiologica dello sfintere esofageo inferiore (risoluzione del reflusso gastroesofageo da ipocloridria)',
      'Scissione completa delle proteine complesse (bistecche, pesce, uova) senza pesantezza o sonnolenza post-prandiale',
      'Rilascio e assorbimento del fattore intrinseco per la vitamina B12, ferro, calcio e magnesio',
      'Barriera acida naturale contro batteri patogeni e parassiti ingeriti con il cibo'
    ],
    recommendedDosage: '500 - 1.500 mg (1-3 capsule) all’inizio di pasti ricchi di proteine',
    bestForms: ['Betaina HCl pura combinata con Pepsina standardizzata (1:3000)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'REGOLA TASSATIVA: Assumere a metà o subito dopo i primi bocconi del pasto contenente proteine solide. Se si avverte calore o bruciore, scalare la dose.',
      avoidTimes: 'CONTROINDICAZIONE ASSOLUTA: Non assumere MAI a stomaco vuoto. Non assumere MAI se si soffre di ulcere peptiche attive, gastrite erosiva o se si assumono farmaci FANS o cortisonici (rischio perforazione).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'La betaina liberata funge da trimetilglicina (donatore di metili) a livello epatico, proteggendo il fegato dal fegato grasso.',
      cycleProtocol: {
        required: false,
        description: 'Usare quotidianamente in presenza di ipocloridria documentata o pasti proteici gravosi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'ferro-bisglicinato',
        targetSupplementName: 'Ferro Bisglicinato',
        synergyType: 'assorbimento',
        description: 'L’ambiente acido gastrico ionizza il ferro consentendone il successivo legame con i trasportatori enterocitari.',
        mechanism: 'Prevenzione dell’anemia sideropenica da malassorbimento gastrico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'energia']
  },
  {
    id: 'enzimi-digestivi-completi',
    name: 'Enzimi Digestivi Spettro Completo',
    scientificName: 'Complesso Multienzimatico Purificato da Fermentazione di Aspergillus (DigeZyme)',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Amilasi, proteasi, lipasi, cellulasi e lattasi per digestione a 360°',
    description: 'Formulazione multienzimatica bilanciata brevettata DigeZyme resistente ai succhi gastrici e attiva lungo tutto il tratto intestinale (pH da 3.0 a 9.0). Scinde simultaneamente carboidrati, amidi, grassi, proteine, fibre vegetali e lattosio.',
    primaryBenefits: [
      'Eliminazione radicale di fermentazioni coliche, gas intestinale e sensazione di pienezza gastrica',
      'Digestione agevole del lattosio nei soggetti con intolleranza parziale o secondaria',
      'Demolizione delle pareti cellulari vegetali (cellulasi) prevenendo il meteorismo da legumi o verdure',
      'Massimizzazione dell’assorbimento dei micro e macronutrienti negli atleti che consumano elevati introiti calorici'
    ],
    recommendedDosage: '1 - 2 capsule all’inizio dei pasti principali',
    bestForms: ['DigeZyme brevettato vegetale da fermentazione microbica'],
    timing: {
      idealTimes: ['pranzo', 'cena', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con i primi bocconi del pasto o immediatamente prima di iniziare a mangiare con un sorso d’acqua.',
      avoidTimes: 'Non assumere a distanza di ore dal pasto se l’obiettivo è puramente digestivo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Agiscono localmente nel lume intestinale senza alcun assorbimento sistemico né carico per gli epatociti.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile quotidianamente o al bisogno durante pasti abbondanti o fuori casa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'potenziamento',
        description: 'La scissione ottimale del cibo impedisce che molecole indigerite fermentino nel colon, proteggendo il microbiota.',
        mechanism: 'Riduzione dei residui putrefattivi nell’intestino crasso.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'energia']
  },
  {
    id: 'bromelina-2500gdu',
    name: 'Bromelina 2500 GDU',
    scientificName: 'Complesso Proteolitico da Gambo di Ananas Comosus',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Enzima proteolitico, drenaggio degli edemi, riniti sinusali e recupero traumi',
    description: 'Enzima proteolitico estratto dal gambo dell’ananas con altissima attività enzimatica (2500 GDU/g). Ha una duplice anima: assunta con il cibo digerisce le proteine complesse nello stomaco; assunta a stomaco vuoto entra intatta in circolo, degradando la fibrina e drenando edemi, gonfiori e sinusiti.',
    primaryBenefits: [
      'Digestione enzimatica rapida delle proteine alimentari (se assunta durante il pasto)',
      'Potente riassorbimento di edemi post-traumatici, ematomi e gonfiori post-chirurgici (se assunta a stomaco vuoto)',
      'Fluidificazione del muco denso nei seni paranasali e decongestione delle riniti e sinusiti',
      'Inibizione della sintesi di prostaglandine pro-infiammatorie PGE2'
    ],
    recommendedDosage: '500 mg (2500 GDU/g) una o due volte al giorno',
    bestForms: ['Bromelina da gambo d’ananas ad alta titolazione (minimo 2400-2500 GDU/g)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pranzo', 'pomeriggio'],
      mealRequirement: 'indifferente',
      instructions: 'PER LA DIGESTIONE: assumere ai pasti. PER EDEMI E INFIAMMAZIONE: assumere rigorosamente a stomaco vuoto almeno 45 minuti prima dei pasti.',
      avoidTimes: 'Evitare in soggetti con terapia anticoagulante in corso senza parere medico.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Composto naturale proteico degradato fisiologicamente; non carica il citocromo epatico.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 4 settimane per traumi ed edemi; continuativo al bisogno come aiuto digestivo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'assorbimento',
        description: 'La celebre sinergia anti-allergica: la bromelina moltiplica l’assorbimento intestinale della quercetina.',
        mechanism: 'Aumento della permeabilità enterica ai polifenoli e decongestione congiunta delle vie respiratorie.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'articolazioni', 'recupero_sport']
  },
  {
    id: 'butirrato-di-sodio',
    name: 'Butirrato di Sodio Microincapsulato',
    scientificName: 'Sale Sodico dell’Acido Butirrico Microincapsulato in Matrice Lipidica',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Carburante supremo dei colonciti, ricostruzione della barriera intestinale e colon irritabile',
    description: 'Il butirrato è il principale acido grasso a catena corta (SCFA) prodotto dal microbiota sano, nonché il carburante metabolico obbligato per le cellule del colon (colonciti, che ricavano dal butirrato il 70% della loro energia). La microincapsulazione ne maschera il forte odore e ne garantisce il rilascio lento e mirato solo nel colon.',
    primaryBenefits: [
      'Nutrimento e rigenerazione rapida della mucosa del colon (colon irritabile, diverticoli, colite)',
      'Saldatura delle giunzioni serrate epatiche e intestinali con blocco dell’endotossiemia da LPS',
      'Inibizione delle istone deacetilasi (HDAC), promuovendo l’espressione di geni anti-infiammatori',
      'Riduzione del dolore viscerale, della diarrea o della costipazione alternata'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno (frazionati in 2 somministrazioni)',
    bestForms: ['Granuli microincapsulati a lento rilascio colonico gastroprotetti (Butyrate TG / Colirad)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere intero con un bicchiere d’acqua durante i pasti. Non masticare né frantumare le capsule per evitare il rilascio anticipato e il sapore sgradevole.',
      avoidTimes: 'Non aprire la capsula.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il butirrato che raggiunge la vena porta protegge il fegato dalla steatosi, attiva AMPK e migliora la sensibilità all’insulina epatica.',
      cycleProtocol: {
        required: false,
        description: 'Cicli da 8-12 settimane nei soggetti con disbiosi cronica o sindrome del colon irritabile.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'l-glutammina',
        targetSupplementName: 'L-Glutammina',
        synergyType: 'potenziamento',
        description: 'La combinazione epiteliale perfetta per tutto il tubo digerente: la glutammina nutre l’intestino tenue e il butirrato nutre il colon.',
        mechanism: 'Rigenerazione totale mucosa e sottomucosa a 360 gradi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita', 'longevita']
  },
  {
    id: 'psillio-cuticola',
    name: 'Psillio Cuticola Polvere (Fibra Idrosolubile)',
    scientificName: 'Cuticola dei Semi di Plantago Ovata Pura al 99%',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Fibra formante massa gelatinosa, regolarità intestinale, colesterolo e sazietà',
    description: 'La cuticola del seme di Plantago ovata è una fibra solubile pura con straordinarie proprietà mucillaginose. A contatto con i liquidi si espande fino a 40 volte il proprio volume, formando un gel emolliente e vischioso che ammorbidisce le feci dure nella stipsi e compatta le feci liquide nella diarrea.',
    primaryBenefits: [
      'Normalizzazione perfetta del transito intestinale (funziona sia in caso di stitichezza sia di diarrea)',
      'Sequestro intestinale del colesterolo alimentare e dei sali biliari con riduzione delle LDL',
      'Rallentamento dell’assorbimento degli zuccheri e prolungato senso di pienezza e sazietà',
      'Effetto lenitivo e lubrificante sulle pareti infiammate del canale rettale ed emorroidi'
    ],
    recommendedDosage: '5 - 10 g/giorno disciolti in almeno 250-300 ml di acqua',
    bestForms: ['Cuticola pura polvere al 99% non aromatizzata'],
    timing: {
      idealTimes: ['mattina_digiuno', 'prima_dormire'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'REGOLA VITALE: Mescolare la polvere in un bicchiere grande d’acqua (almeno 250-300 ml) e BERE IMMEDIATAMENTE prima che si addensi, seguito da un SECONDO bicchiere d’acqua.',
      avoidTimes: 'Evitare rigorosamente di assumere a secco o con poca acqua (rischio di ostruzione esofagea o fecale). Non assumere farmaci o altri integratori entro 2 ore dallo psillio (la fibra ne riduce l’assorbimento).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Favorisce l’escrezione fecale degli acidi biliari ossidati, inducendo il fegato a consumare colesterolo endogeno per sintetizzarne di nuovi.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa anche per lunghi periodi purché si mantenga un’adeguata idratazione giornaliera (2 litri d’acqua/die).'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'potenziamento',
        description: 'La fibra dello psillio viene lentamente fermentata dai ceppi del colon producendo metaboliti protettivi.',
        mechanism: 'Azione combinata sulla motilità meccanica e sul microbiota.'
      }
    ],
    incompatibilities: [
      {
        targetSupplementId: 'vitamina-d3',
        targetSupplementName: 'Vitamine Liposolubili / Farmaci',
        severity: 'spaziare_orari',
        reason: 'Il gel fibroso intrappola molecole liposolubili e micronutrienti riducendone la captazione.',
        recommendation: 'Distanziarli di almeno 2-3 ore.'
      }
    ],
    targetGoals: ['digestione', 'longevita']
  },
  {
    id: 'inulina-fos',
    name: 'Inulina FOS (Prebiotico da Cicoria)',
    scientificName: 'Frutto-Oligosaccaridi a Catena Corta e Lunga da Radice di Cichorium Intybus',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Super-alimento selettivo per Bifidobatteri, produzione di acidi grassi SCFA e assorbimento minerale',
    description: 'Polisaccaride non digeribile costituito da catene di fruttosio legate con legami beta-(2,1) indigeribili dagli enzimi umani. Raggiunge intatto il colon cieco dove viene fermentato selettivamente e quasi al 100% dai Bifidobatteri benefici, abbassando il pH intestinale.',
    primaryBenefits: [
      'Moltiplicazione esponenziale della popolazione di Bifidobatteri e Lattobacilli nel colon',
      'Massiva produzione endogena di acidi grassi a catena corta (acetato, propionato e butirrato)',
      'Aumento clinicamente testato dell’assorbimento intestinale del Calcio e Magnesio (+20%)',
      'Miglioramento della regolarità fecale e attenuazione del senso di gonfiore cronico'
    ],
    recommendedDosage: '3 - 8 g/giorno (iniziare sempre con 2g per i primi 4 giorni per evitare meteorismo di adattamento)',
    bestForms: ['Orafti Synergy1 (miscela ottimizzata di oligofruttosio e inulina a catena lunga)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Sciogliere in acqua, caffè, tè, yogurt o kefir al mattino o alla sera.',
      avoidTimes: 'Evitare alte dosi improvvise nei soggetti affetti da SIBO (sovracrescita batterica nel tenue) o intolleranza grave ai FODMAP.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il propionato prodotto dalla fermentazione dell’inulina raggiunge il fegato tramite la vena porta e inibisce la lipogenesi epatica de novo.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro come ingrediente quotidiano.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'attivazione',
        description: 'La combinazione simbiotica per antonomasia: il cibo perfetto per i batteri benefici introdotti.',
        mechanism: 'Supporto immediato alla sopravvivenza e duplicazione dei ceppi batterici nel crasso.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita']
  },
  {
    id: 'olio-origano-microincapsulato',
    name: 'Olio di Origano Selvatico Microincapsulato',
    scientificName: 'Estratto di Olio Essenziale di Origanum Vulgare titolato all’80% in Carvacrolo',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Potentissimo antibatterico, antimicotico naturale (Candida, SIBO) e antiparassitario',
    description: 'Il più potente antimicrobico vegetale a largo spettro della natura. I suoi fenoli volatili, in particolare il carvacrolo e il timolo, perforano e disgregano la parete fosfolipidica di batteri patogeni, funghi (Candida albicans) e parassiti intestinali senza sviluppare resistenza batterica.',
    primaryBenefits: [
      'Eradicazione naturale della sovracrescita batterica nel tenue (SIBO) e candida intestinale',
      'Azione antibiotica naturale contro Escherichia coli, Stafilococchi e parassiti intestinali',
      'Distruzione del biofilm batterico patogeno protettivo nel tubo digerente',
      'Sostegno alle difese immunitarie e purificazione delle vie aeree'
    ],
    recommendedDosage: '100 - 200 mg/giorno di olio essenziale emulsionato/microincapsulato (titolato >70% carvacrolo)',
    bestForms: ['Softgel o capsule enteriche gastroresistenti microincapsulate (A.D.P. Biotics)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere SEMPRE a metà pasto con cibo solido abbondante. Non assumere mai olio puro non diluito (causerebbe gravi ustioni chimiche alle mucose).',
      avoidTimes: 'Evitare a stomaco vuoto. Non assumere in gravidanza o allattamento.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: false,
      impactDescription: 'Il carvacrolo e il timolo vengono metabolizzati e coniugati dal fegato; dosaggi eccessivi o uso prolungato possono sovraccaricare gli epatociti.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 2,
        recommendedBreakWeeks: 2,
        description: 'RIGIDO PROTOCOLLO DI PULIZIA: massimo 10-14 giorni consecutivi, seguiti tassativamente da 2 settimane di stop e successiva reintegrazione di probiotici multiceppo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'cardo-mariano-silimarina',
        targetSupplementName: 'Cardo Mariano',
        synergyType: 'protezione',
        description: 'Protegge il fegato dal rilascio massiccio di endotossine derivanti dalla morte dei batteri patogeni (reazione di Herxheimer).',
        mechanism: 'Epatoprotezione e supporto della detossificazione dei residui microbici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita']
  },
  {
    id: 'saccharomyces-boulardii',
    name: 'Saccharomyces Boulardii',
    scientificName: 'Lievito Probiotico Tropicale Saccharomyces Cerevisiae var. Boulardii (20 Miliardi CFU)',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Lievito probiotico antibiotico-resistente, blocco della diarrea e neutralizzazione tossine Clostridium',
    description: 'Lievito probiotico non patogeno scoperto in Indocina sulle bucce di litchi. Essendo un fungo e non un batterio, è GENETICAMENTE IMMUNE agli antibiotici: può essere assunto nello stesso identico momento dell’antibiotico senza morire, prevenendo la diarrea associata a farmaci e legando le tossine A e B del Clostridium difficile.',
    primaryBenefits: [
      'Prevenzione assoluta della diarrea da antibiotici (assumibile in contemporanea al farmaco)',
      'Neutralizzazione enzimatica delle tossine enteriche e stimolo delle IgA secretorie della mucosa',
      'Inibizione dell’adesione della Candida albicans e dei batteri patogeni alla parete intestinale',
      'Sollievo immediato nelle gastroenteriti acute virali e diarrea del viaggiatore'
    ],
    recommendedDosage: '250 - 500 mg/giorno (5 - 10 miliardi CFU)',
    bestForms: ['Saccharomyces boulardii liofilizzato privo di umidità (Florastor)'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere con un bicchiere d’acqua. Può essere preso a qualsiasi orario, anche contestualmente alla pillola dell’antibiotico.',
      avoidTimes: 'Controindicato nei pazienti portatori di catetere venoso centrale (CVC) o in terapia immunosoppressiva massiva (rischio rarissimo di fungemia).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Agisce transientemente nel lume intestinale e viene eliminato nelle feci entro 3-5 giorni dalla sospensione; privo di impatto epatico.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile per tutta la durata della terapia antibiotica più 1 settimana successiva, o cicli di 2-4 settimane per diarrea.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'potenziamento',
        description: 'Il Boulardii bonifica il lume intestinale dalle tossine creando l’ecosistema perfetto per l’attecchimento dei batteri lattici.',
        mechanism: 'Azione combinata antifungina e ricolonizzatrice batterica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita']
  },
  {
    id: 'carbone-vegetale-attivo',
    name: 'Carbone Vegetale Attivo',
    scientificName: 'Carbone Attivo Microporoso da Guscio di Noce di Cocco',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Adsorbimento fisico di gas addominale, tossine batteriche, veleni e pancia piatta',
    description: 'Prodotto attraverso pirolisi e attivazione a vapore dei gusci di noce di cocco. La sua sterminata rete di micropori genera una superficie adsorbente titanica (fino a 1.000 metri quadrati per singolo grammo), che intrappola fisicamente per adsorbimento gas, tossine batteriche e sostanze chimiche.',
    primaryBenefits: [
      'Eliminazione istantanea del meteorismo, aerofagia e tensione dolorosa della pancia gonfia',
      'Adsorbimento e rimozione delle tossine batteriche enteriche in corso di intossicazioni alimentari',
      'Riduzione dell’odore sgradevole dei gas intestinali legando i composti solforati volatili',
      'Pronto soccorso naturale per indigestione e reflusso gassoso'
    ],
    recommendedDosage: '1.000 - 2.000 mg/giorno (assunti almeno 30 minuti dopo i pasti)',
    bestForms: ['Capsule o compresse di carbone vegetale attivo da guscio di noce di cocco'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere 30-45 minuti dopo i pasti principali con un bicchiere d’acqua colmo.',
      avoidTimes: 'ATTENZIONE CRITICA: Il carbone attivo adsorbe indiscriminatamente farmaci (salvavita, pillola anticoncezionale, ormoni tiroidei) e integratori. Distanziare rigorosamente di almeno 3-4 ore da qualunque altro medicinale o integratore!'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Alleggerisce il fegato: intrappola le tossine nel lume intestinale impedendone il riassorbimento epatoportale.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzo raccomandato al bisogno per 2-5 giorni consecutivi, non consigliato per uso quotidiano cronico a lungo termine.'
      }
    },
    positiveSynergies: [],
    incompatibilities: [
      {
        targetSupplementId: 'tutti-gli-integratori',
        targetSupplementName: 'Qualsiasi Farmaco o Integratore',
        severity: 'critico',
        reason: 'Il carbone attivo adsorbe fisicamente le molecole nel proprio reticolo poroso azzerandone la biodisponibilità.',
        recommendation: 'Assumere il carbone ad almeno 3-4 ore di distanza da qualsiasi altro supplemento o farmaco.'
      }
    ],
    targetGoals: ['digestione']
  },
  {
    id: 'mastice-di-chios',
    name: 'Mastice di Chios (Pistacia Lentiscus)',
    scientificName: 'Resina Naturale di Pistacia Lentiscus var. Chia',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Resina greca anti-Helicobacter Pylori, bruciore di stomaco e cicatrizzazione ulcere',
    description: 'Resina aromatica essudata dal tronco del lentisco coltivato esclusivamente nell’isola greca di Chios. Contiene acidi triterpenici (acido masticadienolico e isomasticadienolico) e polimeri naturali che distruggono la membrana dell’Helicobacter pylori ed esercitano una potente azione citoprotettiva sulla parete gastrica.',
    primaryBenefits: [
      'Inibizione e contrasto clinico naturale all’infezione da Helicobacter pylori',
      'Rapida remissione del bruciore di stomaco, gastralgia e dispepsia acuta',
      'Accelerazione della cicatrizzazione delle ulcere gastriche e duodenali',
      'Igiene del cavo orale e riduzione della placca batterica e dell’alitosi'
    ],
    recommendedDosage: '1.000 mg/giorno (divisi in 2 dosi da 500 mg prima dei pasti)',
    bestForms: ['Resina pura in polvere al 100% o capsule certificate DOP Isola di Chios'],
    timing: {
      idealTimes: ['mattina_digiuno', 'cena'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino a stomaco vuoto 30 minuti prima di colazione e prima di cena con acqua.',
      avoidTimes: 'Nessun vincolo particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Studi clinici evidenziano una riduzione degli enzimi epatici nei soggetti con carico infiammatorio.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Protocollo intensivo di 4 settimane per stomaco ed Helicobacter, seguito da 2 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-carnosina',
        targetSupplementName: 'Zinco L-Carnosina',
        synergyType: 'potenziamento',
        description: 'La terapia naturale d’eccellenza contro la gastrite cronica e l’ulcera peptica.',
        mechanism: 'Il mastice neutralizza la carica batterica e lo zinco-carnosina rimargina la lesione tissutale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'immunita']
  },
  {
    id: 'dgl-liquirizia-deglicirrizinata',
    name: 'DGL (Liquirizia Deglicirrizinata)',
    scientificName: 'Estratto di Radice di Glycyrrhiza Glabra privo di Glicirrizina (<1%) GutGard',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Cicatrizzazione mucosa gastrica, barriera da reflusso SENZA innalzare la pressione',
    description: 'Estratto di radice di liquirizia a cui è stata rimossa la glicirrizina (il composto che a dosi continue trattiene sodio ed espelle potassio causando ipertensione arteriosa). Il DGL stimola direttamente la secrezione fisiologica di muco gastrico protettivo e accelera la riparazione dell’epitelio esofageo eroso dal reflusso acido.',
    primaryBenefits: [
      'Stimolo della secrezione di muco gastrico denso che riveste lo stomaco contro gli acidi',
      'Assoluta sicurezza cardiovascolare: non causa ipertensione né ritenzione idrica',
      'Sollievo rapido da pirosi gastrica (bruciore retrosternale) e reflusso laringo-faringeo',
      'Azione antibatterica naturale contro la colonizzazione da Helicobacter pylori'
    ],
    recommendedDosage: '400 - 800 mg (1-2 tavolette masticabili) circa 20 minuti prima dei pasti',
    bestForms: ['GutGard brevettato o tavolette masticabili DGL (la masticazione con la saliva ne attiva i flavonoidi)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Masticare accuratamente 20 minuti prima di pranzo e cena o prima di andare a letto.',
      avoidTimes: 'Evitare la liquirizia intera non deglicirrizinata in caso di ipertensione arteriosa.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'I flavonoidi isolopsisoflavone e glabrene proteggono gli epatociti dall’infiammazione da radicali liberi.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro per 8-12 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'zinco-carnosina',
        targetSupplementName: 'Zinco L-Carnosina',
        synergyType: 'potenziamento',
        description: 'Il duo gastroprotettivo naturale per eccellenza.',
        mechanism: 'Il DGL aumenta il muco e lo zinco-carnosina salda l’epitelio sottomucoso.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione']
  },
  {
    id: 'papaina-enzima-papaya',
    name: 'Papaina Naturale da Carica Papaya',
    scientificName: 'Enzima Endopeptidasico Purificato dal Lattice di Carica Papaya',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Enzima proteolitico a largo spettro di pH, digestione carne e gonfiore gastrico',
    description: 'Enzima idrolitico proteolitico estratto dal frutto acerbo della Papaya. A differenza della pepsina gastrica (che funziona solo a pH fortemente acido), la papaina rimane straordinariamente attiva in un intervallo di pH estesissimo (da 3.0 a 10.5), degradando le proteine sia nello stomaco che nel duodeno alcalino.',
    primaryBenefits: [
      'Digestione completa di carni fibrose, legumi e proteine anche in caso di ridotta acidità gastrica',
      'Riduzione rapida della sensazione di pesantezza e blocco digestivo epigastrico',
      'Azione lenitiva sulle infiammazioni del tratto digerente e delle gengive',
      'Attività antielmintica e di pulizia del tubo enterico'
    ],
    recommendedDosage: '200 - 400 mg all’inizio dei pasti proteici',
    bestForms: ['Papaina pura titolata in unità USP (almeno 6.000 USP per capsula)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con i primi bocconi del pasto principale ricco di proteine.',
      avoidTimes: 'Evitare a stomaco completamente vuoto se si soffre di ulcere sanguinanti attive.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Agisce per via enzimatica intraluminale senza assorbimento sistemico gravoso per il fegato.',
      cycleProtocol: {
        required: false,
        description: 'Utilizzabile quotidianamente o al bisogno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'bromelina-2500gdu',
        targetSupplementName: 'Bromelina',
        synergyType: 'potenziamento',
        description: 'La classica combinazione enzimatica proteolitica esotica Papaya + Ananas.',
        mechanism: 'Scissione complementare di legami peptidici basici e aromatici.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione', 'energia']
  },
  {
    id: 'menta-piperita-olio-enterico',
    name: 'Olio di Menta Piperita Enterico',
    scientificName: 'Olio Essenziale di Mentha x Piperita Microincapsulato Gastroprotetto (Mentolo 50%)',
    category: 'digestione',
    categoryLabel: 'Digestione & Microbiota',
    shortTagline: 'Miorilassante del colon spastico, IBS, gonfiore addominale doloroso e spasmi',
    description: 'Olio essenziale racchiuso in capsule gastroresistenti a cessione enterica che si aprono solo all’ingresso nell’intestino tenue. Il suo costituente primario, l’L-mentolo, blocca i canali del calcio voltaggio-dipendenti nella muscolatura liscia del colon, placando spasmi colici dolorosi e gonfiore dell’IBS.',
    primaryBenefits: [
      'Alleviamento clinicamente documentato del dolore addominale e crampi nella Sindrome del Colon Irritabile (IBS)',
      'Rilassamento immediato della muscolatura circolare liscia intestinale (antispasmodico naturale)',
      'Espulsione rapida dei gas colici intrappolati grazie all’effetto carminativo',
      'Azione antibatterica naturale contro la disbiosi da fermentazione intestinale'
    ],
    recommendedDosage: '1 - 2 capsule enteriche (0.2 ml / 187 mg per capsula) 30-60 minuti prima dei pasti',
    bestForms: ['Capsule enteriche gastroresistenti Colpermin o con rivestimento a rilascio ileocolico (evitano il reflusso di mentolo nello stomaco)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'REGOLA IMPORTANTE: Assumere a stomaco vuoto 30-60 minuti prima dei pasti con acqua fresca (non calda). Ingerire intera senza masticare per evitare che la capsula si apra nello stomaco causando reflusso mentolato.',
      avoidTimes: 'Evitare di assumere insieme a bevande calde o farmaci antiacidi che scioglierebbero prematuramente il rivestimento enterico nello stomaco.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Il mentolo viene coniugato con acido glucuronico nel fegato ed escreto nelle urine senza tossicità alle dosi terapeutiche.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 4 settimane durante le fasi acute di colon irritabile o spasmi dolorosi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'potenziamento',
        description: 'Placa gli spasmi acuti e ripopola la flora per una remissione duratura dell’IBS.',
        mechanism: 'Rilassamento neuromuscolare miofasciale associato a eubiosi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['digestione']
  }
];

