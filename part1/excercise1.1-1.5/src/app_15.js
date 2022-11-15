const Header = (props) => {
  return (
    <div>
      <h2>{props.course.name}</h2>
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
    total = total + props.exercises[i].exercises;
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

const App_14 = () => {
  const course = 
  {
    name:"Half Stack application development",
    parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
    ]
  }
  

  return (
    <div>
      <Header course={course} />
      <Content content={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
};

export default App_14;
