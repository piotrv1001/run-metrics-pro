"use server";

import { revalidatePath } from "next/cache";
import { createWorkout, createWorkoutType, deleteWorkout, updateWorkout } from "./data";
import { ServerActionResponse, WorkoutData, WorkoutTypeData } from "./types";

export const submitWorkoutForm: (
  workoutData: WorkoutData
) => Promise<ServerActionResponse> = async (workoutData: WorkoutData) => {
  try {
    const data = await createWorkout(workoutData);
    revalidatePath("/workouts");
    return { status: "success", data };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Something went wrong" };
  }
};

export const submitWorkoutEditForm: (
  id: number,
  workoutData: WorkoutData
) => Promise<ServerActionResponse> = async (
  id: number,
  workoutData: WorkoutData
) => {
  try {
    const data = await updateWorkout(id, workoutData);
    revalidatePath("/workouts");
    return { status: "success", data };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Something went wrong" };
  }
};

export const deleteWorkoutAction: (
  id: number
) => Promise<ServerActionResponse> = async (id: number) => {
  try {
    const data = await deleteWorkout(id);
    revalidatePath("/workouts");
    return { status: "success", data };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Something went wrong" };
  }
};

export const submitWorkoutTypeForm: (
  workoutData: WorkoutTypeData
) => Promise<ServerActionResponse> = async (workoutData: WorkoutTypeData) => {
  try {
    const data = await createWorkoutType(workoutData);
    revalidatePath("/categories");
    return { status: "success", data };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Something went wrong" };
  }
};
