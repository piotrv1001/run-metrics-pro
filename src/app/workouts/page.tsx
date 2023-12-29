import { fetchWorkouts, fetchWorkoutsWithType } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkoutTable from "@/components/workout-table";
import WorkoutFormDialog from "@/components/workout-form-dialog";

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
          <WorkoutTable workouts={workouts} />
          <div className="mt-8 text-end">
            <WorkoutFormDialog />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
