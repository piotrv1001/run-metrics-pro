"use client";

import SlideInPage from "@/components/slide-in-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MARATHON_DISTANCE_KM } from "@/lib/constants";
import { useToastHandler } from "@/lib/hooks";
import { padStart } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type TargetPace = {
  minutes: number;
  seconds: number;
};

export default function MarathonPage() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [targetPace, setTargetPace] = useState<TargetPace | null>(null);

  const { handleError } = useToastHandler();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedHours = Number(hours);
    const parsedMinutes = Number(minutes);
    if (
      hours === "" ||
      minutes === "" ||
      isNaN(parsedHours) ||
      isNaN(parsedMinutes) ||
      parsedHours < 0 ||
      parsedMinutes < 0
    ) {
      handleError("Please enter a valid time");
      return;
    }
    const totalMinutes = parsedHours * 60 + parsedMinutes;
    const pace = totalMinutes / MARATHON_DISTANCE_KM;
    const paceMinutes = Math.floor(pace);
    const paceSeconds = Math.round((pace - paceMinutes) * 60);
    setTargetPace({
      minutes: paceMinutes,
      seconds: paceSeconds,
    });
  };

  const formattedTime = targetPace
    ? `${padStart(targetPace.minutes, 2, "0")}:${padStart(
        targetPace.seconds,
        2,
        "0"
      )}`
    : "00:00";

  return (
    <SlideInPage>
      <div className="flex gap-x-4 items-center">
        <Link href="/calculator" className="rounded-full bg-accent p-2">
          <ArrowLeftIcon />
        </Link>
        <h1 className="texl:lg md:text-2xl font-bold">Marathon target time</h1>
      </div>
      <p className="text-muted-foreground mt-4">
        Calculate the average pace per km for your marathon target time
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-y-4 max-w-sm"
      >
        <div className="grid items-center gap-2">
          <Label>Marathon target time</Label>
          <div className="flex flex-row items-center gap-x-2">
            <Input onChange={(e) => setHours(e.target.value)} value={hours} />
            <span>:</span>
            <Input
              onChange={(e) => setMinutes(e.target.value)}
              value={minutes}
            />
          </div>
        </div>
        <Button type="submit">Calculate</Button>
      </form>
      <div className="mt-8">
        <div className="text-sm font-medium leading-none mb-2">
          Average pace per km
        </div>
        <div className="text-3xl font-bold">{formattedTime}</div>
      </div>
    </SlideInPage>
  );
}
