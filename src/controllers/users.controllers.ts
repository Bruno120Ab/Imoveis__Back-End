import createUserService from "../services/users/createUser.service";
import readUsersService from "../services/users/readUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteMovieService from "../services/users/deleteUser.service";

import { User } from "../entities";

import { Request, Response } from "express";

import { IUsers, IUsersRequest, IUsersResponse } from "../interfaces/users.interface";

export async function createUser(req:Request, res: Response): Promise<Response>{
     const userData: IUsersRequest = req.body;

     const newUser: IUsersResponse = await createUserService(userData);

     return res.status(201).json(newUser)
}

export async function readAllUsers(req: Request, res: Response): Promise<Response>{
     const allUsers: User[] = await readUsersService(); 

     return res.status(200).json(allUsers);
}

export async function updateUser(req:Request, res: Response): Promise<Response>{
     const dataUser: User = req.body;
     const userIdParams: number = parseInt(req.params.id);

     const newUser = await updateUserService(dataUser, userIdParams);

     return res.status(200).json(newUser);
}

export async function deleteMoviesController(req:Request, res: Response): Promise<Response>{
     const Id:number = parseInt(req.params.id);

     await deleteMovieService(Id)

     return res.status(204 ).send();
}