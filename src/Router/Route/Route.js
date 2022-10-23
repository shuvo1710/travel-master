import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home/Home";
import Main from "../../Component/Layout/Main/Main";
import LogIn from "../../Component/LogIn/LogIn";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () =>fetch('http://localhost:5000/hotels')
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            }
        ]
    }
])