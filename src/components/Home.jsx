import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState()

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">

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
          onChange={(e) => setSearch(e.target.value)}
          className="shadow-lg border-b-2 px-1 py-[2px] md:w-[25%] text-lg outline-none focus:border-b-2 focus:border-black"
        />
        <button className="bg-gray-700 text-white py-1 px-3 md:px-4 rounded hover:bg-black transition-colors duration-500">Search</button>
      </div>
      {/* HORIZONTAL LINE */}
      <div className="w-full bg-slate-500 h-[1px] mt-8 md:mt-14"></div>

      {/* =====================> TABLE <===================== */}

      {/* ADD BOOK BUTTON */}
      <div className="mt-5 relative w-full">
        <Link to={"/create"}>
          <button className="absolute right-6 md:right-20 bg-blue-500 text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">Add Book</button>
        </Link>
      </div>

      {/* BOOKS TABLE */}
      <div className="mt-6 relative">
        <h1 className="text-black font-bold text-2xl md:text-3xl text-center my-5 md:mb-7">BOOKS</h1>

        {/* <!-- component --> */}
      <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className=" border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">TITLE</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">AUTHOR</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">PUBLISHER</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">CATEGORY</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">COPIES</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row rounded mb-2 md:mb-0">
              <td className="mr-[-25px] p-2 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">TITLE</span>Database</td>
              <td className="mr-[-25px] p-2 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">AUTHOR</span>Hafeez</td>
              <td className="mr-[-25px] md:mr-0 p-2 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold ">PUBLISHER</span>GC University </td>
              <td className="mr-[-25px] p-2 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">CATEGORY</span>Programming</td>
              <td className="mr-[-25px] p-2 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">COPIES</span>10</td>
              <td className="mr-[-25px] p-2 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">ACTIONS</span>
                <Link to={"/update/:id"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-2">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border border-grey-500 md:border-none block md:table-row rounded mb-2 md:mb-0">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">TITLE</span>Programming Fundamentals</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">AUTHOR</span>Yahya Khurram</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">PUBLISHER</span>Fast</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">CATEGORY</span>Programming</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">COPIES</span>15</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">ACTIONS</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
              </td>
            </tr>
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Lillie Clark</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>lillie</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>lillie.clark@gmail.com</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>505-644-84X4</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Maribel Koch</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>maribelkoch</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>mkoch@yahoo.com</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-400-3X36</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
              </td>
            </tr>			
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default Home;
