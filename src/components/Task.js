import React, { Component } from "react";
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {


  styleCompleted(){
      return{
          fontSize:"20px",
          color:this.props.task.done ?'gray':"black",
          textDecoration:this.props.task.done?"line-through":"none"
      }
  }

  render() {
      const {task}=this.props
    return (
      <div > 
        <p key={task.id} style={this.styleCompleted()}>
          {task.title} -
           {task.description} -
           {task.done}
          <input type="checkbox" />
          <button style={this.btnDelete}>x</button>
        </p>
      </div>
    );
  }


 btnDelete={
 background:"red",
 boder:"none",

  }

}


Task.propTypes={
    task:PropTypes.object.isRequired
}
 




export default Task;
