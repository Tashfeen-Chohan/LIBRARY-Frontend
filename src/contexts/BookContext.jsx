import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
  const [search, setSearch] = useState("")
  const [searchError, setSearchError] = useState("")
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role, setRole] = useState(null)

  function isAuthenticated(){
    const token = Cookies.get("token")
    return !!token;
  }

  useEffect(() => {
    setIsLoggedIn(isAuthenticated())
  }, [isLoggedIn])


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
      setLimit(res.data.limit)
      setNextPage(res.data.nextPage)
      setPrevPage(res.data.prevPage)
      setLoading(false);
      setSearchError(false)
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

  // SEARCH FUNCTIONALITY
  async function searchBook() {
    //  IF SEARCH QUERY FOUND
    if (search) {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3000/api/book?search=${search}`
        );
        if (res.data.books.length === 0) {
          setLoading(false);
          setBookData([]);
          setSearchError(true);
        } else {
          setSearchError(false);
          setLoading(false);
          setBookData(res.data.books);
          setTotalBooks(res.data.totalBooks);
          setTotalPages(res.data.totalPages);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      // IF SEARCH DIDN'T SEARCH , FETCH ALL BOOKS
    } else {
      setSearchError(false);
      fetchBooks();
    }
  }

  useEffect(() => {
    // DEBOUNCING
    let timerOut = setTimeout(() => {
      searchBook();
    }, 400);
    return () => clearTimeout(timerOut);
  }, [search]);

  // SORTING BOOKS
  async function sortBooks() {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/book?sort=${sortBy}`
      );
      setBookData(res.data.books);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    sortBooks();
  }, [sortBy]);


  

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
        setPage,
        prevPage,
        nextPage,
        search,
        setSearch,
        searchError,
        setSearchError,
        isLoggedIn,
        setIsLoggedIn,
        role,
        setRole
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
