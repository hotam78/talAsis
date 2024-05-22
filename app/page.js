import Item from "@/components/item";
import styles from "./page.module.scss";
import Image from 'next/image'
import { connectToMongo } from "@/server/DL/connectToMongo";
// Carusale- תמונות שעוברות


export default function Home() {
  const bestSellers = [{images:['',''], title: 'צמיד מרוקאי', price: 167,discount:10},{images:['',''], title: 'טבעת יהלום', price: 200,discount:10},{images:['',''], title: 'עגילי פנינה', price: 167,discount:10},{images:['',''], title: 'שרשרת נהורא', price: 1060,discount:20},{images:['',''], title: 'עגילי חישוק', price: 400,discount:0}];
  return (
    <div className={styles.home}>

      <div className={styles.imgs}>
        <Image src='/img1.jpg' alt='img1' fill />
        {/* <Image src='/img1.jpg' alt='img1' width={1930} height={400} /> */}
       <p style={{position: 'relative' , zIndex: 1}}> SHOP NEW COLLECTION </p>
      </div>

      <div className={styles.bestSellers}>
        <h2>BEST SELLESR</h2>
        {/* TODO- פונ בשרת של ה5 הכי נמכרים */}
        <div className={styles.items}>{bestSellers.map(item=><Item item={item}/>)}</div>
      </div>
      
      {/* <div className={styles.categories}></div> */}
    </div>
  )
}
