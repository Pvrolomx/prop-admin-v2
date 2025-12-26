"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProperty(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as any;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;

  await prisma.property.create({
    data: { name, type, address, city, state },
  });

  revalidatePath("/properties");
}

export async function createPerson(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const rfc = formData.get("rfc") as string | null;

  await prisma.person.create({
    data: { name, email, phone, rfc },
  });

  revalidatePath("/persons");
}
