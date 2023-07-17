import { forbidden } from "../class/errors";

import { NextFunction, Request, Response } from "express";

const ensureIsAdmin = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
     const { admin } = res.locals;       
     
     if(!admin){
          throw new forbidden();
     }else{
          return next();
     }
};
   
export default ensureIsAdmin;

