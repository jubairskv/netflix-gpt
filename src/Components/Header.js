import React from 'react'
import { LOGO } from '../Utils/constant'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../Utils/fireBase';
import { signOut } from "firebase/auth";
import { useEffect } from "react"
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from '../Utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user)
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();

  }, [])

  const handleGptSearchClick = () =>{
    //toggle GPT search
     dispatch(toggleGptSearchView())
  }


  return (
    <div className='flex absolute justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={LOGO} alt='logo' />
      {user && (
        <div className='flex p-2 '>
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchClick}>
          GPT Search
          </button>
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
