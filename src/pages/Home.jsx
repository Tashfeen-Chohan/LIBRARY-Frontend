import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BookContext } from "../contexts/BookContext";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Table from "../components/Table";

const Home = () => {
  const {
    page,
    setPage,
    totalPages,
    setTotalPages,
    totalBooks,
    setTotalBooks,
    bookData,
    setBookData,
    error,
    setError,
    loading,
    setLoading,
    sortBy,
    setSortBy,
    nextPage,
    prevPage,
    search,
    setSearch,
    fetchBooks,
  } = useContext(BookContext);
  const [searchError, setSearchError] = useState(false);


  return (
    <div className="flex justify-center items-center flex-col">
      {/* =====================> TITLE & SEARCH <===================== */}
      <Header/>

      {/* =====================> TABLE <===================== */}

      

      {/* BOOKS TABLE */}
      <div className="w-[85%] 2xl:max-w-5xl mt-6 mb-14 mx-auto">
        <Table/>
        {/* PAGINATION */}
        <Pagination/>
        {/* <div class="flex items-center space-x-2 mt-4">
          <span class="text-gray-600">
            Page { page } of { totalPages }
          </span>
          <button
            class="px-[2px] py-[2px text-slate-600 rounded focus:outline-none"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <AiFillBackward class="w-6 h-6" />
          </button>
          <span class="text-gray-600">{prevPage }</span>
          <span class="flex items-center justify-center h-7 w-7 bg-slate-600 text-white rounded-md font-semibold ">{ page }</span>
          <span class="text-gray-600">{ nextPage }</span>
          <button
            class="px-[2px] py-[2px] text-slate-600 rounded focus:outline-none"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            <AiFillForward class="w-6 h-6" />
          </button>
        </div> */}
        
      </div>
    </div>
  );
};

export default Home;
