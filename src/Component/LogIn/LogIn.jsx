import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UseContext } from "../../Context/AuthContext/AuthContext";
import image from "./121421-login.gif"

const LogIn = () => {
  const{logInUser} = useContext(UseContext)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const handleSubmit=(event)=>{
    event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        logInUser(email,password)
        .then(result=>{
          const user =result.user;
          console.log(user);
          navigate(from, { replace: true });
          alert('successfully log in ')
        })
        .catch(error=>{
          console.error('error',error)
        })

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200 z-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                required
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img src={image} alt="" />
        
        </div>
      </div>
    </div>
    </form>
  );
};

export default LogIn;
