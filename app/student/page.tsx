import React from 'react'
import Navbar from '../_components/Navbar'
import Academics from './Academics'
import Classes from './Classes'
import Particulars from './Particulars'
import Sidebar from './Sidebar'
const page = () => {
  return (
    <div className='bg-qbg '>
      <Navbar />
      <div className='flex h-screen w-screen'>
        <div className='w-52'><Sidebar/></div>
        <div className='w-3/4'>
          <Particulars />
          <Academics />
          <Classes />
        </div>
      </div>
    </div>
  )
}

export default page