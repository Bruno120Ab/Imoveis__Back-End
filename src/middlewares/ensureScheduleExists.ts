import { Exists } from "../class/errors";

import { Schedule } from "../entities";

import { ISchedulesRequest } from "../interfaces/schedules.interface";

import { schedulesRepository } from "../utilities/repositories";

import { NextFunction, Request, Response } from "express";

const ensureScheduleExist = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
     const time: ISchedulesRequest = req.body;
    
     const test = await schedulesRepository.createQueryBuilder("schedule")
     .where("hour = :inputHour AND date = :inputDate",{inputHour : time.hour, inputDate: time.date })
     .getMany()
     
     if(test){
          const verify: Schedule | null = await schedulesRepository.createQueryBuilder("schedule")
          .innerJoinAndSelect('schedule.realEstate','realEstate')
          .where("hour = :inputHour AND date = :inputDate",{inputHour : time.hour, inputDate: time.date })
          .getOne()

          const verificId = verify?.realEstate.id === time.realEstateId ? true : false

          if(verificId) throw new Exists("Schedule")
     }


     return next()
}

export default ensureScheduleExist;
