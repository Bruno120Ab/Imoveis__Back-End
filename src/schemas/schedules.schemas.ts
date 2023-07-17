import { z } from 'zod';

const schedulesSchema = z.object({
     id: z.number(),
     date:  z.string(),
     hour: z.string(),
     realEstateId: z.number().int(),
});

const schedulesRequest = schedulesSchema.omit({ id: true, })

export { schedulesSchema, schedulesRequest }