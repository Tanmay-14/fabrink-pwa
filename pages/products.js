import styles from "../styles/Product.module.css";
import { AiFillHome } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function Products() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className={styles.btn}>
          <button className={styles.btn2} onClick={() => router.replace("/")}>
            <AiFillHome size={20} />
          </button>
        </div>
        <div className={styles.crleft}>
          <h1>
            Select from a Varied Range of <br /> Products & Styles
          </h1>
          <p>
            Access to the best manufacturing, storing & shipping service all in
            one place here at FabrInk.
          </p>
        </div>
        <section>
          <div className={styles.maincontainer}>
            <ul className={styles.gridwrapper}>
              <Link href="../products/white-tshirt">
                <li>
                  <div className={styles.imgspace}>
                    <img src="./WhiteT-Shirt.png" width={200} />
                  </div>
                  <div className={styles.infospace}>
                    <h3>180 GSM T-Shirt</h3>
                    <p>
                      Pure Cotton 180 GSM T-Shirts, Pre-shrunk and Soft Fabric.
                    </p>
                  </div>
                </li>
              </Link>
              <li>
                <div className={styles.imgspace}>
                  <img src="./WhiteHoodie.png" width={200} />
                </div>
                <div className={styles.infospace}>
                  <h3>180 GSM T-Shirt</h3>
                  <p>
                    Pure Cotton 180 GSM T-Shirts, Pre-shrunk and Soft Fabric.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.imgspace}>
                  <img src="./WhiteSweatshirt.png" width={200} />
                </div>
                <div className={styles.infospace}>
                  <h3>180 GSM T-Shirt</h3>
                  <p>
                    Pure Cotton 180 GSM T-Shirts, Pre-shrunk and Soft Fabric.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
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
