import { z } from "zod";

import { schedulesRequest, schedulesSchema } from "../schemas/schedules.schemas";


type ISchedules = z.infer<typeof schedulesSchema>

type ISchedulesRequest = z.infer<typeof schedulesRequest>

export {
     ISchedules,
     ISchedulesRequest
}