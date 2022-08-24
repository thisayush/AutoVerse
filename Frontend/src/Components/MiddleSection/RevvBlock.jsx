import React, { useState } from "react";
import styles from "./MiddleSection.module.css";
import icon from "./2x.png";
function RevvBlock({ title, bi, para, bii, cls }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(!isShown)}
      onMouseLeave={() => setIsShown(false)}
      isShown={isShown}
    >
      {" "}
      {isShown ? (
        <div className={cls} style={{ backgroundImage: `url(${bii}) ` }}>
          <h4 className={styles.titlee}>{title}</h4>
          <p className={styles.para}>{para}</p>
        </div>
      ) : (
        <div className={cls} style={{ backgroundImage: `url(${bi})` }}>
          <h4 className={styles.title}>{title}</h4>
          <img src={icon} style={{ marginLeft: "10%" }} alt="" />
        </div>
      )}
    </div>
  );
}
export { RevvBlock };
