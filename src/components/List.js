import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faCheck } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons'
import classes from './TodoApp.module.css';
import { Divider } from '@material-ui/core';
export default class List extends Component{


    state = {
        date :Date(),
    }
    render(){

        return(
           
            <div className={classes.ch}>
                 <span style={{width:'20px', }}>{this.props.id}</span>
                  <span style={{width:'250px' , wordBreak:'break-all',textAlign:'left'}}>{this.props.name} </span>
                  <span style={{width:'250px' , wordBreak:'break-all',textAlign:'left' }}>{this.state.date}</span>
                  <span style={{width:'40px',textAlign:'left'}}>{this.props.prior}</span>
                  <span style={{width:'40px',textAlign:'left'}}>pinding</span>
                  <span style={{ width:'80px',display:'flex' , justifyContent:'end' , flexDirection:'column' , }}>
                  <FontAwesomeIcon icon={faCheck} /> 

                  <FontAwesomeIcon icon={faTrash}  /> 
                  </span>
            </div>
          
        )
    }
}