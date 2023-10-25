import React from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Table from "../components/Table";

const Home = () => {
  
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <div className="w-[85%] 2xl:max-w-5xl mt-6 mb-14 mx-auto">
        <Table />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
