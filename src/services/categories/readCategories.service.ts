import { Category } from "../../entities";

import { categoryRepository } from "../../utilities/repositories";

async function readCategoriesService(): Promise<Category[]> {
     const allCategories: Category[] = await categoryRepository.find({
          order: { id: 'asc' }
     });

     return allCategories;
}

export default readCategoriesService;