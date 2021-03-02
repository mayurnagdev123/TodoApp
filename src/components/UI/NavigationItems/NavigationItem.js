import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './NavigationItem.css'
const navigationItem = (props) =>{
    return(
<div style={{ marginTop:'12px'}}>
<NavLink to={props.path} activeClassName={classes.active} exact={props.exact} >
   <span style={{fontSize:'19px'}}>{props.children}</span>
     </NavLink>
     </div>
    )
}
export default navigationItem;