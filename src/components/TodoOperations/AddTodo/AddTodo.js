import React from 'react'
import './AddTodo.css'

const addTodo = (props) =>{
const clearContents = () =>{
    console.log("-----------------hi");
   var inputs = document.querySelectorAll("input");
   inputs[0].value="";
   inputs[1].value="";
}




    return(
    <div className="container" style={{padding:'20px',overflowY:'-moz-hidden-unscrollable'}}>
        <form onSubmit={props.saveTodo} >
<div className="row">
    <div className="col-sm-4">
        <input type="text" className="form-control" style={{outlineColor:'#ff4e00'}}
         placeholder="I want to..." onChange={props.nameChanged} />
    </div>
    <div className="col-sm-4">
        <input type="text" className="form-control" placeholder="details of this task"
        onChange={props.descriptionChanged} />
    </div>
    <div className="col-sm-2">
        <button onClick={clearContents} type="submit" className="btn btn-block" style={{backgroundColor:'black',color:'white',fontWeight:'bold'}} 
        >Add</button>
    </div>
 
</div>
</form>
</div>
    )
}
export default addTodo;