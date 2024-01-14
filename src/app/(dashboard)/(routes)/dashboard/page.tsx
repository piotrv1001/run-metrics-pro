import Chart from "@/components/chart";
import DashboardCard from "@/components/dashboard-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkoutTable from "@/components/workout-table";
import { fetchChartData, fetchDashboardData, fetchTotals, fetchWorkoutsWithType } from "@/lib/data";
import { PercentageSince, TableField } from "@/lib/types";

const tableFields: TableField[] = [
  { label: "Date", value: "date" },
  { label: "Type", value: "workoutType", className: "hidden sm:table-cell" },
  { label: "Duration", value: "time" },
  {
    label: "Distance",
    value: "distance",
    suffix: "km",
  },
];

const getSubText = (percentageDiff: number, percentageSince: PercentageSince) => {
  const prefix = percentageDiff > 0 ? "+" : "-";
  const subTextMap = {
    lastMonth: "last month",
    lastWeek: "last week",
    lastYear: "last year",
  };
  const suffix = subTextMap[percentageSince];
  if(percentageDiff === 0) {
    return `same as ${suffix}`;
  }
  return `${prefix}${percentageDiff}% since${suffix}`;
}

export default async function DashboardPage() {
  const { recentWorkouts, totals, chartData } = await fetchDashboardData();
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {totals.map((total, index) => (
          <DashboardCard
            key={index}
            title={total.title}
            mainText={total.displayValue}
            subText={getSubText(total.percentageDiff, total.percentageSince)}
            icon={total.icon}
          />
        ))}
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
              <Chart chartData={chartData} />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-4 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Recent workouts</CardTitle>
              <CardDescription>Your last 5 running sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {recentWorkouts.length > 0 ? (
                <WorkoutTable
                workouts={recentWorkouts}
                tableFields={tableFields}
                hideCaption={true}
                hideHeader={true}
                hideDropdownMenu={true}
              />
              ) : (
                <div className="h-[446px]"></div>
              )}
              
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
