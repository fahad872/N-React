/*
 <div id="parent">
       <div id="child1">
        <h1> I'm from h1</h1>
        <h2> I'm from h2 </h2>
       </div>
        <div id="child2">
        <h1> I'm from h1</h1>
        <h2> I'm from h2 </h2>
       </div>
 </div>
*/


const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [
             React.createElement("h1", {}, "i'm from h1") ,
             React.createElement("h2", {}, "i'm from h2") 
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
             React.createElement("h1", {}, "i'm from h1") ,
             React.createElement("h2", {}, "i'm from h2") 
        ]
    )
    ]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);