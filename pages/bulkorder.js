import styles from "../styles/Bulk.module.css";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Bulkorder() {
  const router = useRouter();

  return (
    <>
      <div>
        <button className={styles.back} onClick={() => router.replace("/")}>
          <AiFillHome />
        </button>

        <div className={styles.title}>
          <div className={styles.titlefont}>BULK ENQUIRY</div>
        </div>
        <div className={styles.form}>
          <label>Name:</label> <br /> Varad Gundap
          <p />
          <label>E-mail Address:</label> <br />
          Varad615@gmail.com
          <p />
          <label>Message:</label> <br /> <textarea></textarea>
        </div>
        <br />
        <div>
          <button className={styles.btn}>Submit</button>
        </div>
      </div>
    </>
  );
}
