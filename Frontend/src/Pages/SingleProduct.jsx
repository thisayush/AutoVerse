import React from "react";
// import { Product } from "../Components/Product/product";
import { ProductPage } from "../Components/Product/ProductPage";
import { ProductPage2 } from "../Components/Product/ProductPage2";
import LoggedInNavbar from "../Components/LoggedInNavbar";
import { Insurance } from "../Components/Product/Insurance";
import { Sanatize } from "../Components/Product/Sanatize";
import Footer from "../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getCarById } from "../Redux/Car/carAction";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {

    const dispatch = useDispatch();
    const { carId } = useParams();
    React.useEffect(() => {
    dispatch(getCarById(carId));
    },[dispatch,carId])
    const car_data = useSelector(state => state.singleCar.car_data);
    // const isLoading = useSelector(state => state.singleCar.isLoading);
    console.log(car_data);

    return (
        <>
            <div style={{position:"sticky",top:0,zIndex:1000}}>
                <LoggedInNavbar />
            </div>
            <div style={{width:"100%",position:"relative"}}>
                {
                 <ProductPage carsData={car_data} />
                }               
                <div style={{}}>
                <ProductPage2/>              
               </div>
            </div>
            <Insurance />
            <Sanatize />
            <div style={{marginTop:80}}>
              <Footer/>
            </div>
        </>
    )
}