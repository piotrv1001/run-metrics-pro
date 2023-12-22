"use client";

import { submitWorkoutForm } from "@/lib/actions";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

type WorkoutFormProps = {
  closeDialog: () => void;
};

export default function WorkoutForm({ closeDialog }: WorkoutFormProps) {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [averageHeartRate, setAverageHeartRate] = useState(0);
  const [calories, setCalories] = useState(0);

  const { toast } = useToast();

  const handleSubmit = async () => {
    const workoutData = {
      distance,
      time,
      averageHeartRate,
      calories,
      date: new Date(),
    };
    const res = await submitWorkoutForm(workoutData);
    if (res.status === "error") {
      console.error(res.message);
      toast({
        title: "Error",
        description: res.message,
      });
    } else {
      toast({
        title: "Success",
        description: "Workout successfully created",
      });
    }
    closeDialog();
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-y-4">
      <Input
        placeholder="Distance"
        onChange={(e) => setDistance(Number(e.target.value))}
      />
      <Input
        placeholder="Time"
        onChange={(e) => setTime(Number(e.target.value))}
      />
      <Input
        placeholder="Average heart rate"
        onChange={(e) => setAverageHeartRate(Number(e.target.value))}
      />
      <Input
        placeholder="Calories"
        onChange={(e) => setCalories(Number(e.target.value))}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
