import ensureCategories from "../middlewares/ensureCategories";

import { Router } from "express";

import { categoryRequestSchema } from "../schemas/category.schema";

import { createCategory, readAllCategories, readOneCategories } from "../controllers/categories.controllers";

import { ensureInfo, ensureIsAdmin, ensureToken, ensureIdCategory } from "../middlewares";

const categoriesRoutes: Router = Router();

categoriesRoutes.post('', 
     ensureToken, 
     ensureIsAdmin,
     ensureInfo(categoryRequestSchema), 
     ensureCategories, 
     createCategory
);

categoriesRoutes.get('', readAllCategories);

categoriesRoutes.get('/:id/realEstate', ensureIdCategory, readOneCategories);

export default categoriesRoutes;