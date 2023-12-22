import { fetchWorkouts } from "@/lib/data"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import WorkoutTable from "@/components/workout-table";

export default async function WorkoutsPage() {
  const workouts = await fetchWorkouts();
  return (
    <Card className="p-4">
      <CardContent>
        <WorkoutTable workouts={workouts} />
      </CardContent>
    </Card>
  )
}