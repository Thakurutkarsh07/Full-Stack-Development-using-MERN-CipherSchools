// import { useContext } from "react";
import ToDoScreens from "./Screen/ToDoScreens";
import AddTask from "./Components/AddTask";
import { TaskProvider } from "./context/TaskContext";
import {createBrowserRouter , RouterProvider} from "react-router-dom";

// Class component
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <ToDoScreens/>
//       </div>
//     );
//   }
// }

//router
const router = createBrowserRouter([
  {
    path:"/",
    element:<ToDoScreens/>,
  },
  {
    path:"/add-task",
    element:<AddTask/>
  }
]);

// function component
const App=()=>{
  

  return(
    <TaskProvider>
      <RouterProvider router = {router}/>
    </TaskProvider>
  );
};

export default App;