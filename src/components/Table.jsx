import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";
import axios from "axios";

const Table = () => {
  const {
    loading,
    error,
    searchError,
    sortBy,
    setSortBy,
    bookData,
    totalBooks,
    fetchBooks,
    role
  } = useContext(BookContext);

  // FUNCTION TO DELETE BOOK
  async function deleteBook(id) {
    try {
      await axios.delete("http://localhost:3000/api/book/" + id);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        {/* ADD / TOTAL BOOKS BUTTON */}
      <div className="flex justify-between items-center mb-5 md:mb-1" >
        <div className="bg-slate-700  text-white inline-block px-2 py-1 rounded shadow-md">
          Total Books: {totalBooks}
        </div>
          {role === 'admin' && <button className=" bg-blue-500 shadow-md text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">
            <Link to={"/create"}>
                Add Book
            </Link>
          </button>}
      </div>

      {/* BOOK HEADING */}
      <h1 className="font-bold text-center mb-4 md:mb-0 text-2xl md:text-3xl">BOOKS</h1>

      {/* LOADING STATE */}
      <div
        className={
          loading ? "mt-10 flex justify-center items-center" : "hidden"
        }
      >
        <p className="font-bold text-yellow-500">Loading...</p>
      </div>

      {/* SEARCH ERROR STATE */}
      <div
        className={
          searchError ? "flex mt-10 justify-center items-center" : "hidden"
        }
      >
        <p className="font-bold text-red-500">Book not found!</p>
      </div>

      {/* ERROR STATE */}
      <div
        className={error ? "flex mt-10 justify-center items-center" : "hidden"}
      >
        <p className="font-bold text-red-500">
          Error occured during fetching the data...
        </p>
      </div>

      {/* SORTING SELECT TAG */}
      <div
        className={
          loading || searchError
            ? "hidden"
            : "flex justify-end items-center md:mb-3"
        }
      >
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-700 shadow-md rounded text-white outline-none px-2 py-1"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="category">Category</option>
          <option value="price asc">Price Lowest</option>
          <option value="price desc">Price Highest</option>
          <option value="date desc">Date Newest</option>
          <option value="date asc">Date Oldest</option>
        </select>
      </div>

      {/* MAIN TABLE */}
      <table
        className={
          loading || error || searchError
            ? "hidden"
            : "min-w-full border-collapse block md:table"
        }
      >
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              #
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Title
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Author
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Publisher
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Category
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Copies
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Price
            </th>
            {role === "admin" && <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {bookData.map((val, index) => (
            <tr
              key={val._id}
              className="my-3 rounded shadow-md bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  #
                </span>
                {index + 1}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Title
                </span>
                {val.title}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Author
                </span>
                {val.author}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Publisher
                </span>
                {val.publisher}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Category
                </span>
                {val.category}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Copies
                </span>
                {val.copies}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Price
                </span>
                {val.price}
              </td>
              {role === "admin" && <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <Link to={`/update/${val._id}`}>
                  <button className="mr-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteBook(val._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                >
                  Delete
                </button>
              </td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
