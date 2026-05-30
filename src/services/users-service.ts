import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: number;
  name: string;
  email: string;
}

export async function registerUser(input: RegisterUserInput): Promise<RegisterUserResponse> {
  const { name, email, password } = input;

  // 1. Check if user already exists
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 2. Hash password using Bun's native bcrypt implementation
  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10,
  });

  // 3. Insert user into the database
  const [result] = await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  });

  // 4. Return the inserted user details (excluding password)
  return {
    id: result.insertId,
    name,
    email,
  };
}
