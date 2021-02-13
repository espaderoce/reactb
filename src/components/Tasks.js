import React,{Component} from 'react';


class Tasks extends Component{


    render(){
        return(
            this.props.tarea.map(e=>
                <p key={e.id}>
                    {e.title} - {e.description} - {e.done} 
                    <input type="checkbox"/>
                    <button>x</button>

                </p>
            )
        );
    }
}

export default Tasks;