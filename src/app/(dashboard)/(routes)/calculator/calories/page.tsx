"use client";

import ActivityLevelSelect from "@/components/activity-level-select";
import GenderRadioGroup from "@/components/gender-radio-group";
import InputWithLabel from "@/components/input-with-label";
import SlideInPage from "@/components/slide-in-page";
import { Button } from "@/components/ui/button";
import { activityLevels } from "@/lib/constants";
import { useToastHandler } from "@/lib/hooks";
import { ActivityLevelLabel } from "@/lib/types";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type Gender = "male" | "female";

const calculateCalories = (
  age: number,
  gender: Gender,
  weight: number,
  height: number,
  activityLevel: ActivityLevelLabel
) => {
  let bmr = 0;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  const activityLevelValue = activityLevels.find(level => level.label === activityLevel)?.value;
  // Should never happen
  if(!activityLevelValue) {
    throw new Error("Invalid activity level");
  }

  const totalCalories = bmr * activityLevelValue;
  return Math.round(totalCalories);
};

export default function CaloriesPage() {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(65);
  const [gender, setGender] = useState<Gender>("male");
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevelLabel>("Sedentary");
  const [result, setResult] = useState<number>(0)

  const { handleError } = useToastHandler();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = calculateCalories(age, gender, weight, height, activityLevel);
      setResult(result);
    } catch(error) {
      if(typeof error === "string") {
        handleError(error);
        return;
      }
      handleError("Something went wrong");
    }
  };

  return (
    <SlideInPage>
      <div className="flex gap-x-4 items-center">
        <Link href="/calculator" className="rounded-full bg-accent p-2">
          <ArrowLeftIcon />
        </Link>
        <h1 className="texl:lg md:text-2xl font-bold">Daily calorie intake</h1>
      </div>
      <p className="text-muted-foreground mt-4">
        Calculate your target calorie intake per day based on your activity
        level
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-y-6 max-w-sm"
      >
        <InputWithLabel
          value={age}
          label="Age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <GenderRadioGroup
          value={gender}
          onChange={(e) => setGender(e as Gender)}
        />
        <InputWithLabel
          value={height}
          label="Height (cm)"
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <InputWithLabel
          value={weight}
          label="Weight (kg)"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <div className="space-y-2">
          <div className="text-sm font-medium leading-none">Activity level</div>
          <ActivityLevelSelect
            value={activityLevel}
            onChange={(e) => setActivityLevel(e as ActivityLevelLabel)}
          />
        </div>
        <Button type="submit">Calculate</Button>
      </form>
      <div className="mt-8">
        <div className="text-sm font-medium leading-none mb-2">
          Daily calories to maintain weight
        </div>
        <div className="text-3xl font-bold">{result}</div>
      </div>
    </SlideInPage>
  );
}
