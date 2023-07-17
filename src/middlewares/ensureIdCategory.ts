import { notFound } from "../class/errors";

import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";

import { Category, RealEstate, User } from "../entities";

import { NextFunction, Request, Response } from "express";

const ensureIdCategory = async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
   const { id } = req.params;

   const Repository: Repository<Category> = AppDataSource.getRepository(Category);

   const category: boolean = await Repository.exist({where: {id: parseInt(id)}})

   if(!category) throw new notFound(`Category not found`, 404);
         
   return next()
}

export default ensureIdCategory;