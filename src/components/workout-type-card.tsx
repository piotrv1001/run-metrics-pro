import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import WorkoutTypeDropdownMenu from "./workout-type-dropdown-menu";
import { HeartIcon } from "lucide-react";

type WorkoutTypeProps = {
  name: string;
  minHeartRate: number;
  maxHeartRate: number;
  color: keyof typeof colorVariants;
};

const colorVariants = {
  blue: "bg-blue-400 shadow-blue-400",
  red: "bg-red-400 shadow-red-400",
  green: "bg-green-400 shadow-green-400",
  yellow: "bg-yellow-400 shadow-yellow-400",
  purple: "bg-purple-400 shadow-purple-400",
  gray: "bg-gray-400 shadow-gray-400",
  pink: "bg-pink-400 shadow-pink-400",
  white: "bg-white shadow-white",
};

export default function WorkoutTypeCard({ name, minHeartRate, maxHeartRate, color }: WorkoutTypeProps) {
  const bgClassName = `${colorVariants[color]}`;
  return (
    <Card>
      <CardContent className="p-2 h-32">
        <div className="flex w-full h-full gap-x-6">
          <div
            className={cn(
              "h-full w-[4px] rounded-sm shadow-md shadow-blue-400",
              bgClassName
            )}
          ></div>
          <div className="flex flex-col w-full gap-y-3">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-2xl font-bold">{name}</h1>
              <WorkoutTypeDropdownMenu />
            </div>
            <div className="flex gap-x-2 mr-auto">
              <HeartIcon className="h-6 w-6 text-muted-foreground" />
              <span className="text-muted-foreground">{minHeartRate} - {maxHeartRate} bpm</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
