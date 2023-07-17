import { Category } from "../entities";

import { Repository } from "typeorm";

import { ICategories } from "../interfaces";

import { AppDataSource } from "../data-source";

import { Exists } from "../class/errors";

import { NextFunction, Request, Response } from "express";

const ensureCategories =  async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
     const category: ICategories = req.body;

     const Repository: Repository<Category> = AppDataSource.getRepository(Category);

     const verifyCategory: boolean = await Repository.exist({ where:{name: category.name}});     

     if(verifyCategory) throw new Exists("Category");

     return next()
}

export default ensureCategories;