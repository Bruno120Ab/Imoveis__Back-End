import "reflect-metadata";

import "express-async-errors";
import express from "express";

import handleErros from "./errors";

import { 
     usersRoutes, realEstateRoutes, categoriesRoutes,
     loginRoutes, schedulesRoutes
} from "./routers";

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);                   
app.use('/login', loginRoutes);                   
app.use('/categories', categoriesRoutes);        
app.use('/realEstate', realEstateRoutes);       
app.use('/schedules', schedulesRoutes);        

app.use(handleErros)

export default app;