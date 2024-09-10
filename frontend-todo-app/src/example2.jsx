import { title } from "process";
import React from "react";
import {useState} from 'react'
import fs from "fs"

//when we have to pass list of elements and data to render or to display then we use array and maps 
//2
//rendering arrays
//maps and filters


//example 1
//doubling eack element of array or multiplying the each element by 2 using array
let arr= [2,4,5,6];
let newArr=[];

//we can update the elements of the array after using const because the the elements points to a same location
for(let i=0;i<arr.length;i++)
{
     newArr.push(arr[i]*2);
}
console.log(newArr);


//doing the same thing using maps
//map is a internal function like push and pop
//input we pass in map is function
let newArr2 = arr.map((value)=>{
    return value * 2;
})
console.log(newArr2);



//or
//without arrow function
function callback(value)
{
    console.log(value);
    return value*2;
}
//whatever function we are passsing in the map function  , it gets iterate for each element
let newArr3 = arr.map(callback)
console.log(newArr3);



//example 2
// manipulating values using array and maps

var array =[
    {
    name: "rudra",
    age:21
    },
    {
        name: "rudra",
        age:21
        },
        {
            name: "rudra",
            age:21
            }
];

const array2= map.array((value)=>
{
    if(values.age < 25)
    {
        return {
            name:value.name,
            age:value.age,
            isAllowed: true
        }
    }
        else
        {
            return {
                name:value.name,
                age:value.age,
                isAllowed: false
            }
        }
    })

    console.log(array2);

    export default App;