import React, {useState}from "react";
import Sresult from './SearchResult';

const Search=()=>{

    const [img,setImg] = useState("");
    const inputEvent=(event)=>{
        setImg(event.target.value);
    }
return(
    <>
    <div className="search_bar">
    <input type="text" placeholder="search anything" 
    value={img}
    onChange={inputEvent}/>
    {img === ""? null : <Sresult name={img}/> }
    
    </div>

    
    </>
    
)
}

export default Search;