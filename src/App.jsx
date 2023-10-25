import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Error from "./pages/Error";
import { BookContextProvider } from "./contexts/BookContext";

const App = () => {
  return (
    <>
      <BookContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </BookContextProvider>
    </>
  );
};

export default App;
