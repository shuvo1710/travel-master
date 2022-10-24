import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { UseContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(UseContext)
   const location = useLocation();
   if(!loading){
    return <div className='flex justify-center items-center'><ClipLoader color="#36d7b7" /></div>
   }
   if(user&& user?.uid){
    return children
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;