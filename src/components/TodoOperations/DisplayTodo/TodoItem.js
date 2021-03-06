import React , {Component} from 'react'
import classes from './TodoItem.css'


class todoItem extends Component{

   render(){
       console.log("[TodoItem]","render called");
           const toggleCompletion = (id)=>{
                console.log("striking ",id);
            //    var nameElement=document.getElementById("name"+id);
            //    var descriptionElement=document.getElementById("description"+id);
            //    var completeButtonElement=document.getElementById("complete"+id);
            //    var doneIconElement=document.getElementById("check"+id);
            //    console.log("classes initially=",doneIconElement.classList[0]);
            //    if(doneIconElement.classList[0].includes("check"))//element has a tick icon
            //    {
            //     doneIconElement.classList.remove(classes.check);
            //     doneIconElement.classList.add(classes.redo);
            //     completeButtonElement.classList.remove("btn-primary");
            //     completeButtonElement.classList.add(classes.btnGreen);
            //     nameElement.classList.add(classes.strikethrough);
            //     descriptionElement.classList.add(classes.strikethrough);
                
            //    }
            //    else if(doneIconElement.classList[0].includes("redo")) // element has a cross
            //     {
            //         doneIconElement.classList.remove(classes.redo);
            //         doneIconElement.classList.add(classes.check);  
            //         nameElement.classList.remove(classes.strikethrough);
            //         completeButtonElement.classList.remove(classes.btnGreen);
            //         completeButtonElement.classList.add(classes.btnBlue);
            //         descriptionElement.classList.remove(classes.strikethrough); 
            //     }
                this.props.onCompletingTodo(this.props.name,this.props.description,!this.props.isComplete);
              
            }
           const nameId="name"+this.props.id;
           const descriptionId="description"+this.props.id;
           const completeBtnId="complete"+this.props.id;
           const deleteBtnId="delete"+this.props.id;
           const completeIconId="check"+this.props.id;
           const deleteIconId="times"+this.props.id;
           let nameClasses=[classes.nameStyle];
           let descriptionClasses=[classes.descriptionStyle];
           let buttonClasses=["btn","btn-block"]
           if(this.props.isComplete)
           {
           nameClasses.push(classes.strikethrough);
           descriptionClasses.push(classes.strikethrough); 
           buttonClasses.push(classes.btnGreen)
        }
        else{
        buttonClasses.push("btn-primary")
        }
        
    return(
        <div className="container" style={{padding:'20px'}}>
        <div className="row">
            <div className="col-sm-8"  style={{backgroundColor:'rgba(0,0,0,0.03)'}}>
                <p id={nameId} className={nameClasses.join(" ")} >{this.props.name}</p>
                <p id={descriptionId} className={descriptionClasses.join(" ")}>{this.props.description}</p>
            </div>
            <div className="col-sm-1">
                <button id={completeBtnId} onClick={() => {
                    return toggleCompletion(this.props.id)

                }} className={buttonClasses.join(" ")} style={{fontWeight:'bold',height:'100%',color:'white !important'}}><span id={completeIconId} className={this.props.isComplete ? classes.redo : classes.check}></span></button>
            </div>
            <div className="col-sm-1">
            <button id={deleteBtnId} onClick={()=>{
                return this.props.deleteTodo(
                    document.getElementById(nameId).innerText,
                    document.getElementById(descriptionId).innerText
                )
            }} className="btn btn-block btn-danger" style={{fontWeight:'bold'}}><span id={deleteIconId} className={classes.times}></span></button>
            </div>
        </div>
        </div>
    )
}
}

export default todoItem;