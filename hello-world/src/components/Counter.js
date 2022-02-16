import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(prevState=>
      ({
        count:prevState.count + 1,
      }))
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
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.clear()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
