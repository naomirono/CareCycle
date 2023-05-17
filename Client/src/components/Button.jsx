import React from 'react'

const Button = (props) => {
  return (
   <button className='bg-[#7B1FA2] text-white py-2 px-4 rounded-3xl md:ml-8 hover:bg-[#7B1FA2] duration-500 border border-white'>
       {props.children}
   </button>
  )
}

export default Button