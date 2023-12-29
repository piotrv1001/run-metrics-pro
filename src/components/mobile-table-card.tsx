import { WorkoutWithType } from "@/lib/types";
import { Card, CardContent } from "./ui/card";
import ColorVerticalLine from "./color-vertical-line";
import {
  convertTimeToHoursMinutes,
  formatDate,
  getDayOfWeek,
  padStart,
} from "@/lib/utils";
import { ClockIcon, FlameIcon, HeartIcon, LucideIcon, TrendingUpIcon } from "lucide-react";

type MobileTableCardProps = {
  workout: WorkoutWithType;
};

export default function MobileTableCard({ workout }: MobileTableCardProps) {
  const { hours, minutes } = convertTimeToHoursMinutes(workout.time);
  const time = `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`;
  return (
    <Card>
      <CardContent className="p-2 h-32">
        <div className="flex w-full h-full gap-x-6">
          <ColorVerticalLine color={workout.workoutType.color} />
          <div className="flex flex-col justify-around">
            <div className="text-xl font-bold">{workout.workoutType.name}</div>
            <div className="flex flex-col gap-y-1">
              <span className="font-medium">{getDayOfWeek(workout.date)}</span>
              <span className="text-muted-foreground text-xs">
                {formatDate(workout.date)}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-auto gap-x-10">
            <Stat icon={ClockIcon} value={time} />
            <Stat icon={TrendingUpIcon} value={`${workout.distance} km`} />
            <Stat icon={HeartIcon} value={`${workout.averageHeartRate} bpm`} />
            <Stat icon={FlameIcon} value={`${workout.calories} kcal`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type StatProps = {
  icon: LucideIcon;
  value: string | number;
};

function Stat({ icon: Icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-x-1 justify-start">
      <Icon size={16} />
      <span>{value}</span>
    </div>
  );
}
