import React from "react";
import styles from "../styles/SandwichList.module.css";
import PizzaCard from "./SandwichCard";

export default function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LE MEILLEUR SANDWICH AU CONGO</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        sapiente doloribus quibusdam repellat quas ipsum provident sequi, enim
        numquam nulla quam dolore necessitatibus. Praesentium totam aut
        deleniti! Odio, quibusdam accusamus.
      </p>

      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
     
  
      
      </div>
    </div>
  );
}
