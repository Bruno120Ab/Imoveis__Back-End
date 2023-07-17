import { User } from "../../entities";

import { encrypt } from "../../utilities/cryptography";

import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { usersResponseSchema } from "../../schemas/users.schema";

import { IUsers, IUsersRequest, IUsersResponse } from "../../interfaces/users.interface";

async function createUserService(movieData:IUsersRequest):Promise<IUsersResponse> {
     const Repository: Repository<IUsers> = AppDataSource.getRepository(User);

     const encrypteData: IUsersRequest =  await encrypt(movieData)

     const Create: IUsers = Repository.create(encrypteData);

     await Repository.save(Create);

     const returnUser: IUsersResponse = usersResponseSchema.parse(Create);

     return returnUser;
};   

export default createUserService;