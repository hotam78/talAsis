import Image from "next/image";
import styles from './styles.module.scss'
import { PiHeartLight } from "react-icons/pi"
import Link from 'next/link'
import Item from "../item";


export default function ItemList({itemsArr}) {


  
  return (
    <div className={styles.items}>{itemsArr.map(item => <Item item={item} />)}</div>
  )
}
