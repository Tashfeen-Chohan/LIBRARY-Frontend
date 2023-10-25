import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Header = () => {

  const {search, setSearch} = useContext(BookContext)

  return (
    <>
      {/* =====================> TITLE & SEARCH <===================== */}
      <h1 className="text-2xl md:text-4xl md:mb-5 mt-14 px-2 font-bold text-center text-black">
        LIBRARY MANAGMENT SYSTEM
      </h1>
      {/* SEARCH BOX */}
      <div className="mt-7 md:w-full flex justify-center items-center gap-5">
        <input
          type="text"
          placeholder="Search any book here..."
          name="search"
          value={search}
          autoFocus={true}
          onChange={(e) => setSearch(e.target.value)}
          className="shadow-lg border-b-2 px-1 py-[3px] md:w-[25%] text-lg outline-none focus:border-b-2 focus:border-black"
        />
        <button
          // onClick={searchBook}
          className="bg-gray-700 text-white py-1 px-3 md:px-4 rounded hover:bg-black transition-colors duration-500"
        >
          Search
        </button>
      </div>
      {/* HORIZONTAL LINE */}
      <div className="w-full bg-slate-500 h-[1px] mt-8 md:mt-14"></div>
    </>
  );
};

export default Header;
