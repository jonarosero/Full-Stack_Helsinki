/* eslint-disable react/prop-types */
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <Hello name="jonathan" age='10' />
      <p>
        {a}+{b} is {a + b}
      </p>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  );
}

export default App;
