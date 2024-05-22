import React from 'react'
import styles from './styles.module.scss'
import { PiShoppingCartSimpleThin, PiHeartLight } from "react-icons/pi"
import { CiSearch, CiFacebook, CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import Link from 'next/link'


export default function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles.phone}>
        <div className={styles.pink}>משלוחים והחזרות חינם</div>
        <div className={styles.navBarP}>
          <div className={styles.top}>
            <div className={styles.right}>
              <HiOutlineMenuAlt3 />
            </div>
            <div className={styles.middle}>
              <Link href='/'><div className={styles.logo}> - TAL ASIS - </div></Link>
            </div>
            <div className={styles.left}>
              <CiSearch />
              <PiHeartLight />
              <PiShoppingCartSimpleThin />
            </div>
          </div>

        </div>

      </div>

      <div className={styles.computer}>
        <div className={styles.hidden}>
          <div className={styles.pink}>משלוחים והחזרות חינם</div>
          <div className={styles.more}>
            <div className={styles.right}>
              <span>אודות</span>
              <span>צור קשר</span>
              <span>שאלות ותשובות</span>
            </div>
            <div className={styles.left}>
              <FaInstagram />
              <CiFacebook />
              <RiEnglishInput />
            </div>
          </div>
        </div>

        <div className={styles.navBar}>
          <div className={styles.top}>
            <div className={styles.right}>
            <CiSearch />
            </div>
            <div className={styles.middle}>
            <Link href='/'><div className={styles.logo}> - TAL ASIS - </div></Link>
            </div>
            <div className={styles.left}>
              <CiUser />
              <PiHeartLight />
              <PiShoppingCartSimpleThin />
            </div>
          </div>
          <div className={styles.menu}>
            <span>NEW COLLECTION</span>
            <span>תכשיטים</span>
            <span>אקססוריז</span>
            <span>קורסים וסדנאות</span>
            <span>הסיפור שלנו</span>
          </div>
        </div>
      </div>
    </div>
  )
}
