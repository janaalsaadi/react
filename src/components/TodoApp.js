import React , {Component} from 'react';
import classes from './TodoApp.module.css';
import { Icon } from 'react-icons-kit';
import { pen } from 'react-icons-kit/icomoon/pen';
import ReactDOM from 'react-dom';
import { Divider } from '@material-ui/core';

import List from './List';

export default class TodoApp extends Component{

state = {
  taskName:'',
  taskPriority:'',
  id:0,
  tasks :[]
}

addTaskHandler = () => {
     
 if(this.state.taskName !==''){ 
     if(this.state.taskPriority !== ''){
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

updateInput(value){ 
    this.setState({ 
      taskName: value, 
    }); 
  } 

  updateSelect(value){
      this.setState({taskPriority:value})
  }
render(){
    return(
        <div>
             <header className = {classes.header}>Todos</header>
             <div className={classes.Topitem}> 
                 <label className={classes.items}>Todo</label>
                 <label className={classes.items}>Priority</label>
             </div>
             <div className={classes.infoData}>
             <Icon size={32} icon={pen} className={classes.item}/>
             <input type = "text" className={classes.priority} placeholder = "write your todo"  value = {this.state.taskName} 
            onChange = {item => this.updateInput(item.target.value)} 
            /> 
            <select  className={classes.priority}  value = {this.state.taskPriority} 
            onChange = {item => this.updateSelect(item.target.value)} >
                <option>priority</option>
                <option>high</option>
                <option>mid</option>
                <option>less</option>
            </select>
            <button className={classes.item} onClick={this.addTaskHandler}> Save </button>
             </div>


             <div> <h1 style={{textAlign:'left' , marginLeft:'340px' , marginTop:'100px' , color:'gray'}}> Todo Item</h1></div>
             <Divider className={classes.Divider} />
              <div className = {classes.Infoheader}>
                  <span style={{width:'40px'}}>SL</span>
                  <span style={{width:'200px' , wordBreak:'break-all' , textAlign:'left'}}>Todo</span>
                  <span style={{width:'200px' , wordBreak:'break-all', textAlign:'left'}}>Date</span>
                  <span style={{width:'80px',textAlign:'left'}}>Prioity</span>
                  <span style={{width:'80px',textAlign:'left'}}>Status</span>
                  <span style={{ width:'20px'}}>#</span>

              </div>
              <Divider className={classes.Divider} />
                  <div>
                      {this.state.tasks.map(item => (
                          <List name={item.name} prior ={item.pr} id={item.id}></List>
                          
                      ))}

                  </div>
        </div>


    )
}


}