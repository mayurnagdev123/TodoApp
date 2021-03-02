import classes from './Toolbar.css'
import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = () =>{

    return(
        <div className={classes.Toolbar}>
<NavigationItems />
        </div>
    )
}
export default toolbar;