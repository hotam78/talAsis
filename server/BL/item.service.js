import { createItem, read, readOne } from '../DL/controllers/item.controller';

export async function createNewItem(data) {
    const newItem = createItem(data);
    if (!newItem) throw 'no new item';
    // console.log(newItem);
    return newItem;
}


export async function getOneItem(id) {
    const item = readOne({ _id: id })
    if (!item) throw 'is item not valid'
    // console.log(item);
    return item
}


export async function getAllItem() {
    const items = read()
    // console.log(items);
    return items
}



export async function getItemByCategory(catId) {
    const items = read({ category: catId }, {isPopulate: true});
    // console.log(items);
    if (!items) throw 'is items not valid';
    return items;
}


