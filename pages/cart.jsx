

import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";


export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th className={styles.th}> Produit</th>
              <th className={styles.th}>Nom</th>
              <th className={styles.th}>Extras</th>
              <th className={styles.th}>prix</th>
              <th className={styles.th}>Quantité</th>
              <th className={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/sandwich1.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Carlozo</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, epicé</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$19</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/sandwich1.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Carlozo</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, epicé</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$19</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/sandwich1.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Carlozo</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, epicé</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$19</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/sandwich1.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Carlozo</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, epicé</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$19</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/sandwich1.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Carlozo</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, epicé</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$19</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> Total Panier</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Total Partiel:</b>$79
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Reduction:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Total: </b>$79.00
          </div>
          <button className={styles.button}>Verifier Maintenant!</button>
        </div>
      </div>
    </div>
  );
}
