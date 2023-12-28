import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { WorkoutType } from "@prisma/client";

type WorkoutTypeSelectProps = {
  workoutTypes: WorkoutType[];
  setWorkoutType: (workoutType?: WorkoutType) => void;
};

export default function WorkoutTypeSelect({
  workoutTypes,
  setWorkoutType,
}: WorkoutTypeSelectProps) {
  const handleValueChange = (value: string) => {
    const workoutType = workoutTypes.find(
      (workoutType) => workoutType.name === value
    );
    setWorkoutType(workoutType);
  };

  return (
    <Select
      defaultValue={workoutTypes[0].name}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select workout type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {workoutTypes.map((workoutType) => (
            <SelectItem key={workoutType.id} value={workoutType.name}>
              {workoutType.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
