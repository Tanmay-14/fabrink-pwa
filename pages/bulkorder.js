import styles from "../styles/Bulk.module.css";
import { AiFillHome } from "react-icons/ai";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

export default function Bulkorder() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
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
            <label>Name:</label> <br /> {session.user.name}
            <p />
            <label>E-mail Address:</label> <br />
            {session.user.email}
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
  } else {
    return (
      <div className={styles.login}>
        <img src="/logofull.png" /> <br />
        <button className={styles.loginbtn} onClick={() => signIn()}>
        <FcGoogle size={20} /> &nbsp; Login With Google
        </button>
      </div>
    );
  }
}
