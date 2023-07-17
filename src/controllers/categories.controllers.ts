import readCategoriesService from "../services/categories/readCategories.service";
import createCategoriesService from "../services/categories/createCategories.service";
import readOneCategoriesService from "../services/categories/readOneCategories.service";

import { Category } from "../entities";

import { ICategories } from "../interfaces";

import { Request, Response } from "express";

export async function createCategory(req:Request, res: Response): Promise<Response>{
     const Category: ICategories = req.body;

     const newCategory: ICategories  = await createCategoriesService(Category);

     return res.status(201).json(newCategory)
}

export async function readAllCategories(req: Request, res: Response): Promise<Response>{
     const allCategories: Category[] = await readCategoriesService(); 

     return res.status(200).json(allCategories);
}

export async function readOneCategories(req: Request, res: Response): Promise<Response>{
     const id = parseInt(req.params.id);

     const Category: Category | null = await readOneCategoriesService(id); 

     return res.status(200).json(Category);
}