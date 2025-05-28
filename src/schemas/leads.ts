import { STATUS_LEAD } from "@/constants/leads";
import { z } from "zod";

const addLeadFormPublicSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    phone: z
      .string()
      .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/)
      .min(1),
    is_pf: z.string().min(1),
    demand: z.string().min(1),
    interest_plan: z.string().min(1),
    is_new_lead: z.string().min(1),
});

const formLeadSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    phone: z
      .string()
      .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/)
      .min(1),
    is_pf: z.boolean(),
    demand: z.string().min(1),
    interest_plan: z.string().min(1),
    is_new_lead: z.boolean(),
    status: z.string().refine((status) => Object.values(STATUS_LEAD).includes(status as keyof typeof STATUS_LEAD), {
        message: "Status inválido",
    }),
});

export type AddLeadFormPublicSchemaType = z.infer<typeof addLeadFormPublicSchema>;
export type FormLeadSchemaType = z.infer<typeof formLeadSchema>;

export { addLeadFormPublicSchema, formLeadSchema };
