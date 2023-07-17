import { Address } from "../entities";

import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";

import { Exists } from "../class/errors";

import { NextFunction, Request, Response } from "express";

const ensureAddress = async(req: Request, res:Response, next:NextFunction): Promise<void> => {
     const { address } = req.body;

     const Repository: Repository<Address> = AppDataSource.getRepository(Address);

     const verifyAddress: Address | null = await Repository.findOne({
          where: { 
               city: address.city,
               number: address.number,
               state: address.state,
               street: address.street,
               zipCode: address.zipCode
          },
     })

     if(verifyAddress) throw new Exists("Adress")
     
     return next()
}

export default ensureAddress;