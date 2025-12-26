const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const props = await prisma.property.count();
  const persons = await prisma.person.count();
  console.log('Properties:', props);
  console.log('Persons:', persons);
  await prisma.$disconnect();
}
main();
