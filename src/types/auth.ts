import { FormEventHandler } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password is required" }),
  });

type LoginSchemaType = z.infer<typeof loginSchema>;

type LoginResponseType = {
  user: {
    id: number;
    name: string;
    email: string;
  }
  token: string;
}

type LoginScreenProps = {
    styleLogin: React.CSSProperties;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    onSubmit: (data: LoginSchemaType) => void;
    register: UseFormRegister<LoginSchemaType>;
    errors: FieldErrors<LoginSchemaType>;
    Button: React.ElementType;
    Toaster: React.ElementType;
}

export type {
  LoginScreenProps,
  LoginResponseType,
  LoginSchemaType,
}
