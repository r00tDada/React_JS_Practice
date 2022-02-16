import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState,props) => ({
      count: prevState.count + 1,
    }));
  }

  incrementfive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
  }

  clear() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementfive()}>Increment</button>
        <button onClick={() => this.clear()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
