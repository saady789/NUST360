import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='bg-qblue w-full h-24 flex justify-center items-center'>
        {/* <h1 className='w-7/8 h-full flex justify-center items-center font-bold text-8xl text-white' >NUST 360</h1> */}
        <Image
          src='/nav.png'
          alt='NUST360'
          width={300}
          height={100} />
      </div>
  )
}

export default Navbar