import { createBrowserRouter, useNavigate } from "react-router-dom"
import { RouterProvider } from "react-router-dom"

import { auth } from "../Utils/fireBase";
import Login from "./Login"
import Browser from "./Browser"



const Body = () => {

  

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

   

    return (
        
        <div>
            < RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;