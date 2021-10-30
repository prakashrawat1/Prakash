import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Data from './Data';

const Cara = (props) =>{

  return (
     <>
     <Carousel>
{Data.map(function showC(val){
    return (
        <Carousel.Item>
            <img src={val.img} className="d-block w-100" alt={val.alt}/>
            <Carousel.Caption>
      <h3>{val.heading}</h3>
      <p>{val.para}</p>
    </Carousel.Caption>
        </Carousel.Item>
    )
})}

     </Carousel>
     
     </>
  );
};
export default Cara;
