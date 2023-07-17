import { User } from "../entities";

import { Exists } from "../class/errors";

import { Repository } from "typeorm";

import { IUserLogin } from "../interfaces";

import { AppDataSource } from "../data-source";

import { NextFunction, Request, Response } from "express";

const ensureEmail =  async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
     const userData: IUserLogin = req.body;

     const Repository: Repository<User> = AppDataSource.getRepository(User);

     const email: User[] = await Repository.find({ where:{email: userData.email}, withDeleted: true});     

     if(email.length > 0) throw new Exists("Email");

     return next()
}

export default ensureEmail;


