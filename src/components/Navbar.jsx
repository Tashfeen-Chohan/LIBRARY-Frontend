import React, { useContext } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import Logo from "../assets/logo.png"
import User from '../assets/user.png'
import { Link, useNavigate } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate = useNavigate()
  const [cookies, removeCookie] = useCookies([])
  const {setIsLoggedIn} = useContext(BookContext)

  function logout(){
    removeCookie("token")
    setIsLoggedIn(false)
    navigate("/user-login")
    window.history.replaceState({}, document.title, "/user-login");
    window.location.reload()
  }

 
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-2 py-1 bg-slate-800 text-white mb-3">

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="md:pl-28 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* LOGO */}
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={Logo} alt="Logo" width={50} />
            </a>

            {/* MOBILE LOGOUT & USER ICON  */}
            <div className="flex justify-center items-center gap-5 ml-20">
              <img src={User} alt="User" className="lg:hidden h-7 w-7" />
              <button onClick={logout} className="lg:hidden bg-gray-200 rounded font-bold text-slate-800 px-2 py-[2px] hover:bg-white transition-colors duration-300">Logout</button>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu/>
            </button>
          </div>

          {/* NAV LIKS */}
          <div
            className={
              "lg:flex flex-grow items-center md:pr-28" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li  className="px-3 py-2 flex items-center text-xs md:text-lg uppercase  leading-snug text-white hover:opacity-75">
                <Link to={"/"}>HOME</Link>
              </li>
              <li className="px-3 py-2 flex items-center text-xs md:text-lg uppercase leading-snug text-white hover:opacity-75">
                ABOUT
              </li>
              <li className="px-3 py-2 flex items-center text-xs md:text-lg uppercase leading-snug text-white hover:opacity-75">
                CONTACT
              </li>
            </ul>
            <div className="flex justify-center items-center gap-6 ml-10">
              <img src={User} alt="User Icon" width={35} />
              <button onClick={logout} className="hidden lg:inline-block bg-gray-200 rounded text-lg font-bold text-slate-800 px-2 py-[1px] hover:bg-white transition-colors duration-300">Logout</button>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}