import { fetchWorkoutsWithType } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkoutTable from "@/components/workout-table";
import WorkoutFormDialog from "@/components/workout-form-dialog";
import { TableField } from "@/lib/types";
import {
  CalendarIcon,
  ClockIcon,
  DatabaseIcon,
  FlameIcon,
  HeartIcon,
  TrendingUpIcon,
} from "lucide-react";

const tableFields: TableField[] = [
  { label: "Date", value: "date", headerIcon: CalendarIcon },
  { label: "Type", value: "workoutType", headerIcon: DatabaseIcon },
  { label: "Duration", value: "time", headerIcon: ClockIcon },
  {
    label: "Distance",
    value: "distance",
    suffix: "km",
    headerIcon: TrendingUpIcon,
  },
  {
    label: "Avg. heart rate",
    value: "averageHeartRate",
    suffix: "bpm",
    headerIcon: HeartIcon,
  },
  {
    label: "Calories",
    value: "calories",
    suffix: "kcal",
    headerIcon: FlameIcon,
  },
];

export default async function WorkoutsPage() {
  const workouts = await fetchWorkoutsWithType();
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Workouts</h1>
      <Card className="p-2 md:p-4 w-full">
        <CardHeader>
          <CardTitle>Your workouts</CardTitle>
          <CardDescription>A list of all your running sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <WorkoutTable workouts={workouts} tableFields={tableFields} />
          <div className="mt-8 text-end">
            <WorkoutFormDialog />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
