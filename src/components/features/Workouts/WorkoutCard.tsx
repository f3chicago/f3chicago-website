import Link from 'next/link';
import { WorkoutCardProps, WorkoutDays, WorkoutTimes, WorkoutStyles } from '@/types/workout';

// Pre-computed day and time maps for O(1) lookup instead of O(n) indexOf
const DAY_MAP = {
  [WorkoutDays.SUNDAY]: 0,
  [WorkoutDays.MONDAY]: 1,
  [WorkoutDays.TUESDAY]: 2,
  [WorkoutDays.WEDNESDAY]: 3,
  [WorkoutDays.THURSDAY]: 4,
  [WorkoutDays.FRIDAY]: 5,
  [WorkoutDays.THIRD_FRIDAY]: 5.5,
  [WorkoutDays.SATURDAY]: 6,
  [WorkoutDays.SATURDAY_EXCEPT_LAST]: 6.5,
} as const;

const TIME_MAP: Record<string, number> = Object.values(WorkoutTimes).reduce(
  (acc, time, idx) => ({ ...acc, [time]: idx }),
  {}
);

export function sortWorkouts(workouts: WorkoutCardProps[]) {
  const decimalPrecision = 100;
  return workouts.sort((a, b) => {
    const dayA = DAY_MAP[a.day as keyof typeof DAY_MAP] ?? 99;
    const dayB = DAY_MAP[b.day as keyof typeof DAY_MAP] ?? 99;
    const timeA = TIME_MAP[a.time] ?? 999;
    const timeB = TIME_MAP[b.time] ?? 999;
    return (
      dayA + timeA / decimalPrecision - (dayB + timeB / decimalPrecision)
    );
  });
}

export function workoutsTomorrow(workouts: WorkoutCardProps[]) {
  const result = workouts.filter((w) => {
    const today = new Date().getDay();
    const days = {
      SUNDAY: 0,
      MONDAY: 1,
      TUESDAY: 2,
      WEDNESDAY: 3,
      THURSDAY: 4,
      FRIDAY: 5,
      SATURDAY: 6,
    };
    switch (today) {
      case days.SUNDAY:
        return w.day === WorkoutDays.MONDAY;
      case days.MONDAY:
        return w.day === WorkoutDays.TUESDAY;
      case days.TUESDAY:
        return w.day === WorkoutDays.WEDNESDAY;
      case days.WEDNESDAY:
        return w.day === WorkoutDays.THURSDAY;
      case days.THURSDAY:
        return (
          w.day === WorkoutDays.FRIDAY || w.day === WorkoutDays.THIRD_FRIDAY
        );
      case days.FRIDAY:
        return (
          w.day === WorkoutDays.SATURDAY ||
          w.day === WorkoutDays.SATURDAY_EXCEPT_LAST
        );
      case days.SATURDAY:
        return w.day === WorkoutDays.SUNDAY;
      default:
        return false;
    }
  });
  sortWorkouts(result);
  return result;
}

export function workoutsAnotherDay(workouts: WorkoutCardProps[]) {
  const result = workouts.filter(
    (w) => !workoutsTomorrow(workouts).includes(w)
  );
  sortWorkouts(result);
  return result;
}

export default function WorkoutCard({
  ao,
  q,
  avgAttendance,
  style,
  location,
  day,
  time,
}: WorkoutCardProps) {
  return (
    <div className="bg-dirt py-8 px-4">
      <h3>{ao}</h3>
      {q ? (
        <p className="text-cmu">
          Led by <span className="text-white">{q}</span> tomorrow
        </p>
      ) : null}
      <ul className="py-4">
        {avgAttendance ? (
          <li className="inline-block py-px px-4 bg-sand rounded-xl">
            {avgAttendance}
          </li>
        ) : null}
        <li className="inline-block py-px px-4 bg-sand rounded-xl mx-2">
          {style}
        </li>
      </ul>
      <p className="font-bold pb-4">
        <Link href={location.href} target="_blank">
          {location.text}
        </Link>
      </p>
      <p className="font-md">
        {day}: {time}
      </p>
    </div>
  );
}
