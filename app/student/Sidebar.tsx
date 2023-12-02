import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-start items-start m-2 border-r-2 h-full'>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold'>Dashboard</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold'>Profile</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold'>Attendance</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold'>Result</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold'>Logout</div>

    </div>
  )
}

export default Sidebar