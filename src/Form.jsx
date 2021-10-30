import React from "react";




const Form=()=>{
let s; 
let u;
let p;
    function select(event){
//  s = event.target.value;
 s = event.target.value;
 
    }

    
    function user(event){
        u = event.target.value;;
       
    }

    function pass(event){
        p = event.target.value;;
        
    }

    function clear(){
        
        if(s==="Maruti Suzuki"){
if(u==="maruti@gmail.com" && p==="maruti12343"){
alert("welcome to maruti shoroom");
}
        }
        else if(s==="Hyundai Motors"){
            if(u==="hyundai@gmail.com" && p==="hyundai12343"){
                alert("welcome to hyundai shoroom");
                }
                    }
                    else if(s==="Toyota"){
                        if(u==="toyota@gmail.com" && p==="toyota12343"){
                            alert("welcome to Toyota shoroom");
                            }
                                }
                                            else if(s==="Kia Motor"){
                                                if(u==="Kia@gmail.com" && p==="Kia12343"){
                                                    alert("welcome to Kia shoroom");
                                                    }
                                                        }
    }
    

    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading">
                            <h1>Automobiles Company 😄</h1>
                        </div>
                    </div>
                </div> {/* first row end */}
                
                <div className="row">
<div className="col-md-12">
<form action="/action_page.php">
 
  <select as="select" onChange={select} name="cars" id="cars">
  <option>____Select Cars_____</option>
    <option >Maruti Suzuki</option>
    <option >Hyundai Motors</option>
    <option >Toyota </option>
    <option >Kia Motor</option>
  </select>
  <br/><br/>
  <div className="info">
  <i className="fas fa-user"></i><input type="text" onChange={user} className="user" name="user" id="user" placeholder="Username" />
  <br/><br/>
  <i className="fas fa-key"></i><input type="password" onChange={pass} className="psw" name="psw" id="psw" placeholder="Password" />
  <br/><br/>
  <input type="submit" value="Submit" onClick={clear}/>
  </div>
</form>
</div>
                </div>{/* second row end */}
            </div>
            {/* container end */}
        </section>
        </>
    )
 }

export default Form;