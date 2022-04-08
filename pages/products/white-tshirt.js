import styles from "../../styles/Page.module.css";
import GooglePayButton from "@google-pay/button-react";
export default function products() {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };
  return (
    <>
      <div>
        <div className={styles.img}>
          <h1 className={styles.h1}>T-Shirt</h1>
          <img src="/WhiteT-Shirt.png" width={300} />
          <br />
          <div class={styles.controls}>
            <label class={styles.radio}>
              <input
                className={styles.input}
                type="radio"
                name="foo"
                value="1"
                checked
              />
              Small
            </label>
            &nbsp;&nbsp;
            <label class={styles.radio}>
              <input
                className={styles.input}
                type="radio"
                name="foo"
                value="3"
              />
              Medium
            </label>
            &nbsp;&nbsp;
            <label class={styles.radio}>
              <input
                className={styles.input}
                type="radio"
                name="foo"
                value="5"
              />
              Large
            </label>
          </div>
          <br />
          <div className={styles.type}>
            Print Type: &nbsp;
            <select name="cars" id="cars">
              <option value="DTG">DTG</option>
              <option value="Screen">Screen</option>
            </select>
          </div>
          <br />
          <div className={styles.remark}>
            Remarks (if any):
            <div className={styles.textareapos}>
              <textarea
                className={styles.textarea}
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          <div className={styles.price}>Print Price (₹): 900</div>
        </div>
        <div className={styles.buy}>
          <GooglePayButton
            environment="TEST"
            buttonSizeMode="static"
            paymentRequest={paymentRequest}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
            }}
          />
        </div>
      </div>
    </>
  );
}
