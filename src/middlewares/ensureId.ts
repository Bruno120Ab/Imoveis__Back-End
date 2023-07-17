import Shortener from "../utilities/shortener";

import { notFound } from "../class/errors";

import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";

import { Category, RealEstate, User } from "../entities";

import { NextFunction, Request, Response } from "express";

const ensureId = async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
   const { id } = req.params;
   const { baseUrl } = req;

   const names = Shortener(baseUrl)

   const Repository: Repository<User | Category | RealEstate> = AppDataSource.getRepository(names.Table);

   const user: boolean = await Repository.exist({where: {id: parseInt(id)}})

   if(!user) throw new notFound(`${names.notFound} not found`, 404);
         
   return next()
}

export default ensureId;