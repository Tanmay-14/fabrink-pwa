import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function HomeScreen() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <style jsx>{`
          :root{
          --white:rgba(255, 255, 255, 0.8);
          --font-blck: #181818;
          --font-1: 'Poppins', sans-serif;
          --font-2: 'Noto Sans Display', sans-serif;
          }
      
          * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }
          * {
            box-sizing: border-box;
          }
          header {
            font-family: "Poppins", sans-serif;
            line-height: 1;
            margin: 0;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          h2,
          h3,
          a {
            color: #34495e;
          }
          .goproducts{
            background-color: white;
            border: 1px solid #fd045c;
            padding: 10px;
            font-size: 1.5rem;
            border-radius: 8px;
            color: #fd045c;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            transition: 0.3s;
          }
          a {
            text-decoration: none;
          }
          .main-nav {
            display: flex;
            margin-top: 5px;

            font-size: 1.5em;
          }
          .logo a,
          .main-nav a {
            padding: 10px 15px;
            text-align: center;
            display: block;
          }

          .main-nav a {
            color: black;
            font-size: 0.99em;
          }
          .main-nav a:hover {
            color: #fd045c;
          }
          .Fabr {
            color: #fd045c;
          }
          .Ink {
            color: #30cfc2;
          }
          .btn1 {
            background-color: white;
            border: 1px;
            border-radius: 8px;
            color: black;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border: 1px solid black;
          }

          .btn2 {
            background-color: #fd045c;
            border: 1px;
            border-radius: 8px;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 10px;
            cursor: pointer;
          }

          .btn2 a:hover {
            color: white;
          }

          .header {
            display: flex;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            background-color: white;
          }

          /* .btn{
            width
        } */

          .btn button {
            padding: 10px 25px;
            border: none;
            border-radius: 6px;
            font-size: 17px;
            font-weight: 500;
            margin: 0px 5px;
            transition: all 0.3s ease;
            font-family: var(--font-1);
          }

          .btn .sUp {
            background-color: transparent;
            border: 1px solid #ccc;
          }

          .btn .sIn {
            background-color: #fd045c;
            color: var(--white);
          }

          .btn .sUp:hover {
            background-color: #ccc;
            color: var(--white);
          }

          .btn .sIn:hover {
            border: 1px solid #181818;
            background-color: var(--white);
            color: #181818;
          }

          .txt{
            font-family: 'Noto Sans Display', sans-serif;
            color: #181818;
        }
        .create{
            width: 100%;
            height: 500px;
            background: linear-gradient(180deg, rgba(255, 163, 163, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 80px;
        }
        
        .create .cr_left{
            /* background-color: #FD045C; */
            margin-left: 50px;
            height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items:flex-start;
        }
        
        .cr_left h1{
            font-family: 'Noto Sans Display', sans-serif; 
            font-weight: 600;
            font-size: 45px;
            color: var(--font-blck);
        }
        
        .cr_left .list{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .cr_left ul{
            list-style: none;
            font-family: var(--font-2);
            /* margin: 20px 30px; */
        }
        
        .cr_left .icons li{
            color: #FD045C;
        }
        
        
        .cr_left li{
            text-align: left;
            padding: 8px 10px;
            font-weight: 400;
            font-size: 18px;
        }
        
        .cr_left .start_btn button{
            padding: 9px 18px;
            border: none;
            outline: none;
            border-radius: 6px;
            margin-right: 15px;
            font-size: 18px;
            font-weight: 500;
        }
        
        .cr_left .start_btn button:nth-child(1){
            background-color: #FD045C;
            color: #fff;
        }
        
        .cr_left .start_btn button:nth-child(2){
            background-color: transparent;
            border: 1px solid #252525;
            color: rgba(37, 37, 37, 0.8);
        }
        
        .cr_left .start_btn button:hover{
            opacity: .8;
            background-color: transparent;
            border: 2px solid #FD045C;
            color: #FD045C;
        }
        
        .cr_right{
            margin-right: 50px;
            margin-top: 50px;
        }
        
        /* Journey */
        
        journey h1{
            text-align: center;
            font-family: var(--font-2);
            font-size: 2.5rem;
            font-weight: 600;
            color: #242424;
        }
        
        
        .center{
            width: 100%;
            height: 750px;
            display: flex;
            position: relative;
            margin: 10px 20px;
            /* padding: 20px 50px; */
        }
        
        .center .cn_left{
            position: absolute;
            bottom: 5%;
            left: 10%;
            height: 450px;
        }
        
        .center .cn_left .h_holder{
            background: linear-gradient(82.55deg, rgba(255, 205, 205, 0.5) 10.41%, rgba(255, 163, 163, 0) 79.7%);
            border: 1px solid #FFA3A3;
            border-radius: 15px;
            width: 100%;
            max-height: 450px;
            padding: 30px 30px;
        }
        
        .center .cn_left .h_holder h3{
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2rem;
        }
        
        .center .h_holder p{
            margin: 20px 0px;
            font-size: 1.2rem;
            width: 550px;
            font-weight: 300;
            color: #333333;
        }
        
        .center .h_holder .link_f{
            display: flex;
            align-items: center;
            justify-content:flex-start;
            width: 180px;
            margin-top: 20px;
        }
        
        .center .h_holder .link_f a{
            text-decoration: none;
            color: #FD045C;
            font-size: 22px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .center .h_holder .link_f a:hover{
            text-decoration: underline;
        }
        
        .center .h_holder .link_f img{
            color: #FD045C;
            margin-right: 12px;
        }
        
        .center .cn_right{
            z-index: 2;
            height: 500px;
            position: absolute;
            right:20%;
            top: 5%;
            background-color: white;
            border: 2px solid #FFA3A3;
            border-radius: 12px;
        }
        
        .center .cn_right .v_holder{
            padding: 25px 25px;
        }
        
        /* process */
        .process{
            width: 100%;
        }
        
        .process h1{
            text-align: center;
            font-family: var(--font-2);
            font-size: 2.5rem;
            font-weight: 600;
            color: #242424;
        }
        
        .process .flex-items{
            margin: 20px 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        
        .process .flex-items .flex{
            width: 400px;
            height: 170px;
            padding: 5px 20px;
        }
        
        .process .flex-items .flex img{
            margin-bottom: 10px;
        }
        
        .process .flex-items .flex h3{
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--font-blck);
        }
        
        /* connect */
        .connect{
            margin-top: 50px;
        }
        .connect h1,
        .connect p {
            text-align: center;
            font-family: var(--font-2);
            color: #242424;
            line-height: 3rem;
        }
        
        .connect h1{
            font-size: 2.5rem;
            font-weight: 600;
        }
        
        .connect p{
            font-size: 1rem;
            font-weight: 400;
        }
        
        .icons{
            margin: 30px 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        
        .list .icons{
            flex-direction: column;
        }
        
        
        
        .icons .hldr{
            border: 1px solid #ccc;
            border-radius: 12px;
            padding: 8px 16px;
            margin: 10px 50px;
        }
        
        /* Footer */
        
        footer{
            background-color:rgb(37, 34, 34);
            font-family: 'Poppins', sans-serif;
            color: rgb(92, 218, 207);
            box-sizing: border-box;
            padding: 25px 100px;
            font-family: Helvetica, sans-serif;
            position:absolute;
            bottom: -1850px;
            width:100%;
          }
          
          .Fabr, .Ink{
            font-size: 125%;
            font-weight: bold;
            position: relative;
            left: 40px;
            bottom: -20px;
          
          }
          
          .heading{
            font-size: 150%;
            line-height: 250%;
            
          
          }
          
          .list{
            list-style: none;
            color: white;
            margin-top: 40px;
          }
          
          .list a{
            display: block;
            text-decoration: none;
            color: rgb(29, 216, 200);
            line-height: 150%;
            font-size: 120%;
          }
          
          a:hover{
            color: #fd045c;
          }
          
          .heading, .Fabr{
            color: #fd045c;
          
          }
          
          .to-flex{
            display: flex;
            justify-content: space-between;
          }
          
          .name{
            position:relative; left: -40px;
          }
        
          /* /Newsletter/ */
        
          
        .foot-nav,form{
            display: flex;
            justify-content: flex-start;
            
        }
        .foot-nav input[type="email"], .last{
            width: 150px;
            height: 35px;
            font-weight: bold;
            text-align: left;
        }
        .foot-nav input[type="email"]{
            border:none;
            color: white;
            background-color: rgb(37, 37, 39);
        }
        .foot-nav ::placeholder{
            color: rgb(67, 247, 241);
            border-bottom: 1px solid rgb(67, 247, 241);
            padding-bottom:6px;
            font-family: var(--font-1);
        }
        .foot-nav ::placeholder :focus{
            color: rgb(67, 247, 241);
            border-bottom: 1px solid rgb(67, 247, 241);
            padding-bottom:6px;
            
        }
        
        .last {
            border: none;
            background-color: rgb(67, 247, 241);
            color: black;
            font-family: var(--font-1);
            padding-left: 35px;
           
        }
        .center2{
          background: linear-gradient(82.55deg, rgba(255, 205, 205, 0.5) 10.41%, rgba(255, 163, 163, 0) 79.7%);
            border: 1px solid #FFA3A3;
            border-radius: 15px;
          text-align: center;
          margin: auto;
           margin-top: 50px;
           margin-bottom: 50px;
          margin-left: 20%;
          margin-right: 20%;
          padding: 20px;
        }

          @media (min-width: 1025px) {
            .header {
              flex-direction: row;
              justify-content: space-around;
            }
          }
          @media (max-width: 769px) {
            .center2{
              background: linear-gradient(82.55deg, rgba(255, 205, 205, 0.5) 10.41%, rgba(255, 163, 163, 0) 79.7%);
                border: 1px solid #FFA3A3;
                border-radius: 15px;
              text-align: center;
              margin: auto;
               margin-top: 50px;
               margin-bottom: 50px;
              margin-left: 10%;
              margin-right: 10%;
              padding: 20px;
            }
            .header{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center
                }
                
            .main-nav{
                    display: none;
                }
                
            .create{
                    width: 100%;
                    height: 750px;
                    display: flex;
                    flex-direction: column-reverse;
                    justify-content: space-around;
                }
            
            .create .cr_right{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 50px ;
                }
            
            .create .cr_right img{
                    width: 500px;
                    margin-top: 80px ;
                    margin-left: 40px;
        
                }
            
            .create .cr_left{
                    width: 100%;
                    display: flex;
                    margin-left: 0px;
                }
            
            .cr_left h1{
                    width: 100%;
                    font-family: 'Noto Sans Display', sans-serif; 
                    font-weight: 600;
                    font-size: 40px;
                    color: var(--font-blck);
                    text-align: center;
                }
            
            .create .cr_left .list{
                    width: 100%;
                    display: flex;
                    margin-top: 10px;
                }
            
            .create .cr_left .list .icon .bi{
                    height: 20px;
                }
             
            .create .cr_left .list .txt li{
                    font-size: 22px;
                }
            
            .center{
                    height: 550px;
                }
            
            .center .cn_right{
                    height: 300px;
                    top: 5%;
                    right: 13%;
                } 
            
            .center .cn_right img{
                    height: 250px;
                }
            
            .center .cn_left{
                    bottom: 25%;
                    height: auto;
                }
            
            .center .cn_left .h_holder{
                    width: 610px;
                }
            
            .center .cn_left .h_holder h3{
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                }
            
            .center .cn_left .h_holder p{
                    font-size: 1rem;
                    width: 300px;
                    margin: 10px 0;
                }
            
            .center .cn_left .h_holder img{
                    width: 70px;
                }
            
            .center .h_holder .link_f{
                    width: 150px;
                    margin-top: 0px;
                }
            
            .process{
                    display: none;
                }
            
            .connect{
                    margin-top: 0px;
                }
            
            .connect .icons .hldr img{
                    width: 80px;
                }
                
            footer{
                    display: none;
                }
                
        `}</style>
        <nav>
          <header className="header">
            <div className="logo">
              <a href="#">
                <img src="./logofull.png" width="150px" height="auto" />
              </a>
            </div>

            <ul className="main-nav">
              <li>
                <Link href="../products">
                  <a>Products</a>
                </Link>
              </li>

              <li>
                <Link href="../bulkorder">
                  <a>Bulk Orders</a>
                </Link>
              </li>
              <li>
                <Link href="../about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
            <div className="btn" style={{ color: "white" }}>
              <Link href="/user">
                <button className="sIn">
                  <a>{session.user.name}</a>
                </button>
              </Link>
            </div>
          </header>
        </nav>
        <create>
          <div className="container">
            <div className="create">
              <div className="cr_left">
                <h1>
                  Create & Sell <br /> Custom Products
                </h1>
                <div className="list">
                  <ul className="icons">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </li>
                  </ul>
                  <ul className="txt">
                    <li
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      No Upfront Fees
                    </li>
                    <li
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      No Minimum Order
                    </li>
                    <li
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      Global Shipping
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cr_right">
                <img src="homeimg.jpg" alt="" width="700px" />
              </div>
            </div>
          </div>
        </create>
        <journey style={{ fontFamily: "sans-serif" }}>
          <h1>Start Your Journey Today!</h1>
          <div className="center2">
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                lineHeight: "2rem"
              }}
            >
              Easily add your design to a wide <br /> range of products
            </h3>
            <p
              style={{
                margin: "20px 0px",
                fontSize: "1.2rem",
                fontWeight: "300",
                color: "#333333"
              }}
            >
              With our free design tools, you can easily add your custom designs
              to t-shirts, sweatshirts, hoodies, mugs, Phone cases, and hundreds
              of other products.
            </p>
            <br />
            <Link href="/products">
              <button className="goproducts">Products</button>
            </Link>
          </div>
        </journey>
      </>
    );
  } else {
    return (
      <div className="login">
        <img src="/logofull.png" /> <br />
        <button className="loginbtn" onClick={() => signIn()}>
          <FcGoogle size={20} /> &nbsp; Login With Google
        </button>
      </div>
    );
  }
}
