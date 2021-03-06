import classes from './Toolbar.css'
import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = () =>{

    return(
        <div className={classes.Toolbar} style={{zIndex:'10'}}>
<NavigationItems />
        </div>
    )
}
export default toolbar;