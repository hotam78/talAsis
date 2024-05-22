import Item from "@/components/item";
import styles from "./page.module.scss";
import Image from 'next/image'
import { connectToMongo } from "@/server/DL/connectToMongo";
import { getCategories } from "@/server/BL/category.service";
import { getFiveBestSellers } from "@/server/BL/item.service";
import Link from 'next/link'
// Carusale- תמונות שעוברות


export default async function Home() {
  await connectToMongo();
  const fiveBestSellers = await getFiveBestSellers();
  const categories = await getCategories();

  return (
    <div className={styles.home}>

      <div className={styles.imgs}>
        <Image src='/img1.jpg' alt='img1' fill />
        <p style={{ position: 'relative', zIndex: 1 }}> SHOP NEW COLLECTION </p>
      </div>

      <div className={styles.bestSellers}>
        <h2>BEST SELLESR</h2>
        <div className={styles.items}>{fiveBestSellers.map(item => <Item item={item} />)}</div>
      </div>

      <div className={styles.categories}>
        {categories.map((category) => {
          return <Link href={`category/${category.title.en}`} className={styles.category}>
            <Image src={category.img} alt='img1' fill />
            <p>{category.title.en}</p>
          </Link>
        })}
        <p>"I have enough jewelry"</p>
      </div>



    </div>
  )
}
