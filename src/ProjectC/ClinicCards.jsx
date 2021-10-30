import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { ClinicData } from "./Data";
const ClinicCards=(props)=>{
    return(
        <>
        <Card className="card1" >
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

// const CardsRepeat=()=>{
//     return(
//         <>
//         {
//     ClinicData.map(function Clinic(val,index){
//         return(<ClinicCards img={val.img} button={val.button} para={val.para} link={val.link}/>)
//     })
//  }
//         </>
//     )
// }



export default ClinicCards;
// export {CardsRepeat};