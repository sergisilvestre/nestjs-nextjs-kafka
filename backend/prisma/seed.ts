import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const randomBetween = (min: number, max: number) =>
  faker.number.int({ min, max });

async function main() {
  const products = Array.from({ length: 100 }, () => ({
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    price: Number(faker.commerce.price({ min: 3, max: 25 })),
    stock: randomBetween(50, 100),
  }));

  await prisma.product.createMany({
    data: products,
  });

  console.log(`✅ Seeded ${products.length} products`);
}

main().finally(async () => {
  await prisma.$disconnect();
});
