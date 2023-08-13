import React from 'react'
import github from '../Images/github-mark-white.svg'
export const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full h-[5rem] bg-black text-white flex justify-center items-center'>
      <div className="content flex flex-col gap-5 max-md:gap-3">
      <p> 
     Copyright &copy; ToDo.com
     </p>
     <p>Made with &#9829; godspeed</p>
      </div>


     <span className='fixed right-2 bottom-2'><a href="https://github.com/godspeed-03/Todo-List.git" target='_blank'><img src={github} alt="github_logo" className='w-10 max-md:w-8' /></a></span>
    </footer>
  );
}
