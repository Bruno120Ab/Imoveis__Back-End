import { Address, Category, RealEstate } from "../../entities";

import { adressRepository, categoryRepository, realEstateRepository } from "../../utilities/repositories";

async function createRealStateService(data:any): Promise<RealEstate[]> {     
     const { address, categoryId, ...rest } = data;

     const adress: Address[] = adressRepository.create(address)
     await adressRepository.save(adress)

     const category: Category | null = await categoryRepository.findOne({
          where: { id: categoryId },
     })

     const informations: RealEstate[] = realEstateRepository.create({
          ...rest,
          address: adress,
          category: category
     })

     await realEstateRepository.save(informations)
   
     return informations
};   

export default createRealStateService;




