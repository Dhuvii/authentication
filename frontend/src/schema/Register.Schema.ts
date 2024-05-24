import z from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required." })
      .trim()
      .min(3, "Name must be atleast 3 characters long."),
    email: z.string({ required_error: "Email is required." }).trim().email(),
    password: z
      .string({ required_error: "Password is required." })
      .min(8, "Password must be atleast 8 characters long.")
      .max(30, "Make your password small.")
      .regex(/[A-Z]+.*/, "Include atleast one capital letter.")
      .regex(
        /.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]+.*/,
        "Include atleast one special character."
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be atleast 8 characters long.")
      .max(30, "Make your password small.")
      .regex(/[A-Z]+.*/, "Include atleast one capital letter.")
      .regex(
        /.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]+.*/,
        "Include atleast one special character."
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type registerInput = z.infer<typeof RegisterSchema>;
