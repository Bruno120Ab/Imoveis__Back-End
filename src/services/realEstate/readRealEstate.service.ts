import { RealEstate } from "../../entities";

import { realEstateRepository } from "../../utilities/repositories";

async function readRealEstateService(): Promise<RealEstate[]> {
     const allRealEstates: RealEstate[] = await realEstateRepository.find({
        relations: {
          address: true
        },
        order: {id:"ASC" }
     });
     
     return allRealEstates;
}

export default readRealEstateService;