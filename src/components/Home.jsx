import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";
import axios from "axios";

const Home = () => {
  const {
    bookData,
    setBookData,
    setLoading,
    setError,
    loading,
    error,
    fetchBooks,
  } = useContext(BookContext);
  const [search, setSearch] = useState("");

  // FILTERING BOOK [SEARCH FUNCTIONALITY]
  async function searchBook() {
    //  IF SEARCH QUERY FOUND
    if (search) {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3000/api/book?search=${search}`
        );
        setBookData(res.data.books);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      // IF SEARCH QUERY NOT FOUND, FETCH ALL BOOKS
    } else {
      fetchBooks();
    }
  }

  useEffect(() => {
    searchBook();
  }, [search]);

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
    <div className="flex justify-center items-center flex-col">
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
          onClick={searchBook}
          className="bg-gray-700 text-white py-1 px-3 md:px-4 rounded hover:bg-black transition-colors duration-500"
        >
          Search
        </button>
      </div>
      {/* HORIZONTAL LINE */}
      <div className="w-full bg-slate-500 h-[1px] mt-8 md:mt-14"></div>

      {/* =====================> TABLE <===================== */}

      {/* ADD BOOK BUTTON */}
      <div className="w-[80%] md:w-[85%] 2xl:max-w-5xl mt-5 flex justify-between items-center">
        <div className="bg-slate-700  text-white inline-block px-2 py-1 rounded shadow-md">
            Total Books: {bookData.length}
          </div>
        <Link to={"/create"}>
          <button className=" bg-blue-500 shadow-md text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">
            Add Book
          </button>
        </Link>
      </div>

      {/* LOADING STATE */}
      <div
        className={
          loading ? "mt-10 flex justify-center items-center" : "hidden"
        }
      >
        <p className="font-bold text-yellow-500">Loading...</p>
      </div>

      {/* ERROR STATE */}
      <div
        className={error ? "flex mt-10 justify-center items-center" : "hidden"}
      >
        <p className="font-bold text-red-500">
          Error occured during fetching the data...
        </p>
      </div>

      {/* BOOKS TABLE */}
      <div className="w-[80%] md:w-[85%] 2xl:max-w-5xl mt-6 md:mt-3 mb-14 mx-auto">
        <h1 className="font-bold text-center mb-6 text-2xl md:text-3xl">
          BOOKS
        </h1>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                #
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Title{" "}
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
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
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
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <Link to={`/update/${val._id}`}>
                    <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteBook(val._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
