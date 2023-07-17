import jwt from "jsonwebtoken";

import { ErrorTest, missingBearer } from "../class/errors";

import { NextFunction, Request, Response } from "express";

const ensureToken = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
     let token: string | undefined = req.headers.authorization;

     if(!token) throw new missingBearer();
     
     token = token ? token.split(" ")[1] : "null";

    jwt.verify(token,  process.env.SECRET_KEY!, (err: any, decoded: any) => {
          if (err) throw new ErrorTest(err.message, 401) ;  
         
          res.locals.admin = decoded.admin;
          res.locals.id = decoded.sub;
     });
     
     return next();
};

export default ensureToken;
