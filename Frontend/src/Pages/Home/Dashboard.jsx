import React from "react";
import CarouselBanner from "../../Components/Dashboard/CarouselBanner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import { Featured } from "../../Components/MiddleSection/Featured";
import { RevvB } from "../../Components/MiddleSection/RevvB";
import { Sanitized } from "../../Components/MiddleSection/Sanitized";

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <CarouselBanner />
      <Sanitized/>
      <Featured />     
      <RevvB />    
      <Footer/>
    </div>
  );
}

export default Dashboard;
