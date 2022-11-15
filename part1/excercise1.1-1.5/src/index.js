import React from "react";
import ReactDOM from "react-dom";
import App11to12 from "./app_11_12";
import App13 from "./app_13";
import App14 from "./app_14";
import App15 from "./app_15";

const App = () => {
  return (
    <div>
      <h1>Excercises 1.1 - 1.2</h1>
      <App11to12 />
      <h1>Excercise 1.3</h1>
      <App13 />
      <h1>Excercise 1.4</h1>
      <App14 />
      <h1>Excercise 1.5</h1>
      <App15 />
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
