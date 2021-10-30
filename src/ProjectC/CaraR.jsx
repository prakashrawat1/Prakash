import React from "react";
import Cara from './Cara';
import Data from './Data'

const CaraR=()=>{
    return(
        <>
        
        {Data.map(function show (val){
    return(<Cara img={val.img} alt={val.alt} heading={val.heading} para={val.para}/>)
})
}
        </>
    )
}

export default CaraR;