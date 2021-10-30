import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';

const Achievment=(props)=>{
    return(
        <>
        <Container className="achieve">
            <Row>
                <Col>
                <div className="head">
                <h1>{props.heading}</h1>
                 <hr />
                </div>
<Row className="head1">
    <Col>
<Row>
    
    <Col>
    <div className="award">
        <div className="pic">
        <img src={props.img} alt="" /> 
        </div>
    
    <div className="award1">
    <h5>{props.award}</h5>
    <p>{props.para}</p>
    <a href="#k">{props.link}</a>
    </div>
    </div>
    

    <div className="award">
        <div className="pic">
        <img src={props.img} alt="" /> 
        </div>
    
    <div className="award1">
    <h5>{props.award}</h5>
    <p>{props.para}</p>
    <a href="#k">{props.link}</a>
    </div>
    </div>
    
    </Col>
</Row>

    </Col>

    <Col>
    <Row>
    
    <Col>
    <div className="award">
        <div className="pic">
        <img src={props.img} alt="" /> 
        </div>
    
    <div className="award1">
    <h5>{props.award}</h5>
    <p>{props.para}</p>
    <a href="#k">{props.link}</a>
    </div>
    </div>
    

    <div className="award">
        <div className="pic">
        <img src={props.img} alt="" /> 
        </div>
    
    <div className="award1">
    <h5>{props.award}</h5>
    <p>{props.para}</p>
    <a href="#k">{props.link}</a>
    </div>
    </div>
    
    </Col>
</Row>

    </Col>
</Row>
        

                </Col>

                
            </Row>
        </Container>
        </>
    )
}

export default Achievment;