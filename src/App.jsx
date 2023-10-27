import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Error from "./pages/Error";
import { BookContextProvider } from "./contexts/BookContext";
import Staff_Register from "./pages/Staff_Register";
import Staff_Login from "./pages/Staff_Login";
import Navbar from "./components/Navbar";
import Librarian_Dashboard from "./pages/Librarian_Dashboard"
import Admin_Dashboard from "./pages/Admin_Dashboard"

const App = () => {
  const user = localStorage.getItem("token")
  return (
    <>
      <BookContextProvider>
        <BrowserRouter>
          {/* { user && <Navbar/>} */}
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={user ? <Home/> : <Login/>} /> */}
            {/* {user && <Route path="/" element={<Home/>}/>} */}
            {/* <Route path="/" element={<Navigate replace to="/login"/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/register-staff" element={<Staff_Register/>}/>
            <Route path="/login-staff" element={<Staff_Login/>}/>
            <Route path="/dashboard-librarian" element={<Librarian_Dashboard/>}/>
            <Route path="/dashboard-admin" element={<Admin_Dashboard/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </BookContextProvider>
    </>
  );
};

export default App;
