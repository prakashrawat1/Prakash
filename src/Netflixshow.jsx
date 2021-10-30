import React from 'react';

import './index.css';
// import Header from './App';
// import Card  from './cards';
// import Footer from './footer'
// import Nav from './nav';
// import Cara from './cara';
// import Day from './Day';
import Movie from './Netflix';
import data from './netflixdata';
const Show = () =>{
return(


<>
  <h1 className="heading">List Of Top 5 Netflix Series In 2020</h1>

{/* <Movie imgsrc={data[0].imgsrc} sname={data[0].sname} title={data[0].title} link={data[0].link}/>
<Movie imgsrc={data[1].imgsrc} sname={data[1].sname} title={data[1].title} link={data[1].link}/>
<Movie imgsrc={data[2].imgsrc} sname={data[2].sname} title={data[2].title} link={data[2].link}/>
<Movie imgsrc={data[3].imgsrc} sname={data[3].sname} title={data[3].title} link={data[3].link}/>
<Movie imgsrc={data[4].imgsrc} sname={data[4].sname} title={data[4].title} link={data[4].link}/> */}
{data.map(function ncard(val){
  return(<Movie key={val.id} imgsrc={val.imgsrc} sname={val.sname} title={val.title} link={val.link}/>)
 
})
}
  </>


);

}

export default Show;