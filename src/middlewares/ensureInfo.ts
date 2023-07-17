import { ZodTypeAny } from "zod";

import { NextFunction, Request, Response } from "express";

import { IUserLogin, IUsersRequest, ICategories } from "../interfaces";

const ensureInfo = (schema: ZodTypeAny) => (req:Request, res:Response, next:NextFunction): void => {
     const Body: IUsersRequest | IUserLogin | ICategories = schema.parse(req.body);

     req.body = Body;

     return next();
}

export default ensureInfo;