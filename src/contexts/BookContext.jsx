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
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // FETCHING BOOKS FROM DATABASE WITH PAGINATION
  async function fetchBooks() {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/book?page=${page}&limit=${limit}`
      );
      setBookData(res.data.books);
      setTotalPages(res.data.totalPages);
      setTotalBooks(res.data.totalBooks);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [page, limit]);
  

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
        sortBy,
        setSortBy,
        totalBooks,
        setTotalBooks,
        totalPages,
        setTotalPages,
        page,
        setPage
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
