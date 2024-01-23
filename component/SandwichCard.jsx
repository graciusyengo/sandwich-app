import React from "react";
import styles from "../styles/SandwichCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PizzaCard() {
  return (
    <div className={styles.container}>
     
        <Link  className={styles.wrapper} href="/product/3">
          <Image src="/img/sandwich3.png" width="250" height="250" />
          <h1 className={styles.title}> FLORI ZIUK</h1>
          <span className={styles.price}>$23</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            ipsum! Nesciunt fuga minima laudantium, vero autem esse cupiditate
            deleniti error ut? Repellat veniam, aliquam tenetur tempore non
            inventore amet earum?
          </p>
        </Link>
    
    </div>
  );
}
