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
<<<<<<< HEAD
    // console.log(item);
=======
    console.log(item);
>>>>>>> 9b6e48cb90e8372a9a2b62bdd7f5a22e21df17fd
    return item
}


export async function getAllItem() {
    const items = read()
<<<<<<< HEAD
    // console.log(items);
=======

    console.log(items);
>>>>>>> 9b6e48cb90e8372a9a2b62bdd7f5a22e21df17fd
    return items
}



<<<<<<< HEAD
export async function getItemByCategory(catId) {
    const items = read({ category: catId }, {isPopulate: true});
    // console.log(items);
    if (!items) throw 'is items not valid';
    return items;
=======



export async function getItemByCategory(catId) {
    console.log("#############", catId);

    const items = read({ category: catId })
    if (!items) throw 'is items not valid'
    return items
>>>>>>> 9b6e48cb90e8372a9a2b62bdd7f5a22e21df17fd
}


