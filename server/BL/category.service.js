import { createCategory } from "../DL/controllers/category.controller"; 

export async function createNewCat(data) {
    const newCat = createItem({...data});
    if (!newCat) throw 'no new category';
    console.log(newCat);
    return newCat;
}

