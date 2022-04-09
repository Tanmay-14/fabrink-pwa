import { FcGoogle } from "react-icons/fc";
import { AiFillHome } from "react-icons/ai";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <style jsx>
          {`
            .center {
              background: linear-gradient(
                82.55deg,
                rgba(255, 205, 205, 0.5) 10.41%,
                rgba(255, 163, 163, 0) 79.7%
              );
              border: 1px solid #ffa3a3;
              border-radius: 15px;
              text-align: center;
              margin: auto;
              margin-top: 50px;
              margin-bottom: 50px;
              margin-left: 20%;
              margin-right: 20%;
              padding: 20px;
              font-family: sans-serif;
            }
            .navback {
              margin: auto;
              
              margin-left: 20%;
              margin-right: 20%;
              
              font-family: sans-serif;
            }
            img {
              border-radius: 50%;
            }
            .btn{
              background: #ffa3a3;
              border: 1px solid #ffa3a3;
              padding: 10px;
              width: 100%;
              border-radius: 5px;
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .btn2{
              background: #ffa3a3;
              border: 1px solid #ffa3a3;
              padding: 10px;
              border-radius: 5px;
            }
            @media (max-width: 769px) {
              .center{
                background: linear-gradient(82.55deg, rgba(255, 205, 205, 0.5) 10.41%, rgba(255, 163, 163, 0) 79.7%);
                border: 1px solid #FFA3A3;
                border-radius: 15px;
                text-align: center;
                margin-top: 50px;
                margin-bottom: 50px;
                margin-left:2%;
                margin-right: 2%;
              }
              .navback {
                margin: auto;
                
                margin-left: 0%;
                margin-right: 0%;
                
                font-family: sans-serif;
              }
          `}
        </style>
        <div>
          <div className="navback">
            <button className="btn2" onClick={() => router.replace("/")}>
              <AiFillHome size={20} />
            </button>
          </div>
          <div className="center">
            <img src={session.user.image} /> <br />
            <h1>Welcome</h1>
            <h2>{session.user.name}</h2>
            <h3>{session.user.email}</h3>
            <button className="btn" onClick={() => router.replace("/bulkorder")}>Bulk Order</button>
            <button className="btn"onClick={() => router.replace("/about")}>About</button>
            <button className="btn" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    /* This is the login page. It is a simple page that allows you to login with Google. */
    <div className={styles.login}>
      <img src="/logofull.png" /> <br />
      <button className={styles.loginbtn} onClick={() => signIn()}>
        <FcGoogle size={20} /> &nbsp; Login With Google
      </button>
    </div>
  );
}
