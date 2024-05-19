import { createItem } from '../DL/controllers/item.controller';

export async function createNewItem(data) {
    const newItem = createItem(data);
    if (!newItem) throw 'no new item';
    console.log(newItem);
    return newItem;
}

