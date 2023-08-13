import React from 'react'
export const Todoitem = ({todo , ondelete}) => {
  return (
    <div className='todos flex border-2 border-black rounded-lg m-1 bg-zinc-500 mb-4'>
    <div className=' md:w-[25rem]  md:m-2 max-md:w-[10rem]  '>
      <h5 className='font-bold text-2xl font-serif p-2 max-md:text-sm '><strong>{todo.title}</strong></h5>
    <p className='tododesc text-white  p-2  font-mono font-extralight max-md:text-xs '>{todo.des}</p>
    </div>
    <div className='flex items-center justify-center'>

    <button className='bg-yellow-300 hover:bg-red-700 hover:text-white hover:font-bold  border-4 border-red-500 m-2 py-2 px-8 rounded-3xl max-md:px-2 max-md:py-1 max-md:text-sm max-md:border-2 ' onClick={()=>ondelete(todo)}>Delete</button>
    </div>
      
    </div>
  );
}
