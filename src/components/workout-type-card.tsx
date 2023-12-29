import { Card, CardContent } from "./ui/card";
import TableDropdownMenu from "./table-dropdown-menu";
import { HeartIcon } from "lucide-react";
import { WorkoutType } from "@prisma/client";
import ColorVerticalLine from "./color-vertical-line";

type WorkoutTypeProps = {
  workoutType: WorkoutType;
};

export default function WorkoutTypeCard({
  workoutType: { name, color, minHeartRate, maxHeartRate },
}: WorkoutTypeProps) {
  return (
    <Card>
      <CardContent className="p-2 h-32">
        <div className="flex w-full h-full gap-x-6">
          <ColorVerticalLine color={color} />
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
