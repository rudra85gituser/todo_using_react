//useeffect implementation

import React, { useState, useEffect } from "react";

function App() {
  // State for todos and a counter
  const [todos, setTodo] = useState([
    {
      title: "Go to the gym",
      description: "Hit gym at 5-7",
      id: 1,
    },
    {
      title: "Go to dinner",
      description: "Dinner at 7-9",
      id: 2,
    },
  ]);
  

  
  const [counter, setCounter] = useState(Math.random());
  var nonStateVariable = Math.random();

  console.log("Todos:", todos);
  console.log("Counter:", counter);
  console.log("Non-state variable:", nonStateVariable);

  
//in this hook use effect the logic runs only one time
React.useEffect(()=>{
    console.log("hii from useEffect");
},[]);

  // To prevent unnecessary re-rendering, use useEffect for side effects like setTimeout
React.useEffect(() => {
    const timer = setTimeout(() => {
      setTodo([
        {
          title: "Do not go to the gym " + Math.random(),
          description: "Hit gym from 7-9",
          id: 1,
        },
        {
          title: "do not Have dinner " + Math.random(),
          description: "Dinner from 7-9",
          id: 2,
        },
      ]);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []); // Empty dependency array to run once on mount

  React.useEffect(()=>{
    fetch("http://localhost:3000/todos",{
      method:"GET"
    }).then((response)=>
    {
      response.json().then((data)=>{
        console.log(data);
      })
    });
    console.log("hii from useEffect");
},[]);


  return (
    <div>
      {/* Displaying todos with JSON stringify */}
      {JSON.stringify(todos)}

      {/* Displaying each todo manually */}
      <p>{todos[0].title}</p>
      <p>{todos[0].description}</p>
      <br />
      <p>{todos[1].title}</p>
      <p>{todos[1].description}</p>

      {/* Displaying todos using map */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
          <br />
        </div>
      ))}

      {/* Displaying todos using props */}
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

// Todo component defined outside of the App component
function Todo(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <br />
    </div>
  );
}

export default App;
