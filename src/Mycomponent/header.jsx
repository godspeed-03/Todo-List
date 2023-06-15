import React from 'react'
import PropTypes from 'prop-types'

export default function header(props) {
  return (
    <div className="  text-4xl flex justify-center items-center mt-10   ">
      <h1 className="w-[15rem]  bg-orange-300 p-4 rounded-lg animate-bounce text-center">{props.title}</h1>
    </div>
    
  );
}

header.propTypes ={
  tittle: PropTypes.string,
  
}
