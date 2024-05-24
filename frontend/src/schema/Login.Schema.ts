import z from "zod";

export const LoginSchema = z.object({
  email: z.string({ required_error: "Email is required." }).trim().email(),
  password: z
    .string({ required_error: "Password is required." })
    .min(1, "Password must be atleast 1 character long."),
});

export type loginInput = z.infer<typeof LoginSchema>;
