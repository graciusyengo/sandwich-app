import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { TbShoppingCartFilled } from "react-icons/tb"
import React from "react";

export default function Navbar() {
  return (
    <div className={styles.container} style={{zIndex:"33"}}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width="45" height="45" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Commander maintenant</div>
          <div className={styles.text}> 0982382176</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Accueil</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}> Produit</li>
          <div className={styles.containerLogo}>
            <h2 className={styles.logo}>Gy</h2>
          </div>
          <li className={styles.listItem}>Evenement</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <TbShoppingCartFilled size={60} style={{color:"white"}}/>
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  );
}
