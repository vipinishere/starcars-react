import { z } from "zod";
export const registerDataSchema = z.object({
	fullName: z.string().min(3).max(20),
	email: z.string().email(),
	phone: z.string().min(10).max(10),
	password: z.string().min(6),
});

export const loginDataSchema = z.object({
	email: z
		.string()
		.email()
		.refine((data) => !data.phone),
	phone: z
		.string()
		.min(10)
		.max(10)
		.refine((data) => !data.email),
	password: z.string().min(6),
});
