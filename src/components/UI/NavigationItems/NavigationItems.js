import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem'

const navigationItems = (props) =>{

    return(
<div className="row" >
<div className="col-xs-4">
<NavigationItem path="/" exact >Welcome</NavigationItem>
</div>
<div className="col-xs-4">
<NavigationItem path="/todo" exact>My Todos</NavigationItem>
</div>
<div className="col-xs-4">
<NavigationItem path="/logout" exact>Logout</NavigationItem>
</div>
</div>
    )
}
export default navigationItems;