import React from 'react'
import Modal from '../../components/UI/UIElements/Modal'
import Backdrop from '../../components/UI/UIElements/Backdrop'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import {Redirect} from 'react-router-dom'
import Spinner from '../../components/UI/UIElements/Spinner'
class Logout extends React.Component
{
state={
    showModalandBackdrop: true,
    showSpinner:false
}
showModalandBackdrop= () =>{
this.setState({
    showModalandBackdrop : true
})
}
hideModalandBackdrop = ()=>{
    this.setState({
        showModalandBackdrop : false
    })
}

logUserOut = () =>{
  console.log("logout clicked")
   
    this.setState({
        showSpinner : true
    },()=>{console.log("spinner state updated!")})
    setTimeout(()=>{
        this.props.onLoggingOut();
        this.props.history.replace("/");
    },1100)
 
 

}

    render(){

        let loggedInName=undefined;
        let redirectIfNotLoggedIn = <Redirect to="/" />
        try{
        loggedInName=localStorage.getItem('name');
        }
        catch(err)
        {}

        const text="Are you sure you want to  log out?";
        return(
            <div style={{color:'#e68a00',marginTop:'80px'}}>
                {loggedInName == undefined || loggedInName.length ==0 ? redirectIfNotLoggedIn : null}
              
             <Modal showSpinner={this.state.showSpinner} isVisible={this.state.showModalandBackdrop} hideModalandBackdrop={this.hideModalandBackdrop} text={text} userName={loggedInName} logout={this.logUserOut}/>
         
               <button onClick={this.showModalandBackdrop} className="btn btn-lg" style={{backgroundColor:'black',color:'white',marginTop:'90px'}}>LOGOUT</button>
        
            </div>)
        }
    }

    const mapDispatchToProps = dispatch =>{
        return{
            onLoggingOut:()=>{
                console.log("trying to log user out");
                dispatch({type:actionTypes.LOGOUT_USER})
               

            }
        }
    }

export default connect(null,mapDispatchToProps)(Logout);