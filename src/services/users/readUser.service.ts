import { User } from "../../entities";

import { usersRepository } from "../../utilities/repositories";

async function readUsersService(): Promise<User[]> {
     const allUsers: User[] = await usersRepository.find({
          order: { id: 'ASC' },  
          select: {
               id: true,
               name: true,
               email: true,              
               admin: true,
               createdAt: true,
               updatedAt: true,
               deletedAt: true,
          }
     });

     return allUsers;
}

export default readUsersService;