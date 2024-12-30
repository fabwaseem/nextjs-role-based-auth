"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginInput, SignupInput, signupSchema } from "../validations/auth";
import bcrypt from "bcryptjs";
import { prisma } from "../prisma";

export async function login(values: LoginInput) {
  try {
    await signIn("credentials", {
      ...values,
      redirectTo: "/dashboard",
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }
    throw error;
  }
}

export async function signup(values: SignupInput) {
  try {
    const validatedFields = signupSchema.safeParse(values);
    if (!validatedFields.success) return { error: "Invalid fields." };

    const hashedPassword = await bcrypt.hash(values.password, 10);
    const user = await prisma.user.create({
      data: {
        ...values,
        password: hashedPassword,
      },
    });

    if (!user) return { error: "Failed to create user." };

    await signIn("credentials", {
      ...values,
      redirectTo: "/dashboard",
    });

    return { success: true };
  } catch (error) {
    return { error: "Something went wrong." };
  }
}
