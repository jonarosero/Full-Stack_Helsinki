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
      <Part name={props.content[0]} exercises={props.content[1]} />
      <Part name={props.content[2]} exercises={props.content[3]} />
      <Part name={props.content[4]} exercises={props.content[5]} />
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
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const App_11_12 = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const content = [part1, exercises1, part2, exercises2, part3, exercises3];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content content={content} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App_11_12;
