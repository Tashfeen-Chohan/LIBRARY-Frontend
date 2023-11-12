import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Error from "./pages/Error";
import { BookContext } from "./contexts/BookContext";
import Staff_Register from "./pages/Staff_Register";
import Staff_Login from "./pages/Staff_Login";
import Navbar from "./components/Navbar";
import Librarian_Dashboard from "./pages/Librarian_Dashboard"
import Admin_Dashboard from "./pages/Admin_Dashboard"
import Cookies from "js-cookie";

const App = () => {

  const {token, setToken, role} = useContext(BookContext)

  useEffect(() => {
    setToken(Cookies.get("token"))
  }, [token])

  return (
    <>
        <BrowserRouter>
          { token && <Navbar/>}
          <Routes>
            <Route path="/" element={token ? <Home /> : <Staff_Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/register-staff" element={<Staff_Register/>}/>
            <Route path="/login-staff" element={<Staff_Login/>}/>
            <Route path="/dashboard-librarian" element={role ? <Librarian_Dashboard/> : <Staff_Login/>}/>
            <Route path="/dashboard-admin" element={<Admin_Dashboard/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
