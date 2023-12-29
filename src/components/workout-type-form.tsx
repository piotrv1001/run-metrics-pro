"use client";

import { Color } from "@prisma/client";
import { useState } from "react";
import InputWithLabel from "./input-with-label";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { submitWorkoutTypeForm } from "@/lib/actions";
import { useToastHandler } from "@/lib/hooks";
import ColorCircle from "./color-circle";

type WorkoutTypeFormProps = {
  closeDialog: () => void;
};

export default function WorkoutTypeForm({ closeDialog }: WorkoutTypeFormProps) {
  const [name, setName] = useState("");
  const [minHeartRate, setMinHeartRate] = useState(0);
  const [maxHeartRate, setMaxHeartRate] = useState(0);
  const [color, setColor] = useState<Color | null>(null);

  const { handleError, handleSuccess } = useToastHandler();

  const handleSubmit = async () => {
    if (!color) {
      handleError("Please select a color");
      return;
    }
    const workoutTypeData = {
      name,
      color,
      minHeartRate,
      maxHeartRate,
    };
    const res = await submitWorkoutTypeForm(workoutTypeData);
    closeDialog();
    if (res.status === "error") {
      handleError(res.message);
    } else {
      handleSuccess("Workout type successfully created");
    }
  };

  const setSelected = (color: Color) => {
    setColor(color);
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-y-8">
      <div className="flex flex-row gap-x-4 items-center">
        <div className="w-1/2">
          <InputWithLabel
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label>Heart rate</Label>
            <div className="flex flex-row items-center gap-x-2">
              <Input
                onChange={(e) => setMinHeartRate(Number(e.target.value))}
              />
              <span>-</span>
              <Input
                onChange={(e) => setMaxHeartRate(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Color</Label>
        <div className="grid grid-cols-6 grid-rows-2 gap-x-4 gap-y-4">
          {Object.values(Color).map((currentColor) => (
            <ColorCircle
              key={currentColor}
              color={currentColor}
              setSelected={setSelected}
              selected={currentColor === color}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end w-full mt-8 gap-x-2">
        <Button type="button" variant="outline" onClick={closeDialog}>
          Cancel
        </Button>
        <Button type="submit" disabled={!color || !name}>
          Create
        </Button>
      </div>
    </form>
  );
}
