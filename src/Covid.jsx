import React from "react";
import {useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Covid=()=>{

    const[data,setData]=useState([]);

const getCovidData=async()=>{


try{
  const res =  await fetch('https://data.covid19india.org/data.json');
  const actualData=await res.json();
  console.log(actualData.statewise[0])
  setData(actualData.statewise[0]);
}catch(err){
console.log(err);
}


  
  // 
  // console.log(actualData);
  // setData(actualData.statewise);
}


    useEffect(()=>{
         getCovidData();
    },[]);


    return(
        <>
        <Container>
  <Row>
    <Col>
    
    <section>

      <div className="corona_head">
      <h1>
        🔴LIVE
      </h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      </div>
      <Row>
      <Col xs={4}>
      <ul>
        <li className="card country">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>COUNTRY
              </p>
              <p className="card_total card_small">INDIA</p>
            </div>
          </div>
        </li>
        </ul>
      </Col>
      
      <Col xs={4}>
        <ul>
        <li className="card recover">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>RECOVERD
              </p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>
        </li>
        </ul>
      </Col>
        
      <Col xs={4}>
        <ul>
        <li className="card confirmed">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>CONFIRMED
              </p>
              <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>
        </li>
        </ul>
      </Col>
      </Row>

      <Row>
      <Col xs={4}>
        <ul>
        <li className="card death">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>DEATHS
              </p>
              <p className="card_total card_small">{data.deltadeaths}</p>
            </div>
          </div>
        </li>
        </ul>
      </Col>
        
<Col xs={4}>
  <ul>
  <li className="card active">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>ACTIVE
              </p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>
        </li>
  </ul>
</Col>
        

<Col xs={4}>
  <ul>
  <li className="card update">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>UPDATED
              </p>
              <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
  </ul>
</Col>
</Row>
    </section>
    
    </Col>
  </Row>
</Container>
       
        </>
    )
}

export default Covid;