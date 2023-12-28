import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type DashboardCardProps = {
  title: string;
  mainText: string;
  subText: string;
  icon: LucideIcon;
};

export default function DashboardCard({
  title,
  mainText,
  subText,
  icon: Icon,
}: DashboardCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-sm font-medium">{title}</h3>
          <Icon size={16} />
        </div>
        <div className="p-6 pt-0">
          <div className="text-2xl font-bold">{mainText}</div>
          <p className="text-xs text-muted-foreground">{subText}</p>
        </div>
      </CardContent>
    </Card>
  );
}
