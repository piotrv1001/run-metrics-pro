"use server";

import { revalidatePath } from "next/cache";
import { createWorkout } from "./data";
import { ServerActionResponse, WorkoutData } from "./types";

export const submitWorkoutForm: (
  workoutData: WorkoutData
) => Promise<ServerActionResponse> = async (workoutData: WorkoutData) => {
  try {
    const data = await createWorkout(workoutData);
    revalidatePath("/workouts");
    return { status: "success", data };
  } catch(error) {
    console.error(error);
    return { status: "error", message: "Something went wrong" };
  }
};
