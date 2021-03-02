import React from 'react'

const WelcomeHeading= (props) =>{
    const loggedInName=localStorage.getItem("name");
   let displayHeading =null;
   if(loggedInName == null)
   displayHeading=(<h2 style={{color:'black',fontWeight:'bold',marginTop:'150px'}}>Welcome to the World of Productivity </h2> );
   else
   displayHeading=(<h2 style={{color:'black',fontWeight:'bold',marginTop:'150px'}}>You are logged in as <span style={{color:'#ff4e00',fontStyle:'italic'}}>{loggedInName}</span> </h2> )
    return(
        <div>
          {displayHeading}    
        </div>
    )
}
export default WelcomeHeading;