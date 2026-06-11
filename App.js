

// let heading = React.createElement("h1", {},"Hello world with react")
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


// ----------------Nested Div using React.createElement


let parent = React.createElement("div" , {id:"parent"}, 
    React.createElement("div" , {id:"child"},
        React.createElement("h1",{},"Hello World using Nexted React.createElement")
    )
)

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)