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
  cn,
} from "@/lib/utils";
import TableDropdownMenu from "./table-dropdown-menu";
import { TableField, WorkoutWithType } from "@/lib/types";
import ColorVerticalLine from "./color-vertical-line";

type WorkoutTableProps = {
  workouts: WorkoutWithType[];
  tableFields: TableField[];
  hideHeader?: boolean;
  hideCaption?: boolean;
  hideDropdownMenu?: boolean;
};

const getCellValue = (workout: WorkoutWithType, field: TableField) => {
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
  if (field.value === "workoutType") {
    return workout.workoutType.name;
  }
  return value as number;
};

export default function WorkoutTable({
  workouts,
  tableFields,
  hideHeader,
  hideCaption,
  hideDropdownMenu,
}: WorkoutTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        {hideCaption !== true && (
          <TableCaption className="my-4">A list of your workouts</TableCaption>
        )}
        {hideHeader !== true && (
          <TableHeader className="bg-muted">
            <TableRow>
              {hideDropdownMenu !== true && <TableHead className="w-4" />}
              {tableFields.map((field) => (
                <TableHead
                  className={cn("font-bold", field.className)}
                  key={field.value}
                >
                  <div className="flex gap-x-4 items-center">
                    <span>{field.label}</span>
                    {field.headerIcon && <field.headerIcon size={16} />}
                  </div>
                </TableHead>
              ))}
              <TableHead className="w-16" />
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          {workouts.map((workout) => (
            <TableRow key={workout.id}>
              <TableCell className="w-4 h-[88px]">
                <ColorVerticalLine color={workout.workoutType.color} />
              </TableCell>
              {tableFields.map((field) => (
                <TableCell
                  key={field.value}
                  className={cn("py-6", field.className)}
                >
                  {field.value === "date" ? (
                    <div className="flex flex-col gap-y-1">
                      <span className="font-medium">
                        {getDayOfWeek(workout.date)}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {formatDate(workout.date)}
                      </span>
                    </div>
                  ) : (
                    getCellValue(workout, field)
                  )}
                </TableCell>
              ))}
              {hideDropdownMenu !== true && (
                <TableCell>
                  <TableDropdownMenu />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
