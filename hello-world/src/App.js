import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import { Component } from "react";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Message/> */}
        <EventBind/>
      </div>
    );
  }
}

export default App;
