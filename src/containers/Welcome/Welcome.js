import React from 'react'
import {Redirect,Router} from 'react-router-dom'
import WelcomeHeading from './WelcomeHeading'
import WelcomeForm from './WelcomeForm'
class Welcome extends React.Component
{
    state={
        name:null
    }

    userLogin = (event) =>{
        event.preventDefault();
        console.log("form submitted",this.state.name);
        localStorage.setItem("name",this.state.name);
        setTimeout(() => {
            this.props.history.replace("/todo")
        }, 200);
      ;
    }

    nameChangedHandler = (event) =>{
        this.setState({
            name:event.target.value
        })
    }

    render(){
        const loggedInName=localStorage.getItem("name");
        let displayForm=null;
        if(loggedInName ==null)
        displayForm=(  
                   <div style={{width:'30%',margin:'auto',marginTop:'150px'}}>
        <form onSubmit={this.userLogin}>
            <div className="form-group">
                {/* <label for="name" style={{float:'left'}}>Enter your name to get started</label> */}
                <input type="text" className="form-control" placeholder="Enter your name to get started" required onChange={this.nameChangedHandler} />
            </div>
            <button type="submit" className="btn btn-block" style={{color:'white',fontWeight:'bold',backgroundColor:'#ff4e00'}}>Enter</button>
        </form>
      
        </div>
        )
        else
        displayForm = null
        return(
        <div style={{marginTop:'70px'}}>
           <h4 style={{color:'black',fontStyle:'italic'}}>Either you run the day or the days runs you...</h4> 
         <WelcomeHeading />
            {displayForm}
                    

        </div>)
    }
}
export default Welcome;