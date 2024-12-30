import { Role } from "@prisma/client";
import { auth } from "@/auth";

export async function hasRole(role: Role) {
  const session = await auth();
  return session?.user?.role === role;
}

export async function isAdmin() {
  return hasRole("ADMIN");
} 