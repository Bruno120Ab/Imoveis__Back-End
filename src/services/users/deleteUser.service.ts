import { usersRepository } from "../../utilities/repositories";

async function deleteMovieService(Id:number): Promise<void>{
     await usersRepository.softDelete(Id);
}

export default deleteMovieService;