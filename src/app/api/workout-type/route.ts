import { fetchWorkoutTypes } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const workoutTypes = await fetchWorkoutTypes();
  return NextResponse.json(workoutTypes);
}