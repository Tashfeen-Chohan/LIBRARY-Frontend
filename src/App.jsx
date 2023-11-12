import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Error from "./pages/Error";
import { BookContext } from "./contexts/BookContext";
import User_Register from "./pages/User_Register";
import User_Login from "./pages/User_Login";
import Navbar from "./components/Navbar";
import Librarian_Dashboard from "./pages/Librarian_Dashboard"
import Admin_Dashboard from "./pages/Admin_Dashboard"
import Cookies from "js-cookie";

const App = () => {

  const {isLoggedIn, role} = useContext(BookContext)

  
  return (
    <>
        <BrowserRouter>
          { isLoggedIn && <Navbar/>}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/user-register" element={<User_Register/>}/>
            <Route path="/user-login" element={<User_Login/>}/>
            <Route path="/librarian-dashboard" element={<Librarian_Dashboard/>}/>
            <Route path="/admin-dashboard" element={<Admin_Dashboard/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
