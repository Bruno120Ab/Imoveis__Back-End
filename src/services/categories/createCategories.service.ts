import { ICategories } from "../../interfaces";

import { categoriesSchema } from "../../schemas/category.schema";

import { categoryRepository } from "../../utilities/repositories";

async function createCategoriesService(movieData:ICategories): Promise<ICategories> {
     const Create: ICategories | null = categoryRepository.create(movieData);

     await categoryRepository.save(Create);

     const returnCategory: ICategories = categoriesSchema.parse(Create);

     return returnCategory;
};   

export default createCategoriesService;