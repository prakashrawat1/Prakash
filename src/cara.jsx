import React from "react";
import caraimg from "./images/2.jpg";
import Carousel from 'react-bootstrap/Carousel';
const Cara = () =>{

    return (
        <>
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className=" pic carousel-item active">
      <img src={caraimg} className="w-100" alt="..."/>
    </div>
    <div className=" pic carousel-item">
      <img src={caraimg} className=" w-100" alt="..."/>
    </div>
    <div className=" pic carousel-item">
      <img src={caraimg} className=" w-100" alt="..."/>
    </div>
  </div>
</div>
        
        </>
    );
};

const Rcara = () =>{

  return (
      <>
      <div className="cara">    
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={caraimg}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Hello my name is prakash rawat.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={caraimg}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={caraimg}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
      </>
  );
};
export default Cara;
export {Rcara} ;