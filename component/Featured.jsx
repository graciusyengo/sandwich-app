import React from "react";
import styles from "../styles/Featured.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
export default function Featured() {
const images=[
  "/img/sandwich1.png",
  "/img/sandwich.jpg",
  "/img/sandwich.jpg"
]
 
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0,zIndex:3 }}>
        <MdKeyboardArrowLeft size={166} color="white" />
      </div>
      <div className={styles.wrapper}>
       {images.map((img,index)=>(
          <div className={styles.imgContainer} key={index} >
          <Image src={img} alt="" layout="fill" />
        </div>

       ))}
         

      
       
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <MdKeyboardArrowRight size={166} color="white" />
      </div>
    </div>
  );
}
