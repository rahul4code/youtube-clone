import React from 'react'

const Button = ({name="All"}) => {
  return (
    <button className={`bg-[#f2f2f2] font-medium px-3 py-1 text-[15px] rounded-lg ${name==="All" && "bg-black text-white"}`}>{name}</button>
  )
}

export default Button