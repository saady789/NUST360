import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-qbg h-screen w-screen'>
      <div className='bg-qblue w-full h-24 flex justify-center items-center'>
        <h1 className='w-7/8 h-full flex justify-center items-center font-bold text-8xl text-white' >NUST 360</h1>
      </div>
      <div className='w-full mt-8 h-96 flex justify-center items-center'>
        <div className='bg-white h-full w-1/4 rounded-lg'>

          <div className="flex items-center justify-center ">
            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4 w-80">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow-md appearance-none rounded border w-full py-2 px-3 text-gray-700 outline-none leading-tight focus:border-none focus:outline-none focus:outline-qblue  focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow-md border appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-none focus:outline-qblue focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white bg-qblue hover:brightness-110 w-full h-14 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>




        </div>
      </div>

    </div>
  )
}
