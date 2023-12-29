import { fetchWorkoutsWithType } from "@/lib/data";
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
import MobileTableCard from "@/components/mobile-table-card";

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
    className: "hidden xl:table-cell",
  },
  {
    label: "Calories",
    value: "calories",
    suffix: "kcal",
    headerIcon: FlameIcon,
    className: "hidden xl:table-cell",
  },
];

export default async function WorkoutsPage() {
  const workouts = await fetchWorkoutsWithType();
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Workouts</h1>
      <div className="hidden lg:block">
        <WorkoutTable workouts={workouts} tableFields={tableFields} />
      </div>
      <div className="lg:hidden flex flex-col gap-y-4">
        {workouts.map((workout) => (
          <MobileTableCard key={workout.id} workout={workout} />
        ))}
      </div>
      <div className="mt-8 text-end">
        <WorkoutFormDialog />
      </div>
    </>
  );
}
