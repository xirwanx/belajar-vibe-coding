import { Elysia, t } from "elysia";
import { registerUser } from "../services/users-service";

export const usersRoute = new Elysia()
  .post("/api/users", async ({ body, set }) => {
    try {
      const user = await registerUser(body);
      set.status = 201;
      return {
        message: "User created successfully",
        data: user,
      };
    } catch (error: any) {
      if (error.message === "User already exists") {
        set.status = 400;
        return {
          message: "User already exists",
          error: "User already exists",
        };
      }
      
      set.status = 500;
      return {
        message: "Internal server error",
        error: error.message,
      };
    }
  }, {
    body: t.Object({
      name: t.String({ minLength: 1 }),
      email: t.String({ minLength: 3 }),
      password: t.String({ minLength: 4 }),
    })
  });
