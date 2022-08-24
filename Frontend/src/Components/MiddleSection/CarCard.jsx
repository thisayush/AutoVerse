import React, { useRef } from "react";
import { Button } from "./Button";
import { Image } from "./Image";
import { P } from "./P";
import styles from "./Card.module.css";
const Imgtit = [
  {
    src: "https://www.revv.co.in/imgs/car-card/automatic.svg",
    title: "Automatic"
  },
  { src: "https://www.revv.co.in/imgs/car-card/petrol.svg", title: "Petrol" },
  { src: "https://www.revv.co.in/imgs/car-card/seat.svg", title: "5 seats" }
];
function CarCard() {
  const but1 = useRef();
  const but2 = useRef();
  const but3 = useRef();
  console.log(but1);

  const onClick1 = () => {
    but1.current.style.color = "#0ebaba";
    but1.current.style.backgroundColor = "white";
    but2.current.style.color = "black";
    but2.current.style.backgroundColor = "lightgray";
    but3.current.style.color = "black";
    but3.current.style.backgroundColor = "lightgray";
  };
  const onClick2 = () => {
    but2.current.style.color = "#0ebaba";
    but2.current.style.backgroundColor = "white";
    but1.current.style.color = "black";
    but1.current.style.backgroundColor = "lightgray";
    but3.current.style.color = "black";
    but3.current.style.backgroundColor = "lightgray";
  };
  const onClick3 = () => {
    but3.current.style.color = "#0ebaba";
    but3.current.style.backgroundColor = "white";
    but2.current.style.color = "black";
    but2.current.style.backgroundColor = "lightgray";
    but1.current.style.color = "black";
    but1.current.style.backgroundColor = "lightgray";
  };

  return (
    <div>
      <div>
        <div className={styles.mainBlock}>
          <P cls={styles.title} val={"Maruti Swift AT"} />
          <br />
          <Image src="https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/swift.png" />
          <div style={{ display: "flex", gap: "150px", marginLeft: "10%" }}>
            {Imgtit.map((item) => {
              return (
                <div className={styles.props}>
                  <Image cls={styles.petrol} src={item.src} />
                  <P cls={styles.automatic} val={item.title} />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "35%", marginTop: "-10px" }}>
          <Button
            but="3516"
            cls={styles.button}
            src="https://image.flaticon.com/icons/png/512/3104/3104840.png"
            val={"250Kms"}
            onClick={onClick1}
            Ref={but1}
          />
          <Button
            but="4801"
            cls={styles.button}
            src="https://image.flaticon.com/icons/png/512/3104/3104840.png"
            val={"500Kms"}
            onClick={onClick2}
            Ref={but2}
          />
          <Button
            but="6087"
            cls={styles.button}
            src="https://image.flaticon.com/icons/png/512/3104/3104840.png"
            val={"Unlimited kms"}
            onClick={onClick3}
            Ref={but3}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "300px",
            marginLeft: "35%",
            marginTop: "15px",
            border: "0.1px solid lightslategray",
            width: "570px",
            marginTop: "-1px",
            borderTop: "0px"
          }}
        >
          <P cls={styles.extra} val="Extra km charge @ ₹ 9/km" />
          <button className={styles.book}>Book</button>
        </div>
      </div>
    </div>
  );
}
export { CarCard };
