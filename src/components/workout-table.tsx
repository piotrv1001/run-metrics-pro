import { Workout } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  convertTimeToHoursMinutes,
  formatDate,
  padStart,
  getDayOfWeek,
} from "@/lib/utils";
import {
  CalendarIcon,
  ClockIcon,
  FlameIcon,
  HeartIcon,
  LucideIcon,
  TrendingUpIcon,
} from "lucide-react";

type WorkoutTableProps = {
  workouts: Workout[];
};

type TableField = {
  label: string;
  headerIcon: LucideIcon;
  value: keyof Omit<Workout, "id" | "createdAt" | "updatedAt">;
  prefix?: string;
  suffix?: string;
};

const tableFields: TableField[] = [
  { label: "Date", value: "date", headerIcon: CalendarIcon },
  { label: "Duration", value: "time", headerIcon: ClockIcon },
  {
    label: "Distance",
    value: "distance",
    suffix: "km",
    headerIcon: TrendingUpIcon,
  },
  {
    label: "Avg. heart rate",
    value: "averageHeartRate",
    suffix: "bpm",
    headerIcon: HeartIcon,
  },
  {
    label: "Calories",
    value: "calories",
    suffix: "kcal",
    headerIcon: FlameIcon,
  },
];

const getCellValue = (workout: Workout, field: TableField) => {
  const value = workout[field.value];
  if (field.prefix) {
    return `${field.prefix} ${value}`;
  }
  if (field.suffix) {
    return `${value} ${field.suffix}`;
  }
  if (field.value === "date") {
    return formatDate(workout.date);
  }
  if (field.value === "time") {
    const { hours, minutes } = convertTimeToHoursMinutes(workout.time);
    return `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`;
  }
  return value as number;
};

export default function WorkoutTable({ workouts }: WorkoutTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableCaption className="my-4">A list of your workouts</TableCaption>
        <TableHeader className="bg-muted">
          <TableRow>
            {tableFields.map((field) => (
              <TableHead className="font-bold" key={field.value}>
                <div className="flex gap-x-4 items-center">
                  <span>{field.label}</span>
                  <field.headerIcon size={16} />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow key={workout.id}>
              {tableFields.map((field) => (
                <TableCell key={field.value} className="py-6">
                  {field.value === "date" ? (
                    <div className="flex flex-col gap-y-1">
                      <span className="text-lg">{getDayOfWeek(workout.date)}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(workout.date)}
                      </span>
                    </div>
                  ) : (
                    getCellValue(workout, field)
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
