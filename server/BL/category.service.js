import { createCat, readCats, readOneCat } from "../DL/controllers/category.controller"; 

export async function createNewCat(data) {
    const newCat = createCat({...data});
    if (!newCat) throw 'no new category';
    // console.log(newCat);
    return newCat;
}

export async function getCategories() {
    const categories = readCats();
    if (!categories) throw 'no categories';
    // console.log(categories);
    return categories;
}

export async function getOneCat(filter) {
    const category = readOneCat(filter);
    if (!category) throw 'no categories';
    // console.log(category);
    return category;
}

