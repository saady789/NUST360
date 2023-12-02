import React from 'react'
import Image from 'next/image'
const Academics = () => {
  return (
    <>
    <h1 className=' text-2xl m-2'>Academics</h1>
    <div className='flex items-center justify-start'>
        
        <Image
          className='rounded-full w-16 h-16 m-4'
          src='/fav.png'
          alt='Academics'
          width={500}
          height={500} />

          <div className='flex flex-col justify-center items-start'>
            <h1 className='font-semibold text-xl'>Muhammad Saad</h1>
            <h1>000000429331</h1>
            <h1>SEECS</h1>
          </div>
    </div>
    </>
  )
}

export default Academics