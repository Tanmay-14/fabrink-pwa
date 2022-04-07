import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import HomeScreen from "./home";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
      <HomeScreen />
      </>
    );
  }
  return (
    <div className={styles.login}>
      <img src="/logofull.png" /> <br />
      <button className={styles.loginbtn} onClick={() => signIn()}>
        Login With Google
      </button>
    </div>
  );
}
