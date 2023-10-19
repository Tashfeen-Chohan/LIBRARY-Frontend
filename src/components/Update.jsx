import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import {BiSolidBookOpen, BiSolidCategory, BiSolidCopy} from 'react-icons/bi'
import {GiSpellBook} from 'react-icons/gi'
import {FaPencilAlt} from 'react-icons/fa'
import {MdPublish} from 'react-icons/md'
import { BsCurrencyDollar } from 'react-icons/bs'

const Update = () => {

  const {book, setBook} = useContext(BookContext)

  // HANDLE CHANGE
  function handleChange(e){
    const {name, value} = e.target
    setBook({
      ...book,
      [name]: value
    })
  }

  // HANDLE SUBMIT
  function handleSubmit(e){
    e.preventDefault()
    alert("Book updated successfullly")

  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className='shadow-lg  md:py-5 w-[90%] md:max-w-xl rounded-md'>
        <h1 className='font-bold text-3xl md:text-4xl my-5 text-center'>UPDATE BOOK</h1>

        <div className='flex justify-center items-center gap-5 flex-col md:flex-row px-5 '>
          <div className='flex-1' >
            {/* MOBILE */}
            {/* <GiOpenBook size={120} className='md:hidden'/> */}
            <GiSpellBook size={120} className='md:hidden'/>
            {/* LAPTOP */}
            {/* <GiOpenBook size={200} className='hidden md:block'/> */}
            <GiSpellBook size={200} className='hidden md:block'/>
          </div>
          {/* ADD BOOK FORM */}
          <div className='flex-1'>
            <form onSubmit={handleSubmit} className='p-8'>
              {/* TITLE */}
              <div className='flex justify-center items-center gap-6 mb-4'>
                <label htmlFor="title" className='text-2xl'><BiSolidBookOpen/></label>
                <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" autoFocus={true} placeholder='Book Title' name='title' id='title' value={book.title} onChange={handleChange} />
              </div>

              {/* AUTHOR */}
              <div className='flex justify-center items-center gap-6 mb-4'>
                <label htmlFor="author" className='text-2xl'><FaPencilAlt/></label>
                <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" placeholder='Book Author' name='author' id='author' value={book.author} onChange={handleChange} />
              </div>

              {/* PUBLISHER */}
              <div className='flex justify-center items-center gap-6 mb-4'>
                <label htmlFor="publisher" className='text-2xl'><MdPublish/></label>
                <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" placeholder='Book Publisher' name='publisher' id='publisher' value={book.publisher} onChange={handleChange} />
              </div>

              {/* CATEGORY */}
              <div className='flex justify-center items-center gap-6 mb-4'>
                <label htmlFor="category" className='text-2xl'><BiSolidCategory/></label>
                <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" placeholder='Book Category' name='category' id='category' value={book.category} onChange={handleChange} />
              </div>

              {/* COPIES */}
              <div className='flex justify-center items-center gap-6 mb-4'>
                <label htmlFor="copies" className='text-2xl'><BiSolidCopy/></label>
                <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="number" placeholder='Book Copies' name='copies' id='copies' value={book.copies} onChange={handleChange} />
              </div>

              {/* PRICE */}
              <div className='flex justify-center items-center gap-6 mb-4'>
                <label htmlFor="price" className='text-2xl'><BsCurrencyDollar/></label>
                <input className='border-b-2 text-lg px-1 border-gray-300 outline-none focus:border-black' type="number" placeholder='Book Price in dollars' name='price' id='price' value={book.price} onChange={handleChange} />
              </div>

              {/* ADD BOOK BUTTON */}
              <div className="mt-7 w-full">
                <button type='submit' className="bg-gray-700 w-full text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">Update Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
