import { title } from "process";
import React from "react";
import {useState} from 'react'
import fs from "fs"


//1
//understanding state and conponents



//this is state
function App()
{
    const [todoForToday , setTodoForToday] = React.useState({
        title: "go to the gym" , 
        description: "hit the gym at 5pm",
        id: 1
    }
)


setInterval(()=>{
    setTodoForToday({
        title: " not -> go to the gym",
        description: "not -> go to eat 5pm",
        id:1
      })
    },2000)


    //wee are returnning component
    //we are rendering the data
return 
{
    <div>
    {todoForToday.title}
    <br/>
    {todoForToday.description}
    <br/>
    {todoForToday.id}
    </div>
}

return 
{
    <div>
        <RenderTodo todoForToday={todoForToday}></RenderTodo>
    </div>
}
}

//we can pass satte variables to functions/components using props

function RenderTodo(props)
{
    return
    {
    <div>
    {props.todoForToday.title}
    <br/>
    {props.todoForToday.description}
    <br/>
    {props.todoForToday.id}
    </div>

    }
}
export default App;


