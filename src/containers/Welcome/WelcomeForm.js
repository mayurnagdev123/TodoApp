import WelcomeHeading from "./WelcomeHeading"

import React from 'react'
const WelcomeForm = (props) =>{
const loggedInName=localStorage.getItem("name");
loggedInName ? console.log("yes") : console.log("no");
var displayForm=(
    <div style={{width:'30%',margin:'auto',marginTop:'150px'}}>
    <form onSubmit={this.userLogin}>
        <div className="form-group">
            {/* <label for="name" style={{float:'left'}}>Enter your name to get started</label> */}
            <input type="text" className="form-control" placeholder="Enter your name to get started" required onChange={this.nameChangedHandler} />
        </div>
        <button type="submit" className="btn btn-block" style={{color:'white',fontWeight:'bold',backgroundColor:'#ff4e00'}}>Enter</button>
    </form>
  
    </div>
);
return(
    <div>
    {loggedInName ? null : displayForm}
    </div>
)




    

}
export default WelcomeForm