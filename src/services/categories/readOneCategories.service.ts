import { Category } from "../../entities";

import { categoryRepository } from "../../utilities/repositories";

async function readOneCategoriesService(id: number): Promise<Category| null> {
     const oneCategory: Category | null = await categoryRepository.findOne({
          where: {
              id: id,
          },
          relations: {
            realEstate: true,
          },
          order : { id: "ASC" }
      });

     return oneCategory;
}

export default readOneCategoriesService;