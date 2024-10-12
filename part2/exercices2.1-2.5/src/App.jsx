/* eslint-disable react/prop-types */
const Course = (props) => {
  const course = props.course;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

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
      {props.name}: {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((e) => (
        <Part key={e.id} name={e.name} exercises={e.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((sum, item) => sum + item.exercises, 0);

  return (
    <div>
      <p>
        <strong>Total of exercises {total}</strong>
      </p>
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 5,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 6,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course}/>
        </div>
      ))}
    </div>
  );
};

export default App;
