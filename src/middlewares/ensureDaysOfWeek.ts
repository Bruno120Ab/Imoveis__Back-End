import { NextFunction, Request, Response } from "express";

import { dayInvalid } from "../class/errors";

const ensureDaysOfWeek = (req:Request, res:Response, next:NextFunction): void => {
     const { date } = req.body;
    
     const today = new Date(date).getDay()

     const invalidDays = [0, 6]

     if( invalidDays.includes(today) ) throw new dayInvalid()

     return next()
}

export default ensureDaysOfWeek;