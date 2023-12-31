import { Workout, WorkoutType } from "@prisma/client";
import prisma from "./db";
import {
  DashBoardCardData,
  WorkoutData,
  WorkoutTypeData,
  WorkoutWithType,
} from "./types";
import {
  CheckCircleIcon,
  ClockIcon,
  FlameIcon,
  TrendingUpIcon,
} from "lucide-react";
import { convertTimeToHoursMinutes } from "./utils";

export async function fetchWorkouts(): Promise<Workout[]> {
  const workouts = await prisma.workout.findMany({
    orderBy: { date: "desc" },
  });
  return workouts;
}

export async function fetchWorkoutsWithType(
  limit?: number
): Promise<WorkoutWithType[]> {
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

export async function createWorkoutType(
  data: WorkoutTypeData
): Promise<WorkoutType> {
  const workoutType = await prisma.workoutType.create({ data });
  return workoutType;
}

export async function fetchTotals(): Promise<DashBoardCardData[]> {
  const totals = await prisma.workout.aggregate({
    _count: { id: true },
    _sum: { distance: true, time: true, calories: true },
  });
  const workouts: DashBoardCardData = {
    title: "Total workouts",
    displayValue: Intl.NumberFormat("en-US").format(totals._count.id) ?? "0",
    value: totals._count.id ?? 0,
    icon: TrendingUpIcon,
    percentageDiff: 0,
    percentageSince: "lastMonth",
  };
  const calories: DashBoardCardData = {
    title: "Total calories",
    displayValue: totals._sum.calories
      ? Intl.NumberFormat("en-US").format(totals._sum.calories) + " kcal"
      : "0 kcal",
    value: totals._sum.calories ?? 0,
    icon: FlameIcon,
    percentageDiff: 0,
    percentageSince: "lastMonth",
  };
  const distance: DashBoardCardData = {
    title: "Total distance",
    displayValue: totals._sum.distance?.toString() + " km" ?? "0 km",
    value: totals._sum.distance ?? 0,
    icon: CheckCircleIcon,
    percentageDiff: 0,
    percentageSince: "lastMonth",
  };
  const hoursMinutes = convertTimeToHoursMinutes(totals._sum.time ?? 0);
  const time: DashBoardCardData = {
    title: "Total time",
    displayValue: `${hoursMinutes.hours}:${hoursMinutes.minutes}` ?? "0",
    value: totals._sum.time ?? 0,
    icon: ClockIcon,
    percentageDiff: 0,
    percentageSince: "lastMonth",
  };
  return [distance, time, calories, workouts];
}
