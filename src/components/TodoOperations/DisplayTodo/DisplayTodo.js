import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'
import * as actionTypes from  '../../../store/actions/actionTypes'
const displayTodo= (props) =>{

    // const onCompletingTodo = (props) =>{
    //     console.log("onCompletingTodo",props);
    // }
    let todosToDisplay=[];
    console.log("type="+typeof(todosToDisplay));
    console.log("[DisplayTodo.js]",props.todos);
    for(let i in props.todos)
    {
        console.log("DisplayTodos",i);
        todosToDisplay.push(<TodoItem key={i} id={i} name={props.todos[i].name}
             description={props.todos[i].description}
             onCompletingTodo={props.onCompletingTodo}
             deleteTodo={props.deleteTodo} />);
    }
return(
    <div>
{todosToDisplay}
</div>
)

}

const mapStateToProps = state =>{
    console.log("mapStateToProps",state);
    return{
todos : state.allTodos
}
}
const mapDispatchToProps = dispatch =>{
    return{
        onCompletingTodo : (id) =>{
            console.log("id",id);
            dispatch({type:actionTypes.COMPLETE_TODO, id: id})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(displayTodo);