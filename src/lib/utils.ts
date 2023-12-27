import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HoursMinutes } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Date(date)
    .toLocaleDateString("pl", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\./g, "-");
}

export function getDayOfWeek(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", { weekday: "long" });
}

export function convertTimeToHoursMinutes(time: number): HoursMinutes {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  return { hours, minutes };
}

export function convertHoursMinutesToTime({
  hours,
  minutes,
}: HoursMinutes): number {
  return hours * 3600 + minutes * 60;
}

export function padStart(value: number | string, length: number, pad: string): string {
  if(typeof value === 'number') {
    value = value.toString();
  }
  return value.padStart(length, pad);
}
