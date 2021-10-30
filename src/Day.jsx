import React from "react";

const Day = () =>{

    let currDate= new Date(2020,5,2,20);
    currDate=currDate.getHours();

    let greeting = "";
    const cssStyles ={};

    if(currDate>1 && currDate<12){
        greeting="Good Morning";
        cssStyles.color="green";
    }else if(currDate>=12 && currDate<20){
        greeting="Good Afternoon";
        cssStyles.color="orange";
    }else if(currDate>=20 && currDate<24){
        greeting="Good Night";
        cssStyles.color="black";
    }
    
    return(
        <>
<div>
    <h1>HEllo Sir, <span style={cssStyles}>{greeting}</span></h1>
</div>
        </>
    );
}

export default Day;