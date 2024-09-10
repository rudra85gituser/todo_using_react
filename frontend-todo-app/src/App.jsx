import React, { useState, useEffect } from "react";

//making our own hook
//hooks are different from function as hooks get updating while rerendering
//always start the with use

function useTodos()
{
  const [todos, setTodos] = useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3000/todos",{
      method:"GET"
    }).then((response)=>
    {
      response.json().then((data)=>{
        console.log(data);
        setTodos(data);
      })
    });

    setInterval(()=>{
      fetch("http://localhost:3000/todos",{
        method:"GET"
      }).then((response)=>
      {
          response.json().then((data)=>{
          console.log(data);
          setTodos(data);
        })
      });
  
    },1000)
},[]);
return todos
}

function App() {
  {
    const todos = useTodos();
  }

  /*
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
*/


  


  return (
    <div>
      {todos.map(todo =>{
        return<div>
          {todo.title}
          {todo.descriptioon}
          <button>Delete</button>
          <br />
          </div>
      })}
    </div>
  );
}

export default App;
