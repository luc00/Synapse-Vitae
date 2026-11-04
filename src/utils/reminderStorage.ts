import { ReminderState } from '../types/reminder';

const STORAGE_KEY = 'synapse_vitae_reminder_state_v1';

const getTodayString = () => new Date().toISOString().split('T')[0];

export const DEFAULT_REMINDER_STATE: ReminderState = {
  slots: [
    {
      slotId: 'mattina_digiuno',
      label: 'Mattina (A Digiuno)',
      timeString: '07:30',
      enabled: true,
      items: [
        {
          id: 'rem-probiotici',
          supplementId: 'probiotici-multiceppo',
          supplementName: 'Probiotici Multi-Ceppo',
          dosage: '1 capsula DRCaps (25 Mld UFC)',
          instructions: 'Con acqua tiepida 20 min prima di colazione',
          takenToday: false,
          cycleStartDate: getTodayString(),
          cycleWeeks: 8,
          breakWeeks: 2,
          requiresCycle: true
        }
      ]
    },
    {
      slotId: 'colazione_pasti',
      label: 'Colazione (Con Grassi Sani)',
      timeString: '08:30',
      enabled: true,
      items: [
        {
          id: 'rem-d3-k2',
          supplementId: 'vitamina-d3',
          supplementName: 'Vitamina D3 + K2 (MK-7)',
          dosage: '3.000 UI D3 + 100 mcg K2',
          instructions: 'Durante la colazione con uova, yogurt intero o olio EVO',
          takenToday: false,
          cycleStartDate: getTodayString(),
          requiresCycle: false
        },
        {
          id: 'rem-omega3',
          supplementId: 'omega-3-epadha',
          supplementName: 'Omega-3 EPA/DHA',
          dosage: '2.000 mg olio di pesce purificato',
          instructions: 'Ai pasti con fonte di lipidi',
          takenToday: false,
          cycleStartDate: getTodayString(),
          requiresCycle: false
        }
      ]
    },
    {
      slotId: 'pranzo',
      label: 'Pranzo (Metà Giornata)',
      timeString: '13:00',
      enabled: true,
      items: [
        {
          id: 'rem-zinco',
          supplementId: 'zinco-picolinato',
          supplementName: 'Zinco Picolinato',
          dosage: '20 mg zinco elementare',
          instructions: 'A stomaco pieno durante il pasto',
          takenToday: false,
          cycleStartDate: getTodayString(),
          requiresCycle: false
        }
      ]
    },
    {
      slotId: 'prima_dormire',
      label: 'Prima di Coricarsi (Pre-Nanna)',
      timeString: '22:30',
      enabled: true,
      items: [
        {
          id: 'rem-magnesio',
          supplementId: 'magnesio-bisglicinato',
          supplementName: 'Magnesio Bisglicinato',
          dosage: '300 mg magnesio elementare',
          instructions: '45 min prima di dormire in acqua o tisana',
          takenToday: false,
          cycleStartDate: getTodayString(),
          requiresCycle: false
        },
        {
          id: 'rem-ashwa',
          supplementId: 'ashwagandha-ksm66',
          supplementName: 'Ashwagandha (KSM-66)',
          dosage: '400 mg estratto radice 5%',
          instructions: 'Dopo cena/pre-notte. Attenzione: ciclo 8 settimane',
          takenToday: false,
          cycleStartDate: getTodayString(),
          cycleWeeks: 8,
          breakWeeks: 3,
          requiresCycle: true
        }
      ]
    }
  ],
  soundEnabled: true,
  notificationsEnabled: true,
  lastCompletedDate: '',
  streakDays: 4
};

export function loadReminderState(): ReminderState {
  if (typeof window === 'undefined') return DEFAULT_REMINDER_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_REMINDER_STATE;
    const parsed = JSON.parse(raw) as ReminderState;
    
    // Check if new day: reset daily checks
    const today = getTodayString();
    if (parsed.lastCompletedDate && parsed.lastCompletedDate !== today) {
      parsed.slots.forEach(slot => {
        slot.items.forEach(item => {
          item.takenToday = false;
        });
      });
    }
    return parsed;
  } catch (e) {
    console.error('Error loading reminder state:', e);
    return DEFAULT_REMINDER_STATE;
  }
}

export function saveReminderState(state: ReminderState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving reminder state:', e);
  }
}
