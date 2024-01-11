import NoDataPlaceholder from "@/components/no-data-placeholder";
import WorkoutTypeCard from "@/components/workout-type-card";
import WorkoutTypeFormDialog from "@/components/workout-type-form-dialog";
import { fetchWorkoutTypes } from "@/lib/data";

export default async function CategoriesPage() {
  const workoutTypes = await fetchWorkoutTypes();
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Workout types</h1>
      {workoutTypes.length > 0 ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workoutTypes.map((workoutType) => (
              <WorkoutTypeCard key={workoutType.id} workoutType={workoutType} />
            ))}
          </div>
          <div className="mt-8 text-end">
            <WorkoutTypeFormDialog />
          </div>
        </>
      ) : (
        <NoDataPlaceholder message="No workout types added yet">
          <WorkoutTypeFormDialog />
        </NoDataPlaceholder>
      )}
    </>
  );
}
