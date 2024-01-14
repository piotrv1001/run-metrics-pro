import { Workout, WorkoutType } from "@prisma/client";
import prisma from "./db";
import {
  ChartData,
  DashBoardCardData,
  DashboardData,
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
import { auth } from "@clerk/nextjs";
import { GUEST_USER_ID, guestChartData } from "./constants";

export async function fetchDashboardData(): Promise<DashboardData> {
  let isGuest = false;
  let { userId } = auth();
  if (!userId) {
    isGuest = true;
  }
  const [recentWorkouts, totals, chartData] = await Promise.all([
    fetchWorkoutsWithType(isGuest, 5),
    fetchTotals(isGuest),
    fetchChartData(isGuest),
  ]);
  return { recentWorkouts, totals, chartData };
}

export async function fetchWorkoutsWithType(
  isGuest = false,
  limit?: number
): Promise<WorkoutWithType[]> {
  let userId;
  if (isGuest) {
    userId = GUEST_USER_ID;
  } else {
    let { userId: clerkUserId } = auth();
    if (!clerkUserId) {
      userId = GUEST_USER_ID;
    } else {
      userId = clerkUserId;
    }
  }
  const workouts = await prisma.workout.findMany({
    where: { userId },
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
  let { userId } = auth();
  if (!userId) {
    userId = GUEST_USER_ID;
  }
  const workout = await prisma.workout.create({ data: { ...data, userId } });
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
  let { userId } = auth();
  if (!userId) {
    userId = GUEST_USER_ID;
  }
  const workoutTypes = await prisma.workoutType.findMany({
    where: { userId },
  });
  return workoutTypes;
}

export async function createWorkoutType(
  data: WorkoutTypeData
): Promise<WorkoutType> {
  let { userId } = auth();
  if (!userId) {
    userId = GUEST_USER_ID;
  }
  const workoutType = await prisma.workoutType.create({
    data: { ...data, userId },
  });
  return workoutType;
}

export async function fetchTotals(isGuest = false): Promise<DashBoardCardData[]> {
  let userId;
  if (isGuest) {
    userId = GUEST_USER_ID;
  } else {
    let { userId: clerkUserId } = auth();
    if (!clerkUserId) {
      userId = GUEST_USER_ID;
    } else {
      userId = clerkUserId;
    }
  }
  const totals = await prisma.workout.aggregate({
    where: { userId },
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
    displayValue: totals._sum.distance?.toString()
      ? totals._sum.distance.toString() + " km"
      : "0 km",
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

export async function fetchChartData(isGuest = false): Promise<ChartData[]> {
  let userId;
  if (isGuest) {
    return guestChartData;
  } else {
    let { userId: clerkUserId } = auth();
    if (!clerkUserId) {
      userId = GUEST_USER_ID;
    } else {
      userId = clerkUserId;
    }
  }
  const currentDate = new Date();
  const oneWeekAgo = new Date();
  currentDate.setDate(currentDate.getDate() - 7);
  oneWeekAgo.setDate(currentDate.getDate() - 14);

  const workouts = await prisma.workout.findMany({
    where: {
      userId,
      date: {
        gte: oneWeekAgo.toISOString(),
        lte: currentDate.toISOString(),
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  const chartData: ChartData[] = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(oneWeekAgo);
    currentDate.setDate(oneWeekAgo.getDate() + i);
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    chartData.push({ label: formattedDate, value: 0 });
  }
  workouts.forEach((workout) => {
    const formattedDate = new Date(workout.date).toLocaleDateString("en-US", {
      weekday: "short",
    });
    const chartDataIndex = chartData.findIndex(
      (item) => item.label === formattedDate
    );
    if (chartDataIndex !== -1) {
      chartData[chartDataIndex].value += workout.distance;
    }
  });

  return chartData;
}
