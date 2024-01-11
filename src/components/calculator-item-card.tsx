import { ArrowRightIcon, LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CalculatorItemCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color: string;
  bgColor: string;
};

export default function CalculatorItemCard({
  icon: Icon,
  title,
  description,
  link,
  color,
  bgColor
}: CalculatorItemCardProps) {
  return (
    <Link href={link}>
      <Card className="hover:bg-accent transition group">
        <CardContent className="p-0">
          <div className="flex gap-x-4 p-4 md:p-6 items-center">
            <div className={cn("w-14 h-14 rounded-full flex justify-center items-center", bgColor)}>
              <Icon size={26} className={color} />
            </div>
            <div className="flex-1 flex flex-col gap-y-2">
              <h1 className="texl:lg md:text-2xl font-bold">{title}</h1>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <ArrowRightIcon size={26} className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
