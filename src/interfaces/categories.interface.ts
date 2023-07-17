import { z } from "zod";

import { categoriesSchema, categoryRequestSchema } from "../schemas/category.schema";

export type ICategories = z.infer<typeof categoriesSchema>;

export type ICategorysRequest = z.infer<typeof categoryRequestSchema>;

