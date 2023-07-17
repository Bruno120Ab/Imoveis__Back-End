import { Router } from "express";

import { createTime, readTimes } from "../controllers/schedules.controller";

import { schedulesRequest } from "../schemas/schedules.schemas";

import { 
     ensureHorarie,           ensureInfo,         ensureToken,             
     ensureDaysOfWeek,        ensureIsAdmin,      ensureRealEstate, 
     ensureScheduleExist,     ensureReservationDate 
} from "../middlewares";

const schedulesRoutes: Router = Router();

schedulesRoutes.post('', 
     ensureToken, 
     ensureInfo(schedulesRequest), 
     ensureRealEstate,
     ensureScheduleExist,
     ensureReservationDate, 
     ensureHorarie, 
     ensureDaysOfWeek, 
     createTime
);

schedulesRoutes.get('/realEstate/:id',
     ensureToken,
     ensureIsAdmin, 
     ensureRealEstate, 
     readTimes
);




export default schedulesRoutes;