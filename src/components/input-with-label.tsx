import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputWithLabelProps = {
  value: string | number;
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputWithLabel({
  value,
  label,
  placeholder,
  onChange,
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="input">{label}</Label>
      <Input
        id="input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
