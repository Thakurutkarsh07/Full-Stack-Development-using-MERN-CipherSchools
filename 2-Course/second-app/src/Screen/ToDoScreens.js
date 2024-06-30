// import { formatDate } from "../utils/dateUtil";
import Task from "../Components/Task";
// import AddTask from "../Components/AddTask";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
// import { Component } from "react";
//class based ToDoScreen
// class ToDoScreens extends Component{
//     state={
//         count : 0,
//     };
//     render(){
//         return(
//             <div className="screen">
//             <h1 className="ui heading center">Todo List</h1>
//             <div>
//                 <button onClick={(e)=>{
//                     this.setState({
//                         ...this.state,
//                         count: this.state.count + 1,
//                     });
//                     console.log(this.state.count);
//                 }} className="ui secondary button">
//                     Add Task.
//                 </button>
//                 <p >Number of count: {this.state.count}</p>
//             </div>
//             </div>
//         )
//     }
// }




// Function based ToDoScreen
const ToDoScreens =()=>{
    const {taskList} = useContext(TaskContext);

    // let addNewTask = (task)=>{
    //     setTaskList([...taskList,{...task,createdDate:new Date()}])
    // }
    // const [taskCount,setTaskCount] = useState(0);
    return(
        <>
                    <div className="screen">
                    <h1 className="ui heading center">Todo List</h1>
                    <div>
                         {/* <button onClick={(e)=>{
                            setTaskList([...taskList,
                                {
                                    title:"Go to gym",
                                    description: "Today at 7PM you have to go gym for fitness of your body",
                                    createdDate: new Date(),
                                },
                            ]);
                        }} className="ui secondary button">
                            Add Task.
                        </button> */}
                        <section>
                            <div >
                        {taskList.map((task,index)=>
                            (<Task task={task} key={index}/>))}
                        </div>
                        </section>
                        </div>
                    {/* <AddTask onSubmit={addNewTask}/> */}
                    </div>
                </>
        );
};
export default ToDoScreens;