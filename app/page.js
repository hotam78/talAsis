import Item from "@/components/item";
import styles from "./page.module.scss";

export default function Home() {
  const category = [{ img: '' }, {}, {}, {}]
  return (
    <div>

      <h1>home</h1>

      <div className={styles.category}>

        <Image src={'rings.jpg'} alt={title} fill />
        <p>rings</p>

      </div>

    </div>

  )
}
