import { forbidden } from "../class/errors";

import { NextFunction, Request, Response } from "express";

const ensureValidUser = (req:Request, res:Response, next:NextFunction): void => {
     const { admin } = res.locals;          
     const tokenId  = res.locals.id;
     const paramsId = req.params.id;

     if (!admin) if( tokenId !== paramsId) throw new forbidden();
     
     return next();
}

export default ensureValidUser;