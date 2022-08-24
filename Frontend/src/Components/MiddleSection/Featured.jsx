import React from "react";
import styles from "./Featured.module.css";
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

const sourcelist2 = [
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/featured/Desktop_Banner_01_testimonial.png",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/featured/Desktop_Banner_02_testimonial.png",

  "https://www.revv.co.in/assets/RentalImages/HomeScreen/featured/desktop-banner-03-testimonial.png",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/featured/Desktop_Banner_02_Mahindra_Subscription.png",
  "https://www.revv.co.in/assets/RentalImages/HomeScreen/featured/Desktop_Banner_01_Hyundai_Subscription.png"
];
function Featured({ deviceType }) {
  return (
    <div>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.row}>
            <p className={styles.p}>
              <span className={styles.featured}> Featured</span>
            </p>
          </div>
          <Carousel
            partialVisbile={false}
            ssr
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            containerClass="carousel-container"
            infinite
            autoPlay
            focusOnSelect={true}
            itemClass={styles.padd}
            containerClass={styles.container}
          >
            <div>
              <img className={styles.img} src={sourcelist2[0]} />
            </div>
            <div>
              <img className={styles.img} src={sourcelist2[1]} />
            </div>
            <div>
              <img className={styles.img} src={sourcelist2[1]} />
            </div>
            <div>
              <img className={styles.img} src={sourcelist2[2]} />
            </div>
            <div>
              <img className={styles.img} src={sourcelist2[3]} />
            </div>
            <div>
              <img className={styles.img} src={sourcelist2[4]} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export { Featured };
