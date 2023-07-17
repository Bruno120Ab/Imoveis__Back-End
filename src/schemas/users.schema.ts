import { z } from 'zod';

const usersSchema = z.object({
     id: z.number(),
     name: z.string().max(45),
     email: z.string().email().max(45),
     password: z.string().max(120),
     admin: z.boolean().default(false),
     createdAt: z.string().or(z.date()),
     updatedAt: z.string().or(z.date()),
     deletedAt: z.string().or(z.date()).nullish(),
});

const usersRequestSchema = usersSchema
.omit({ id: true, createdAt:true,  updatedAt:true, deletedAt:true });

const usersResponseSchema = usersSchema
.omit({ password: true });

const usersLoginSchema = usersSchema
.omit({ id: true, name: true, admin: true, createdAt:true, updatedAt:true, deletedAt:true});

const usersUpdateSchema = usersRequestSchema
.omit({ admin: true }).partial()

export { 
     usersSchema, usersLoginSchema,
     usersRequestSchema, usersResponseSchema ,
     usersUpdateSchema
}