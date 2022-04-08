import styles from "../styles/Product.module.css";
export default function products() {
  return (
    <>
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
            <li>
              <div className={styles.imgspace}>
                <img src="./WhiteT-Shirt.png" width={200} />
              </div>
              <div className={styles.infospace}>
                <h3>180 GSM T-Shirt</h3>
                <p>Pure Cotton 180 GSM T-Shirts, Pre-shrunk and Soft Fabric.</p>
              </div>
            </li>
            <li>
              <div className={styles.imgspace}>
                <img src="./WhiteHoodie.png" width={200} />
              </div>
              <div className={styles.infospace}>
                <h3>180 GSM T-Shirt</h3>
                <p>Pure Cotton 180 GSM T-Shirts, Pre-shrunk and Soft Fabric.</p>
              </div>
            </li>
            <li>
              <div className={styles.imgspace}>
                <img src="./WhiteSweatshirt.png" width={200} />
              </div>
              <div className={styles.infospace}>
                <h3>180 GSM T-Shirt</h3>
                <p>Pure Cotton 180 GSM T-Shirts, Pre-shrunk and Soft Fabric.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
