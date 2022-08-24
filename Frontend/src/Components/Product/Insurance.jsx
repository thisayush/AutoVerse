import React from "react";
import { SmallCards } from "./smallCard";
import Button from '@material-ui/core/Button';


const item = [
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/limited-liability.svg",
        message: "Limited liability",
        limit:"upto 10,000"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/roadside-assistance.svg",
        message: "24X7 roadside",
        limit:"assistance"
    }
]

const item1 = [
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/oil-top-up-replacement.svg",
        message: "Oil top-up or",
        limit:"replacement"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/filter-replacement.svg",
        message: "Filter",
        limit:"replacement"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/tyre-rotation.svg",
        message: "Tyre",
        limit:"rotation"
    }
]

const item3 = [
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/tyre-rotation.svg",
        message: "Tyre",
        limit:"replacement"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/battery-replacement.svg",
        message: "Battery",
        limit:"replacement"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/clutch-parts.svg",
        message: "Clutch",
        limit:"parts"
    },
   
]

const item4 = [
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/brake-parts.svg",
        message: "Brake",
        limit:"parts"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/suspension-parts.svg",
        message: "Suspension",
        limit:"parts"
    },
    {
        link: "https://www.revv.co.in/grapheneImages/PDP/insurance-and-maintenance/manufacturer-warranty.svg",
        message: "Manufacturer",
        limit:"warranty"
    }
]
export const Insurance = () => {

    return (
        <>
            <div style={{marginLeft:220,marginTop:30}}>
                <h2 style={{fontWeight:"bold"}}>Insurance and maintenance includes</h2>

                <p style={{marginBottom:4,color:"grey",fontSize:19,marginTop:20}}>Comprehensive insurance policy</p>
                <div style={{
                    width: 35,
                    height: 4.5,
                    background: "teal",
                    borderRadius:3
                }}></div>
                <div style={{width:"25vw",display:"flex",marginTop:20}}>
                    {
                        item.map((el, i) => {
                            return <SmallCards key={el.length+1} item={el}/>
                        })
                    }
                </div>
                <p style={{marginBottom:4,color:"grey",fontSize:19,marginTop:20}}>Routine service and maintenance</p>
                <div style={{
                    width: 35,
                    height: 4.5,
                    background: "teal",
                    borderRadius:3
                }}></div>
                <div style={{ width: "38vw", display: "flex", marginTop: 20 }}>
                    {
                        item1.map((el, i) => {
                            return <SmallCards key={el.length+1} item={el}/>
                        })
                    }
                </div>
                <p style={{marginBottom:4,color:"grey",fontSize:19,marginTop:20}}>Normal wear and tear</p>
                <div style={{
                    width: 35,
                    height: 4.5,
                    background: "teal",
                    borderRadius:3
                }}></div>
                <p style={{fontSize:14,marginBottom:0,marginTop:4,lineHeight:1.2}}>Cost of excessive wear & tear or consequential damage, caused due to negligent or<br/> inappropriate driving is not covered.</p>
                <div style={{width:"38vw",display:"flex",marginTop:20}}>
                    {
                        item3.map((el, i) => {
                            return <SmallCards key={el.length+1} item={el}/>
                        })
                    }
                </div>
                <div style={{width:"38vw",display:"flex",marginTop:20}}>
                    {
                        item4.map((el, i) => {
                            return <SmallCards key={el.length+1} item={el}/>
                        })
                    }
                </div>
                <Button style={{marginTop:30,marginBottom:30}} color="transparent" variant="contained">
                        <span style={{color:"#1caba2"}}>Know more</span>
                </Button>
            </div>
        </>
    )
}