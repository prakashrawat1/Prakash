import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
const Footer = (props) =>{


    return(
<>

<Container fluid className="footer">
    <Row>
        <Col md="2">
        <img src="" alt="" />
        </Col>
        <Col md="5">
        <h1>{props.heading}</h1>
        <p>{props.name}</p>
        <p><i className={props.icn}></i>{props.address}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        </Col>
        <Col md="5">
        <h1>{props.DogHeading}</h1>
        <p>{props.service1}</p>
        <p>{props.service2}</p>
        <p>{props.service3}</p>
        <p>{props.service4}</p>
        <p>{props.service5}</p>
        <p>{props.service6}</p>
        <p>{props.service7}</p>
        
        </Col>
    </Row>
</Container>
</>
    );
};

export default Footer;