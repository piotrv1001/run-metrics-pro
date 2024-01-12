import {
  BarChart4,
  CalculatorIcon,
  CitrusIcon,
  DatabaseIcon,
  DumbbellIcon,
  LayoutDashboard,
  TrophyIcon,
} from "lucide-react";

export const MARATHON_DISTANCE_KM = 42.195;

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Workouts",
    icon: BarChart4,
    href: "/workouts",
    color: "text-emerald-500",
  },
  {
    label: "Workout types",
    icon: DatabaseIcon,
    href: "/categories",
    color: "text-purple-500",
  },
  {
    label: "Calculator",
    icon: CalculatorIcon,
    href: "/calculator",
    color: "text-orange-500",
  },
];

export const calculatorItems = [
  {
    title: "Marathon target time",
    description:
      "Calculate the average pace per km for your marathon target time",
    icon: TrophyIcon,
    link: "/calculator/marathon",
    color: "text-yellow-500",
    bgColor: "dark:bg-yellow-900 bg-yellow-100",
  },
  {
    title: "Daily calorie intake",
    description:
      "Calculate your target calorie intake per day based on your activity level",
    icon: CitrusIcon,
    link: "/calculator/calories",
    color: "text-red-500",
    bgColor: "dark:bg-red-900 bg-red-100",
  },
  {
    title: "1 Rep Max (1RM)",
    description: "Calculate your 1RM based on the weight and reps you can lift",
    icon: DumbbellIcon,
    link: "/calculator/one-rep-max",
    color: "text-green-500",
    bgColor: "dark:bg-green-900 bg-green-100",
  },
];

export const activityLevels = [
  { value: 1.2, label: "Sedentary" },
  { value: 1.375, label: "Lightly active" },
  { value: 1.55, label: "Moderately active" },
  { value: 1.725, label: "Very active" },
  { value: 1.9, label: "Extremely active" },
] as const;
