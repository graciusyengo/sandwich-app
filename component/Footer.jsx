import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/sandwich.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <div className={styles.motto}>
            <h2> SANDWICH C'EST SUPER COOL AVEC LES EPICES</h2>
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TROUVER VOTRE RESTAURANT</h1>
          <p className={styles.text}>
            AV/ BULUNGU
            <br /> Kinshasa/Gombe
            <br />
            0982382176
          </p>
          <p className={styles.text}>
            AV/ BULUNGU
            <br /> Kinshasa/Gombe
            <br />
            0982382176
          </p>
          <p className={styles.text}>
            AV/ BULUNGU
            <br /> Kinshasa/Gombe
            <br />
            0982382176
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HEURE DE TRAVAIL</h1>
          <p className={styles.text}>
            LUNDI JUSQU'À VENDREDI
            <br /> 09:00 à 22:00
          </p>
          <p className={styles.text}>
            SAMEDI et DIMANCHE
            <br /> 09:00 à 16:00
          </p>
        </div>
      </div>
    </div>
  );
}
