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
  value: string;
  workoutTypes: WorkoutType[];
  setWorkoutType: (workoutType?: WorkoutType) => void;
};

export default function WorkoutTypeSelect({
  value,
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
    <Select onValueChange={handleValueChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select workout type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {workoutTypes.length > 0 ? (
            workoutTypes.map((workoutType) => (
              <SelectItem key={workoutType.id} value={workoutType.name}>
                {workoutType.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem disabled value="loading">
              Loading...
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
