import { Router } from 'express';

import { usersRequestSchema, usersUpdateSchema } from '../schemas/users.schema';

import {  createUser, deleteMoviesController, readAllUsers, updateUser } from '../controllers/users.controllers';

import { 
     ensureInfo,    ensureEmail,   ensureIsAdmin, 
     ensureToken,   ensureId,      ensureValidUser 
} from '../middlewares';

const usersRoutes: Router = Router();

usersRoutes.post('',  
     ensureInfo(usersRequestSchema),  
     ensureEmail,   
     createUser);

usersRoutes.get('', 
     ensureToken, 
     ensureIsAdmin, 
     readAllUsers
);

usersRoutes.patch('/:id', 
     ensureId,
     ensureToken, 
     ensureInfo(usersUpdateSchema), 
     ensureValidUser, 
     updateUser);
     
usersRoutes.delete('/:id', 
     ensureId,
     ensureToken, 
     ensureValidUser,
     deleteMoviesController);

export default usersRoutes;