import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { activityLevels } from "@/lib/constants";

type ActivityLevelSelectProps = {
  value: string;
  onChange: (e: string) => void;
};

export default function ActivityLevelSelect({
  value,
  onChange,
}: ActivityLevelSelectProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select activity level" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {activityLevels.map((level) => (
            <SelectItem key={level.value} value={level.label}>
              {level.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
