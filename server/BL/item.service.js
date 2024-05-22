import { createItem, read, readOne, readTop5 } from '../DL/controllers/item.controller';

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


export async function getFiveBestSellers() {
    const topFiveItems = readTop5();
    if (!topFiveItems) throw 'no 5';
    // console.log('$$$',topFiveItems);
    return topFiveItems;
}


export async function getAllItems() {
    const items = read()
    return items
}



export async function getItemByCategory(catId) {
    const items = read({ category: catId }, {isPopulate: true});
    if (!items) throw 'is items not valid';
    return items;
}


