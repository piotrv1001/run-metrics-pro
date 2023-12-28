"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import WorkoutForm from "./workout-form";
import { useState } from "react";
import { WorkoutType } from "@prisma/client";

type WorkoutFormDialogProps = {
  workoutTypes: WorkoutType[];
};

export default function WorkoutFormDialog({
  workoutTypes,
}: WorkoutFormDialogProps) {
  const [open, setOpen] = useState(false);
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Create</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create workout</DialogTitle>
          <DialogDescription>Add a new workout here</DialogDescription>
        </DialogHeader>
        <WorkoutForm closeDialog={closeDialog} workoutTypes={workoutTypes} />
      </DialogContent>
    </Dialog>
  );
}
