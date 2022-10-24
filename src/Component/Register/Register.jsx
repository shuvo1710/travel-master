import { Result } from "postcss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext, { UseContext } from "../../Context/AuthContext/AuthContext";

const Register = () => {
    const {createUser} = useContext(UseContext)
    const handleSubmit = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user)
            alert('successfullly register')
        })
        .then(error=>{
            console.error('error', error)
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img src="" alt="" />
        </div>
      </div>
    </div>
    </form>
  );
};

export default Register;
