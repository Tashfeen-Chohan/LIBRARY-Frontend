import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Error from "./pages/Error";
import { BookContextProvider } from "./contexts/BookContext";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const user = localStorage.getItem("token")
  return (
    <>
      <BookContextProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={user ? <Home/> : <Login/>} /> */}
            {user && <Route path="/" element={<Home/>}/>}
            <Route path="/" element={<Navigate replace to="/login"/>}/>
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </BookContextProvider>
    </>
  );
};

export default App;
