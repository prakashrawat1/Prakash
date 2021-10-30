import React from "react";
import { useState } from "react";




const Count = () =>{
const [count,setCount]=useState(0);

const IncNum=()=>{
   setCount(count+1);
}
const DecNum=()=>{
    setCount(count-1);
 }
    return(
        <>
        <div className="count">
        <h1 className="addcount">{count}</h1>
        <button onClick={IncNum}>Increase</button>
        <br />
        <button onClick={DecNum}>Decrease</button>
        </div>
        
        </>
    );
};

const Time = () =>{
    let newTime=new Date().toLocaleTimeString();
    const [current,setTime]=useState(newTime);
    
    const update=()=>{
        newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
        return(
            <>
            <div className="count">
            <h1 className="addcount">{current}</h1>
            <button onClick={update}>Get Time</button>
            </div>
            
            </>
        );
    };

    const RunTime = () =>{
        let newTime=new Date().toLocaleTimeString();
        const [current,setTime]=useState(newTime);
        
        const update=()=>{
            newTime=new Date().toLocaleTimeString();
            setTime(newTime);
        }

        setInterval(update,1000)
            return(
                <>
                <div className="count">
                <h1 className="addcount">{current}</h1>
                <h1 className="addcount">DIGITAL CLOCK</h1>
                
                </div>
                
                </>
            );
        };
export default Count;
export {Time,RunTime};