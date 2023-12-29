import { Workout, WorkoutType } from "@prisma/client";
import prisma from "./db";
import { WorkoutData, WorkoutWithType } from "./types";

export async function fetchWorkouts(): Promise<Workout[]> {
  const workouts = await prisma.workout.findMany({
    orderBy: { date: "desc" },
  });
  return workouts;
}

export async function fetchWorkoutsWithType(limit?: number): Promise<WorkoutWithType[]> {
  const workouts = await prisma.workout.findMany({
    include: { workoutType: true },
    orderBy: { date: "desc" },
    take: limit,
  });
  return workouts;
}

export async function fetchWorkout(id: number): Promise<Workout | null> {
  const workout = await prisma.workout.findUnique({
    where: { id },
  });
  return workout;
}

export async function createWorkout(data: WorkoutData): Promise<Workout> {
  const workout = await prisma.workout.create({ data });
  return workout;
}

export async function updateWorkout(
  id: number,
  data: WorkoutData
): Promise<Workout> {
  const workout = await prisma.workout.update({
    where: { id },
    data,
  });
  return workout;
}

export async function deleteWorkout(id: number): Promise<Workout> {
  const workout = await prisma.workout.delete({
    where: { id },
  });
  return workout;
}

export async function fetchWorkoutTypes(): Promise<WorkoutType[]> {
  const workoutTypes = await prisma.workoutType.findMany();
  return workoutTypes;
}
