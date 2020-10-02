import { act } from 'react-dom/test-utils';
import * as actionTypes from './actions';

const initialState = {
    tasks:[]
  };
  
  const reducer = (state = initialState, action) => {
     switch(action.type) {
        case actionTypes.ADD_TASK :
         
          var i=0;
          let newTask = { 
                 id: action.taskInfo.id,
                 taskName: action.taskInfo.taskName,
                 taskPriority: action.taskInfo.taskPriority,
          }
          if(newTask.taskName!=='' && newTask.taskPriority !=='' && newTask.taskPriority !=='priority'){
          return {
              ...state,
              tasks:state.tasks.concat(newTask)
              
          }
        }

        case actionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
              };

             

     }



    return state;
  };
  
  export default reducer;
  