import { Button } from "@/components/ui/button";
import WorkoutTypeCard from "@/components/workout-type-card";

const workoutTypes = [
  { name: "OWB1", color: "blue", minHeartRate: 120, maxHeartRate: 140 },
  { name: "WB", color: "red", minHeartRate: 140, maxHeartRate: 160 },
  { name: "WB2", color: "green", minHeartRate: 160, maxHeartRate: 180 },
  { name: "KA", color: "yellow", minHeartRate: 180, maxHeartRate: 200 },
  { name: "KP", color: "purple", minHeartRate: 120, maxHeartRate: 140 },
  { name: "3M", color: "gray", minHeartRate: 180, maxHeartRate: 200 },
  { name: "5M", color: "pink", minHeartRate: 180, maxHeartRate: 200 },
  { name: "OWB1 + INT", color: "white", minHeartRate: 120, maxHeartRate: 140 },
] as const;

export default function CategoriesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Workout types</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workoutTypes.map((workoutType, index) => (
          <WorkoutTypeCard
            key={index}
            {...workoutType}
          />
        ))}
      </div>
      <div className="mt-8 text-end">
        <Button>Create</Button>
      </div>
    </>
  );
}
