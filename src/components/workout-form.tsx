"use client";

import { submitWorkoutForm } from "@/lib/actions";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { convertHoursMinutesToTime } from "@/lib/utils";
import InputWithLabel from "./input-with-label";
import { Label } from "./ui/label";
import DatePicker from "./date-picker";

type WorkoutFormProps = {
  closeDialog: () => void;
};

export default function WorkoutForm({ closeDialog }: WorkoutFormProps) {
  const [distance, setDistance] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [averageHeartRate, setAverageHeartRate] = useState(0);
  const [calories, setCalories] = useState(0);
  const [date, setDate] = useState<Date>(new Date());

  const { toast } = useToast();

  const disabled =
    !distance || !hours || !minutes || !averageHeartRate || !calories;

  const setDateFn = (date?: Date) => {
    if (date) {
      setDate(date);
    }
  }

  const handleSubmit = async () => {
    const time = convertHoursMinutesToTime({ hours, minutes });
    const workoutData = {
      distance,
      time,
      averageHeartRate,
      calories,
      date,
    };
    const res = await submitWorkoutForm(workoutData);
    closeDialog();
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
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-y-8">
      <div className="grid w-full items-center gap-2 mt-8">
        <Label>Date</Label>
        <DatePicker date={date} setDate={setDateFn} />
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <div className="w-1/2">
          <InputWithLabel
            label="Distance (km)"
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label>Time</Label>
            <div className="flex flex-row items-center gap-x-2">
              <Input onChange={(e) => setHours(Number(e.target.value))} />
              <span>:</span>
              <Input onChange={(e) => setMinutes(Number(e.target.value))} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <div className="w-1/2">
          <InputWithLabel
            label="Avg. heart rate (bpm)"
            onChange={(e) => setAverageHeartRate(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2">
          <InputWithLabel
            label="Calories (kcal)"
            onChange={(e) => setCalories(Number(e.target.value))}
          />
        </div>
      </div>
      {/* <div className="grid w-full items-center gap-2">
        <Label>Date</Label>
        <DatePicker date={date} setDate={setDateFn} />
      </div> */}
      <div className="flex justify-end w-full mt-8 gap-x-2">
        <Button type="button" variant="outline" onClick={closeDialog}>
          Cancel
        </Button>
        <Button type="submit" disabled={disabled}>
          Create
        </Button>
      </div>
    </form>
  );
}
