import React from 'react'
import Header from "./Header"

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo' />
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1
          className='font-bold text-3xl py-4 '>Sign In</h1>
        <input
          type='text'
          placeholder='Email Address'
          className=' p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
          Sign In
        </button>
        <h1
          className='ml-32'>OR</h1>
        <button className='p-4 my-6 bg-gray-500 w-full rounded-lg'>
          Use a sign-in code
        </button>
        <button className='w-full rounded-lg'>
          Forgot password?
        </button>
        <p className='py-4'>New to Netflix? Sign Up Now</p>
      </form>
    </div>
  )
}

export default Login
