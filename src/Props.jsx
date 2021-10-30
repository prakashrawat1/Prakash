import React from "react";


const Props=(props)=>{
    return(
        <>
        <div className="cards">
<div className="card">
    <img src={props.img} alt="mypic"  className="card_img" />
<div className="card_info">
    <span className="card_category">{props.title}</span>  
    <h3 className="card_title">{props.desc}</h3>
    <a href="jdsc" target="_blank" rel="noreferrer">
    <button>{props.button}</button>
    </a>
</div>
</div>
</div>
        </>
    );
};

export default Props;