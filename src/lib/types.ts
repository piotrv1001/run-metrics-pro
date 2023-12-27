export type WorkoutData = {
  distance: number;
  time: number;
  averageHeartRate: number;
  calories: number;
  date: Date;
}

export type Error = {
  status: "error";
  message: string;
};

export type Success = {
  status: "success";
  data: any;
};

// Discriminated union type
export type ServerActionResponse = Error | Success;

export type HoursMinutes = {
  hours: number;
  minutes: number;
}