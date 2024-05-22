import Image from "next/image";
import styles from './styles.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo'
import { getAllItem, getOneItem } from '@/server/BL/item.service'

export default function Item() {

  const category = {
    img: ['rings.jpg'],
    title: 'Earrings'
  }


  return (


    <div className={styles.category}>

      <img src={category.img} ><span>{category.title}</span></img>

    </div>
  )
}
