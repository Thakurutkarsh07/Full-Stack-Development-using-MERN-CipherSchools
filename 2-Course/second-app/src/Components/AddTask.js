import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

const AddTask=({onSubmit})=>{
  const {addNewTask} = useContext(TaskContext);

  const [task,setTask]  = useState({
    title:"",
    description : "",
  });

  let handleInputChange = (e)=>{
    setTask({
      ...task, 
      [e.target.name]: e.target.value,
    });
  }

  let onFormSubmit = (e)=>{
    e.preventDefault();
    console.log(task)
    addNewTask(task);
  }
    return (
        <div className="screen">
        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
        <form onSubmit={onFormSubmit}>
            <div className="ui form">
                <div className="field">
                <label >Title</label>
                <input type="text" spellCheck = {false} data-ms-editor = {true} placeholder="Title" name="title" onChange={handleInputChange} value={task.title}/>
         </div>
         <div class="field">
    <label>Description</label>  
    <textarea rows="2" placeholder="Description" spellCheck = {false} data-ms-editor = {true} name="description" onChange={handleInputChange} value = {task.description}></textarea>
  </div>    
        </div>
        <button type="submit" className="ui primary button">
        Submit
      </button>
        </form>
      </div>
      </div>
    );
    
};

export default AddTask;