export interface LiverSafetyPrinciple {
  id: string;
  title: string;
  badge: string;
  summary: string;
  biochemicalDetails: string;
  practicalAction: string;
}

export interface LiverRiskSupplementRule {
  supplementName: string;
  riskCategory: 'Alto Rischio / Cicli Obbligatori' | 'Moderato Rischio / Monitorare' | 'Epatoprotettivo Primario';
  whyItStressesLiver: string;
  onPeriod: string;
  offPeriod: string;
  goldenRule: string;
}

export const LIVER_SAFETY_RULES: LiverRiskSupplementRule[] = [
  {
    supplementName: 'EGCG / Estratto di Tè Verde ad Alto Titolo',
    riskCategory: 'Alto Rischio / Cicli Obbligatori',
    whyItStressesLiver: 'Le catechine pure concentrate ad alte dosi (>800mg/die), specialmente assunte a digiuno, innescano citotossicità mitocondriale negli epatociti con rapida impennata delle transaminasi.',
    onPeriod: '4 - 6 settimane massimo',
    offPeriod: 'Almeno 4 settimane di stop completo',
    goldenRule: 'MAI assumere a stomaco vuoto. Assumere esclusivamente con un pasto solido completo e non superare 400mg di EGCG/die.'
  },
  {
    supplementName: 'Berberina HCL',
    riskCategory: 'Alto Rischio / Cicli Obbligatori',
    whyItStressesLiver: 'È un potente inibitore competitivo dei citocromi epatici CYP3A4, CYP2D6 e CYP2C9. Se assunta senza interruzione rallenta lo smaltimento di altri integratori e farmaci, intasando le vie di depurazione epatica.',
    onPeriod: '8 - 12 settimane massimo',
    offPeriod: '4 settimane di pausa totale',
    goldenRule: 'Pausa fegato obbligatoria dopo 3 mesi. Non combinare con farmaci senza consultare il medico.'
  },
  {
    supplementName: 'Ashwagandha (KSM-66)',
    riskCategory: 'Moderato Rischio / Monitorare',
    whyItStressesLiver: 'I withanolidi metabolizzati a livello epatico possono, in individui predisposti o con uso ininterrotto oltre i 6 mesi, provocare una reazione immunitaria epatica colestatica.',
    onPeriod: '8 settimane',
    offPeriod: '2 - 3 settimane di pausa',
    goldenRule: 'Programmare un reset ogni due mesi per evitare assuefazione recettoriale e accumulo nei tessuti.'
  },
  {
    supplementName: 'Curcumina ad Alta Concentrazione con Piperina',
    riskCategory: 'Moderato Rischio / Monitorare',
    whyItStressesLiver: 'La piperina blocca la glucuronidazione epatica per decuplicare l’assorbimento. Questo espone il fegato a una concentrazione quadruplicata di qualsiasi molecola circolante.',
    onPeriod: '8 - 10 settimane',
    offPeriod: '3 settimane di pausa',
    goldenRule: 'Evitare in caso di litiasi biliare (calcoli alla cistifellea) o terapie farmacologiche concomitanti.'
  },
  {
    supplementName: 'Tongkat Ali & Booster Ormonali Fitoterapici',
    riskCategory: 'Moderato Rischio / Monitorare',
    whyItStressesLiver: 'Gli estratti concentrati secchi contengono alcaloidi che richiedono un metabolismo epatico di Fase I e II.',
    onPeriod: '5 giorni ON / 2 giorni OFF o 6 settimane ON',
    offPeriod: '2 settimane di pausa',
    goldenRule: 'Fare sempre micro-pause nel fine settimana o pause mensili.'
  },
  {
    supplementName: 'Cardo Mariano (Silimarina / Silibina)',
    riskCategory: 'Epatoprotettivo Primario',
    whyItStressesLiver: 'NON stressa il fegato: è il protettore supremo. Stabilizza le membrane cellulari degli epatociti, stimola la sintesi proteica e innalza la produzione di glutatione endogeno.',
    onPeriod: '8 - 12 settimane (durante o dopo carichi metabolici)',
    offPeriod: '2 settimane di pausa',
    goldenRule: 'Il supplemento di riferimento per rigenerare il fegato durante i periodi di scarico.'
  },
  {
    supplementName: 'NAC (N-Acetilcisteina)',
    riskCategory: 'Epatoprotettivo Primario',
    whyItStressesLiver: 'Fornisce il gruppo cisteinico indispensabile per produrre Glutatione di Fase II, disinnescando i metaboliti reattivi.',
    onPeriod: '8 - 12 settimane',
    offPeriod: '3 settimane di stacco per stimolare la sintesi autonoma',
    goldenRule: 'Abbinare a Vitamina C per mantenere il glutatione nello stato ridotto attivo.'
  }
];

