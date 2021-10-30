import React from "react";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button'
const Card0 = () =>{

    return (

<>
<div className="container-fluid">
    <div className="row">
        <div className="col-sm-4 col-md-4">
        <div className="card" >
  <div className="card-body">
  <img src={image1} alt="" srcset="" />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://getbootstrap.com/docs/5.1/components/card/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>

        <div className="col-sm-4 col-md-4">
        <div className="card" >
  <div className="card-body">
  <img src={image2} alt="" srcset="" />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://getbootstrap.com/docs/5.1/components/card/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>


        <div className="col-sm-4 col-md-4">
        <div className="card" >
  <div className="card-body">
  <img src={image1} alt="" srcset="" />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://getbootstrap.com/docs/5.1/components/card/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
    </div>   
{/* first row end */}


<div className="row">
        <div className="col-sm-4 col-md-4">
        <div className="card" >
  <div className="card-body">
  <img src={image2} alt="" srcset="" />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://getbootstrap.com/docs/5.1/components/card/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
        <div className="col-sm-4 col-md-4">
        <div className="card" >
  <div className="card-body">
  <img src={image1} alt="" srcset="" />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://getbootstrap.com/docs/5.1/components/card/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>


        <div className="col-sm-4 col-md-4">
        <div className="card" >
  <div className="card-body">
  <img src={image2} alt="" srcset="" />
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://getbootstrap.com/docs/5.1/components/card/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
    </div>

    {/* second row end */}

    
    
</div>
</>
// style="width: 18rem;"
    );
};




const Card1 =()=>{
  return(
    <>
    <Container>
 
  <Row>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1 } />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
    </>
  )
}
export default Card0;
export {Card1};