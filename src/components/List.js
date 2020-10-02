import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faCheck } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons'
import classes from './TodoApp.module.css';
export default class List extends Component{


    state = {
        date :Date(),
    }
    render(){

        return(
           
            <div className={classes.ch} key={this.props.id}>
                 <span style={{width:'5%', }} className={classes.ListItem}>{this.props.id}</span>
                  <span style={{width:'25%'}} className={classes.ListItem}>{this.props.name} </span>
                  <span style={{width:'45%' }} className={classes.ListItem}>{this.state.date}</span>
                  <span style={{width:'10%'}} className={classes.ListItem}>{this.props.prior}</span>
                  <span style={{width:'10%' , textAlign:'left'}} >pinding</span>
                  <span style={{ width:'5%' }} className={classes.ListIcon}>
                  <FontAwesomeIcon icon={faCheck} /> 

                  <FontAwesomeIcon icon={faTrash} onClick ={this.props.deleted} /> 
                  </span>
            </div>
          
        )
    }
}