import React, { useState } from "react";
import {  FaUserPlus } from "react-icons/fa";
import {  MdEmail } from "react-icons/md";
import {BsFillPersonFill, BsFillKeyFill} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const User_Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate()

  function handleChange(e) {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const {name, email, password} = user;
    if (name && email && password){
      try {
        await axios.post("http://localhost:3000/api/userRegister", user, {withCredentials: true})
        setUser({})
        navigate("/user-login")
      } catch (error) {
        setError(error.response.data.message)
      }
    } else {
      setError("Please fill all the fields!")
    }

  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="shadow-lg  md:py-5 w-[90%] md:max-w-xl rounded-md">
        <h1 className="font-bold text-3xl md:text-4xl my-5 text-center">
          SIGN UP
        </h1>

        <div className="flex justify-center items-center gap-5 flex-col md:flex-row px-5 ">
          <div className="flex-1 flex justify-center items-center md:mt-[-50px]">
            <FaUserPlus size={130} />            
          </div>

          {/* REGISTRATION FORM */}
          <div className="md:flex-1">
            <form onSubmit={handleSubmit} className="p-8">
              {/* NAME */}
              <div className="flex justify-center items-center gap-6 mb-4">
                <label htmlFor="name" className="text-2xl pt-2">
                  <BsFillPersonFill />
                </label>
                <input
                  className="border-b-2 text-lg px-1 border-gray-300 outline-none focus:border-black"
                  type="text"
                  autoFocus={true}
                  placeholder="Full Name"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL */}
              <div className="flex justify-center items-center gap-6 mb-4">
                <label htmlFor="email" className="text-2xl pt-2">
                  <MdEmail />
                </label>
                <input
                  className="border-b-2 text-lg px-1 border-gray-300 outline-none focus:border-black"
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              {/* PASSWORD */}
              <div className="flex justify-center items-center gap-6 mb-4">
                <label htmlFor="password" className="text-2xl pt-2">
                  <BsFillKeyFill />
                </label>
                <input
                  className="border-b-2 text-lg px-1 border-gray-300 outline-none focus:border-black"
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              {/* ERROR DIV */}
              <div
                className={
                  error ? "inline-block text-sm pl-1 mb-[3px]" : "hidden"
                }
              >
                <p className="text-red-500 font-bold">{error}</p>
              </div>

              {/* SIGN UP BUTTON */}
              <div className="pt-2 w-full">
                <button
                  type="submit"
                  className="bg-gray-700 w-full text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500"
                >
                  Sign up
                </button>
              </div>

              <div className="mt-3 flex justify-center items-center gap-3">
                <div className="bg-slate-500 h-[1px] w-full"></div>
                <span>OR</span>
                <div className="bg-slate-500 h-[1px] w-full"></div>
                <hr />
              </div>

              {/* SIGN IN BUTTON */}
              <div className="flex justify-between items-center">
                <div>Already have an account? </div>
                {/* GO BACK BUTTN */}
                <div className="mt-2">
                  <Link to={"/user-login"}>
                    <button className="bg-gray-700 text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Register;