export const LIVER_PHYSIOLOGY_GUIDE = {
  title: 'Protocollo Scientifico di Salvaguardia Epatica e Cicli',
  subtitle: 'Perché il fegato è il laboratorio centrale del corpo e come evitare il sovraccarico tossico da integratori',
  phases: [
    {
      phaseName: 'Fase I: Ossidazione (Citocromo P450 / CYP)',
      description: 'Gli enzimi CYP450 prendono le molecole liposolubili (vitamine liposolubili, polifenoli, farmaci, ormoni) e le ossidano o idrolizzano. Questo passaggio crea spesso metaboliti intermedi ancor più reattivi e tossici dei composti di partenza!',
      nutrientsRequired: 'Vitamine B2, B3, B6, Folato, B12, Glutatione e Flavonoidi'
    },
    {
      phaseName: 'Fase II: Coniugazione (Glutatione, Solfatazione, Glucuronidazione)',
      description: 'Il fegato attacca a questi intermedi un gruppo idrosolubile (Glutatione, Glicina, Solfato o Acido Glucuronico) per renderli innocui e solubili in acqua, permettendo l’escrezione tramite bile o reni.',
      nutrientsRequired: 'NAC (Cisteina), Glicina (Collagene/Magnesio Bisglicinato), Taurina, Silimarina, Selenio'
    },
    {
      phaseName: 'Fase III: Escrezione Biliare e Renale',
      description: 'I composti coniugati vengono pompati nella bile o nel sangue verso i reni per essere eliminati con feci e urine.',
      nutrientsRequired: 'Idratazione (minimo 2.5L acqua/die), fibre solubili per non riassorbire le tossine nel colon'
    }
  ],
  warningSigns: [
    'Affaticamento cronico ingiustificato e risveglio difficile al mattino',
    'Sensazione di peso o fastidio sordo nel quadrante superiore destro dell’addome',
    'Urine scure (color the) o feci insolitamente chiare/argillose',
    'Sapore amaro o metallico persistente in bocca al risveglio',
    'Prurito cutaneo diffuso senza eruzioni evidenti',
    'Valori ematici alterati: Transaminasi ALT (GPT) o AST (GOT) sopra i limiti fisiologici, Gamma-GT alta'
  ],
  detoxResetProtocol: {
    duration: '21 - 30 Giorni di "Finestra di Scarico Epatica"',
    steps: [
      '1. Stop totale a tutti gli estratti erboristici concentrati e composti epato-metabolizzati (EGCG, Berberina, Ashwagandha, booster ormonali).',
      '2. Mantenere solo i nutrienti essenziali primari: Magnesio Bisglicinato la sera, Vitamina D3+K2 a dosi fisiologiche.',
      '3. Introdurre lo scudo protettivo: Cardo Mariano (Silimarina 300mg) ai pasti + NAC (600mg) a digiuno per rigenerare il pool di Glutatione.',
      '4. Idratazione attiva: Bere 30-40ml di acqua oligominerale per kg di peso corporeo per facilitare l’eliminazione renale.',
      '5. Dieta leggera: Abbondare in crocifere (broccoli, cavoli ricchi di sulforafano), carciofi, limone, e ridurre drasticamente alcol, zuccheri raffinati e grassi idrogenati.'
    ]
  }
};
