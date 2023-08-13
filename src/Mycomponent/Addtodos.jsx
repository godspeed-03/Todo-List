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
    <div className=' flex flex-col items-center justify-center mt-10 bg-cyan-600 mx-[10%] rounded-xl '>
      <h3 className=' p-8 max-md:pt-5 font-medium text-2xl max-md:text-xl'>Add Your ToDo </h3>
      <form onSubmit={submit}>
        <div className=" flex items-center justify-center mt-5 max-md:ml-5">
          <label htmlFor="exampleInputEmail1" className="text-3xl p-3 max-md:text-base max-md:p-1 max-sm:text-xs"><h4><strong>Todo Title :</strong> </h4></label>
          <input  type="text"  vlaue={title} onChange={(event)=>{settitle(event.target.value)}} className=" bg-slate-500  max-md:w-[70%] max-sm:w-[50%] max-md:h-5 rounded-3xl p-3 text-black text-lg font-medium border-[3px] border-violet-600" id="tittle"  />
        </div>
        <div className="flex items-center justify-center mt-5  -max-md:ml-5">
          <label htmlFor="exampleInputPassword1" className="text-xl p-3 max-md:text-sm max-md:p-1 max-sm:text-xs"><h5>Todo Description :</h5></label>
          <input type="text" value={desc} onChange={(event)=>{setdesc(event.target.value)}} className=" bg-slate-500  w-[60%] max-sm:w-[40%] max-md:h-5 rounded-3xl p-3 text-black text-lg font-normal border-[3px] border-violet-600" id="desc" />
        </div> 

        <div className=' flex items-center justify-center'><button type="submit" className="bg-yellow-300 hover:bg-lime-500 hover:text-white hover:font-bold  border-4 border-red-200 m-5 py-2 px-8 rounded-3xl max-md:px-4 max-md:py-1 max-md:text-sm">Add-Todo</button></div>
      </form>
    </div>
  )
}
