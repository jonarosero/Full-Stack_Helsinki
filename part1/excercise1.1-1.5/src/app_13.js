const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.content[0]} />
      <Part name={props.content[1]} />
      <Part name={props.content[2]} />
    </div>
  );
};

const Total = (props) => {
  var total = 0;
  for (var i = 0; i < props.exercises.length; i++) {
    total = total + props.exercises[i];
  }
  return (
    <div>
      <p>{total}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {" "}
        {props.name.name} {props.name.exercises}
      </p>
    </div>
  );
};

const App_13 = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const content = [part1, part2, part3];
  const exercises = [part1.exercises, part2.exercises, part3.exercises];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App_13;
