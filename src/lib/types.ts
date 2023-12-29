import { Color, Workout, WorkoutType } from "@prisma/client";
import { LucideIcon } from "lucide-react";

export type WorkoutData = {
  distance: number;
  time: number;
  averageHeartRate: number;
  calories: number;
  date: Date;
  workoutTypeId: number;
};

export type WorkoutTypeData = {
  name: string;
  minHeartRate: number;
  maxHeartRate: number;
  color: Color;
}

export type WorkoutWithType = Workout & {
  workoutType: WorkoutType;
};

export type Error = {
  status: "error";
  message: string;
};

export type Success = {
  status: "success";
  data: any;
};

// Discriminated union type
export type ServerActionResponse = Error | Success;

export type HoursMinutes = {
  hours: number;
  minutes: number;
};

export type TableField = {
  label: string;
  value: keyof WorkoutWithType;
  className?: string;
  headerIcon?: LucideIcon;
  prefix?: string;
  suffix?: string;
};
