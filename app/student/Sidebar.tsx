import React from 'react'
import { useAppDispatch } from '../_hooks/hooks'
import { setCurrentPage,setCurrentType } from '../_redux/userSlice'
const Sidebar = () => {
  const dispatch = useAppDispatch();

  const handleProfile = async() => {
    await dispatch(setCurrentPage('home'));
   
  }
  const handleAttendance = async() => {
    await dispatch(setCurrentPage('attendance'));

  }
  const handleResult = async() => {
    await dispatch(setCurrentPage('result'));

  }
  const handleLogout = () => {}

  return (
    <div className='flex flex-col justify-start items-start m-2 border-r-2 h-full'>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={handleProfile}>Dashboard</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={handleProfile}>Profile</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={handleAttendance}>Attendance</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={handleResult}>Result</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={handleLogout}>Logout</div>

    </div>
  )
}

export default Sidebar