import {useState} from 'react'
import './App.css'

/*this is a state(the elements/data in ui which can be changed)
let todo = {
  title: "go to the gym",
  description: "go at 5pm",
  id:1
}
*/


//now we can make many todos with different values but
//but then react get confused which state it have to update , remove , add ,delete
//so we have to define the data/input data/values in a specific way



//this is a state(the elements in ui which can be changed)
function App()
{
const [todo , setTodo] = useState({
  title: "go to the gym",
  description: "go at 5pm",
  id:1
});


setInterval(()=>{
  //this is a state(the elements in ui which can be changed)
  //we havev to call set todo function whenever we are doing changes in the todo
  setTodo({
    title: " not go to the gym",
    description: "not go at 5pm",
    id:1
  })
},1000);


//this is a component
  return(
  <div>
  <h3>hi there this is my first react code</h3>
  {todo.title}
  {todo.description}
  {todo.id}
  <PersonName firstName={"rudra"} lastName={"yadav"}></PersonName>
  </div>
  )




//new component
function PersonName(props)
{
  return 
  <div>
  {props.firstName} {props.lastName}
  </div>
}
}
export default App







//below code is predefined
//below code is of ----This code is a basic React application that uses Vite as its build tool. It sets up a simple web page with a counter button and links to the Vite and React documentation. Here's a breakdown of what the code does:


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/