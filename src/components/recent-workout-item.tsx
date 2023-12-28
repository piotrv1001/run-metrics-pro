import { CalendarIcon } from "lucide-react";

type RecentWorkoutItemProps = {
  dayOfWeek: string;
  formattedDate: string;
  distance: number;
};

export default function RecentWorkoutItem({
  dayOfWeek,
  formattedDate,
  distance,
}: RecentWorkoutItemProps) {
  return (
    <div className="flex items-center">
      <span className="w-9 h-9">
        <CalendarIcon />
      </span>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{dayOfWeek}</p>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
      </div>
      <div className="ml-auto font-medium">{distance} km</div>
    </div>
  );
}
