import { fetchWorkouts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import WorkoutTable from "@/components/workout-table";
import WorkoutFormDialog from "@/components/workout-form-dialog";

export default async function WorkoutsPage() {
  const workouts = await fetchWorkouts();
  return (
    <div className="flex flex-col items-center gap-y-16">
      <Card className="p-4 w-full">
        <CardContent>
          <WorkoutTable workouts={workouts} />
          <div className="mt-8 text-end">
            <WorkoutFormDialog />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
