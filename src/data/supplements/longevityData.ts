import { Supplement } from '../../types/supplement';

export const LONGEVITY_DATA: Supplement[] = [
  {
    id: 'coenzima-q10',
    name: 'Coenzima Q10 (Ubichinolo)',
    scientificName: 'Ubichinolo Ridotto Kaneka QH',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Catena respiratoria mitocondriale, cardioprotezione e contrasto alle mialgie da statine',
    description: 'Lipide chinonico essenziale presente nella membrana interna dei mitocondri. È il trasportatore obbligato di elettroni tra i complessi I/II e III per generare oltre il 95% dell’ATP dell’organismo. La forma ridotta (Ubichinolo Kaneka) vanta una biodisponibilità fino a 8 volte superiore rispetto al comune ubichinone ossidato.',
    primaryBenefits: [
      'Generazione di energia biochimica (ATP) negli organi ad altissima richiesta: cuore, cervello, fegato',
      'Prevenzione ed eliminazione totale dei dolori muscolari (mialgie) causati dai farmaci statine',
      'Cardioprotezione, miglioramento della contrattilità miocardica e riduzione della pressione arteriosa',
      'Protezione lipidica delle membrane cellulari e delle particelle LDL contro l’aterogenesi'
    ],
    recommendedDosage: '100 - 200 mg/giorno (fino a 300 mg per atleti o insufficienza cardiaca lieve)',
    bestForms: ['Ubichinolo (Kaneka QH) in softgel a base lipidica'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere SEMPRE durante un pasto contenente lipidi (olio EVO, uova, frutta secca). Senza grassi l’assorbimento intestinale precipita.',
      avoidTimes: 'Evitare la tarda sera: l’innalzamento dell’ATP mitocondriale può manifestarsi con lieve insonnia.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il fegato sintetizza fisiologicamente il CoQ10. L’integrazione riduce lo stress ossidativo epatico e previene la degenerazione mitocondriale degli epatociti.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa senza necessità di pause, specialmente per gli over 40.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'omega-3-epadha',
        targetSupplementName: 'Omega-3 (EPA/DHA)',
        synergyType: 'assorbimento',
        description: 'I lipidi degli Omega-3 fungono da vettore ideale per solubilizzare il CoQ10 massimizzandone la captazione enterocitaria.',
        mechanism: 'Solubilizzazione in micelle miste intestinali e sinergia cardioprotettiva endoteliale.'
      },
      {
        targetSupplementId: 'pqq-pirrolochinolina',
        targetSupplementName: 'PQQ',
        synergyType: 'potenziamento',
        description: 'La combinazione regina per i mitocondri: il CoQ10 ottimizza la respirazione e il PQQ genera nuovi mitocondri.',
        mechanism: 'Biogenesi mitocondriale combinata alla massima efficienza della catena di trasporto elettronico.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita', 'recupero_sport']
  },
  {
    id: 'nac-n-acetilcisteina',
    name: 'N-Acetilcisteina (NAC)',
    scientificName: 'N-Acetil-L-Cisteina di Grado Farmaceutico',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Precursore del glutatione, mucolitico, disintossicazione epatica e spegnimento del neuro-fumo',
    description: 'Derivato acetilato dell’aminoacido cisteina. È il precursore limitante primario per la biosintesi intracellulare del glutatione (GSH), il principale antiossidante e detossificante dell’organismo. Utilizzato d’emergenza in medicina ospedaliera come antidoto all’avvelenamento epatico da paracetamolo.',
    primaryBenefits: [
      'Massima produzione di glutatione intracellulare nel fegato, polmoni e cervello',
      'Fluidificazione enzimatica delle secrezioni mucose dense nelle vie aeree superiori e basse',
      'Protezione epatocellulare contro alcol, inquinanti ambientali, metalli pesanti e farmaci',
      'Modulazione del rilascio di glutammato nel nucleo accumbens (riduzione di dipendenze e DOC)'
    ],
    recommendedDosage: '600 - 1.200 mg/giorno (fino a 1800 mg divisi in caso di forte carico tossico)',
    bestForms: ['NAC pura farmaceutica in capsule gastroresistenti o polvere'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere preferibilmente a digiuno al mattino con un bicchiere d’acqua colmo. In caso di lieve acidità di stomaco, assumere con un piccolo spuntino.',
      avoidTimes: 'Evitare l’assunzione contemporanea con antibiotici orali (spaziare di almeno 2 ore).'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il più potente induttore di glutatione epatico; protegge la Fase II della detossificazione epatica.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane seguiti da 2 settimane di scarico. Nei forti fumatori o atleti di endurance può essere esteso a 12 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'glicina-pura',
        targetSupplementName: 'Glicina Pura',
        synergyType: 'attivazione',
        description: 'Protocollo GlyNAC: la combinazione dei due aminoacidi limitanti ripristina la giovinezza mitocondriale negli over 45.',
        mechanism: 'Sintesi stechiometrica massimale di glutatione ridotto (GSH).'
      },
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'La vitamina C ricicla il glutatione ossidato (GSSG) riconvertendolo nella forma attiva ridotta.',
        mechanism: 'Rigenerazione antiossidante continua a cascata.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'immunita', 'energia']
  },
  {
    id: 'curcumina-piperina',
    name: 'Curcumina (Fitosoma / NovaSOL)',
    scientificName: 'Estratto di Curcuma Longa Standardizzato al 95% in Curcuminoidi',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Spegnimento del master NF-kB, dolori articolari sistemici e neuroinfiammazione',
    description: 'Polifenolo dorato estratto dal rizoma della Curcuma longa. La sua forma nativa ha un assorbimento inferiore all’1%, ma se formulata con fosfolipidi (Meriva) o micelle (NovaSOL) raggiunge una biodisponibilità fino a 185 volte superiore, inibendo il fattore di trascrizione nucleare master dell’infiammazione NF-kB.',
    primaryBenefits: [
      'Blocco selettivo di NF-kB, citochine infiammatorie (IL-6, TNF-alfa) e COX-2',
      'Rapida riduzione del dolore e versamento articolare nell’artrosi e artrite reumatoide',
      'Protezione neuronale contro le placche di beta-amiloide e la neuroinfiammazione',
      'Miglioramento della funzionalità endoteliale vascolare e flessibilità arteriosa'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno di curcumina fitosoma (Meriva) o 250-500 mg micellare (NovaSOL)',
    bestForms: ['Curcumina fitosoma brevettata Meriva (sicura per il fegato)', 'NovaSOL micellare'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere sempre ai pasti con cibi contenenti grassi. Non assumere MAI a digiuno.',
      avoidTimes: 'ATTENZIONE: Evitare preparati casalinghi con dosi massive di Piperina pura se si assumono farmaci salvavita o in caso di fragilità epatica. Controindicata in caso di calcoli biliari ostruttivi.'
    },
    liverSafety: {
      riskLevel: 'moderato',
      hepatoprotective: true,
      impactDescription: 'A dosi nutrizionali è antinfiammatoria; tuttavia l’uso di estratti adulterati o dosi sconsiderate di piperina è stato associato a epatotossicità transitoria.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 3,
        description: 'Cicli da 8 settimane seguiti obbligatoriamente da 3 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'boswellia-serrata',
        targetSupplementName: 'Boswellia Serrata',
        synergyType: 'potenziamento',
        description: 'La più potente associazione antinfiammatoria naturale documentata in reumatologia.',
        mechanism: 'Inibizione congiunta di COX-2 e 5-LOX che blocca sia prostaglandine che leucotrieni.'
      },
      {
        targetSupplementId: 'omega-3-epadha',
        targetSupplementName: 'Omega-3',
        synergyType: 'potenziamento',
        description: 'Sinergia risolutiva dell’infiammazione cronica di basso grado (inflammaging).',
        mechanism: 'Stimolazione congiunta della risoluzione dell’infiammazione mediata da SPM.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['articolazioni', 'longevita', 'digestione']
  },
  {
    id: 'nmn-nicotinamide',
    name: 'NMN (Nicotinamide Mononucleotide)',
    scientificName: 'Beta-Nicotinamide Mononucleotide Uthever',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Precursore diretto del NAD+, riparazione del DNA (PARP) e accensione delle sirtuine (SIRT1-7)',
    description: 'Il nucleotide precursore per eccellenza del Nicotinammide Adenina Dinucleotide (NAD+), molecola la cui concentrazione cellulare crolla del 50% ogni 20 anni. Ripristinando il NAD+ giovanile, riattiva gli enzimi PARP che riparano le rotture del DNA e accende le sirtuine, i guardiani della longevità.',
    primaryBenefits: [
      'Ripristino immediato dei livelli giovanili di NAD+ intracellulare e mitocondriale',
      'Attivazione della famiglia delle sirtuine (SIRT1-SIRT7) per il ringiovanimento epigenetico',
      'Accelerazione della riparazione dei danni a doppio filamento del DNA cellulare',
      'Miglioramento dell’energia muscolare, della sensibilità all’insulina e della vista'
    ],
    recommendedDosage: '250 - 500 mg/giorno (sublinguale o enterico al mattino)',
    bestForms: ['Beta-NMN purificato Uthever (>99% purezza certificata da laboratori terzi)'],
    timing: {
      idealTimes: ['mattina_digiuno'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino appena svegli a digiuno. Se polvere, lasciare sciogliere sotto la lingua per 2 minuti per favorire l’ingresso attraverso i trasportatori Slc12a8.',
      avoidTimes: 'Evitare assolutamente la sera per prevenire insonnia da iperattivazione del metabolismo energetico circadiano.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Sostiene il metabolismo epatico e previene la degenerazione grassa del fegato legata all’età.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 12 settimane seguiti da 2 settimane di scarico. Si consiglia di abbinare TMG (Trimetilglicina) per rifornire i gruppi metilici.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'resveratrolo',
        targetSupplementName: 'Resveratrolo',
        synergyType: 'attivazione',
        description: 'La celebre sinergia Sinclair: il resveratrolo preme l’acceleratore delle sirtuine e l’NMN fornisce il carburante (NAD+).',
        mechanism: 'L’uno senza l’altro opera solo a una frazione del proprio potenziale biologico.'
      },
      {
        targetSupplementId: 'tmg-betaina',
        targetSupplementName: 'TMG (Betaina Anidra)',
        synergyType: 'protezione',
        description: 'Fornisce i gruppi metilici necessari per eliminare i metaboliti nicotinammidici tramite NNMT epatica.',
        mechanism: 'Previene la deplezione dei donatori di metile causata dall’assunzione cronica di NMN.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'focus']
  },
  {
    id: 'resveratrolo',
    name: 'Trans-Resveratrolo Puro',
    scientificName: 'Trans-3,5,4’-Triidrossistilbene da Polygonum Cuspidatum',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Mimetico della restrizione calorica, attivatore allosterico di SIRT1 ed elasticità endoteliale',
    description: 'Fitoalessina stilbenica prodotta dalle piante per difendersi dalle infezioni fungine. È il più potente attivatore allosterico noto dell’enzima di longevità SIRT1, replicando molti degli straordinari benefici biochimici del digiuno e della restrizione calorica.',
    primaryBenefits: [
      'Attivazione diretta della deacetilasi SIRT1 (epigenetica giovanile)',
      'Stimolazione della sintesi endoteliale di ossido nitrico (eNOS) e riduzione della rigidità arteriosa',
      'Miglioramento della sensibilità all’insulina e protezione contro l’ossidazione delle LDL',
      'Azione neuroprotettiva contro la deposizione di placche amiloidi'
    ],
    recommendedDosage: '250 - 500 mg di trans-resveratrolo puro micronizzato/giorno',
    bestForms: ['Trans-Resveratrolo micronizzato al 99% puro (la forma Cis è inerte)'],
    timing: {
      idealTimes: ['colazione_pasti'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere al mattino a colazione SEMPRE con una fonte di grassi sani (es. yogurt intero, olio EVO, avocado) per aumentarne l’assorbimento di 5 volte.',
      avoidTimes: 'Evitare a digiuno con sola acqua (verrebbe quasi interamente espulso non assorbito).'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Subisce una rapida glucuronazione e solfatazione di Fase II nel fegato. A dosi normali (fino a 500mg) protegge il fegato dalla steatosi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 12 settimane alternati a 2 settimane di riposo.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nmn-nicotinamide',
        targetSupplementName: 'NMN',
        synergyType: 'attivazione',
        description: 'Coppia anti-aging di riferimento scientifico mondiale.',
        mechanism: 'SIRT1 richiede sia un modulatore allosterico (resveratrolo) sia co-substrato (NAD+ da NMN).'
      },
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'assorbimento',
        description: 'La quercetina inibisce la glucuronazione epatica del resveratrolo, prolungandone l’emivita ematica.',
        mechanism: 'Inibizione dell’enzima UDP-glucuronosiltransferasi nel fegato.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia']
  },
  {
    id: 'acido-alfa-lipoico',
    name: 'Acido R-Alfa Lipoico (R-ALA)',
    scientificName: 'Acido (R)-5-(1,2-Ditiolan-3-il)pentanoico Puro Stabilizzato',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'L’antiossidante universale idro- e liposolubile, captazione GLUT4 e neuropatie',
    description: 'Definito l’antiossidante universale perché attivo sia nella frazione acquosa (citosol) sia in quella lipidica (membrane cellulari). La forma fisiologica naturale "R" stimola la traslocazione indipendente dei recettori GLUT4 del glucosio e rigenera glutatione, vitamina C ed E.',
    primaryBenefits: [
      'Straordinaria azione antiossidante totale: rigenera glutatione, CoQ10 e vitamine C ed E ossidate',
      'Miglioramento immediato dell’uptake periferico di glucosio (riduzione della glicemia)',
      'Trattamento clinico di prima linea per la neuropatia periferica diabetica e dolori brucianti',
      'Chelazione di metalli pesanti tossici (mercurio, arsenico) nei tessuti profondi'
    ],
    recommendedDosage: '200 - 400 mg/giorno di forma R-ALA pura stabilizzata (o 600 mg di miscela racemica)',
    bestForms: ['Sodio R-Lipoato stabilizzato (Na-R-ALA, non si polimerizza con il calore)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'pranzo'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere almeno 30 minuti prima dei pasti a stomaco vuoto per la massima biodisponibilità.',
      avoidTimes: 'Evitare l’assunzione contemporanea con pasti ricchi di zuccheri se si soffre di ipoglicemia.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Epatoprotettore supremo: fa parte del protocollo del Dr. Burt Berkson per la cirrosi e le epatiti tossiche da Amanita falloide.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8-12 settimane seguiti da 2 settimane di sospensione.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'acetil-l-carnitina',
        targetSupplementName: 'Acetil L-Carnitina (ALCAR)',
        synergyType: 'potenziamento',
        description: 'La celebre combinazione mitocondriale del Prof. Ames per il ringiovanimento metabolico.',
        mechanism: 'Combustione mitocondriale dei grassi unita a protezione immediata dai radicali liberi.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'recupero_sport']
  },
  {
    id: 'fisetina-senolitico',
    name: 'Fisetina (Senolitico da Fragole)',
    scientificName: '3,3’,4’,7-Tetraidrossiflavone da Rhus Succedanea',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Il senolitico naturale più potente al mondo per eliminare le cellule senescenti (zombie)',
    description: 'Flavonoide naturale isolato originariamente dalle fragole. Negli studi della Mayo Clinic si è rivelato il più efficace senolitico naturale: induce selettivamente l’apoptosi delle cellule senescenti infiammatorie ("cellule zombie") senza intaccare le cellule sane, abbattendo il carico di citochine SASP.',
    primaryBenefits: [
      'Eliminazione selettiva delle cellule senescenti pro-infiammatorie tessutali',
      'Aumento dell’aspettativa di vita media e in salute in modelli di senescenza cellulare',
      'Neuroprotezione ippocampale e stimolazione della memoria a lungo termine',
      'Inibizione delle vie mTOR nei tessuti periferici e accensione dell’autofagia'
    ],
    recommendedDosage: '100 - 500 mg/giorno (o protocollo urto "Hit & Run": 20 mg/kg per 2 giorni consecutivi al mese)',
    bestForms: ['Fisetina liposomiale o fitosoma (la biodisponibilità standard è bassa)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere con un pasto ricco di grassi per favorire l’assorbimento enterico.',
      avoidTimes: 'Evitare a digiuno con sola acqua.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Riduce la senescenza degli epatociti e la fibrosi epatica senile.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 4,
        recommendedBreakWeeks: 4,
        description: 'Protocollo ottimale: 2-3 giorni consecutivi ad alto dosaggio una volta al mese, oppure cicli di 4 settimane ON e 4 settimane OFF.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'quercetina',
        targetSupplementName: 'Quercetina',
        synergyType: 'potenziamento',
        description: 'Doppio colpo senolitico naturale per spazzare via le cellule degenerate.',
        mechanism: 'Inibizione complementare dei network anti-apoptotici SCAP cellulari.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus']
  },
  {
    id: 'spermidina-autofagia',
    name: 'Spermidina (Induttore di Autofagia)',
    scientificName: 'Poliammina Naturale da Germe di Grano Fermentato',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Attivazione dell’autofagia cellulare cellulare, salute cardiovascolare e capelli',
    description: 'Poliammina ubiquitaria essenziale per la sopravvivenza cellulare. Stimola in modo potente il processo di autofagia (il sistema cellulare di raccolta e riciclo degli organelli e proteine danneggiate), prolungando la vita delle cellule cardiache e dei follicoli piliferi.',
    primaryBenefits: [
      'Innesco dell’autofagia cellulare anche senza la necessità di digiuni prolungati estremi',
      'Mantenimento dell’elasticità del ventricolo sinistro del cuore e riduzione del rischio cardiovascolare',
      'Allungamento della fase anagen di crescita dei follicoli dei capelli (riduzione del diradamento)',
      'Preservazione della funzione mitocondriale e protezione della memoria senile'
    ],
    recommendedDosage: '1 - 6 mg di spermidina pura/giorno (da estratto standardizzato di germe di grano)',
    bestForms: ['Estratto di germe di grano concentrato titolato in spermidina naturale'],
    timing: {
      idealTimes: ['colazione_pasti', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il cibo durante un pasto.',
      avoidTimes: 'Controindicato nei soggetti con celiachia grave se l’estratto non è certificato privo di glutine.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’autofagia epatica indotta da spermidina previene la fibrosi e la degenerazione epatocitaria.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo per 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'resveratrolo',
        targetSupplementName: 'Resveratrolo',
        synergyType: 'potenziamento',
        description: 'Potente stimolazione dell’autofagia epigenetica e riciclo proteico.',
        mechanism: 'La spermidina inibisce EP300 e il resveratrolo attiva SIRT1.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia']
  },
  {
    id: 'urolitina-a',
    name: 'Urolitina A (Mitopure)',
    scientificName: 'Urolitina A da Idrolisi di Ellagitannini del Melograno',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Mitofagia selettiva, ringiovanimento mitocondriale e forza muscolare nell’invecchiamento',
    description: 'Metabolita post-biotico naturale che solo una persona su tre è in grado di produrre autonomamente nel colon dopo aver consumato melograni o noci. È il primo e unico composto naturale clinicamente validato per indurre la mitofagia (la rimozione e sostituzione dei mitocondri vecchi e logorati).',
    primaryBenefits: [
      'Eliminazione selettiva dei mitocondri disfunzionali (mitofagia) e genesi di mitocondri giovani e potenti',
      'Aumento dimostrato del +12% nella forza muscolare e resistenza fisica negli anziani sedentari',
      'Riduzione dei marker di infiammo-invecchiamento muscolare e sistemico',
      'Miglioramento della salute intestinale e della barriera mucosale'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno',
    bestForms: ['Mitopure Urolitina A brevettata pura al 100%'],
    timing: {
      idealTimes: ['colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione. I benefici muscolari e cellulari si manifestano chiaramente dopo 60-90 giorni di uso quotidiano.',
      avoidTimes: 'Nessun vincolo particolare.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Migliora la bioenergetica degli epatociti ringiovanendo la popolazione mitocondriale del fegato.',
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
        description: 'Sinergia mitocondriale suprema: l’Urolitina genera mitocondri nuovi e sani e il CoQ10 ne alimenta la produzione di energia.',
        mechanism: 'Mitofagia seguita da ottimizzazione energetica fosforilativa.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'recupero_sport']
  },
  {
    id: 'glutatione-liposomiale',
    name: 'Glutatione Ridotto Liposomiale (GSH)',
    scientificName: 'L-Glutatione Ridotto Incapsulato in Fosfolipidi di Lecitina',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Il maestro di tutti gli antiossidanti, detossificazione epatica di Fase II e schiarimento',
    description: 'Il tripeptide antiossidante più importante sintetizzato dal corpo umano. Mentre il comune glutatione orale viene quasi interamente scisso dagli enzimi gastrici prima di entrare in circolo, l’incapsulamento liposomiale protegge la molecola intatta, veicolandola direttamente nelle cellule e nel fegato.',
    primaryBenefits: [
      'Innalzamento rapido del glutatione ematico ed epatico senza dipendere dai precursori limitanti',
      'Detossificazione di Fase II dei composti xenobiotici, metalli pesanti e solventi industriali',
      'Protezione cellulare e mitocondriale contro il danno ossidativo sistemico',
      'Inibizione della tirosinasi cutanea con effetto illuminante e antimacchia sulla pelle'
    ],
    recommendedDosage: '250 - 500 mg/giorno',
    bestForms: ['Glutatione liposomiale liquido Setria o softgel fosfolipidiche'],
    timing: {
      idealTimes: ['mattina_digiuno'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino appena svegli a digiuno, almeno 20 minuti prima di colazione.',
      avoidTimes: 'Evitare l’assunzione contemporanea con bevande calde che possono denaturare le nanosfere liposomiali.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il principale scudo epatico biologico esistente; sostiene direttamente tutti i complessi enzimatici di Fase II.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane durante periodi di affaticamento epatico o esposizione a tossine.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'La vitamina C previene l’ossidazione del glutatione circolante nel sangue.',
        mechanism: 'Mantiene il rapporto GSH/GSSG fortemente sbilanciato a favore della forma ridotta attiva.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'immunita', 'digestione']
  },
  {
    id: 'astaxantina-naturale',
    name: 'Astaxantina Naturale',
    scientificName: 'Carotenoide Xantofillico da Microalga Haematococcus Pluvialis',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Potere antiossidante 6000x rispetto alla Vitamina C, protezione retina e fotoprotezione interna',
    description: 'Il "Re dei Carotenoidi". Grazie alla sua eccezionale struttura molecolare trans-membrana, si inserisce perfettamente attraverso l’intero doppio strato fosfolipidico cellulare, proteggendo sia la parte interna che esterna della cellula. A differenza di altri antiossidanti, non diventa mai pro-ossidante.',
    primaryBenefits: [
      'Potenza antiossidante 6.000 volte superiore alla Vitamina C e 800 volte superiore al CoQ10',
      'Protezione della macula oculare dall’affaticamento visivo da schermi digitali e luce blu',
      'Fotoprotezione naturale interna contro eritemi solari e fotoinvecchiamento cutaneo',
      'Miglioramento della resistenza muscolare e riduzione della produzione di acido lattico'
    ],
    recommendedDosage: '4 - 12 mg/giorno',
    bestForms: ['Astaxantina naturale da Haematococcus pluvialis (AstaReal brevettata)'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere SEMPRE durante un pasto contenente grassi per assicurarne l’assorbimento.',
      avoidTimes: 'Evitare a stomaco vuoto.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Potente azione antinfiammatoria sugli epatociti; previene la progressione della steatosi epatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa per l’intero arco dell’anno, in particolare nei mesi estivi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'luteina-zeaxantina',
        targetSupplementName: 'Luteina & Zeaxantina',
        synergyType: 'potenziamento',
        description: 'Lo scudo oculare completo per chi lavora al computer: macula, retina e cristallino protetti.',
        mechanism: 'Filtro a triplo spettro contro i radicali liberi generati da radiazioni luminose.'
      },
      {
        targetSupplementId: 'olio-krill',
        targetSupplementName: 'Olio di Krill',
        synergyType: 'attivazione',
        description: 'I fosfolipidi del krill veicolano l’astaxantina direttamente attraverso le membrane cellulari.',
        mechanism: 'Massimizzazione della biodisponibilità plasmatica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'recupero_sport', 'energia']
  },
  {
    id: 'luteina-zeaxantina',
    name: 'Luteina & Zeaxantina',
    scientificName: 'Carotenoidi Maculari da Fiori di Tagete (Tagetes Erecta) FloraGLO',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Filtro naturale contro la luce blu dei monitor, densità ottica maculare e contrasto visivo',
    description: 'Gli unici due carotenoidi che si accumulano selettivamente nella fovea centrale della macula lutea retinica. Funzionano come veri e propri "occhiali da sole interni", filtrando la luce blu ad alta energia (400-480 nm) ed eliminando l’ossigeno singoletto generato dalla fototossicità.',
    primaryBenefits: [
      'Aumento della densità del pigmento ottico maculare (MPOD) e protezione dalla maculopatia (DMLE)',
      'Riduzione marcata di affaticamento oculare, secchezza, bruciore e mal di testa da schermi digitali',
      'Miglioramento della sensibilità al contrasto cromatico e riduzione dell’abbagliamento notturno alla guida',
      'Miglioramento della velocità di elaborazione visuo-motoria cerebrale'
    ],
    recommendedDosage: '10 - 20 mg di Luteina e 2 - 4 mg di Zeaxantina/giorno (rapporto ottimale 5:1)',
    bestForms: ['FloraGLO brevettata pura a forma libera (non esterificata)'],
    timing: {
      idealTimes: ['pranzo', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere con il pranzo o la colazione ricca di grassi (essendo carotenoidi lipofili).',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: false,
      impactDescription: 'Molecole naturali alimentari del tutto atossiche per il fegato.',
      cycleProtocol: {
        required: false,
        description: 'Uso continuativo sicuro per anni; il pigmento maculare si accumula gradualmente in 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'astaxantina-naturale',
        targetSupplementName: 'Astaxantina Naturale',
        synergyType: 'potenziamento',
        description: 'Formula visiva completa per programmatori e professionisti digitali.',
        mechanism: 'Protezione sinergica del segmento anteriore e posteriore dell’occhio.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus']
  },
  {
    id: 'sulforafano-nrf2',
    name: 'Sulforafano (Estratto Germogli di Broccoli)',
    scientificName: 'Sulforafano da Glucorafanina e Mirosinasi Attiva (BroccoPhane / TrueBroc)',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Il più potente attivatore naturale del master Nrf2, Fase II epatica e neuroprotezione',
    description: 'Isotiocianato bioattivo presente nei germogli delle crucifere. È l’induttore naturale più potente in assoluto del fattore trascrizionale Nrf2, che accende centinaia di geni che codificano per enzimi antiossidanti e di Fase II (glutatione transferasi, chinone reduttasi).',
    primaryBenefits: [
      'Attivazione titanica della via Nrf2: fino a 72 ore di protezione antiossidante continua per singola dose',
      'Induzione degli enzimi epatici di Fase II per eliminare cancerogeni e benzene ambientale',
      'Spegnimento della neuroinfiammazione cerebrale e protezione della barriera emato-encefalica',
      'Supporto alla regolarizzazione ormonale dell’estrogeno negli uomini e nelle donne'
    ],
    recommendedDosage: '10 - 30 mg di sulforafano attivo/giorno (o 50-100 mg di glucorafanina con mirosinasi)',
    bestForms: ['Estratto di germogli di broccoli contenente mirosinasi attiva stabilizzata'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere a colazione con cibi freschi. Non riscaldare mai le capsule.',
      avoidTimes: 'Evitare a stomaco completamente vuoto se provoca lieve bruciore solforato.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’attivatore di Fase II epatico per antonomasia: moltiplica l’espressione della Glutatione S-Transferasi.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane alternati a 2 settimane di stacco.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'curcumina-piperina',
        targetSupplementName: 'Curcumina',
        synergyType: 'potenziamento',
        description: 'Accoppiata epigenetica perfetta: la curcumina spegne NF-kB e il sulforafano accende Nrf2.',
        mechanism: 'Controllo simultaneo dell’infiammazione e della detossificazione radicalica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'immunita']
  },
  {
    id: 'tmg-betaina',
    name: 'TMG (Trimetilglicina / Betaina Anidra)',
    scientificName: 'N,N,N-Trimetilglicina Pura da Barbabietola da Zucchero',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Donatore universale di gruppi metile, abbattimento dell’omocisteina e idratazione cellulare',
    description: 'La betaina anidra cede un gruppo metilico direttamente all’omocisteina tossica tramite l’enzima epatico BHMT (betaina-omocisteina S-metiltransferasi), convertendola in metionina innocua indipendentemente dalla vitamina B12 o dal folato.',
    primaryBenefits: [
      'Rapido e drastico abbassamento dei livelli ematici di omocisteina (riduzione rischio vascolare)',
      'Fornitura continua di gruppi metilici per l’epigenetica, la sintesi di creatina e fosfolipidi',
      'Protezione degli epatociti dall’accumulo di grasso e dalla fibrosi da alcol',
      'Potente osmolita cellulare che preserva l’idratazione dei muscoli e la forza massimale'
    ],
    recommendedDosage: '500 - 1.500 mg/giorno (fino a 2.500 mg per atleti di forza)',
    bestForms: ['Trimetilglicina anidra pura al 100%'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione. Si scioglie all’istante in acqua.',
      avoidTimes: 'Evitare la tarda sera: la metilazione può manifestarsi con un lieve effetto energizzante.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Fondamentale per il fegato: utilizzato clinicamente per trattare la steatosi epatica e donare metili alla fosfatidilcolina.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura continuativa, indispensabile in associazione all’integrazione di NMN o NR.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nmn-nicotinamide',
        targetSupplementName: 'NMN',
        synergyType: 'protezione',
        description: 'La combinazione preventiva indispensabile: il TMG rifornisce i gruppi metilici consumati dal metabolismo del NAD+.',
        mechanism: 'Previene la caduta dei livelli di SAMe e protegge gli enzimi della metilazione epatica.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'recupero_sport']
  },
  {
    id: 'pycnogenol-pino',
    name: 'Pycnogenol (Pino Marittimo Francese)',
    scientificName: 'Estratto di Corteccia di Pinus Pinaster Standardizzato al 70% in Procianidine',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Microcircolo, elasticità cutanea, sintesi di ossido nitrico endoteliale e vene',
    description: 'Estratto brevettato dalla corteccia dei pini marittimi delle foreste protette delle Landes in Francia. Il suo concentrato di procianidine oligomeriche (OPC) stimola l’enzima eNOS endoteliale aumentando l’ossido nitrico, protegge il collagene e l’elastina dalla degradazione enzimatica.',
    primaryBenefits: [
      'Miglioramento del microcircolo capillare e rimozione della pesantezza alle gambe',
      'Protezione dell’elastina e del collagene cutaneo contro elastasi e collagenasi (anti-rughe)',
      'Potenziamento della rigidità erettile in associazione con L-arginina o citrullina',
      'Azione antinfiammatoria articolare e sollievo nei disturbi da jet lag'
    ],
    recommendedDosage: '50 - 100 mg due volte al giorno',
    bestForms: ['Pycnogenol originale certificato Horphag Research'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_qualsiasi',
      instructions: 'Assumere con cibo e acqua a colazione e pranzo.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'I bioflavonoidi proteggono il fegato dai radicali liberi e migliorano la perfusione vascolare epatica.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura continuativa per cicli di 3-6 mesi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'citrullina-malato',
        targetSupplementName: 'Citrullina Malato',
        synergyType: 'potenziamento',
        description: 'La celebre formula vasodilatatrice Prelox per la salute endoteliale ed erettile maschile.',
        mechanism: 'La citrullina fornisce il substrato di arginina e il Pycnogenol attiva l’enzima eNOS.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia', 'articolazioni']
  },
  {
    id: 'shilajit-purificato',
    name: 'Shilajit Purificato Himalayano (Mumijo)',
    scientificName: 'Estratto di Shilajit Purificato Titolato al 50% in Acido Fulvico (PrimaVie)',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Acido fulvico naturale, oltre 84 oligoelementi ionici, ATP ed energia mitocondriale',
    description: 'Resina fitomineralogica millenaria che trasuda dalle rocce dell’Himalaya ad alta quota. Contiene oltre il 50% di acido fulvico ionico e più di 84 minerali traccia biodisponibili che agiscono come navette navali per traghettare nutrienti e minerali direttamente all’interno dei mitocondri cellulari.',
    primaryBenefits: [
      'Straordinario incremento dell’energia mitocondriale e della sintesi di ATP cellulare',
      'Aumento clinicamente documentato del testosterone totale e libero negli uomini (+20%)',
      'Upregulazione dei geni del collagene di tipo I, II e fibrillina nei tessuti connettivi',
      'Chelazione ed eliminazione naturale di tossine e metalli pesanti profondi'
    ],
    recommendedDosage: '250 - 500 mg/giorno di estratto standardizzato (o una dose da pisello di resina pura)',
    bestForms: ['PrimaVie brevettato purificato a spettro completo (testato rigorosamente contro metalli pesanti)', 'Resina purificata al 100%'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'stomaco_vuoto',
      instructions: 'Assumere al mattino sciolto in acqua tiepida o latte vegetale. Ha un sapore terroso-minerale caratteristico.',
      avoidTimes: 'Evitare la sera per possibile effetto stimolante.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’acido fulvico protegge gli epatociti dall’ossidazione. ATTENZIONE ad acquistare solo estratti certificati esenti da piombo o mercurio grezzo.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8 settimane seguiti da 2 settimane di scarico.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'coenzima-q10',
        targetSupplementName: 'Coenzima Q10',
        synergyType: 'potenziamento',
        description: 'La combinazione PrimaVie-CoQ10 raddoppia i livelli di CoQ10 all’interno dei mitocondri rispetto al CoQ10 assunto da solo.',
        mechanism: 'L’acido fulvico stabilizza il CoQ10 nella forma attiva ridotta.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['energia', 'longevita', 'recupero_sport']
  },
  {
    id: 'ca-akg-longevita',
    name: 'Calcio Alfa-Chetoglutarato (Ca-AKG)',
    scientificName: 'Monoidrato di Calcio Alfa-Chetoglutarato di Grado Purezza >99%',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Inversione dell’età biologica epigenetica, soppressione citochine senili e densità ossea',
    description: 'Intermedio centrale del ciclo di Krebs e co-substrato chiave per gli enzimi TET di demetilazione del DNA e istone-demetilasi. Studi condotti presso il Buck Institute for Research on Aging hanno dimostrato una riduzione media di 8 anni nell’età biologica misurata tramite orologi epigenetici di metilazione del DNA.',
    primaryBenefits: [
      'Inversione documentata dell’età biologica epigenetica (diminuzione della metilazione aberante)',
      'Abbattimento sistemico del fenotipo secretorio associato alla senescenza (SASP)',
      'Preservazione della densità minerale ossea e contrasto alla perdita di massa muscolare senile',
      'Miglioramento della pigmentazione e lucentezza dei capelli negli anziani'
    ],
    recommendedDosage: '500 - 1.000 mg/giorno',
    bestForms: ['Ca-AKG purificato (la chelazione con calcio ne garantisce la stabilità intestinale)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino con la prima colazione.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'L’alfa-chetoglutarato è essenziale per il ciclo dell’urea epatica e il metabolismo amminoacidico.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione continuativa raccomandata dai 40 anni in poi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nmn-nicotinamide',
        targetSupplementName: 'NMN',
        synergyType: 'potenziamento',
        description: 'Stack epigenetico supremo: NAD+ per le sirtuine e AKG per le demetilasi TET del DNA.',
        mechanism: 'Riprogrammazione coordinata della trascrizione genica e riparazione cellulare.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia']
  },
  {
    id: 'diosmina-esperidina',
    name: 'Diosmina & Esperidina (Complesso Flavonoidi)',
    scientificName: 'Frazione Flavonoica Purificata Micronizzata (MPFF) 9:1',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Frazione flavonoica micronizzata per insufficienza venosa, emorroidi e capillari fragili',
    description: 'La combinazione bioflavonoide di riferimento nella medicina vascolare (Daflon equivalente). Composta da 90% diosmina e 10% esperidina micronizzate a particelle inferiori a 2 micron, prolunga l’azione vasocostrittrice della noradrenalina sulla parete venosa, abbassando la permeabilità capillare.',
    primaryBenefits: [
      'Rapida risoluzione di gonfiore, pesantezza, tensione e dolore alle gambe da stasi venosa',
      'Trattamento acuto e preventivo delle crisi emorroidarie (riduzione di sanguinamento e dolore)',
      'Rinforzo della resistenza dei capillari fragili (prevenzione di petecchie ed ematomi facili)',
      'Miglioramento del drenaggio linfatico con riduzione del linfedema periferico'
    ],
    recommendedDosage: '500 mg due volte al giorno (totale 1.000 mg/die) ai pasti',
    bestForms: ['Frazione flavonoica micronizzata pura 90:10 (MPFF)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere a mezzogiorno e alla sera durante i pasti con un bicchiere d’acqua colmo.',
      avoidTimes: 'Nessuna limitazione specifica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Metabolizzati dalla flora intestinale ed escreti per via biliare e urinaria; profilo di tollerabilità eccellente.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8-12 settimane, specialmente durante i mesi caldi primaverili ed estivi.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'pycnogenol-pino',
        targetSupplementName: 'Pycnogenol',
        synergyType: 'potenziamento',
        description: 'Sinergia vascolare perfetta per le vene varicose e la circolazione delle estremità.',
        mechanism: 'Azione complementare su tono delle grandi vene e permeabilità dei microcapillari.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'articolazioni']
  },
  {
    id: 'nicotinamide-riboside',
    name: 'Nicotinamide Riboside (NR - Niagen)',
    scientificName: 'Nicotinamide Riboside Cloruro Puro Brevettato (Niagen)',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Precursore del NAD+ testato clinicamente per cuore, muscoli e senescenza',
    description: 'Forma alternativa di vitamina B3 scoperta dal Dr. Charles Brenner che utilizza la via metabolica della chinasi NRK (senza passare per la via NAMPT) per elevare i livelli di NAD+ del 40-50% nel sangue umano. Protegge le cellule miocardiche e la massa muscolare scheletrica dall’atrofia senile.',
    primaryBenefits: [
      'Aumento dimostrato del NAD+ ematico negli studi clinici umani controllati contro placebo',
      'Protezione della funzione cardiaca e riduzione delle citochine infiammatorie vascolari',
      'Miglioramento dell’efficienza muscolare e recupero dalla fatica negli anziani',
      'Sostegno alle sirtuine mitocondriali SIRT3 e SIRT5'
    ],
    recommendedDosage: '300 - 600 mg/giorno al mattino',
    bestForms: ['Niagen brevettato puro al 100% (ChromaDex)'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere al mattino a colazione con un bicchiere d’acqua.',
      avoidTimes: 'Evitare la sera per prevenire alterazioni del sonno.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Protegge il fegato dalla degenerazione steatosica legata all’invecchiamento; non affatica gli enzimi di Fase I.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 12,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 12 settimane seguiti da 2 settimane di scarico. Abbinare TMG per la metilazione.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'pterostilbene-naturale',
        targetSupplementName: 'Pterostilbene',
        synergyType: 'attivazione',
        description: 'La celebre combinazione del trial clinico Basis per la longevità umana.',
        mechanism: 'Lo pterostilbene accende SIRT1 e il Nicotinamide Riboside alimenta il substrato NAD+.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'energia']
  },
  {
    id: 'ergotioneina-mitocondriale',
    name: 'L-Ergotioneina (La Vitamina della Longevità)',
    scientificName: '2-Mercaptoistidina Trimetilbetaina da Fermentazione (MitoPrime)',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Unico antiossidante con carrier genetico specifico umano (OCTN1), protegge il DNA mitocondriale',
    description: 'Definita dal biochimico Bruce Ames la "Vitamina della Longevità". È l’unico composto antiossidante al mondo per cui il corpo umano possiede un gene e un trasportatore di membrana dedicato (OCTN1). Il corpo trasporta attivamente l’ergotioneina all’interno del DNA mitocondriale dove non può essere degradata.',
    primaryBenefits: [
      'Concentrazione selettiva all’interno dei mitocondri degli organi vitali: cervello, occhi, fegato',
      'Protezione suprema e duratura contro i radicali idrossile e perossinitrito',
      'Conservazione della lunghezza dei telomeri cellulari e riduzione del declino cognitivo',
      'Emivita intracellulare straordinaria: rimane attiva nelle cellule per oltre 30 giorni'
    ],
    recommendedDosage: '5 - 10 mg/giorno',
    bestForms: ['MitoPrime pura L-Ergotioneina naturale da fermentazione'],
    timing: {
      idealTimes: ['mattina_digiuno', 'colazione_pasti'],
      mealRequirement: 'indifferente',
      instructions: 'Assumere al mattino. Bastano dosi in milligrammi singoli grazie al carrier attivo OCTN1.',
      avoidTimes: 'Nessuna limitazione specifica.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Il trasportatore OCTN1 è espresso ad altissimi livelli negli epatociti per difendere il fegato dalla fibrosi.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione quotidiana continuativa a tempo indeterminato.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'glutatione-liposomiale',
        targetSupplementName: 'Glutatione Ridotto',
        synergyType: 'potenziamento',
        description: 'La coppia antiossidante suprema per la cellula: GSH nel citosol ed Ergotioneina nel mitocondrio.',
        mechanism: 'Copertura compartimentale completa.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus', 'energia']
  },
  {
    id: 'pterostilbene-naturale',
    name: 'Pterostilbene Naturale (da Mirtilli)',
    scientificName: 'Trans-3,5-Dimetossi-4’-idrossistilbene (Silbinol)',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Versione metilata del resveratrolo: biodisponibilità 4x superiore ed emivita di 105 minuti',
    description: 'Cugino metilato del resveratrolo presente nei mirtilli selvatici. Grazie ai suoi due gruppi metilici lipofili, il pterostilbene vanta una biodisponibilità orale dell’80% (contro appena il 20% del resveratrolo) e un’emivita plasmatica di quasi 2 ore (contro i 14 minuti del resveratrolo), penetrando agevolmente nel tessuto cerebrale.',
    primaryBenefits: [
      'Attivazione potente e prolungata dell’enzima di longevità SIRT1 e del fattore Nrf2',
      'Supporto alla neurogenesi, plasticità sinaptica e memoria di lavoro',
      'Modulazione benefica della glicemia e sensibilità all’insulina',
      'Inibizione della proliferazione delle cellule senescenti infiammatorie'
    ],
    recommendedDosage: '50 - 100 mg/giorno',
    bestForms: ['Silbinol brevettato naturale da corteccia di Pterocarpus Marsupium'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'stomaco_pieno_grassi',
      instructions: 'Assumere con un pasto contenente lipidi a colazione o pranzo.',
      avoidTimes: 'Evitare a digiuno.'
    },
    liverSafety: {
      riskLevel: 'basso',
      hepatoprotective: true,
      impactDescription: 'Protegge il fegato dall’accumulo di trigliceridi e riduce i marker di steatoepatite.',
      cycleProtocol: {
        required: true,
        recommendedCycleWeeks: 8,
        recommendedBreakWeeks: 2,
        description: 'Cicli da 8-12 settimane seguiti da 2 settimane di pausa.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'nicotinamide-riboside',
        targetSupplementName: 'Nicotinamide Riboside (NR)',
        synergyType: 'attivazione',
        description: 'La formulazione sinergica di riferimento clinico per elevare il NAD+ e attivare le sirtuine.',
        mechanism: 'Sinergia stilbene-dinucleotide per la biochimica dell’invecchiamento.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'focus', 'energia']
  },
  {
    id: 'acido-ellagico-melograno',
    name: 'Acido Ellagico (Estratto di Melograno)',
    scientificName: 'Estratto di Pericarpo di Punica Granatum titolato al 40-70% in Acido Ellagico (Pomella)',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Precursore diretto dell’Urolitina A, salute endoteliale prostatica e fotoprotezione',
    description: 'Polifenolo idrosolubile ad altissima concentrazione ricavato dalla buccia e dai chicchi del melograno. Viene metabolizzato dalla flora batterica intestinale simbiotica trasformandosi in Urolitina A (induttore di mitofagia), ed esercita una potente azione di protezione sull’endotelio vascolare e sulle cellule prostatiche.',
    primaryBenefits: [
      'Substrato naturale alimentare per la produzione endogena di Urolitina A da parte del microbiota',
      'Protezione vascolare endoteliale: aumenta la produzione di NO e riduce la placca ateromasica',
      'Inibizione della proliferazione e supporto alla salute della ghiandola prostatica',
      'Fotoprotezione cutanea naturale interna contro i danni dei raggi ultravioletti'
    ],
    recommendedDosage: '250 - 500 mg/giorno standardizzato al 40% in acido ellagico e punicalagine (Pomella)',
    bestForms: ['Pomella brevettato ad alta estrazione da melograno intero'],
    timing: {
      idealTimes: ['colazione_pasti', 'pranzo'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere ai pasti con acqua.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Le punicalagine e l’acido ellagico proteggono gli epatociti dall’infiammazione cronica e dalla fibrosi.',
      cycleProtocol: {
        required: false,
        description: 'Assunzione sicura e continuativa per l’intero arco dell’anno.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'probiotici-multiceppo',
        targetSupplementName: 'Probiotici Multiceppo',
        synergyType: 'attivazione',
        description: 'I batteri del colon sono indispensabili per convertire l’acido ellagico nella potente Urolitina A.',
        mechanism: 'Biotrasformazione post-biotica mediata da Gordonibacter urolithinfaciens.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'digestione']
  },
  {
    id: 'rutina-bioflavonoide',
    name: 'Rutina (Bioflavonoide Capillare)',
    scientificName: 'Quercetina-3-O-rutinoside da Sophora Japonica',
    category: 'longevita',
    categoryLabel: 'Longevità & Antiossidanti',
    shortTagline: 'Rinforzo della resistenza capillare, prevenzione petecchie ed ematomi e microcircolo',
    description: 'Glicoside flavonoico composto da quercetina legata al disaccaride rutinosio. Agisce inibendo l’enzima ialuronidasi che degrada la sostanza fondamentale che tiene coese le cellule dell’endotelio capillare, rinforzando la parete dei microvasi e riducendo emorragie e fragilità.',
    primaryBenefits: [
      'Eliminazione della fragilità capillare con riduzione di ematomi spontanei e lividi cutanei',
      'Azione antinfiammatoria e antiedemigena sulle pareti venose periferiche',
      'Inibizione dell’aggregazione piastrinica anomala e prevenzione della tromboflebite',
      'Sostegno alla pressione intraoculare e protezione della retina diabetica'
    ],
    recommendedDosage: '500 mg una o due volte al giorno ai pasti',
    bestForms: ['Rutina pura da Sophora japonica (titolata al 95%)'],
    timing: {
      idealTimes: ['pranzo', 'cena'],
      mealRequirement: 'colazione_pasti',
      instructions: 'Assumere con il cibo durante i pasti.',
      avoidTimes: 'Nessun vincolo.'
    },
    liverSafety: {
      riskLevel: 'sicuro_protettivo',
      hepatoprotective: true,
      impactDescription: 'Potente antiossidante epatico naturale; protegge il fegato dal danno da perossidazione lipidica.',
      cycleProtocol: {
        required: false,
        description: 'Cicli da 8-12 settimane.'
      }
    },
    positiveSynergies: [
      {
        targetSupplementId: 'vitamina-c',
        targetSupplementName: 'Vitamina C',
        synergyType: 'potenziamento',
        description: 'La celebre coppia Vitamina C + Complesso C per la robustezza delle pareti vascolari.',
        mechanism: 'La rutina protegge la vitamina C dall’ossidazione e ne amplifica l’azione sul collagene endoteliale.'
      }
    ],
    incompatibilities: [],
    targetGoals: ['longevita', 'articolazioni']
  }
];

