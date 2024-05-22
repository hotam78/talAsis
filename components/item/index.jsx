import React from 'react'
import styles from './styles.module.scss'
import { PiHeartLight } from "react-icons/pi"
import Image from 'next/image'
import Link from 'next/link'
// linkkkkk
// TODO- קומפוננטה של אייקונים שמחקבלת שם ופונקציתת לחיצה ואולי גם אם אהוב או לא (בשביל הלבבות)


export default function Item({item, width='200px'}) {
  // TODO- צריך לבדוק פה אם אקטיב או שסומכים על השרת?
  const {images, title, price, discount, _id } = item;
  return (
    // TODO- לשלוח פה לאייטם/איידי או לקטגורי/איידי
    <Link href={`/item/${_id}`}>
    <div className={styles.item} style={{width}}>

      <div className={styles.img}>
        <Image width={400} height={300} src={'/rings.jpg'} alt='img1' />
        {discount > 0 ? <div className={styles.discount}>% {discount}</div> : '' }
        <PiHeartLight />
      </div>
      <p className={styles.name}>{title}</p>
      <p className={styles.price}>{price} שח</p>
    </div>
    </Link>
  )
}
