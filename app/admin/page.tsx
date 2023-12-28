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
import { useEffect } from 'react'
import { setCurrentUser } from '../_redux/userSlice';
import { useDispatch } from 'react-redux';


const page = () => {
  const currentPage = useAppSelector(state=>state.user.currentPage);
  const currentUser = useAppSelector(state=>state.user.currentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useeffect was called");
    const result: string | null = localStorage.getItem('user');
    
    const setUser = async () => {
      if (result) {
        try {
          const parsedResult = JSON.parse(result);
          await dispatch(setCurrentUser(parsedResult));
        } catch (error) {
          // Handle JSON parsing error if necessary
          console.error('Error parsing user data:', error);
        }
      }
    };

    setUser();
  }, []);
  

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