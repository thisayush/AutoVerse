import React from "react";
import Carousel from "react-material-ui-carousel";
import { Product } from "./product";
import styles from "./product.module.css";
import { SmallCard } from "./smallCard";
import { useSelector } from "react-redux";
import Skeleton from '@material-ui/lab/Skeleton';

function Item(props) {
  const  isLoading= useSelector(state => state.singleCar.isLoading);

  return (
      <div>
      <div><img className={styles.stdiv} src="https://www.revv.co.in/grapheneImages/PDP/product-images/less-than-3-years-old.png" alt="icon"/></div>
      {isLoading?<Skeleton variant="rect" width={310} height={218} />:<img src={props.item.img} alt="icon" />}
    </div>
  );
}
export const ProductPage = ({ carsData }) => {
  
     var items = [
    {
      img:`${carsData?.image_url?carsData?.image_url[1]:null}`
    },
    {
      img:`${carsData?.image_url?carsData?.image_url[1]:null}`
      },
      {
        img:`${carsData?.image_url?carsData?.image_url[1]:null}`
      },
      {
        img:`${carsData?.image_url?carsData?.image_url[1]:null}`
      }
    ];
    let items2 = [
        {
            name: "Condition",
            description: "As good as new",
            img:"https://www.revv.co.in/grapheneImages/PDP/product-images/condition.svg"
        },
        {
            name: "variant/Color",
            description: "As per availability",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkYfYpsNQhqwomLdlXuyfltdlGRuTwzoW3ObR-LTraANeAH5iZ2ODNfnFJ6NXwQvZF0Y&usqp=CAU"
        },
        {
            name: "Transmission type",
            description: "Manual",
            img:"https://repairsmith-prod-wordpress.s3.amazonaws.com/2019/08/Exhaust-Manifold-e1566993279214.png"
        },
        {
            name: "Fuel type",
            description: "Petrol",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaoYtNR_7lZFdHEniqCtVwxTVzZm0Dm1sBBaTRQ6ja0ftg3aHcRHGnRfqIBJiBo7UqxA&usqp=CAU"
        },
    ]
  return (
    <>
      
      <div  style={{ width: "44vw" ,textAlign:"center",marginLeft:"12%"}}>
        <Carousel
          // IndicatorIcon="prev" // Previous Example
          animation="slide"
          navButtonsAlwaysVisible={true}
          indicatorIconButtonProps={{
            style: {
              color: "silver",
              marginTop: -70, // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#1caba2", // 2
            },
          }}
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              opacity: 1,
                  color: "#1caba2",
              background:"white"
            },
          }}
          autoPlay={false}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
              <div className={styles.container10}>
                  {items2.map((e,i) => {
                      return <SmallCard key={i} item={e}/>
                })}
             </div>
      </div>
      <div style={{marginTop:"-28.5%",position:"static"}}>
        <Product carsData={carsData}/>
      </div>
    </>
  );
};
