import { createBrowserRouter } from "react-router-dom";
import Main from "../../Component/Layout/Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

        ]
    }
])