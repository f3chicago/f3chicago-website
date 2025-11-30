import Link from 'next/link';
import { WorkoutCardProps, WorkoutDays, WorkoutTimes, WorkoutStyles } from '@/types/workout';

export function sortWorkouts(workouts: WorkoutCardProps[]) {
  const decimalPrecision = 100;
  return workouts.sort((a, b) => {
    return (
      dayToNumber(a.day) +
      timeToNumber(a.time) / decimalPrecision -
      (dayToNumber(b.day) + timeToNumber(b.time) / decimalPrecision)
    );
  });
}

function dayToNumber(day: string) {
  const daysList = Object.values(WorkoutDays);
  return daysList.indexOf(day as typeof daysList[number]);
}

function timeToNumber(time: string) {
  const timesList = Object.values(WorkoutTimes);
  return timesList.indexOf(time as typeof timesList[number]);
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
