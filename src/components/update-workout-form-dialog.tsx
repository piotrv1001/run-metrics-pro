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
import { PencilIcon } from "lucide-react";
import WorkoutForm from "./workout-form";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { WorkoutWithType } from "@/lib/types";

type UpdateWorkoutFormDialogProps = {
  workout: WorkoutWithType;
  closeDropdown: () => void;
};

export default function UpdateWorkoutFormDialog({
  workout,
  closeDropdown,
}: UpdateWorkoutFormDialogProps) {
  const [open, setOpen] = useState(false);
  const closeDialog = () => {
    setOpen(false);
  };
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeDropdown();
    }
    setOpen(open);
  }
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className="w-full">
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="cursor-pointer p-3"
        >
          <PencilIcon className="mr-2 h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update workout</DialogTitle>
          <DialogDescription>Update an existing workout here</DialogDescription>
        </DialogHeader>
        <WorkoutForm
          closeDialog={closeDialog}
          workoutToUpdate={workout}
          closeDropdown={closeDropdown}
        />
      </DialogContent>
    </Dialog>
  );
}
