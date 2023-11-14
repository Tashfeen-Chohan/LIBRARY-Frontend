import React, { useContext, useEffect } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Table from "../components/Table";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BookContext } from "../contexts/BookContext";

const Home = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const {setIsLoggedIn, setRole, role} = useContext(BookContext)

  useEffect(() => {
    async function verifyCookie(){
      // IF TOKEN NOT FOUND
      if (!cookies.token){
        navigate("/user-login")
      }

      try {
        const res = await axios.post("http://localhost:3000/", {}, {withCredentials: true})
        if(res.data.status){
          setIsLoggedIn(true)
          setRole(res.data.role)
        }

        // IF STATUS == FALSE
        if(!res.data.status){
          removeCookie("token")
          navigate("/user-login")
        } 
      } catch (error) {
        console.log("Error verifying cookie: ", error)
        navigate("/user-login")
      }
    }
    verifyCookie()
  }, [cookies, removeCookie, navigate ])
 
  return (
    <div className="flex justify-center items-center flex-col">

      {role === "reader" && <h1>Welcome Reader</h1>}
      {role === "patron" && <h1>Welcome Reader</h1>}
      {role === "librarian" && <h1>Welcome Librarian</h1>}
      {role === "admin" && <h1>Welcome Admin</h1>}

      {/* <Header/>
      <div className="w-[85%] 2xl:max-w-5xl mt-6 mb-14 mx-auto">
        <Table />
        <Pagination />
      </div> */}
    </div>
  );
};

export default Home;
