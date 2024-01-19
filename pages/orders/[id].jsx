import Image from "next/image";
import styles from "../../styles/Order.module.css";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoSyncOutline } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";

export default function Order() {

  const status=0

  const statusClass=(index)=>{

    if(index-status<1) return styles.done
    if(index-status===1) return styles.inProgress
    if(index-status>1) return styles.undone
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th className={styles.th}>Id Commande</th>
                <th className={styles.th}>Client</th>
                <th className={styles.th}>Adresse</th>
                <th className={styles.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>3444444Z4</span>
                </td>
                <td>
                  <span className={styles.name}>Gracius</span>
                </td>
                <td>
                  <span className={styles.address}>Gama 45 avj </span>
                </td>

                <td>
                  <span className={styles.total}>$19</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <LiaMoneyCheckAltSolid size={45} className={styles.icon} />
            <span className={styles.bake}>Payement</span>
            <div className={styles.checkedIcon}>
              <FaRegCircleCheck  className={styles.checkedIcon}  style={{ color: 'green' }}  size={45}  />
            </div>
          </div>
          <div className={statusClass(1)}>
            <IoSyncOutline size={45} className={styles.icon}  />
            <span className="">En cours</span>
            <div className={styles.checkedIcon}>
              <FaRegCircleCheck className={styles.checkedIcon}style={{ color: 'green' }} size={45} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <FaMotorcycle size={45} className={styles.icon}  />
            <span className="">En chemin</span>
            <div className={styles.checkIcon}>
              <FaRegCircleCheck className={styles.checkedIcon} style={{ color: 'green' }}   size={45} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <FaBuildingCircleCheck className={styles.delivered} size={45}   />
            <span className=""> Livraison</span>
            <div className={styles.checkIcon}>
              <FaRegCircleCheck className={styles.checkedIcon}style={{ color: 'green' }}   size={45} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAYER
          </button>
        </div>
      </div>
    </div>
  );
}
