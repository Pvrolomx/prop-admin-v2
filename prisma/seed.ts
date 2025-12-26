import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Create persons
  const john = await prisma.person.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      phone: "322-123-4567",
      rfc: "JODN800101ABC",
      curp: "JODN800101HDFRGT01",
      address: "Av. Reforma 123",
      city: "Puerto Vallarta",
      state: "Jalisco",
      zipCode: "48300",
    },
  });

  const maria = await prisma.person.create({
    data: {
      name: "Maria Garcia",
      email: "maria@example.com",
      phone: "322-987-6543",
      rfc: "GAMM850315XYZ",
      address: "Calle Centro 456",
      city: "Puerto Vallarta",
      state: "Jalisco",
      zipCode: "48310",
    },
  });

  // Create properties
  const prop1 = await prisma.property.create({
    data: {
      name: "Casa Marina",
      type: "HOUSE",
      status: "RENTED",
      address: "Av. del Mar 789",
      city: "Puerto Vallarta",
      state: "Jalisco",
      zipCode: "48330",
      area: 250,
      bedrooms: 3,
      bathrooms: 2.5,
      description: "Beautiful ocean view house",
    },
  });

  const prop2 = await prisma.property.create({
    data: {
      name: "Depto Centro",
      type: "APARTMENT",
      status: "ACTIVE",
      address: "Calle Juárez 321",
      city: "Puerto Vallarta",
      state: "Jalisco",
      zipCode: "48300",
      area: 120,
      bedrooms: 2,
      bathrooms: 1,
      description: "Modern downtown apartment",
    },
  });

  // Create roles
  await prisma.propertyRole.create({
    data: {
      propertyId: prop1.id,
      personId: john.id,
      roleType: "OWNER",
    },
  });

  await prisma.propertyRole.create({
    data: {
      propertyId: prop1.id,
      personId: maria.id,
      roleType: "TENANT",
    },
  });

  await prisma.propertyRole.create({
    data: {
      propertyId: prop2.id,
      personId: john.id,
      roleType: "OWNER",
    },
  });

  // Create contract
  await prisma.contract.create({
    data: {
      propertyId: prop1.id,
      type: "RENTAL",
      status: "ACTIVE",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
      monthlyAmount: 25000,
      depositAmount: 50000,
    },
  });

  console.log("Seeding finished.");
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
