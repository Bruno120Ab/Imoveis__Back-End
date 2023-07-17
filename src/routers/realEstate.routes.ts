import { Router } from "express";

import { realEstateRequestSchema } from "../schemas/realEstate.schema";

import { createRealEstate, readAllRealState } from "../controllers/realEstate.controllers";

import { ensureAddress, ensureInfo, ensureIsAdmin, ensureToken } from "../middlewares";

const realEstateRoutes: Router = Router();

realEstateRoutes.post('',
     ensureToken, 
     ensureIsAdmin,    
     ensureInfo(realEstateRequestSchema) ,
     ensureAddress, 
     createRealEstate
); 
realEstateRoutes.get('',readAllRealState) 




export default realEstateRoutes;