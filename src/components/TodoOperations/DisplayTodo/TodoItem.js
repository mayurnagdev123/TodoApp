import React , {Component} from 'react'
import classes from './TodoItem.css'


class todoItem extends Component{

   render(){
       console.log("[TodoItem]","render called");
   const myStyle={ 
        color:'#ff4e00',
        fontSize:'18px'
          }  
           const toggleCompletion = (id)=>{
                console.log("striking ",id);
               var nameElement=document.getElementById("name"+id);
               var descriptionElement=document.getElementById("description"+id);
               var completeButtonElement=document.getElementById("complete"+id);
               nameElement.classList.add(classes.strikethrough);
               descriptionElement.classList.add(classes.strikethrough);
               var doneIconElement=document.getElementById("check"+id);
               console.log("classes initially=",doneIconElement.classList[0]);
               if(doneIconElement.classList[0].includes("check"))//element has a tick icon
               {
                doneIconElement.classList.remove(classes.check);
                doneIconElement.classList.add(classes.redo);
                completeButtonElement.classList.remove("btn-primary");
                completeButtonElement.classList.add(classes.btnGreen);
                nameElement.classList.add(classes.strikethrough);
                descriptionElement.classList.add(classes.strikethrough);
               }
               else if(doneIconElement.classList[0].includes("redo")) // element has a cross
                {
                    doneIconElement.classList.remove(classes.redo);
                    doneIconElement.classList.add(classes.check);  
                    nameElement.classList.remove(classes.strikethrough);
                    completeButtonElement.classList.remove(classes.btnGreen);
                    completeButtonElement.classList.add(classes.btnBlue);
                    descriptionElement.classList.remove(classes.strikethrough); 
                }

              
            }
           const nameId="name"+this.props.id;
           const descriptionId="description"+this.props.id;
           const completeBtnId="complete"+this.props.id;
           const deleteBtnId="delete"+this.props.id;
           const completeIconId="check"+this.props.id;
           const deleteIconId="times"+this.props.id;
    return(
        <div className="container" style={{padding:'20px'}}>
        <div className="row">
            <div className="col-sm-8"  style={{backgroundColor:'rgb(0,0,0,0.03)'}}>
                <p id={nameId} style={myStyle} >{this.props.name}</p>
                <p id={descriptionId} style={{fontSize:'14px',fontStyle:'italic'}}>{this.props.description}</p>
            </div>
            <div className="col-sm-1">
                <button id={completeBtnId} onClick={() => {
                    return toggleCompletion(this.props.id)
                }} className="btn btn-block btn-primary" style={{fontWeight:'bold',height:'100%',color:'white !important'}}><span id={completeIconId} className={classes.check}></span></button>
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