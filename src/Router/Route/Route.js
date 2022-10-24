import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home/Home";
import HotelDetails from "../../Component/HotelDetails/HotelDetails";
import Main from "../../Component/Layout/Main/Main";
import LogIn from "../../Component/LogIn/LogIn";
import Register from "../../Component/Register/Register";
import RoomService from "../../Component/RoomService/RoomService";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/hotelDetails/:id",
                element:<HotelDetails></HotelDetails>,
                loader:({params})=> fetch(`http://localhost:5000/hotels/${params.id}`)
            },
            {
                path:"/service/:id",
                element:<RoomService></RoomService>,
                loader:({params})=> fetch(`http://localhost:5000/hotels/${params.id}`)
            }
        ]
    }
])