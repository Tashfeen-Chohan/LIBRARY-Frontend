import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admin_Dashboard = () => {

  const navigate = useNavigate()
  async function verification(){
    try {
      const res = axios.get("http://localhost:3000/adminDashboard")
      if (res.status !== 200){
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    verification()
  }, [])

  return (
    <div>
      Admin Dashboard
    </div>
  )
}

export default Admin_Dashboard
