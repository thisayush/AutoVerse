import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export const ProductBox = ({el,handleClick}) => {
    return (
        <>
            <Grid item xs={2} >
                <div>
                <Paper  onClick={()=>handleClick(el)} className={el.class}> 
                        <span>{el.img !== null ? <img style={{marginLeft: "-20px"}}alt="icon" src={el.img} />:null}</span>
                        <span style={el.img !== null?{ fontWeight: "bold", marginLeft: 15 }:{fontWeight: "bold"}}>{el.message}</span><br />
                        {el.id===1?<span>Month</span>:<span>Months</span>}
                    </Paper>
                </div>
            </Grid> 
        </>
    )
}