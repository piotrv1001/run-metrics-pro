import Chart from "@/components/chart";
import DashboardCard from "@/components/dashboard-card";
import RecentWorkoutItem from "@/components/recent-workout-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkoutTable from "@/components/workout-table";
import { fetchWorkoutsWithType } from "@/lib/data";
import { TableField } from "@/lib/types";
import {
  CheckCircleIcon,
  ClockIcon,
  FlameIcon,
  TrendingUpIcon,
} from "lucide-react";

const tableFields: TableField[] = [
  { label: "Date", value: "date" },
  { label: "Type", value: "workoutType" },
  { label: "Duration", value: "time" },
  {
    label: "Distance",
    value: "distance",
    suffix: "km",
  },
];

export default async function DashboardPage() {
  const recentWorkouts = await fetchWorkoutsWithType(5);
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Distance"
          mainText="480 km"
          subText="+20% from last month"
          icon={TrendingUpIcon}
        />
        <DashboardCard
          title="Total Time"
          mainText="105:32"
          subText="+5% from last month"
          icon={ClockIcon}
        />
        <DashboardCard
          title="Total Calories"
          mainText="10,235 kcal"
          subText="+35% from last month"
          icon={FlameIcon}
        />
        <DashboardCard
          title="Total Workouts"
          mainText="120"
          subText="same as last month"
          icon={CheckCircleIcon}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>
                Your progress over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Chart />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Recent workouts</CardTitle>
              <CardDescription>Your last 5 running sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutTable
                workouts={recentWorkouts}
                tableFields={tableFields}
                hideCaption={true}
                hideHeader={true}
                hideDropdownMenu={true}
              />
              {/* <div className="space-y-8">
                {recentWorkouts.map((workout) => (
                  <RecentWorkoutItem key={workout.id} workout={workout} />
                ))}
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
