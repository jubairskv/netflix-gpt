import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/fireBase";
import Login from "./Login"
import Browser from "./Browser"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";


const Body = () => {

    const dispatch =useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser />
        },

    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.log(user)
              const {uid ,email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL})) 
            } else {
              dispatch(removeUser());
            }
          });
    },[])

    return (
        <div>
            < RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;