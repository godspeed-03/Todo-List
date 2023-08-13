import React from 'react'
import {Todoitem} from './Todoitem.jsx';




export const Todos = (props) => {
  // const lastword ="";
  return (
    <div className = " flex flex-col items-center justify-center mt-10 bg-cyan-600 mx-[10%] rounded-xl mb-[10rem]">
      <h3 className='font-bold text-3xl p-8 max-md:text-base max-md:pt-5 animate-pulse'> <strong>Todos list</strong></h3>
      
    {props.todos.length===0?<h4 className='m-3 p-2 animate-bounce max-md:text-xs text-center'>🥳🥳 Well Done! All work has been completed</h4>:
    props.todos.map((todo,i)=>{
      
      return (<Todoitem todo = {todo} key ={i} ondelete={props.ondelete}/>)
    })}
      

        </div>

  );
}


