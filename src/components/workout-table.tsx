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
import { formatDate } from "@/lib/utils";

type WorkoutTableProps = {
  workouts: Workout[];
};

const tableFields: {
  label: string;
  value: keyof Omit<Workout, "id" | "createdAt" | "updatedAt">;
}[] = [
  { label: "Date", value: "date" },
  { label: "Duration", value: "time" },
  { label: "Distance", value: "distance" },
  { label: "Avg. heart rate", value: "averageHeartRate" },
  { label: "Calories", value: "calories" },
];

export default function WorkoutTable({ workouts }: WorkoutTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableCaption className="my-4">A list of your workouts</TableCaption>
        <TableHeader className="bg-muted">
          <TableRow>
            {tableFields.map((field) => (
              <TableHead className="font-bold" key={field.value}>
                {field.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow key={workout.id}>
              {tableFields.map((field) => (
                <TableCell key={field.value}>
                  {field.value === "date"
                    ? formatDate(workout.date)
                    : workout[field.value] ?? "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
