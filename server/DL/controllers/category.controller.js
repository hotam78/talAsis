import { CategoryModel } from "../models/category.model";

export const createCat = (data) => CategoryModel.create(data);

export const readCats = (filter) => CategoryModel.find(filter);

export const readOneCat = (filter) => CategoryModel.findOne(filter);



// export const read = (filter, isPopulate) => CategoryModel.find(filter).populate(isPopulate ? 'category' : '')



