export interface ReminderItem {
  id: string;
  supplementId: string;
  supplementName: string;
  dosage: string;
  instructions: string;
  takenToday: boolean;
  cycleStartDate: string; // ISO string YYYY-MM-DD
  cycleWeeks?: number;
  breakWeeks?: number;
  requiresCycle: boolean;
}

export interface ReminderSlotConfig {
  slotId: string;
  label: string;
  timeString: string; // "HH:MM"
  enabled: boolean;
  items: ReminderItem[];
}

export interface ReminderState {
  slots: ReminderSlotConfig[];
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  lastCompletedDate: string; // "YYYY-MM-DD"
  streakDays: number;
}
