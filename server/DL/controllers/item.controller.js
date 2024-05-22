import { ItemModel } from "../models/item.model";
// 

export const createItem = (data) => ItemModel.create(data);

export const readOne = (filter, isPopulate) => ItemModel.findOne(filter).populate(isPopulate ? 'category' : '')

export const read = (filter, isPopulate) => ItemModel.find(filter).populate(isPopulate ? 'category' : '')



