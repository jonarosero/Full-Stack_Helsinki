/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((e) => (
        <Part key={e.part} part={e.part} exercises={e.excercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((sum, item) => sum + item.excercises, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      { part: "Fundamentals of React", excercises: 10 },
      { part: "Using props to pass data", excercises: 7 },
      { part: "State of a component", excercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
