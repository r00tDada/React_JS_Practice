import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
     {/* <Greet/> */}
     {/* <Welcome/> */}
     <Greet name = "Sourabh"/>
     <Greet name = "Javascript"/>
     <Greet name = "React"/>

    </div>
  );

}

export default App;
