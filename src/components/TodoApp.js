import React , {Component} from 'react';
import classes from './TodoApp.module.css';
import { Icon } from 'react-icons-kit';
import { pen } from 'react-icons-kit/icomoon/pen';
import ReactDOM from 'react-dom';
import { Divider } from '@material-ui/core';

import List from './List';
import { connect } from "react-redux";

 class TodoApp extends Component{

state = {
  taskName:'',
  taskPriority:'',
  id:1,
  tasks :[]
}
/*

removeTodo = (id) => {
    const remainder = this.state.tasks.filter(item => item.id !== id);
    this.setState({tasks: remainder});
 }

addTaskHandler = () => {
     
 if(this.state.taskName !==''){ 
     if(this.state.taskPriority !== '' && this.state.taskPriority !== 'priority'){
  const newArr = [...this.state.tasks];
  var name = this.state.taskName;
  var pr =this.state.taskPriority;
  
  const newItem = {
      id:this.state.id+1,
      name:name,
      pr:pr
  }
  this.setState({id:newItem.id});
  newArr.push(newItem);
  this.setState({tasks:newArr});
}
 }
}
*/
updateInput(value){ 
    this.setState({ 
      taskName: value, 
    }); 
  } 

  updateSelect(value){
      this.setState({taskPriority:value })
  }
 

render(){
    return(
        <div>
             <header className = {classes.header}>Todos</header>



             <div className={classes.main}>
                 <div>
                 <Icon size={24} icon={pen} className={classes.item} style={{marginTop:'150%' , height:'50%'}}/>
                 </div>


                 <div className={classes.divInfo}>
                 <label>Todo</label>
                 <input type = "text" className={classes.priority} placeholder = "write your todo"  value = {this.state.taskName} 
                  onChange = {item => this.updateInput(item.target.value) } 
                 /> 
                 </div>


                 <div className={classes.divInfo}>
                 <label>Priority</label>
                 <select  className={classes.priority}  value = {this.state.taskPriority} 
                   onChange = {item => this.updateSelect(item.target.value)} >
                <option>priority</option>
                <option>high</option>
                <option>mid</option>
                <option>less</option>
                </select>
                 </div>

                 <div onClick={() => this.setState({id:this.state.id+1})}>  
                 <button
                  className={classes.item}
                  onClick={() => this.props.onTaskAdded(this.state.id,this.state.taskName,this.state.taskPriority)} style={{marginTop:'35%' , height:'40%'}}> Save </button>
                 </div>


 
             </div>


             <div> <h1> Todo Item</h1></div>
             <Divider className={classes.Divider} />
              <div className = {classes.Infoheader}>
                  <span style={{width:'5%'}}>SL</span>
                  <span style={{width:'25%' }} className={classes.ListItem}>Todo</span>
                  <span style={{width:'45%'}} className={classes.ListItem}>Date</span>
                  <span style={{width:'10%' , textAlign:'left'}} >Prioity</span>
                  <span style={{width:'10%' , textAlign:'left'}} >Status</span>
                  <span style={{ width:'5%'}}>#</span>

              </div>
              <Divider className={classes.Divider} />
                  <div> 
                      {this.props.tsk.map((item) => (
                          <List key={item.id}
                           name={item.taskName} prior ={item.taskPriority} id={item.id} deleted = {id => this.props.onTaskDeleted(item.id)}></List>
                          
                      ))}

                  </div>
        </div>


    )
}


}
const mapStateToProps = state => {
       return{
         tsk:state.tasks
       }
}

const mapDispathToProps = dispatch => {
  return{
    onTaskAdded :(id ,name , priority ) =>
        dispatch({type:"ADD_TASK" , taskInfo:{id :id , taskName:name , taskPriority:priority}}),
    onTaskDeleted : id => dispatch({type : "DELETE_TASK" , id:id})
    
  }

}
export default connect(mapStateToProps , mapDispathToProps)(TodoApp);
