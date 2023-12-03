"use client"
import React from 'react'
import Navbar from '../_components/Navbar'
import Academics from './Academics'
import Classes from './Classes'
import Particulars from './Particulars'
import Sidebar from './Sidebar'
import Result from './Result'
import { useAppSelector } from '../_hooks/hooks'
import Attendance from './Attendance'
const page = () => {
 const currentPage = useAppSelector(state=>state.user.currentPage);
  return (
  
     <div className='bg-qbg '>
      <Navbar />
      <div className='flex h-screen w-screen'>
        <div className='w-52'><Sidebar/></div>
        <div className='w-3/4'>
          {currentPage=="home" && 
          <>
          <Particulars />
          <Academics />
          <Classes />
          </>
          }
          {currentPage=="attendance" && 
          <Attendance />
          }
          {currentPage=="result" &&
          <Result />
          }
        </div>
      </div>
    </div>
 
  )
}

export default page