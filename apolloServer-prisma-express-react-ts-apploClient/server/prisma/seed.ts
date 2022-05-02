import { PrismaClient, Prisma } from "@prisma/client";
import data from "../src/data.json";

const prisma = new PrismaClient();

const reviewData: Prisma.ReviewCreateInput[] = [...data];

async function main() {
  console.log(`Start seeding ...`);
  for (const r of reviewData) {
    const review = await prisma.review.create({
      data: r,
    });
    console.log(`Created reiview with id: ${review.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
