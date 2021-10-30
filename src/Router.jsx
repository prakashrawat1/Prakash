import React from "react";
import {Route,Switch} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Search from './Search';
const Rout=()=>{
    return(
        <>
<Switch>
    <Route exact path ="/" component={Home}/>
    <Route exact path ="/about" component={About}/>
    <Route exact path ="/contact" component={Contact}/>
    <Route exact path ="/search" component={Search}/>

    {/* <Route path="/about">
      <About/>
    </Route>

    <Route path="/contact">
      <Contact/>
    </Route> */}

</Switch>
        </>
    )
}
 export default Rout;