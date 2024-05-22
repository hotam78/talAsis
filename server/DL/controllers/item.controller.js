import { ItemModel } from "../models/item.model";
// 

export const createItem = (data) => ItemModel.create(data);

export const readOne = (filter, isPopulate) => ItemModel.findOne(filter).populate(isPopulate ? 'category' : '')

export const read = (filter, isPopulate) => ItemModel.find(filter).populate(isPopulate ? 'category' : '')

export const readTop5 = () => ItemModel.find().sort({sold: 'desc'}).limit(5).populate('category')



