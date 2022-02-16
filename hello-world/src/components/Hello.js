import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Sourabh</h1>
    //     </div>
    // )
    return React.createElement(
        "div",
        {id:'hello'},
        React.createElement("h1", null, "Hello Sourabh")
      );
}

export default Hello