import React from "react";
import {useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Covid=()=>{

    const[data,setData]=useState([]);

const getCovidData=async()=>{
  const res =  await fetch('https://api.covid19india.org/data.json');
  const actualData=await res.json();
  console.log(actualData);
  setData(actualData.statewise);
}


    useEffect(()=>{
         getCovidData();
    },[]);


    return(
        <>
        <Container>
  <Row>
    <Col> <h1>INDIA COVID-19 DASHBOARD</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>STATE</th>
      <th>CONFIRMED</th>
      <th>RECOVERED</th>
      <th>DEATHS</th>
      <th>ACTIVE</th>
    </tr>
  </thead>
  <tbody>
      {data.map((val,index)=>{
          return(
<tr key={index}>
      <td>{val.state}</td>
      <td>{val.confirmed}</td>
      <td>{val.recovered}</td>
      <td>{val.deaths}</td>
      <td>{val.active}</td>
    </tr>
          )
      })}
    
  </tbody>
</Table></Col>
  </Row>
</Container>
       
        </>
    )
}

export default Covid;