'use client'
import React from 'react'
import Navbar from '../_components/Navbar'
import Sidebar from './Sidebar'
import Admin from './admin'
import Course from './course'
import Student from './student'
import Enrol from './enrol'
import Faculty from './faculty'
import Invoice from './invoice'
import Department from './department'
import { useAppSelector } from '../_hooks/hooks'

const page = () => {
  const currentPage = useAppSelector(state=>state.user.currentPage);

  return (
    <div className='bg-qbg '>
      <Navbar />
      <div className='flex h-screen w-screen'>
        <div className='w-52'><Sidebar/></div>
        <div className='w-full'>
          {currentPage=="a_createStudent" && <Student />
          }
          {currentPage=="a_createFaculty" && 
          <Faculty />
          }
          {currentPage=="a_createAdmin" &&
          <Admin />
          }
          {currentPage=="a_createCourse" &&
          <Course />
          }
          {currentPage=="a_createDepartment" &&
          <Department />
          }
          {currentPage=="a_enrolStudent" &&
          <Enrol />
          }
          {currentPage=="a_createInvoice" &&
          <Invoice />
          }
        </div>
      </div>
    </div>
  )
}

export default page