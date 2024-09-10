import React from "react";
import { useState } from "react";



let counter =0;
function App() {
  //use state sort pf protect the vslue which is once assigned
  const [todos, setTodo] = useState([
    {
      title: "Go to the gym",
      description: "Hit gym at 5-7",
      id: 1
    },
    {
      title: "Go to dinner",
      description: "Dinner at 7-9",
      id: 2
    }
  ]);


  //whenever use settimeout function or settime interval function rendering is done again and again
  //or  when ever there is a chaange/update  in the state then rendering is done again and again
  //NOW TO STOP THE RERENDERING THE PROCESS 
  //method 1 use counter

  console.log("render")
  if(counter === 0)
  {
  setTimeout(()=>{
    setTodoForToday({
      title: "do not go to the gym" + Math.random(),
      description:"hit gym from 7-9",
      id:1
    },10000)
  })
  counter=1;
}
else
{

}

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
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <br />
          </div>
        );
      })}

      {/* Displaying todos using props */}
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />;
      })}
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
