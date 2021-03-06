import React from 'react'
import AddTodo from '../../components/TodoOperations/AddTodo/AddTodo'
import DisplayTodos from '../../components/TodoOperations/DisplayTodo/DisplayTodo'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import {Redirect} from 'react-router-dom'
import classes from './Todo.css'
class Todo extends React.Component
{
    state={
        todo:{
                name:'',
                description:''
            }
    }

nameChangedHandler = (event) =>{
console.log("[Todo.js]",event.target.value);
var updatedName=event.target.value;
this.setState(prevState => ({
    ...prevState,
    todo: {
        ...prevState.todo,
        name:updatedName
    }
}))
}



descriptionChangedHandler = (event) =>{
    console.log("[Todo.js]",event.target.value);
    const updatedDescription= event.target.value;
this.setState((prevState)=>{
    return{
        ...prevState,
        todo:{
            ...prevState.todo,
            description: updatedDescription
            
        }
    }
})
    }

    showUpdatedState = () =>{
        console.log("[Todo.js] ShowUpdatedState",this.state,"\t",this.state.todo.name, "\t", this.state.todo.description);
    }

    deleteTodo = (name,description) =>{
        console.log("trying to delete todo");
       // event.preventDefault();
        this.props.onDeletingTodo(name,description);
    }

    saveTodo = (event) =>{
        console.log("[Todo.js]","save Todo");
        event.preventDefault();
        this.setState((prevState)=>{
            return{
                ...prevState,
                todo:{
                    ...prevState.todo,
                    name:"",
                    description:""
                }
            }
        })
        this.props.onAddingTodo(
            this.state.todo.name,
            this.state.todo.description
            )
    }

    render(){

        let loggedInName=undefined;
        let redirectIfNotLoggedIn = <Redirect to="/" />
        try{
        loggedInName=localStorage.getItem("name");
        }
        catch(err){}
        
        let dislayUserMessage=null;
        if(loggedInName)
        dislayUserMessage="Hi "+loggedInName

        return(
            <div style={{overflowY:'-moz-hidden-unscrollable'}}>
                {loggedInName == undefined || loggedInName.length == 0 ? redirectIfNotLoggedIn : null}
                <span style={{float:'right',paddingRight:'30px',marginBottom:'30px',fontWeight:'bold',color:'black'}}>{dislayUserMessage}</span>
            <div style={{marginTop:'90px',backgroundColor:'rgba(0,0,0,0.03)'}} className="container">
            
               <h2>My Todos</h2> 
               <AddTodo 
               nameChanged={this.nameChangedHandler} 
               descriptionChanged={this.descriptionChangedHandler}
               saveTodo={this.saveTodo}
              />
               <DisplayTodos  deleteTodo={this.deleteTodo}  />
               
           
            </div>
            </div>
            )
        }
}
const mapDispatchToProps = dispatch =>{
    
    return{
        onAddingTodo:(name,description)=>{
            console.log("trying to save todo",name,description);
            dispatch({type:actionTypes.ADD_TODO,name:name,description:description})
        },
        onDeletingTodo:(name,description)=>{
            console.log("will delete todo with name",name," and description ",description);
             dispatch({type:actionTypes.DELETE_TODO,name:name,description:description})
        }
    }
}

export default connect(null,mapDispatchToProps)(Todo);