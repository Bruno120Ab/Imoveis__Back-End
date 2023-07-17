import { z } from 'zod';
import { adressRequestSchema } from './adress.schema';

const realEstateSchema = z.object({
     id: z.number(),
     sold:  z.boolean().default(false).nullish(),
     value: z.number().or(z.string()).default(0),
     size: z.number().int().positive(),
     categoryId: z.number(),
     createdAt: z.string().or(z.date()),
     updatedAt: z.string().or(z.date()),
});  

const realEstateRequestSchema = realEstateSchema
.omit({ id: true, createdAt: true, updatedAt: true })
.extend({ address: adressRequestSchema });

const realEstateNoIdSchema = realEstateSchema.omit({ id: true })

export { realEstateSchema, realEstateRequestSchema, realEstateNoIdSchema }