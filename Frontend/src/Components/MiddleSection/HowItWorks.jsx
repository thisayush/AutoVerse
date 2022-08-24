import React, { useState } from "react";
import styles from "./MiddleSection.module.css";

const how = [
  {
    src2: "https://www.revv.co.in/imgs/icons/wheel.png",
    src: "https://www.revv.co.in/imgs/icons/DriveHover.png",
    t1: "Drive",
    t2: "Enjoy your self drive"
  }
];

const how2 = [
  {
    src: "https://www.revv.co.in/imgs/icons/rotate-img.png",
    src2: "https://www.revv.co.in/imgs/icons/rotate-img-hover.png",
    t1: "Return",
    t2:
      "Get the car back to your preferred return location, and we will take it from there"
  }
];
function HowItWorks() {
  const [isShown, setIsShown] = useState(false);
  const [isShownn, setIsShownn] = useState(false);

  return (
    <div style={{ marginLeft: "-8%" }}>
      <h4 className={styles.how}>How it Works</h4>
      <div>
        <div className={styles.howitworks}>
          <div>
            <div className={styles.circlepaper}>
              <img
                className={styles.img}
                src="https://image.flaticon.com/icons/png/512/2223/2223401.png"
              />
            </div>
            <div>
              <h4 className={styles.book}>Book & Pay</h4>
              <br />
              <p className={styles.pick}>
                Pick your favourite car, time and place
              </p>
            </div>
          </div>
          <div className={styles.hr}>
            ....................................................
          </div>
          <div>
            <div className={styles.circlepaper}>
              <img
                className={styles.car}
                src="https://image.flaticon.com/icons/png/512/48/48688.png"
              />
            </div>
            <div>
              <h4 className={styles.book}>Receive</h4>
              <br />
              <p className={styles.pick}>
                We will deliver the car to your doorstep
              </p>
            </div>
          </div>
          <div className={styles.hr}>
            ....................................................
          </div>
          {how.map((item) => {
            return (
              <>
                <div>
                  <div
                    onMouseEnter={() => setIsShown(!isShown)}
                    onMouseLeave={() => setIsShown(false)}
                    className={styles.circlepaper}
                  >
                    {isShown ? (
                      <img src={item.src} className={styles.stear} />
                    ) : (
                      <img src={item.src2} className={styles.img} />
                    )}
                  </div>
                  <div>
                    <h4 className={styles.book}>{item.t1}</h4>
                    <br />
                    <p className={styles.pick}>{item.t2}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className={styles.hr}>
            ....................................................
          </div>
          {how2.map((item) => {
            return (
              <>
                <div>
                  <div
                    onMouseEnter={() => setIsShownn(!isShown)}
                    onMouseLeave={() => setIsShownn(false)}
                    className={styles.circlepaper}
                  >
                    {isShownn ? (
                      <img src={item.src2} className={styles.return} />
                    ) : (
                      <img src={item.src} className={styles.img} />
                    )}
                  </div>
                  <div>
                    <h4 className={styles.book}>{item.t1}</h4>
                    <br />
                    <p className={styles.pick}>{item.t2}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export { HowItWorks };
