import { NextFunction, Request, Response } from "express";

import { timeInvalide } from "../class/errors";

const ensureHorarie = async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
     const { hour } = req.body;

     const time = parseInt(hour)

     if ( time < 8 || time > 18 ) throw new timeInvalide()

     return next()
  }
  
  export default ensureHorarie;