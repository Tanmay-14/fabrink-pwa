import styles from "../styles/Bulk.module.css";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";

export default function whitetshirt() {
  const router = useRouter();

  return (
    <>
      <div>
        <button className={styles.back} onClick={() => router.replace("/")}>
          <AiFillHome />
        </button>
        <div className={styles.title}>
          <div className={styles.titlefont}>About Us</div>
        </div>
        <div className={styles.about}>
          <div className={styles.header}>COMPANY</div>
          <div className={styles.content}>
            FabrInk is a print on demand and dropshipping(order fufilment)
            company. FabrInk enables anyone to sell products online without
            inventory, processing and logistics hurdles. Anyone can signup on
            FabrInk.com and start selling products online. People without
            resources for inventory and without knowledge for merchandising can
            simply design and sell products online with custom printing and
            custom branding. Never before was this, this easy. FabrInk is a
            print on demand and drop shipping company built on the interests of
            graphic designers, digital marketers, influencers or anyone wants to
            sell products online.
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.header}>Project By</div>
          <div className={styles.content}>
            Saurav Desai <br />
            Varad Gundap <br /> Tanmay Bagal <br />
            Varun Ghorpade
          </div>
        </div>
      </div>
    </>
  );
}
