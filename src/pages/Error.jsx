import React from 'react'
import errorImg from "../assets/errorImg.webp"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Link to={"/"}>
        <img src={errorImg} alt="Page not found!" />
      </Link>
    </div>
  )
}

export default Error
