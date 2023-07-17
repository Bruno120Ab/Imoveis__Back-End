import { User } from "../entities";

import { ZodTypeAny } from "zod";

import { Repository } from "typeorm";

import { userNotValid } from "../class/errors";

import { AppDataSource } from "../data-source";

import { comparePassword } from "../utilities/cryptography";

import { NextFunction, Request, Response } from "express";

const ensureUser =  (schema: ZodTypeAny)  =>  async (req:Request, res:Response, next:NextFunction): Promise<void> => {
     const userDataReq = schema.parse(req.body);

     const Repository:Repository<User> = AppDataSource.getRepository(User);

     const userDataDB: User | null = await Repository.findOneBy({email: userDataReq.email});     

     if (!userDataDB) throw new userNotValid();
     
     const passwordChecker: Boolean = await comparePassword(userDataReq, userDataDB);
     
     if(!passwordChecker) throw new userNotValid();

     return next();
}

export default ensureUser;