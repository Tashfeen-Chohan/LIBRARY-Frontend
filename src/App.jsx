import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Error from "./components/Error";
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
