import React from "react";
import styles from "../styles/Featured.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { CallToAction, Translate } from "@material-ui/icons";
import { isAbsolute } from "path";
export default function Featured() {
  const [index, setIndex] = useState(0);
  const sandwichInfos= [
    {
      title: "SANDWICH",
      img: "/img/sandwich1.png",
      accessoir:"Chaud et Épicé",
      reduct:"20% de réduction ",
      callToAction:"Commandez Maintenant"
    },
    {
      title: "SANDWICH",
      img: "/img/sandwich.jpg",
      accessoir:"Pret à Porter et Délicieux",
      reduct:"Livraison gratuit ",                           
    },
    {
      title: "Sandwich3",
      img: "/img/sandwich1.png",
    },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0, zIndex: 3 }}
        onClick={() => handleArrow("l")}
      >
        <MdKeyboardArrowLeft size={166} color="white" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {sandwichInfos.map((sandwichInfo, index) => (
          <div className={styles.mainContainer} key={index}>
            <div className={styles.titleContainer}>
              <h2 className={styles.accessoir}> {sandwichInfo.accessoir}</h2>
              <h1 className={styles.title}>{sandwichInfo.title}</h1>
              <h3 className={styles.reduct}>{sandwichInfo.reduct}</h3>
              <button className={styles.callToAction}>{sandwichInfo.callToAction}</button>
            </div>

           
            <Image src={sandwichInfo.img} alt="" layout="fill" objectFit="contain" style={{marginLeft:"200px"}} />
         
          
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <MdKeyboardArrowRight size={166} color="white" />
      </div>
    </div>
  );
}
