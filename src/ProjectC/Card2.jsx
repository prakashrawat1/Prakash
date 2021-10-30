import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ClinicData } from "./Data";
import Col from 'react-bootstrap/Col';
const ClinicCards2=(props)=>{
    return(
        <>
        <Card className="cliniccard1" >
  <Card.Img className="cardimg" variant="top" src={props.img} />
  <Card.Body>
  <Button variant="primary">{props.button}</Button>
    <Card.Text>
      {props.para}
    </Card.Text>
    <Card.Link href="#">{props.link}</Card.Link>
  </Card.Body>
</Card>
        </>
    )
}

const Cards2Repeat=()=>{
    return(
        <>
   
       <Col sm={4} className="cliniccard">
       <ClinicCards2 img={ClinicData[1].img} button={ClinicData[1].button} para={ClinicData[1].para} link={ClinicData[1].link}/>
    </Col>
 
        </>
    )
}



export default ClinicCards2;
export {Cards2Repeat};