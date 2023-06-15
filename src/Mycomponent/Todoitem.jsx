import React from 'react'
export const Todoitem = ({todo , ondelete}) => {
  return (
    <div className='todos flex border-2 border-black rounded-lg m-1 bg-zinc-500 mb-4'>
    <div className=' w-[25rem]  m-2  '>
      <h5 className='font-bold text-2xl font-serif p-2 '><strong>{todo.title}</strong></h5>
    <p className='tododesc text-white  p-2  font-mono font-extralight  '>{todo.des}</p>
    </div>
    <div className='flex items-center justify-center'>

    <button className='bg-yellow-300 hover:bg-red-700 hover:text-white hover:font-bold  border-4 border-red-500 m-2 py-2 px-8 rounded-3xl' onClick={()=>ondelete(todo)}>Delete</button>
    </div>
      
    </div>
  );
}
