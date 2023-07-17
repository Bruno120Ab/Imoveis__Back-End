import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { realEstateRepository } from "../utilities/repositories";
import { ErrorTest } from "../class/errors";

const ensureRealEstate = async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
     const { id } = req.params;
     const { realEstateId } = req.body;
  
     if(id){
          const user: boolean = await realEstateRepository.exist({where: {id: parseInt(id)}});

          if(!user) throw new ErrorTest(`RealEstate not found`, 404);

          return next()
     }else{
          const user: boolean = await realEstateRepository.exist({where: {id: realEstateId}});

          if(!user) throw new ErrorTest(`RealEstate not found`, 404);
          
          return next()
     }
           
  }
  
  export default ensureRealEstate;