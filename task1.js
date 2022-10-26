const ReactContent = document.getElementById("root");

const Elmnt = React.createElement(
    "ul", null , 
    [React.createElement("li",null,"MANGA"),
    React.createElement("li",null,"NARANGA"),
    React.createElement("li",null,"MUNTHIRI"),
    React.createElement("li",null,"ORANGE"),
    React.createElement("li",null,"BATHAKKA"),
    React.createElement("li",null,"KAITHA CHAKKA")]
)

ReactDOM.render(Elmnt,ReactContent);