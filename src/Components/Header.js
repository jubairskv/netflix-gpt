import React from 'react'
import { LOGO } from '../Utils/Constant'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { auth } from '../Utils/fireBase';
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
 // console.log(user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='flex absolute justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={LOGO} alt='logo' />
      {user && (<div className='flex p-2 '>
        <img className='w-12 h-12'
          alt="icon-url"
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className='font-bold text-white'>
          (Sign out)
        </button>
      </div>)}
    </div>
  )
}


export default Header
