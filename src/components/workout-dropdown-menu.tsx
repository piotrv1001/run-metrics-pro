"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UpdateWorkoutFormDialog from "./update-workout-form-dialog";
import ConfirmDeleteDialog from "./confirm-delete-dialog";
import { WorkoutWithType } from "@/lib/types";
import { useState } from "react";
import { useToastHandler } from "@/lib/hooks";
import { deleteWorkoutAction } from "@/lib/actions";

type WorkoutDropdownMenuProps = {
  workout: WorkoutWithType;
};

export default function WorkoutDropdownMenu({
  workout,
}: WorkoutDropdownMenuProps) {
  const [open, setOpen] = useState(false);

  const { handleError, handleSuccess } = useToastHandler();

  const closeDropdown = () => {
    setOpen(false);
  };

  const removeWorkout = async () => {
    const res = await deleteWorkoutAction(workout.id);
    closeDropdown();
    if (res.status === "error") {
      handleError(res.message);
    } else {
      handleSuccess("Workout successfully deleted");
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <span className="sr-only">Open menu</span>
          <MoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <UpdateWorkoutFormDialog
          workout={workout}
          closeDropdown={closeDropdown}
        />
        <ConfirmDeleteDialog
          title="Are you sure you want to delete this workout?"
          description="This action cannot be undone. This will permanently delete the workout data from our servers."
          onConfirm={removeWorkout}
          onCancel={closeDropdown}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
