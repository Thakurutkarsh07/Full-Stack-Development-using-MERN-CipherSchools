import { Component } from "react";

class ToDoScreens extends Component{
    state={
        count : 0,
    };
    render(){
        return(
            <div className="screen">
            <h1 className="ui heading center">Todo List</h1>
            <div>
                <button onClick={(e)=>{
                    this.setState({
                        ...this.state,
                        count: this.state.count + 1,
                    });
                    console.log(this.state.count);
                }} className="ui secondary button">
                    Add Task.
                </button>
                <p >Number of count: {this.state.count}</p>
            </div>
            </div>
        )
    }
}

export default ToDoScreens;