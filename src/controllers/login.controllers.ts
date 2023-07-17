import tokenService from "../services/login/createToken.service";

import { IUserLogin } from "../interfaces/login.interface";

import { Request, Response } from "express";

async function createToken(req:Request, res: Response): Promise<Response>{
     const userData: IUserLogin = req.body;

     const token: string = await tokenService(userData);

     return res.status(200).json({token});
}

export default createToken;