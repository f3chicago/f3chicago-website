export const WorkoutStyles = {
  MURPH: 'Murph',
  BEATDOWN: 'Beatdown',
  RUN: 'Run',
  TRAIL_RUN: 'Trail Run',
  RUCKING: 'Ruck',
  RUCKS_SANDBAGS: 'Rucks & Sandbags',
  WEIGHT_LIFTING: 'Weight Lifting',
  THIRD_F: '3rd F (Faith)',
} as const;

export const WorkoutDays = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  THIRD_FRIDAY: 'Every Third Friday',
  SATURDAY: 'Saturday',
  SATURDAY_EXCEPT_LAST: 'All Saturdays Except the Last of the Month',
  SUNDAY: 'Sunday',
} as const;

export const WorkoutTimes = {
  '0515': '5:15 AM - 6:15 AM',
  '0520': '5:20 AM - 6:15 AM',
  '0525': '5:25 AM - 6:15 AM',
  '0530': '5:30 AM - 6:15 AM',
  '0600': '6:00 AM - 7:00 AM',
} as const;

export interface WorkoutCardProps {
  ao: string;
  q?: string;
  avgAttendance?: number;
  style: string;
  location: {
    href: string;
    text: string;
  };
  day: string;
  time: string;
}
