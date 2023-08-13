import React from 'react'
import PropTypes from 'prop-types'

export default function header(props) {
  return (
    <div className="   flex justify-center items-center mt-10   ">
      <h1 className=" bg-orange-300 p-4 text-4xl max-md:p-2 max-md:text-xl rounded-lg animate-bounce ">{props.title}</h1>
    </div>
    
  );
}

header.propTypes ={
  tittle: PropTypes.string,
  
}
