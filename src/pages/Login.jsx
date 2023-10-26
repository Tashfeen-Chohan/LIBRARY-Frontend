import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {BsFillKeyFill} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
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
    const {email, password} = user;
    if (email && password){
      try {
        const res = await axios.post("http://localhost:3000/api/auth", user)
        localStorage.setItem("token", res.data.token)
        setUser({})
        navigate("/")
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
          Sign in
        </h1>

        <div className="flex justify-center items-center gap-5 flex-col md:flex-row px-5 ">
          <div className="flex-1 flex justify-center items-center md:mt-[-50px]">
            <FaUserLock size={130} />            
          </div>

          {/* LOGIN FORM */}
          <div className="md:flex-1">
            <form onSubmit={handleSubmit} className="p-8">
              

              {/* EMAIL */}
              <div className="flex justify-center items-center gap-6 mb-4">
                <label htmlFor="email" className="text-2xl">
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
                <label htmlFor="password" className="text-2xl">
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

              {/* SIGN IN BUTTON */}
              <div className="pt-2 w-full">
                <button
                  type="submit"
                  className="bg-gray-700 w-full text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500"
                >
                  Sign in
                </button>
              </div>

              <div className="mt-3 flex justify-center items-center gap-3">
                <div className="bg-slate-500 h-[1px] w-full"></div>
                <span>OR</span>
                <div className="bg-slate-500 h-[1px] w-full"></div>
                <hr />
              </div>

              {/* SIGN UP BUTTON */}
              <div className="flex justify-between items-center">
                <div>Don't have any account? </div>
                <div className="mt-2">
                  <Link to={"/register"}>
                    <button className="bg-gray-700 text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">
                      Sign up
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

export default Login;
