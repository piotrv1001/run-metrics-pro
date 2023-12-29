"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import WorkoutTypeForm from "./workout-type-form";

export default function WorkoutTypeFormDialog() {
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
          <DialogTitle>Create workout type</DialogTitle>
          <DialogDescription>Add a new workout type here</DialogDescription>
        </DialogHeader>
        <WorkoutTypeForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
}
