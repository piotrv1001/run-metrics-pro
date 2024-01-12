import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

type GenderRadioGroupProps = {
  value: string;
  onChange: (e: string) => void;
};

export default function GenderRadioGroup({
  value,
  onChange,
}: GenderRadioGroupProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="radioGroup">Gender</Label>
      <RadioGroup value={value} onValueChange={onChange} id="radioGroup" className="flex gap-x-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male" className="cursor-pointer">Male</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female" className="cursor-pointer">Female</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
