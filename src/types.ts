export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isJoke?: boolean;
  suggestedAction?: {
    type: 'whatsapp' | 'booking' | 'call' | 'location' | 'joke';
    label: string;
    payload?: string;
  };
}

export interface TrustCard {
  id: string;
  title: string;
  description: string;
  iconName: 'userCheck' | 'awardBadge' | 'heartHand';
}

export interface WorkingShift {
  period: string;
  time: string;
}

export interface WorkingDay {
  days: string;
  shifts: WorkingShift[];
  isWeekend?: boolean;
}
