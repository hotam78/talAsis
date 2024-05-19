"use server"

import { revalidatePath } from "next/cache";
import { ItemModel } from "../DL/models/item.model";
import { redirect } from "next/dist/server/api-utils";

export const createItemAction = async (fd) => {
    const obj = Object.fromEntries(fd);
    console.log(obj);
    try {
        await connectToMongo();
        const newItem = {...Item};
        const newItemFromDb = await createItemService(newItem);
        revalidatePath('/thisPage')
    } catch (error) {

    }
    redirect('/send to new page')
}