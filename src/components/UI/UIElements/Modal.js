import React from 'react'
import classes from './Modal.css'
import Backdrop from './Backdrop'
import Spinner from './Spinner'
const modal = (props) =>{

    console.log("Modal.js","showSpinner is ", props.showSpinner)
const showSpinner = <div style={{height:'100%',marginTop:'-25px'}}><Spinner /></div>;

const modalBody = (<div><div className="row" style={{height:'120px',padding:'5px'}} >
    <div className="col-xs-12" style={{color:'black'}}>
        <p style={{color:'#ff4e00'}}><span style={{color:'black'}}>Hi </span>{props.userName}<br /><span style={{color:'black'}}>{props.text}</span></p>
        </div>
    </div>
    <div className="row" style={{height:'60px',padding:'5px'}}>
    <div className="col-xs-6">
        <button onClick={() => {
            return props.hideModalandBackdrop()
        }} className="btn btn-sm btn-block" style={{backgroundColor:'#ff4e00',color:'white',fontWeight:'bold'}}>
        CANCEL</button>
        </div>
   <div className="col-xs-6">
       <button onClick={() => {
           return props.logout()
       }} className="btn btn-sm btn-block" style={{backgroundColor:'black',color:'white',fontWeight:'bold'}}>
       YES</button></div>
    </div></div>);



    return(
        <div style={{margin:'auto'}}>
            <Backdrop isVisible={props.isVisible} hideModalandBackdrop={props.hideModalandBackdrop}/>

                    <div className={classes.Modal}
            style={{
                transform : props.isVisible ? 'translateY(0)' : 'translateY(-10vh)' ,
                    opacity: props.isVisible ? '1' : '0' ,
                    display: props.isVisible ? 'block' : 'none' 

              
            }}
            >
                {props.showSpinner ? showSpinner: modalBody}

        </div>
       </div>
    
    )

}
export default modal