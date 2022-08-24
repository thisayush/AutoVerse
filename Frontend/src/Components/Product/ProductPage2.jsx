import React from "react";
import Divider from '@material-ui/core/Divider';
import { SmallCard, SmallCard3 } from "./smallCard";
import Button from '@material-ui/core/Button';

const data = [
    {
        name: "Zero down payment & road tax",
    },
    {
        name: "No long term commitment",
    },
    {
        name: "No loan process, no cibil check",
    },
    {
        name: `Doorstep pick & drop for maintenance & service`,
    }
]
export const ProductPage2 = () => {
    return (
        <>
            <div style={{background:"#ececec",marginTop:20}}>
                <div style={{marginLeft:220,width:"44vw",paddingTop:40}}>
                    <h1 >Car subscription vs buying</h1>
                    <div style={{marginTop:"10%"}}>
                        <div style={{display:"flex"}}>
                            <div style={{marginLeft:"59.2%"}}></div>
                            <div style={{background:"white",width:100,textAlign:"center",paddingTop:5,boxShadow:"0px 3px 3px 2px silver"}}>
                            <h4 style={{fontSize:18,marginBottom:8}}>Subscribe</h4>
                            </div>
                            <div  style={{width:100,textAlign:"center",paddingTop:5,marginLeft:"7%"}}>
                               <h4 style={{fontSize:18,marginBottom:8}}>Buy</h4>
                            </div>
                        </div>
                     <Divider />
                        {data.map((el,i) => {
                            return <SmallCard3 key={i} item={el}/>
                        })}
                    </div>
                    <Button style={{marginTop:30,marginBottom:30}} color="transparent" variant="contained">
                        <span style={{color:"#1caba2"}}>View more</span>
                    </Button>
                </div>
            </div>
        </>
    )
}