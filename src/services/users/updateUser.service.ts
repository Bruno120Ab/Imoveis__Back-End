import { User } from "../../entities";

import { IUsersResponse } from "../../interfaces";

import { usersRepository } from "../../utilities/repositories";

import { usersResponseSchema } from "../../schemas/users.schema";

async function updateUserService(userData: User, userId: any): Promise<IUsersResponse>{
     const oldUserData: User | null = await usersRepository.findOneBy({ id: userId});

     const newUser: User = usersRepository.create({
          ...oldUserData,
          ...userData
     })

     await usersRepository.save(newUser);

     return usersResponseSchema.parse(newUser);
}

export default updateUserService;
