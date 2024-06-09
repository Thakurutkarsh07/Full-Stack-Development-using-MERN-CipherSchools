import logo from './logo.svg';
import './App.css';
import { Component } from "react";

// function App() {
//   const NAME = "Utkarsh Thakur";
//   return (
//     <>
//     <div>
//       <h1 style={{
//         color:"red",
//       }}>
//         This is a new project and created by {NAME} </h1>
//     </div>
//     <div>
//       <p>this is a paragraph</p>
//     </div>
//     </>
//   );
// }

// Using react component
class App extends Component{
  name = "Utkarsh Thakur"
  render(){
    return(
      <div>
        <h1>this is heading and created by {this.name}</h1>
      </div>

    )
  }
  
}
export default App;