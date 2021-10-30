import React from "react";
import { useState } from "react";

const Change=()=>{
    const bg="#1E1E1E";
    const[color,setColor]=useState(bg);
    const[name,setName]=useState("Snowman.. ⛄");

    const bgColor=()=>{
        setColor('#007ACC');
        setName('Snail.. 🐌');
    }
    const bgColor1=()=>{
        setColor('#F2F2F2');
        setName('Snake.. 🐍');
    }
    const bgColor2=()=>{
        setColor('#FCD400');
        setName('Softball.. 🥎');
    }
    const bgColor3=()=>{
        setColor('#FF0000');
        setName('Sphageeti.. 🍝');
    }
    
    return(
        <>
        <div className="count" style={{backgroundColor:color}}>
        <button onClick={bgColor} onDoubleClick={bgColor1} onMouseOver={bgColor2} onMouseLeave={bgColor3}>{name}</button>
        </div>
        
        </>
    )
}

export default Change;