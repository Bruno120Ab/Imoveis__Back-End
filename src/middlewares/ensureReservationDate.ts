import { scheduleInvalid } from "../class/errors";

import { ISchedulesRequest } from "../interfaces/schedules.interface";

import { schedulesRepository } from "../utilities/repositories";

import { NextFunction, Request, Response } from "express";

const ensureReservationDate = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
     const time: ISchedulesRequest = req.body;

     const verify = await schedulesRepository.createQueryBuilder("schedule")
     .innerJoinAndSelect('schedule.realEstate', 'realEstate')
     .where("hour = :inputHour AND date = :inputDate",{inputHour : time.hour, inputDate: time.date })
     .getOne()

     if(verify) throw new scheduleInvalid()

     return next()
}

export default ensureReservationDate;


