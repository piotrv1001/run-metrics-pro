import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import TableDropdownMenu from "./table-dropdown-menu";
import { HeartIcon } from "lucide-react";
import { Color, WorkoutType } from "@prisma/client";

type WorkoutTypeProps = {
  workoutType: WorkoutType;
};

const colorVariants: { [key in Color]: string } = {
  BLUE: "bg-blue-400 shadow-blue-400",
  RED: "bg-red-400 shadow-red-400",
  GREEN: "bg-green-400 shadow-green-400",
  YELLOW: "bg-yellow-400 shadow-yellow-400",
  PURPLE: "bg-purple-400 shadow-purple-400",
  GRAY: "bg-gray-400 shadow-gray-400",
  PINK: "bg-pink-400 shadow-pink-400",
  LIME: "bg-lime-400 shadow-lime-400",
};

export default function WorkoutTypeCard({
  workoutType: { name, color, minHeartRate, maxHeartRate },
}: WorkoutTypeProps) {
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
              <TableDropdownMenu />
            </div>
            <div className="flex gap-x-2 mr-auto">
              <HeartIcon className="h-6 w-6 text-muted-foreground" />
              <span className="text-muted-foreground">
                {minHeartRate} - {maxHeartRate} bpm
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
