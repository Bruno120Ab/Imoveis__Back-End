
import { Token } from "../../utilities/token";

import { IUsers, IUserLogin } from "../../interfaces";

import { usersRepository } from "../../utilities/repositories";


async function tokenService(userData:IUserLogin): Promise<string>{
     const user: IUsers | null =  await usersRepository.findOneBy({email:userData.email});

     const userToken: string = Token(user, "1d")

     return userToken;
}

export default tokenService;