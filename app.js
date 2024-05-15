import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Namaste React JS"),
    React.createElement("h2",{},"Im H2 Tag")]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Im H1 Tag"),
        React.createElement("h2",{},"Im H2 Tag")]
        )]
);
//JSX
// const heading = React.createElement(
//     "h1",
//     {id:"heading", xyz:"abc"},
//     "Hello World from React!"
// );
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//Igniting APP






