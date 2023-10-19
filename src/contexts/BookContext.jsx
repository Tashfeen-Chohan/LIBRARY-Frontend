import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// CREATING BOOK CONTEXT
export const BookContext = createContext();

// BOOK CONTEXT PROVIDER
export const BookContextProvider = ({ children }) => {
  // BOOK ATTRIBURES
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    category: "",
    copies: "",
    price: ""
  });

  // BOOKS DATA 
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/book")
      .then((res) => {
        console.log(res)
        setBookData(res.data.books)
      })
      .catch(err => console.log(err))
  }, [bookData])

  return (
    <BookContext.Provider value={{ book, setBook, bookData, setBookData }}>
      {children}
    </BookContext.Provider>
  );
};
