"use client";

import InputWithLabel from "@/components/input-with-label";
import SlideInPage from "@/components/slide-in-page";
import { Button } from "@/components/ui/button";
import { useToastHandler } from "@/lib/hooks";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const getOneRepMax = (weight: number, reps: number) => {
  return Math.round(weight * (1 + 0.0333 * reps));
}

export default function OneRepMaxPage() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRepMax, setOneRepMax] = useState(0);

  const { handleError } = useToastHandler();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedWeight = Number(weight);
    const parsedReps = Number(reps);
    if(isNaN(parsedWeight) || isNaN(parsedReps) || parsedWeight <= 0 || parsedReps <= 0) {
      handleError("Please enter a valid weight and reps");
      return;
    }
    const oneRepMax = getOneRepMax(parsedWeight, parsedReps);
    setOneRepMax(oneRepMax);
  }

  return (
    <SlideInPage>
      <div className="flex gap-x-4 items-center">
        <Link href="/calculator" className="rounded-full bg-accent p-2">
          <ArrowLeftIcon />
        </Link>
        <h1 className="texl:lg md:text-2xl font-bold">1 Rep Max (1RM)</h1>
      </div>
      <p className="text-muted-foreground mt-4">
        Calculate your 1RM based on the weight and reps you can lift
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-y-4 max-w-sm"
      >
        <InputWithLabel
          value={weight}
          label="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />
        <InputWithLabel
          value={reps}
          label="Repetitions"
          onChange={(e) => setReps(e.target.value)}
        />
        <Button type="submit">Calculate</Button>
      </form>
      <div className="mt-8">
        <div className="text-sm font-medium leading-none mb-2">
          1RM
        </div>
        <div className="text-3xl font-bold">{oneRepMax} kg</div>
      </div>
    </SlideInPage>
  );
}
