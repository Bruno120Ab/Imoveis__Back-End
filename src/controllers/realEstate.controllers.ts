import { Request, Response } from "express";
import createRealStateService from "../services/realEstate/createRealState.service";
import readRealEstateService from "../services/realEstate/readRealEstate.service";

import { RealEstate } from "../entities";

import { IRealEstateRequestSchema } from "../interfaces/realEstate.interface";

export async function createRealEstate(req: Request, res: Response): Promise<Response>{
     const realEstateData: IRealEstateRequestSchema = req.body;
     
     const newUser: RealEstate[] = await createRealStateService(realEstateData);

     return res.status(201).json(newUser)
}

export async function readAllRealState(req: Request, res: Response) {
     const realStateData: RealEstate[] = await readRealEstateService()

     return res.status(200).json(realStateData);

}