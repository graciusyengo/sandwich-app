import React from 'react'
import styles from "../styles/SandwichCard.module.css"
import Image from 'next/image'

export default function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image  src="/img/sandwich3.png" width="250" height="250"/>
      <h1 className={styles.title}> FLORI ZIUK</h1>
      <span className={styles.price}>$23</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsum! Nesciunt fuga minima laudantium, vero autem esse cupiditate deleniti error ut? Repellat veniam, aliquam tenetur tempore non inventore amet earum?</p>
    </div>
  )
}
