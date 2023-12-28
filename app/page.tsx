"use client"
import Image from 'next/image'
import Navbar from './_components/Navbar'
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify';
import { setCurrentUser } from './_redux/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,

  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data:any) => {
    const response = await fetch("http://localhost:3001/login", {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    let result  = await response.json();
    console.log(result);
    if(result.error){
      toast.error(result.error);return;
    }
    if(result.data){
      localStorage.setItem('user',JSON.stringify(result.data));
      await dispatch(setCurrentUser(result.data));

      if(result.data.role==='Admin'){
        router.push('/admin');

      }
      if(result.data.role==='Student'){
        router.push('/student');

      }
      if(result.data.role==='Faculty'){
        router.push('/faculty');

      }
    }

  }

  
  // useEffect(() => {
  //   console.log("useeffect was called");
  //   const result: string | null = localStorage.getItem('user');
    
  //   const setUser = async () => {
  //     if (result) {
  //       try {
  //         const parsedResult = JSON.parse(result);
  //         await dispatch(setCurrentUser(parsedResult.data));
  //       } catch (error) {
  //         // Handle JSON parsing error if necessary
  //         console.error('Error parsing user data:', error);
  //       }
  //     }
  //   };

  //   setUser();
  // }, []);

 
  
  return (
    <div className='bg-qbg h-screen w-screen'>
      <Navbar />
      <div className='w-full mt-8 h-96 flex justify-center items-center'>
        <div className='bg-white h-full w-1/4 rounded-lg'>

          <div className="flex items-center justify-center ">
            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4 w-80" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow-md appearance-none rounded border w-full py-2 px-3 text-gray-700 outline-none leading-tight focus:border-none focus:outline-none focus:outline-qblue  focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register("Username", { required: true, minLength: 3 })}
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
                  {...register("password", { required: true, minLength: 3 })}

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
