import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify';

const faculty = () => {

  const {
    register,
    handleSubmit,

  } = useForm();
  const onSubmit = async (data:any) => {
    console.log(data);
    let response = await fetch('http://localhost:3001/createFaculty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if(result == 'done') return toast.success("Faculty successfully created");
    else return toast.error("Error creating Faculty");
  }


  return (
    <>
      <div className='w-full h-full overflow-y-scroll '>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Create A Student</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usernam">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernam"
              type="text"
              placeholder="First Name"
              {...register("fname", { required: true, minLength: 3 })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usernamee">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernamee"
              type="text"
              placeholder="Last Name"
              {...register("lname", { required: true, minLength: 3 })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, minLength: 3 })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usernameee">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernameee"
              type="text"
              placeholder="Username"
              {...register("Username", { required: true, minLength: 3 })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date Of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              placeholder="DoB"
              {...register("dob", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone Number"
              {...register("phone", { required: true, minLength: 3 })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnic">
              CNIC
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnic"
              type="text"
              placeholder="CNIC"
              {...register("cnic", { required: true, minLength: 3 })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              type="text"
              placeholder="Gender"
              {...register("gender", { required: true, minLength: 3 })}
            />
          </div>


          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 3 })}
            />
          </div>

          <div className="flex items-center justify-between">
            <input
              className="cursor-pointer bg-qblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Create Faculty" // Use `value` instead of children
            />
          </div>
      </form>
    </div>



      </div>
    </>
  )
}

export default faculty