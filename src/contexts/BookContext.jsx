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
    price: "",
  });
  // BOOKS DATA
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  // FETCHING BOOKS FROM DATABASE
  async function fetchBooks() {
    try {
      const res = await axios.get("http://localhost:3000/api/book");
      setBookData(res.data.books);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {  
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        book,
        setBook,
        bookData,
        setBookData,
        fetchBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
