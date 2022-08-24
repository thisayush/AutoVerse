import React from "react";
import { P } from "./P";
import styles from "./Card.module.css";

function Button({ but, onClick, src, val, cls, Ref }) {
  return (
    <div>
      <button className={cls} ref={Ref} onClick={onClick}>
        <div style={{ display: "flex", marginTop: "20px", fontSize: "20px" }}>
          <img
            style={{ width: "10px", height: "15px", marginLeft: "60px" }}
            src={src}
          />
          <p style={{ marginTop: "-3px" }}> {but}</p>{" "}
        </div>
        <P val={val} />
      </button>
    </div>
  );
}
export { Button };
