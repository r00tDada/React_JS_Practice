import React, { Component, useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import ComponentC from "./components/ComponentC";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import Component_A from "./components/Component_A";
import Component_C from "./components/Component_C";
import Component_B from "./components/Component_B";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value="Sourabh">
        <ChannelContext.Provider value="Gupta">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* Count - {count}
        <Component_A />
        <Component_B />
        <Component_C /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
