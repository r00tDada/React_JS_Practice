import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //   Method 3
    //   this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler(){
  //    this.setState({
  //     message:'GoodBye'
  //    })
  // console.log(this);
  // }

  // Method 4
  clickHandler = ()=> {
    this.setState({
      message: "GoodBye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Method 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Method 2 */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        {/* Method 3 */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* Method 4 */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    );
  }
}

export default EventBind;
