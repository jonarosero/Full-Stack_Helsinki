import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  //const now = new Date()
  const a =10
  const b=20
  return (
    <div>
      <p>Hello world <Hello number={a+b} name="jonathan"/></p>
      <p>{a+b}</p>
    </div>
  );
};

const Hello =(props)=>{
  return(
    <div>
      <p>I'm a component calculate a number {props.number} a name is {props.name}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
