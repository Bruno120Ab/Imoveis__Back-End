import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedules.service";
import readSchedulesService from "../services/schedules/readSchedules.service";
import { ISchedulesRequest } from "../interfaces/schedules.interface";
import { RealEstate } from "../entities";

export async function createTime(req:Request, res: Response) {
     const userData: ISchedulesRequest = req.body;
     const userId: string = res.locals.id;
     
     await createScheduleService(userData, userId);

     return res.status(201).json({"message": "Schedule created"})
}

export async function readTimes(req: Request, res: Response) {
     const { id } = req.params;

     const allTimes: RealEstate | null = await readSchedulesService(id)

     return res.status(200).json(allTimes)
}