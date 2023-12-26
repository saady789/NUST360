import React from 'react'
import { useAppDispatch } from '../_hooks/hooks'
import { setCurrentPage,setCurrentType } from '../_redux/userSlice'
const Sidebar = () => {
  const dispatch = useAppDispatch();

  const createStudent = async() => {
    await dispatch(setCurrentPage('a_createStudent'));
  }

  const createFaculty = async() => {
    await dispatch(setCurrentPage('a_createFaculty'));
  }

  const createAdmin = async() => {
    await dispatch(setCurrentPage('a_createAdmin'));
  }

  const createCourse = async() => {
    await dispatch(setCurrentPage('a_createCourse'));
  }

  const createDepartment = async() => {
    await dispatch(setCurrentPage('a_createDepartment'));
  }

  const enrolStudent = async() => {
    await dispatch(setCurrentPage('a_enrolStudent'));
  }

  const createInvoice = async() => {
    await dispatch(setCurrentPage('a_createInvoice'));
  }
  
  const handleLogout = () => {}

  return (
    <div className='flex flex-col justify-start items-start m-2 border-r-2 h-full'>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={createAdmin}>Create Admin</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={createStudent}>Create Student</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={createFaculty}>Create Faculty</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={createDepartment}>Create Department</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={createCourse}>Create Course</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={createInvoice}>Create Invoice</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={enrolStudent}>Enrol Students</div>
        <div className='p-2 rounded-lg cursor-pointer hover:brightness-125 hover:bg-lightblue w-full font-semibold' onClick={enrolStudent}>Logout</div>




    </div>
  )
}

export default Sidebar