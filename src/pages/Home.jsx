import React, { useEffect } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Table from "../components/Table";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    async function verifyCookie(){
      // IF TOKEN NOT FOUND
      if (!cookies.token){
        navigate("/user-login")
      }

      try {
        const res = await axios.post("http://localhost:3000/", {}, {withCredentials: true})

        // IF STATUS == FALSE
        if(!res.data.status){
          removeCookie("token")
          navigate("/user-login")
        } 
      } catch (error) {
        console.log("Error verifying cookie: ", error)
      }
    }
    verifyCookie()
  }, [cookies, removeCookie, navigate ])
 
  return (
    <div className="flex justify-center items-center flex-col">
      <Header/>
      <div className="w-[85%] 2xl:max-w-5xl mt-6 mb-14 mx-auto">
        <Table />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
