import React, { useState } from "react";
import ReactDOM from "react-dom";

// const App = (props) => {
//   const name = 'Peter'
//   const age = 10
//   const {counter} = props;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <div>{counter}</div>
//     </div>
//   )
// };

// const Hello =({name,age})=>{
//   // const name = props.name;
//   // const age = props.age;
//   //const {name,age}=props;

//   const bornYear=()=> new Date().getFullYear()-age
//   return(
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
// let counter = 1
// const refresh =()=>{
//   ReactDOM.render(<App counter={counter}/>, document.getElementById("root"));
//   document.getElementById('root')
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)