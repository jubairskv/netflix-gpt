import React from 'react'
import Header from "./Header"
import { useState, useRef } from 'react'
import { checkValidData } from "../Utils/Validate"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Utils/fireBase"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  // const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const HandleButtonClick = () => {
    console.log(email.current.value)
    console.log(password.current.value)
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    console.log(message)
    if (message) return;

    // Sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage)
        });
    }
    else { //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"_"+errorMessage)
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            // ref={name}
            type='text'
            placeholder='Full Name'
            className=' p-4 my-4 w-full bg-gray-700 rounded-lg' />
        }
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className=' p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />

        <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={HandleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1
          className='ml-32'>OR</h1>
        <button className='p-4 my-6 bg-gray-500 w-full rounded-lg'>
          Use a sign-in code
        </button>
        <button className='w-full rounded-lg'>
          Forgot password?
        </button>
        <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
