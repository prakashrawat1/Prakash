import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { CardsRepeat } from "./ClinicCards";
import ClinicCards from "./ClinicCards";
import { ClinicData } from "./Data";
import {Cards2Repeat} from './Card2';


const OurClinic=(props)=>{
    return(
        <>
        <Container fluid className="clinic">
        <Row>
    <Col sm={7}>
    <h1>{props.heading}</h1>
    <hr/>
    <p className="clinicpara">{props.para}</p>
    <Row>
    <Col><ClinicCards img={ClinicData[0].img} button={ClinicData[0].button} para={ClinicData[0].para} link={ClinicData[0].link}/></Col> 
     <Col><ClinicCards img={ClinicData[1].img} button={ClinicData[1].button} para={ClinicData[1].para} link={ClinicData[1].link}/></Col>
    <Col><ClinicCards img={ClinicData[2].img} button={ClinicData[2].button} para={ClinicData[2].para} link={ClinicData[2].link}/></Col>
    
  </Row>
    </Col>
    <Cards2Repeat/>
  </Row>
  
</Container>
        </>
    )
}

const ClinicRepeat=(props)=>{
    return(
        <>
        {OurClinic.map(function Clinic(val){
            return(<OurClinic heading={val.heading} para={val.para} img={val.img}/>)
        })}
        </>
    )
}

export default OurClinic;
export {ClinicRepeat};