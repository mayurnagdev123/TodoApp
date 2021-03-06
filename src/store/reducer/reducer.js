
import * as actionTypes from '../actions/actionTypes'
const initialState={
    allTodos:[],
    counter: 0
}
const reducer= (state=[],action) =>{
   switch(action.type)
   {
       case actionTypes.ADD_TODO:
           const todo={name:action.name, description:action.description,isComplete:false};
           const currentTodos= [...state.allTodos]
           console.log("[Reducer.js]","currentTodos",currentTodos, currentTodos.length);
           currentTodos.push(todo);
           console.log("[Reducer.js]","updatedTodos",currentTodos, currentTodos.length);
           return{
               ...state,
               allTodos: currentTodos,
               counter:state.counter+1
           }

        case actionTypes.DELETE_TODO:
         
            var index=0;
            var copyArray=[...state.allTodos]
            for(var i=0;i<state.allTodos.length;i++)
            {
                var todo=state.allTodos[i];
                if(todo.name.localeCompare(action.name)==0 && todo.description.localeCompare(action.description)==0)
                {
                    copyArray.splice(i,1);
                    break;
                }

            }
           
            return {
                ...state,
                allTodos:copyArray,
                counter:state.counter-1
            }

            case actionTypes.COMPLETE_TODO:
                var index=0;
                var copyArray=[...state.allTodos]
                for(var i=0;i<state.allTodos.length;i++)
                {
                    var todo=state.allTodos[i];
                    if(todo.name.localeCompare(action.name)==0 && todo.description.localeCompare(action.description)==0)
                    {
                        copyArray[i].isComplete = !copyArray[i].isComplete;
                        break;
                    }

                }
                return {
                    ...state,
                    allTodos:copyArray
                  
                }

                case actionTypes.LOGOUT_USER :
                    localStorage.clear();
                    return{
                        ...state,
                        allTodos:[],
                        counter:0
                    }


           default:
               return state;
   }


   
}
export default reducer;