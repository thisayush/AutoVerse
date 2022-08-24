import React from "react";
import styles from "./MiddleSection.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/banner-sanitised03.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/mask-group125.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/banner-sanitised01.webp",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/banner-sanitised02.webp"
];
function Sanitized({ deviceType }) {
  return (
    <div>
      <div className={styles.sanout}>
        <div>
          <p className={styles.san}>
            <span className={styles.spann}> Sanitized &amp; safe cars</span>
          </p>
          {/* </div> */}
          {/* <div> */}
          <Carousel
            autoPlay
            partialVisbile={false}
            ssr
            focusOnSelect={true}
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            containerClass="carousel-container"
            infinite
            itemClass={styles.padd}
            containerClass={styles.container}
          >
            <div>
              <img className={styles.imgg} src={images[0]} alt="" />
            </div>
            <div>
              <img className={styles.imgg} src={images[1]} alt="" />
            </div>
            <div>
              <img className={styles.imgg} src={images[2]} alt="" />
            </div>
            <div>
              <img className={styles.imgg} src={images[3]} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export { Sanitized };
