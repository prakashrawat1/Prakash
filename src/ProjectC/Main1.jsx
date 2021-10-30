import React from 'react';
import Nav1 from './Nav1';
import Cara from './Cara';
import { IconsRepeat } from './Icons';
// import { CardsRepeat } from './ClinicCards';
import OurClinic from './OurClinic';
import{OurClinicData}  from './Data';
import DoctorP from './DoctorP';
import { Doctor } from "./Data";
import {achievment} from './Data';
import Achievment from './Achievment';
import Location from './Location';
import Footer from './Footer';
import { footerData } from './Data';



const Main = () =>{
return(

<>

<Nav1/>
<Cara/>
<IconsRepeat/>
<OurClinic heading={OurClinicData[0].heading} para={OurClinicData[0].para}/>
<DoctorP heading={Doctor[0].heading} para={Doctor[0].para} img={Doctor[0].img}/>
<Achievment heading={achievment[0].heading} award={achievment[0].award} bestp={achievment[0].bestp} bestd={achievment[0].bestd} para={achievment[0].para} link={achievment[0].link} img={achievment[0].img} />
<Location/>
{footerData.map(function foot(val,index){
    return(<Footer heading={val.heading}  DogHeading={val.DogHeading}  name={val.name} phone={val.phone} address={val.address} email={val.email} service1={val.service1} service2={val.service2} service3={val.service3} service4={val.service4} service5={val.service5} service6={val.service6} service7={val.service7}/>)
})}

</>

);

};

export default Main;