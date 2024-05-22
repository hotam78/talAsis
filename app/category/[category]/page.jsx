import Item from '@/components/item';
// import ItemList from '@/components/itemList';
import { getItemByCategory } from '@/server/BL/item.service';
import { connectToMongo } from '@/server/DL/connectToMongo'
import styles from './styles.module.scss'
import { getOneCat } from '@/server/BL/category.service';
import ItemList from '@/components/itemList';

export default async function Category() {
  const catFromParams = '664a139653163986b3e5ba4a'
    connectToMongo();
    // קטגוריה- להביא מהמערךת או עוד בקשה מהשרת או מהפרמס
    const category = await getOneCat({_id:catFromParams});
    const items = await getItemByCategory(catFromParams);
    console.log('###items num', items.length);

    const moreee = [{ images: ['', ''], title: 'צמיד מרוקאי', price: 167, discount: 10 }, { images: ['', ''], title: 'טבעת יהלום', price: 200, discount: 10 }, { images: ['', ''], title: 'עגילי פנינה', price: 167, discount: 10 }, { images: ['', ''], title: 'שרשרת נהורא', price: 1060, discount: 20 }, { images: ['', ''], title: 'עגילי חישוק', price: 400, discount: 0 }];


  return (
    <div className={styles.catPage}>
      <p>{category.title.he}</p>
      <div className={styles.grid}>
          {items?.map(v => <Item key={v._id} item={v}/>)}
      </div>
      <ItemList itemsArr={moreee}/>
    </div>

  )
}
