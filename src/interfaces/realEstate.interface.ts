import { z } from 'zod';

import { realEstateNoIdSchema, realEstateRequestSchema, realEstateSchema } from "../schemas/realEstate.schema"

type IRealEstate = z.infer<typeof realEstateSchema>

type IRealEstateNoIdSchema = z.infer<typeof realEstateNoIdSchema>

type IRealEstateRequestSchema = z.infer<typeof realEstateRequestSchema>

export { IRealEstate, IRealEstateNoIdSchema, IRealEstateRequestSchema } 