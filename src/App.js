import { render } from "@testing-library/react";
import { Component } from "react";

import { BrowserRouter as Router, Route ,Link} from "react-router-dom";

import "./App.css";

import task from "./sample/task.json";
//importing components
import Tasks from "./components/Tasks";

import TaskForm from "./components/TaskForm";
import Post from "./components/Post";

// function Helloworld(props){
//     console.log(props)
// return (
//     <div id="hello">
//      <h3>{props.subtitle}</h3>
//        {props.myText}

//     </div>
// );

// }

// class Helloworld extends Component{

//     state={
//         show:true
//     }

// toggleShow=()=>{
//     this.setState({show:!this.state.show});
// }

//     render(){
//         if(this.state.show){
//             return (
//                 <div id="hello">
//                  <h3>{this.props.subtitle}</h3>
//                    {this.props.myText}
//                    <button onClick={this.toggleShow}>Toggle Component</button>

//                </div>
//             );
//         }else{
//             return (
//             <div>
//             <h1>there are not compoenents</h1>
//             <button onClick={this.toggleShow}>Toggle Component</button>
//             </div>
//             );
//         }

//     }
// }

// class App extends React.Component{
//  render(){
//      return <div>This is my componenet: <Helloworld/> </div>
//  }
// }

// const App=()=><div>This is my compoenent : <Helloworld/> </div>

// function App() {
//   return (<div>
//        this is my componente:
//        <Helloworld myText="Hello Efrain" subtitle="Lorem Ipsum"/>
//        <Helloworld myText="Hola Mundo" subtitle="Component 2"/>
//        <Helloworld myText="Hello from C#" subtitle="Component 3"/>

//        </div>);
// }

class App extends Component {
  state = {
    tasks: task,
  };

  addTask = (title, description) => {
    //  console.log(title,description)
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description,
    };
    // this.setState({
    //     task:[...this.state.tasks,newTask]
    // })
  };

  render() {
    return (
      <div>
        <Router>
            <Link to="/">Home</Link><br/>
            <Link to="/posts">Post</Link>
          <Route exact
            path="/"
            render={() => {
            return  <div>
                <TaskForm addTask={this.addTask} />
                <Tasks tarea={this.state.tasks} />
              </div>
            }}
          ></Route>

          <Route path="/posts" component={Post}/>

         
        </Router>

       
      </div>
    );
  }
}

export default App;
