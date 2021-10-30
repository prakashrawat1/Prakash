import React from "react";

const Sresult=(props)=>{
    const image=`https://source.unsplash.com/1600x900/?${props.name}`;
    return(
    <>
    <div className="search_img">
        <img src={image} alt="search" srcset="" />
    </div>
    </>
    )
}

export default Sresult;

