import React from "react";
import { SmallCards1 } from "./smallCard";

const item = [
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/sanitised-safe-cars/external-sanitisation.svg",
        message: "External",
        limit:"sanitisation"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/sanitised-safe-cars/internal-sanitisation.svg",
        message: "Internal",
        limit:"sanitisation"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/sanitised-safe-cars/doorstep-delivery.svg",
        message: "Contact-less",
        limit:"doorstep delivery"
    }
]

const item2 = [
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/sanitised-safe-cars/safety-hygiene.svg",
        message: "Safety & hygiene",
        limit:"best practices"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/sanitised-safe-cars/re-sanitization.svg",
        message: "Re-sanitization",
        limit:"at doorstep"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/sanitised-safe-cars/cleaning-washing.svg",
        message: "Cleaning and",
        limit:"washing"
    }
]
export const Sanatize = () => {
    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(270deg,#1caba2 25%,#1c7fab)", height: "94vh" }}>
                <div style={{ marginLeft: 220, marginTop: 5,paddingTop:40 }}>
                   <h2 style={{color:"white",marginBottom:50,fontWeight:"bold"}}>Sanitised and safe cars</h2>
                    <div style={{width:"38vw",display:"flex",marginTop:20}}>
                            {
                                item.map((el, i) => {
                                    return <SmallCards1 key={el.length+1} item={el}/>
                                })
                            }
                    </div>
                    <div style={{width:"38vw",display:"flex",marginTop:20}}>
                            {
                                item2.map((el, i) => {
                                    return <SmallCards1 key={el.length+1} item={el}/>
                                })
                            }
                    </div>
                    <div style={{marginTop:50}}> 
                        <iframe  width="510" height="240" style={{borderRadius:20}} src="https://www.youtube.com/embed/8I2A7HQfzwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>       
            </div>
        </>
    )
}