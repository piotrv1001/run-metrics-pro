import { GUEST_USER_ID } from "@/lib/constants";
import { Color, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const workoutTypes = [
  {
    id: 1,
    name: "OWB1",
    minHeartRate: 120,
    maxHeartRate: 140,
    color: Color.BLUE,
    userId: GUEST_USER_ID,
  },
  {
    id: 2,
    name: "WB",
    minHeartRate: 140,
    maxHeartRate: 160,
    color: Color.RED,
    userId: GUEST_USER_ID,
  },
  {
    id: 3,
    name: "WB2",
    minHeartRate: 160,
    maxHeartRate: 180,
    color: Color.GREEN,
    userId: GUEST_USER_ID,
  },
  {
    id: 4,
    name: "KA",
    minHeartRate: 180,
    maxHeartRate: 200,
    color: Color.YELLOW,
    userId: GUEST_USER_ID,
  },
  {
    id: 5,
    name: "KP",
    minHeartRate: 120,
    maxHeartRate: 140,
    color: Color.PURPLE,
    userId: GUEST_USER_ID,
  },
  {
    id: 6,
    name: "3M",
    minHeartRate: 180,
    maxHeartRate: 200,
    color: Color.GRAY,
    userId: GUEST_USER_ID,
  },
  {
    id: 7,
    name: "5M",
    minHeartRate: 180,
    maxHeartRate: 200,
    color: Color.PINK,
    userId: GUEST_USER_ID,
  },
  {
    id: 8,
    name: "OWB1 + INT",
    minHeartRate: 120,
    maxHeartRate: 140,
    color: Color.LIME,
    userId: GUEST_USER_ID,
  },
];

const workouts = [
  {
    id: 1,
    distance: 8,
    time: 2700,
    averageHeartRate: 160,
    calories: 750,
    date: new Date(2023, 11, 28),
    workoutTypeId: 2,
    userId: GUEST_USER_ID,
  },
  {
    id: 2,
    distance: 14,
    time: 4800,
    averageHeartRate: 150,
    calories: 890,
    date: new Date(2023, 11, 29),
    workoutTypeId: 1,
    userId: GUEST_USER_ID,
  },
  {
    id: 3,
    distance: 10,
    time: 2880,
    averageHeartRate: 165,
    calories: 900,
    date: new Date(2023, 11, 29),
    workoutTypeId: 3,
    userId: GUEST_USER_ID,
  },
  {
    id: 4,
    distance: 9,
    time: 3720,
    averageHeartRate: 145,
    calories: 750,
    date: new Date(2023, 11, 25),
    workoutTypeId: 5,
    userId: GUEST_USER_ID,
  },
  {
    id: 5,
    distance: 9,
    time: 2700,
    averageHeartRate: 155,
    calories: 700,
    date: new Date(2023, 11, 30),
    workoutTypeId: 4,
    userId: GUEST_USER_ID,
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const workoutType of workoutTypes) {
    const result = await prisma.workoutType.upsert({
      where: { id: workoutType.id },
      update: {},
      create: workoutType,
    });
    console.log(`Created workoutType with id: ${result.id}`);
  }

  for (const workout of workouts) {
    const result = await prisma.workout.upsert({
      where: { id: workout.id },
      update: {},
      create: workout,
    });
    console.log(`Created workout with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });