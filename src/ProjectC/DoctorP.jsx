import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DoctorP=(props)=>{
    return(
        <>
        <Container className="doctor">
            <Row>
                <Col>
                <h1>{props.heading}</h1>
                <hr />
                <p>{props.para}</p>

                </Col>

                <Col>
               
                <img src={props.img} alt="" />
                
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default DoctorP;