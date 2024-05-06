import React from 'react'

const UseButton = (props) => {
    console.log(props)
  return (
    <div>
      <button className={`px-6 py-2 bg-[#00968a] rounded-3xl  border-transparent text-white text-[16px] font-[400-Normal] `}>{props.content}</button>
    </div>
  )
}

export default UseButton
