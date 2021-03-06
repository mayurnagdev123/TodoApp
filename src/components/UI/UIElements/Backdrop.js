import React from 'react'
import classes from './Backdrop.css'
const backdrop = (props) =>{
return(
    props.isVisible ? <div className={classes.Backdrop} onClick={() => {
        return props.hideModalandBackdrop()
    }}></div> : null
)

}
export default backdrop;