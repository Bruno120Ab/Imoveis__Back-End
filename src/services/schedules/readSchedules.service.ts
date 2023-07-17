import { RealEstate } from "../../entities";

import { realEstateRepository } from "../../utilities/repositories";

async function readSchedulesService(id: string): Promise<RealEstate | null> { 
     const realEstateId = parseInt(id)

     const oneCategory: RealEstate | null = await realEstateRepository.createQueryBuilder("realEstate")
     .leftJoinAndSelect("realEstate.address", "address")
     .leftJoinAndSelect("realEstate.category", "category")
     .leftJoinAndSelect("realEstate.schedules", "schedules")
     .leftJoinAndSelect('schedules.user', "user")
     .where("realEstate.id = :id",{id: realEstateId })
     .getOne()

     return oneCategory;
};   

export default readSchedulesService;


