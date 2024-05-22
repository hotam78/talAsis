import Item from '@/components/item';
import { getItemByCategory } from '@/server/BL/item.service';
import { connectToMongo } from '@/server/DL/connectToMongo'
import styles from './styles.module.scss'
import { getOneCat } from '@/server/BL/category.service';
import ItemList from '@/components/itemList';

export default async function Category({params}) {
  const catFromParams = params.category;
    console.log('catname', catFromParams);
    await connectToMongo();
    // const cat = await getOneCat({title:{en:catFromParams}});
    const cat = await getOneCat({_id:'664a139653163986b3e5ba4b'});

    console.log('cat', cat);

    const items = await getItemByCategory('664a139653163986b3e5ba4b');
    // console.log('###items num', items.length);

    const moreee = [{ images: ['', ''], title: 'צמיד מרוקאי', price: 167, discount: 10 }, { images: ['', ''], title: 'טבעת יהלום', price: 200, discount: 10 }, { images: ['', ''], title: 'עגילי פנינה', price: 167, discount: 10 }, { images: ['', ''], title: 'שרשרת נהורא', price: 1060, discount: 20 }, { images: ['', ''], title: 'עגילי חישוק', price: 400, discount: 0 }];


  return (
    <div className={styles.catPage}>
      <p>{catFromParams}</p>
      <div className={styles.grid}>
          {items?.map(v => <Item key={v._id} item={v}/>)}
      </div>
      <ItemList itemsArr={moreee}/>
    </div>

  )
}
