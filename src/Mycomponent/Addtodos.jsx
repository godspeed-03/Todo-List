import React, { useState } from 'react'

export const Addtodos = (props) => {
  const[title, settitle] = useState("");
  const[desc, setdesc] = useState("");

  const submit =(event)=>{
    event.preventDefault();
    if(title == ''){
      alert("Title can't be blank.");
    }else{

      props.addTodo(title, desc);
      settitle("");
      setdesc("");
    }

  }
  return (
    <div className=' flex flex-col items-center justify-center mt-10 bg-cyan-600 mx-[20rem] rounded-xl '>
      <h3 className='m-3 p-2 font-medium text-2xl text-'>Add Your ToDo </h3>
      <form onSubmit={submit}>
        <div className=" flex items-center justify-center m-5">
          <label htmlFor="exampleInputEmail1" className="text-3xl p-3"><h4><strong>Todo Title :</strong> </h4></label>
          <input  type="text"  vlaue={title} onChange={(event)=>{settitle(event.target.value)}} className=" bg-slate-500 rounded-3xl p-3 text-black text-lg font-medium border-[3px] border-violet-600" id="tittle"  />
        </div>
        <div className="flex items-center justify-center m-5">
          <label htmlFor="exampleInputPassword1" className="text-xl p-3"><h5>Todo Description :</h5></label>
          <input type="text" value={desc} onChange={(event)=>{setdesc(event.target.value)}} className=" bg-slate-500 rounded-3xl p-3 text-black text-lg font-normal border-[3px] border-violet-600" id="desc" />
        </div> 

        <div className=' flex items-center justify-center'><button type="submit" className="bg-yellow-300 hover:bg-lime-500 hover:text-white hover:font-bold  border-4 border-red-200 m-5 py-2 px-8 rounded-3xl">Add-Todo</button></div>
      </form>
    </div>
  )
}
