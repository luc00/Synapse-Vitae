export interface CuratedStack {
  id: string;
  title: string;
  tagline: string;
  category: string;
  targetBenefit: string;
  supplementIds: string[];
  scientificRationale: string;
  scheduleTimeline: {
    timeOfDay: string;
    items: string[];
    action: string;
  }[];
  liverImpactSummary: string;
  cycleAdvice: string;
}

export const CURATED_STACKS: CuratedStack[] = [
  {
    id: 'stack-ossa-arterie',
    title: 'Sinergia Ossa Forti, Arterie Pulite & Immunità',
    tagline: 'Il quartetto aureo per canalizzare il calcio e rafforzare le difese',
    category: 'Salute Ossa & Cuore',
    targetBenefit: 'Previene l’osteoporosi, evita la calcificazione delle arterie e fortifica le difese immunitarie.',
    supplementIds: ['vitamina-d3', 'vitamina-k2', 'magnesio-bisglicinato', 'zinco-picolinato'],
    scientificRationale: 'La Vitamina D3 massimizza l’assorbimento intestinale del calcio; la Vitamina K2 attiva l’osteocalcina e la matrice MGP indirizzando il calcio nello scheletro e fuori dai vasi sanguigni; il Magnesio attiva gli enzimi epatici/renali della D3; lo Zinco modula i linfociti T.',
    scheduleTimeline: [
      {
        timeOfDay: 'Colazione (con grassi)',
        items: ['Vitamina D3 (2000-4000 UI)', 'Vitamina K2 MK-7 (100-200 mcg)'],
        action: 'Assumere con avocado, uova o olio EVO per massimizzare la solubilità micellare.'
      },
      {
        timeOfDay: 'Pranzo',
        items: ['Zinco Picolinato (15-25 mg)'],
        action: 'Assumere a stomaco pieno durante il pasto (mai a digiuno).'
      },
      {
        timeOfDay: 'Sera (prima di dormire)',
        items: ['Magnesio Bisglicinato (300 mg elementare)'],
        action: '30 minuti prima di coricarsi per rilassare muscoli e arterie e attivare la vitamina D metabolizzata.'
      }
    ],
    liverImpactSummary: 'Carico epatico minimo. Sostanze fisiologiche endogene ben tollerate.',
    cycleAdvice: 'Nessuna pausa obbligatoria durante l’inverno. Monitorare i valori di 25(OH)D ogni 6 mesi.'
  },
  {
    id: 'stack-neuro-focus',
    title: 'Neuro-Focus, Memoria & Chiarezza Mentale',
    tagline: 'Onde cerebrali Alpha e fattore neurotrofico per studio e prestazioni lavorative',
    category: 'Nootropi & Cognitivo',
    targetBenefit: 'Concentrazione chirurgica senza ansia, potenziamento della memoria di lavoro e neurogenesi (NGF).',
    supplementIds: ['lions-mane', 'l-teanina', 'magnesio-l-treonato', 'bacopa-monnieri'],
    scientificRationale: 'L’Hericium stimola il fattore di crescita neuronale (NGF); la L-Teanina promuove onde cerebrali Alpha rilassate e focalizzate; la Bacopa velocizza la trasmissione sinaptica; il Magnesio L-Treonato supera la barriera emato-encefalica aumentando la densità delle sinapsi ippocampali.',
    scheduleTimeline: [
      {
        timeOfDay: 'Mattina (colazione)',
        items: ['Lion’s Mane (500-1000 mg)', 'L-Teanina (100-200 mg con caffè/tè)', 'Bacopa Monnieri (300 mg)'],
        action: 'Con colazione contenente lipidi per favorire l’assorbimento dei bacosidi.'
      },
      {
        timeOfDay: 'Pomeriggio (ore 16:00)',
        items: ['Magnesio L-Treonato (1 capsula Magtein)'],
        action: 'Per contrastare il calo cognitivo pomeridiano e la nebbia mentale.'
      },
      {
        timeOfDay: 'Prima di dormire',
        items: ['Magnesio L-Treonato (dose rimanente)'],
        action: 'Rilassamento corticale e consolidamento notturno delle memorie.'
      }
    ],
    liverImpactSummary: 'Ben tollerato. Il fegato metabolizza agevolmente i peptidi e i composti idrosolubili.',
    cycleAdvice: 'Fare 10-12 settimane continuative seguite da 2-3 settimane di scarico per la Bacopa.'
  },
  {
    id: 'stack-scudo-fegato',
    title: 'Scudo Epatico, Detox di Fase II & Glutatione',
    tagline: 'La triade di rigenerazione epatica per ripulire gli epatociti e normalizzare le transaminasi',
    category: 'Salute Epatica & Detox',
    targetBenefit: 'Protegge le cellule del fegato da tossine, alcol e farmaci, incrementa il Glutatione ridotto e disinfiamma il fegato.',
    supplementIds: ['cardo-mariano-silimarina', 'nac-n-acetilcisteina', 'acido-alfa-lipoico', 'taurina'],
    scientificRationale: 'La Silimarina stabilizza le membrane degli epatociti e stimola la sintesi proteica epatica; il NAC fornisce la cisteina per la sintesi del Glutatione; l’Acido Alfa Lipoico rigenera continuamente il Glutatione ossidato; la Taurina coniuga i sali biliari per facilitare l’escrezione delle tossine.',
    scheduleTimeline: [
      {
        timeOfDay: 'Mattina (a digiuno)',
        items: ['NAC (600 mg)', 'Acido Alfa Lipoico (300 mg)'],
        action: '30 minuti prima di colazione con un grande bicchiere d’acqua.'
      },
      {
        timeOfDay: 'Pranzo',
        items: ['Cardo Mariano Silimarina (200-300 mg)', 'Taurina (1000 mg)'],
        action: 'Ai pasti per stimolare la secrezione biliare e proteggere gli epatociti durante la digestione.'
      },
      {
        timeOfDay: 'Cena',
        items: ['Cardo Mariano Silimarina (dose serale 150-200 mg)'],
        action: 'Sostegno rigenerativo notturno (il picco del metabolismo epatico avviene nelle ore notturne).'
      }
    ],
    liverImpactSummary: '100% EPATOPROTETTIVO: Questa combinazione è concepita specificamente per salvare e rigenerare il fegato.',
    cycleAdvice: 'Seguire per 8-12 settimane durante periodi di stress o dopo periodi di alimentazione disordinata/terapie farmacologiche.'
  },
  {
    id: 'stack-sonno-profondo',
    title: 'Sonno Profondo & Architettura Circadiana',
    tagline: 'Rilassamento GABAergico, induzione di onde lente delta e risveglio lucido',
    category: 'Sonno & Riposo',
    targetBenefit: 'Cessazione dell’insonnia da stress, aumento della fase REM e del sonno profondo ristoratore senza intontimento mattutino.',
    supplementIds: ['magnesio-bisglicinato', 'apigenina', 'l-teanina', 'melatonina'],
    scientificRationale: 'Il cocktail neuroscientifico per spegnere l’interruttore della veglia: l’Apigenina si lega ai recettori GABA-A; la L-Teanina silenzia i pensieri intrusivi; il Magnesio decontrae le fibre muscolari; la microdose di Melatonina dà il segnale d’avvio biologico della notte.',
    scheduleTimeline: [
      {
        timeOfDay: '60 minuti prima di dormire',
        items: ['Magnesio Bisglicinato (300-400 mg elementare)', 'L-Teanina (200 mg)', 'Apigenina (50 mg)'],
        action: 'Assumere con una tisana tiepida (non bollente), abbassando le luci della stanza.'
      },
      {
        timeOfDay: '30 minuti prima di dormire',
        items: ['Melatonina (0.5 - 1 mg micro-dosaggio)'],
        action: 'Assumere a ridosso dello spegnimento di schermi e smartphone.'
      }
    ],
    liverImpactSummary: 'Metabolismo notturno fisiologico. La melatonina ha proprietà antinfiammatorie epatiche aggiuntive.',
    cycleAdvice: '4 settimane continuative seguite da 1 settimana di stacco per preservare la sensibilità recettoriale.'
  },
  {
    id: 'stack-potenza-sportiva',
    title: 'Forza Esplosiva, ATP & Resistenza all’Acido Lattico',
    tagline: 'Il pacchetto definitivo basato su evidenze scientifiche per atleti e allenamento intenso',
    category: 'Sport & Massa Muscolare',
    targetBenefit: 'Aumento della forza nei massimali, ritardo dell’esaurimento muscolare da acidosi e pompaggio vascolare.',
    supplementIds: ['creatina-monoidrato', 'beta-alanina', 'citrullina-malato', 'taurina'],
    scientificRationale: 'La Creatina ricarica le riserve anaerobiche di fosfocreatina; la Beta-Alanina aumenta la carnosina intramuscolare neutralizzando l’acidità da ioni H+; la Citrullina genera ossido nitrico per la massima vasodilatazione; la Taurina previene crampi e idrata la cellula muscolare.',
    scheduleTimeline: [
      {
        timeOfDay: 'Pre-Workout (45 min prima)',
        items: ['Citrullina Malato (6-8 g)', 'Beta-Alanina (3.2 g)', 'Taurina (1 g)'],
        action: 'Sciogliere in 400ml d’acqua. La beta-alanina può dare un formicolio transitorio del tutto innocuo.'
      },
      {
        timeOfDay: 'Post-Workout (o colazione)',
        items: ['Creatina Monoidrato Creapure (5 g)'],
        action: 'Sciogliere bene in acqua con una fonte di carboidrati o proteine per sfruttare il trasporto insulinico.'
      }
    ],
    liverImpactSummary: 'La citrullina supporta il ciclo epatico dell’urea nello smaltire le scorie proteiche. Ottima tollerabilità con adeguata idratazione (3L/die).',
    cycleAdvice: 'Creatina a tempo indeterminato. Beta-Alanina per 10 settimane con 3 settimane di mantenimento/stop.'
  },
  {
    id: 'stack-longevita-mitocondri',
    title: 'Longevità Cellulare, Sirtuine & NAD+ Attivo',
    tagline: 'Attivazione genetica anti-aging secondo i protocolli scientifici di Harvard',
    category: 'Longevità & Anti-Aging',
    targetBenefit: 'Riparazione del DNA, biogenesi mitocondriale, rimozione delle cellule senescenti e vitalità cellulare.',
    supplementIds: ['nmn-nicotinamide', 'resveratrolo', 'coenzima-q10', 'quercetina', 'omega-3-epadha'],
    scientificRationale: 'L’NMN eleva i livelli intracellulari di NAD+; il Trans-Resveratrolo attiva SIRT1 (il gene custode della longevità); il CoQ10 Ubiquinolo energizza la catena respiratoria dei mitocondri; la Quercetina agisce come senolitico ed elimina le cellule senescenti; gli Omega-3 mantengono fluide le membrane.',
    scheduleTimeline: [
      {
        timeOfDay: 'Mattina al risveglio (a digiuno)',
        items: ['NMN (250-500 mg sublinguale o capsule)'],
        action: 'A digiuno in armonia con il picco circadiano di NAD+ mattutino.'
      },
      {
        timeOfDay: 'Colazione (ricca di grassi)',
        items: ['Trans-Resveratrolo (250-500 mg)', 'Coenzima Q10 Ubiquinolo (100 mg)', 'Quercetina (500 mg)', 'Omega-3 (2 g)'],
        action: 'Assumere insieme ai grassi del pasto: il resveratrolo e il CoQ10 necessitano di lipidi per essere assorbiti.'
      }
    ],
    liverImpactSummary: 'L’NMN e gli Omega-3 proteggono il fegato dalla steatosi. Se si assumono dosi elevate di NMN, si consiglia di aggiungere un donatore di metili (TMG 500mg).',
    cycleAdvice: 'Uso a cicli di 12 settimane con 2 settimane di pausa.'
  },
  {
    id: 'stack-intestino-microbiota',
    title: 'Riparazione Barriera Intestinale & Eubiosi',
    tagline: 'Sigillatura delle giunzioni serrate e ricolonizzazione del microbiota',
    category: 'Salute Gastrointestinale',
    targetBenefit: 'Risoluzione della permeabilità intestinale (Leaky Gut), eliminazione del gonfiore addominale e regolarità.',
    supplementIds: ['l-glutammina', 'probiotici-multiceppo', 'zinco-picolinato', 'collagene-idrolizzato'],
    scientificRationale: 'La L-Glutammina nutre direttamente gli enterociti riparando le tight junctions; i Probiotici ripopolano la flora batterica e producono butirrato; lo Zinco promuove la cicatrizzazione della mucosa; il Collagene fornisce glicina e prolina per la trama connettivale enterica.',
    scheduleTimeline: [
      {
        timeOfDay: 'Mattina (a stomaco vuoto)',
        items: ['L-Glutammina (5 g in polvere)', 'Probiotici Multi-Ceppo (1 capsula DRCaps)', 'Collagene Idrolizzato (10 g)'],
        action: 'In 300ml di acqua fresca a digiuno 20 minuti prima di colazione (mai bevande calde!).'
      },
      {
        timeOfDay: 'Pranzo',
        items: ['Zinco Picolinato (15-20 mg)'],
        action: 'Assumere a stomaco pieno durante il pasto.'
      }
    ],
    liverImpactSummary: 'Altamente benefico per il fegato: blocca il passaggio di endotossine LPS che affaticano la vena porta epatica.',
    cycleAdvice: 'Protocollo intensivo di 8 settimane, poi mantenimento con soli probiotici a giorni alterni.'
  },
  {
    id: 'stack-senolitico-autofagia',
    title: 'Senolisi, Autofagia & Pulizia Mitocondriale Profonda',
    tagline: 'Eliminazione delle cellule zombie infiammatorie e rinnovamento dei mitocondri',
    category: 'Longevità & Anti-Aging',
    targetBenefit: 'Distruzione selettiva delle cellule senescenti, induzione dell’autofagia biologica e riciclo mitocondriale (mitofagia).',
    supplementIds: ['fisetina-senolitico', 'spermidina-autofagia', 'urolitina-a', 'resveratrolo'],
    scientificRationale: 'La Fisetina induce apoptosi nelle cellule senescenti SASP; la Spermidina innesca l’autofagia endocellulare; l’Urolitina A (Mitopure) innesca la mitofagia sostituendo i mitocondri degradati; il Trans-Resveratrolo attiva SIRT1 coordinando la longevità epigenetica.',
    scheduleTimeline: [
      {
        timeOfDay: 'Colazione (con lipidi)',
        items: ['Urolitina A (500-1000 mg)', 'Trans-Resveratrolo (250-500 mg)', 'Fisetina (100-250 mg)'],
        action: 'Assumere con una fonte lipidica sana per solubilizzare i polifenoli.'
      },
      {
        timeOfDay: 'Pranzo o Cena',
        items: ['Spermidina da germe di grano (2-4 mg)'],
        action: 'Assumere durante il pasto principale.'
      }
    ],
    liverImpactSummary: 'Epatoprotettivo: l’autofagia stimolata previene l’accumulo di lipidi ossidati e riduce la fibrosi senile degli epatociti.',
    cycleAdvice: 'Seguire cicli di 8 settimane alternati a 4 settimane di pausa (oppure protocollo senolitico Fisetina a giorni intermittenti).'
  },
  {
    id: 'stack-articolazioni-cartilagine',
    title: 'Scudo Articolare, Cartilagini & Desensibilizzazione UC-II',
    tagline: 'Ammortizzazione sinoviale, idratazione e spegnimento dell’infiammazione articolare',
    category: 'Articolazioni & Connettivo',
    targetBenefit: 'Rallenta l’usura articolare, ripristina il liquido sinoviale e spegne il dolore cronico da sfregamento.',
    supplementIds: ['collagene-uc-ii', 'glucosamina-solfato', 'condroitina-solfato', 'msm-zolfo', 'acido-ialuronico'],
    scientificRationale: 'L’UC-II nativo a micro-dose (40mg) desensibilizza per via enterica la risposta autoimmune verso la cartilagine; Glucosamina e Condroitina forniscono l’impalcatura di glicosaminoglicani e proteoglicani; il MSM apporta zolfo biodisponibile; l’Acido Ialuronico ripristina la viscosità ammortizzante del liquido sinoviale.',
    scheduleTimeline: [
      {
        timeOfDay: 'Mattina (colazione o pranzo)',
        items: ['Glucosamina Solfato (1500 mg)', 'Condroitina Solfato (800-1200 mg)', 'MSM OptiMSM (1500 mg)', 'Acido Ialuronico (100 mg)'],
        action: 'Assumere con un bicchiere d’acqua abbondante durante i pasti.'
      },
      {
        timeOfDay: 'Sera (prima di dormire)',
        items: ['Collagene Nativo UC-II (40 mg esatti)'],
        action: 'Tassativamente a stomaco vuoto prima di dormire con un piccolo sorso d’acqua per preservare l’interazione con le placche di Peyer.'
      }
    ],
    liverImpactSummary: 'Carico epatico nullo: i glicosaminoglicani e l’UC-II hanno metabolismo connettivale o enterico.',
    cycleAdvice: 'I benefici massimi si consolidano dopo 8-12 settimane. Fare cicli di 3 mesi seguiti da 1 mese di pausa.'
  }
];

