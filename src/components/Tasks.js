import React,{Component} from 'react';
import Task from './Task';

class Tasks extends Component{


    render(){
        
        return(
            this.props.tarea.map(tareas=><Task task={tareas} key={tareas.id}/>
                
            )
        );
    }
}

export default Tasks;