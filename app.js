/**
 * <div id="parent">
 *        <div id="child">
 *            <h1>I'm H1 Tag</h1>
 *            <h2>I'm H2 Tag</h2>
 *        </div>
 *        <div id="child2">
 *            <h1>I'm H1 Tag</h1>
 *            <h2>I'm H2 Tag</h2>
 *        </div>
 * </div>
 * 
 * 
 * 
 */

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Im H1 Tag"),
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






