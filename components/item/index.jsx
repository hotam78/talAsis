import Image from "next/image";
import styles from './styles.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo'
import { getAllItem, getOneItem } from '@/server/BL/item.service'

export default function Item() {

  const item = {
    img: ['rings.jpg', 'Earrings.jpg'],
    price: 160.00,
    title: 'עגיל פריט 2'
  }

  const { img, price, title } = item

  return (


    <div className={styles.item}>
      {/* <Image width={200} height={300} src={'rings.jpg'} alt={title} /> */}
      <img src={'rings.jpg'} alt={title} />


    </div>
  )
}
