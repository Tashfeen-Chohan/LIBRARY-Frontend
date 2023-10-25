import React from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { AiFillBackward, AiFillForward } from "react-icons/ai";


const Pagination = () => {
  const {page, setPage, prevPage, nextPage, totalPages} = useContext(BookContext)

  return (
    <div className="flex items-center space-x-2 mt-4">
      <span className="text-gray-600">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-[2px] py-[2px text-slate-600 rounded focus:outline-none"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <AiFillBackward className="w-6 h-6" />
      </button>
      <span className="text-gray-600">{prevPage}</span>
      <span className="flex items-center justify-center h-7 w-7 bg-slate-600 text-white rounded-md font-semibold ">
        {page}
      </span>
      <span className="text-gray-600">{nextPage}</span>
      <button
        className="px-[2px] py-[2px] text-slate-600 rounded focus:outline-none"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        <AiFillForward className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Pagination;
