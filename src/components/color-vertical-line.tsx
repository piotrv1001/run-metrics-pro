import { cn, colorVariants } from "@/lib/utils";
import { Color } from "@prisma/client";

type ColorVerticalLineProps = {
  color: Color;
};
export default function ColorVerticalLine({ color }: ColorVerticalLineProps) {
  const bgClassName = `${colorVariants[color]}`;
  return (
    <div
      className={cn(
        "h-full w-[4px] rounded-sm shadow-md",
        bgClassName
      )}
    ></div>
  );
}
