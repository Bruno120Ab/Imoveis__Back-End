import { RealEstate, Schedule } from "../../entities";

import { realEstateRepository, schedulesRepository, usersRepository } from "../../utilities/repositories";

async function createScheduleService(userData: any, userId: string): Promise<Schedule> { 
     const { hour, date, realEstateId } = userData;
     const id = parseInt(userId);

     const user = await usersRepository.findOne({
          where: { id: id },
     })

     const real_estate: RealEstate | null = await realEstateRepository.findOne({
          where: { id: realEstateId },
     })

     const informations: Schedule = schedulesRepository.create({
          hour,
          date,
          realEstate: real_estate!,
          user: user!
     })

     await schedulesRepository.save(informations)   
     
     return informations
};   

export default createScheduleService;

