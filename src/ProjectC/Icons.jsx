import React from "react";
import {IconData} from './Data';


const Icons=(props)=>{
    return(
        <>
        <div className="icon">
        <i className={props.icn}></i>
        </div>
        </>
    )
}

const IconsRepeat=(props)=>{
    return(
        <>
       {
IconData.map(function Sicn(val){
   return( <Icons icn={val.icn}/>)
})
}
        </>
    )
}

export default Icons;
export { IconsRepeat};