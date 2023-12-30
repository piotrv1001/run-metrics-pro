"use client";

import { cn, colorVariants } from "@/lib/utils";
import { Color } from "@prisma/client";

type ColorCircleProps = {
  color: Color;
  selected: boolean;
  setSelected: (color: Color) => void;
};

export default function ColorCircle({ color, selected, setSelected }: ColorCircleProps) {
  const bgClassName = `${colorVariants[color]}`;
  return (
    <div
      className={cn(
        "w-[56px] h-[56px] hover:bg-accent cursor-pointer transition-colors flex justify-center items-center rounded-md",
        selected && "bg-accent"
      )}
      onClick={() => setSelected(color)}
    >
      <div
        className={cn(
          "col-span-1 rounded-full w-[38px] h-[38px]",
          bgClassName
        )}
      ></div>
    </div>
  );
}
