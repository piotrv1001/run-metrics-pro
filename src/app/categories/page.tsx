import WorkoutTypeCard from "@/components/workout-type-card";
import WorkoutTypeFormDialog from "@/components/workout-type-form-dialog";
import prisma from "@/lib/db";

export default async function CategoriesPage() {
  const workoutTypes = await prisma.workoutType.findMany();
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Workout types</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workoutTypes.map((workoutType) => (
          <WorkoutTypeCard key={workoutType.id} workoutType={workoutType} />
        ))}
      </div>
      <div className="mt-8 text-end">
        <WorkoutTypeFormDialog />
      </div>
    </>
  );
}
