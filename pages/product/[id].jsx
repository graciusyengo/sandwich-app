import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Product() {
  const [size, setSize] = useState(0);
  const sandwich = {
    id: 1,
    img: "/img/sandwich2.png",
    name: "corbo",
    price: [19.9, 23.9, 27],
    desc: "loremlelle,ll   lelel ellelle lopproorjojojoe  rjijrijrijir",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={sandwich.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{sandwich.name}</h1>
        <span className={styles.price}>${sandwich.price[size]}</span>
        <p className={styles.desc}>{sandwich.desc}</p>
        <h3 className={styles.choose}>Choisis ta taille</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={()=>setSize(0)}>
            <Image src="/img/sandwich3.png" layout="fill" />
            <span className={styles.number}>small</span>
          </div>
          <div className={styles.size} onClick={()=>setSize(1)}> 
            <Image src="/img/sandwich3.png" layout="fill" />
            <span className={styles.number}>medium</span>
          </div>
          <div className={styles.size} onClick={()=>setSize(2)}>
            <Image src="/img/sandwich3.png" layout="fill" />
            <span className={styles.number}>large</span>
          </div>
        </div>
        <h3 className={styles.c
        }> choisis un ingredien additionnel</h3>
        <div className={styles.ingredients}>
            <div className={styles.option}>
            <input type="checkbox" id="double" name="double" className={styles.checkbox}/>
<label htmlFor="double"> double ingredients</label>
            </div>
            <div className={styles.option}>
            <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox}/>
<label htmlFor="cheese"> Extra cheese</label>
            </div>
            <div className={styles.option}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox}/>
<label htmlFor="sauce"> Garlic sauce</label>
            </div>
            <div className={styles.option}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox}/>
<label htmlFor="sauce"> Garlic sauce</label>
            </div>
            <div className={styles.option}>
            <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox}/>
<label htmlFor="spicy"> Garlic sauce</label>
            </div>


            
        </div>
      </div>
    </div>
  );
}
