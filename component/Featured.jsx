import React from "react";
import styles from "../styles/Featured.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const sandwichInfos = [
    {
      title: "SANDWICH",
      img: "/img/sandwich1.png",
      accessoir: "Chaud et Épicé",
      reduct: "20% de réduction ",
      callToAction: "Commandez Maintenant",
    },
    {
      title: "SANDWICH",
      img: "/img/sandwich2.png",
      accessoir: "Pret à Porter et Délicieux",
      reduct: "Livraison gratuit ",
      callToAction: "Commandez Maintenant",
    },
    {
      title: "Sandwich3",
      img: "/img/sandwich3.png",
      accessoir: "Pret à Porter et Délicieux",
      reduct: "A moindre cout  ",
      callToAction: "Commandez Maintenant",
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
        style={{ left: 0, zIndex: 2 }}
        onClick={() => handleArrow("l")}
      >
        <MdKeyboardArrowLeft className={styles.arrowLeft} size={135} color="white" />
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
              <button className={styles.callToAction}>
                {sandwichInfo.callToAction}
              </button>
            </div>
            <Image
              className={styles.image}
              src={sandwichInfo.img}
              alt=""
              layout="fill"
              objectFit="contain"
              style={{ marginLeft: "200px" }}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <MdKeyboardArrowRight className={styles.arrowRight} size={135} color="white" />
      </div>
    </div>
  );
}
