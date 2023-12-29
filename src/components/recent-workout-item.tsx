import { convertTimeToHoursMinutes, formatDate, getDayOfWeek, padStart } from "@/lib/utils";
import ColorVerticalLine from "./color-vertical-line";
import { WorkoutWithType } from "@/lib/types";

type RecentWorkoutItemProps = {
  workout: WorkoutWithType;
};

export default function RecentWorkoutItem({ workout }: RecentWorkoutItemProps) {
  const { hours, minutes } = convertTimeToHoursMinutes(workout.time);
  const time = `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-4">
        <div className="h-[38px]">
          <ColorVerticalLine color={workout.workoutType.color} />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            {getDayOfWeek(workout.date)}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatDate(workout.date)}
          </p>
        </div>
      </div>
      <div className="font-medium">{workout.workoutType.name}</div>
      <div className="font-medium">{time}</div>
      <div className="font-medium">{workout.distance} km</div>
    </div>
  );
}
