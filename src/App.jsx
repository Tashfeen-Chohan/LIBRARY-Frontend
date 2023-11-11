import React, { useContext, useState } from "react";
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
  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)
  return (
    <>
      <BookContextProvider>
        <BrowserRouter>
          { token && <Navbar setToken={setToken} setRole={setRole}/>}
          <Routes>
            <Route path="/" element={token ? <Home /> : <Staff_Login setToken={setToken} setRole={setRole}/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/register-staff" element={<Staff_Register/>}/>
            <Route path="/login-staff" element={<Staff_Login setToken={setToken}/>}/>
            <Route path="/dashboard-librarian" element={role ? <Librarian_Dashboard/> : <Staff_Login/>}/>
            <Route path="/dashboard-admin" element={role ? <Admin_Dashboard/> : <Staff_Login/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </BookContextProvider>
    </>
  );
};

export default App;
