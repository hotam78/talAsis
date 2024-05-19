import { createNewItem } from '@/server/BL/item.service';
import { connectToMongo } from '@/server/DL/connectToMongo'
import { createCategory } from '@/server/DL/controllers/category.controller';
import { CategoryModel } from '@/server/DL/models/categoty.model';
import { model } from 'mongoose';
import React from 'react'
import items from './fakeData';

export default async function Page() {

    await connectToMongo();
    // const categories = [
    //     { title: { en: 'Earrings', he: 'עגילים' }, img: 'earrings.jpg' },
    //     { title: { en: 'Rings', he: 'טבעות' }, img: 'rings.jpg' },
    //     { title: { en: 'Necklaces', he: 'שרשראות' }, img: 'necklaces.jpg' },
    //     { title: { en: 'Bracelets', he: 'צמידים' }, img: 'bracelets.jpg' },
    //   ];
    // const catInMongo = await createCategory(categories);
    // console.log({catInMongo});


    // const all = await CategoryModel.find()
    // console.log(JSON.stringify(all));

    // const itemsArr = items;
    // const itemsInMongo = await createNewItem(itemsArr);
    // console.log(itemsInMongo);


  return (
    <div>Page testtt</div>
  )
}
