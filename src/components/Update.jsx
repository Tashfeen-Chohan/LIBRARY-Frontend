// import React, { useContext, useEffect, useState } from 'react'
// import { BookContext } from '../contexts/BookContext'
// import {BiSolidBookOpen, BiSolidCategory, BiSolidCopy} from 'react-icons/bi'
// import {GiSpellBook} from 'react-icons/gi'
// import {FaPencilAlt} from 'react-icons/fa'
// import {MdPublish} from 'react-icons/md'
// import { BsCurrencyDollar } from 'react-icons/bs'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'

// const Update = () => {

//   const {book, setBook, fetchBooks} = useContext(BookContext)
//   const [error, setError] = useState()
//   const {id} = useParams()
//   const navigate = useNavigate()

//   const { title, author, publisher, category, copies, price } = book;

//   // FETCHING SINGLE BOOK FROM DATABASE
//   async function fetchSingleBook(id){
//     try {
//       const res = await axios.get("http://localhost:3000/api/book/" +id)
//       console.log(res)
//       setBook({
//         title: res.data.book.title,
//         author: res.data.book.author,
//         publisher: res.data.book.publisher,
//         category: res.data.book.category,
//         copies: res.data.book.copies,
//         price: res.data.book.price,
//       })
//     } catch (error) {
//       console.log(error)
//       setError(error.response.data.message)
//     }
//   }

//   useEffect(() => {
//     fetchSingleBook(id)
//   }, [])

//   // HANDLE CHANGE
//   function handleChange(e){
//     const {name, value} = e.target
//     setBook({
//       ...book,
//       [name]: value
//     })
//   }

//   // HANDLE SUBMIT
//   async function handleSubmit(e){
//     e.preventDefault()
//     if (title && author && publisher && category && copies && price){
//       try {
//         await axios.put("http://localhost:3000/api/book/" +id, book)
//         fetchBooks()
//         setBook({})
//         navigate("/")
//       } catch (error) {
//         setError(error.response.data.message)
//         console.log(error)
//       }
//     } else {
//       setError("All field are required!")
//     }
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center flex-col">
//       <div className='shadow-lg  md:py-5 w-[90%] md:max-w-xl rounded-md'>
//         <h1 className='font-bold text-3xl md:text-4xl my-5 text-center'>UPDATE BOOK</h1>

//         <div className='flex justify-center items-center gap-5 flex-col md:flex-row px-5 '>
//           <div className='flex-1' >
//             {/* MOBILE */}
//             {/* <GiOpenBook size={120} className='md:hidden'/> */}
//             <GiSpellBook size={120} className='md:hidden'/>
//             {/* LAPTOP */}
//             {/* <GiOpenBook size={200} className='hidden md:block'/> */}
//             <GiSpellBook size={200} className='hidden md:block'/>
//           </div>
//           {/* ADD BOOK FORM */}
//           <div className='flex-1'>
//             <form onSubmit={handleSubmit} className='p-8'>
//               {/* TITLE */}
//               <div className='flex justify-center items-center gap-6 mb-4'>
//                 <label htmlFor="title" className='text-2xl'><BiSolidBookOpen/></label>
//                 <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" autoFocus={true} placeholder='Book Title' name='title' id='title' value={title} onChange={handleChange} />
//               </div>

//               {/* AUTHOR */}
//               <div className='flex justify-center items-center gap-6 mb-4'>
//                 <label htmlFor="author" className='text-2xl'><FaPencilAlt/></label>
//                 <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" placeholder='Book Author' name='author' id='author' value={author} onChange={handleChange} />
//               </div>

//               {/* PUBLISHER */}
//               <div className='flex justify-center items-center gap-6 mb-4'>
//                 <label htmlFor="publisher" className='text-2xl'><MdPublish/></label>
//                 <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" placeholder='Book Publisher' name='publisher' id='publisher' value={publisher} onChange={handleChange} />
//               </div>

//               {/* CATEGORY */}
//               <div className='flex justify-center items-center gap-6 mb-4'>
//                 <label htmlFor="category" className='text-2xl'><BiSolidCategory/></label>
//                 <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="text" placeholder='Book Category' name='category' id='category' value={category} onChange={handleChange} />
//               </div>

//               {/* COPIES */}
//               <div className='flex justify-center items-center gap-6 mb-4'>
//                 <label htmlFor="copies" className='text-2xl'><BiSolidCopy/></label>
//                 <input className='border-b-2 text-lg px-1 border-gray-500 outline-none focus:border-black' type="number" placeholder='Book Copies' name='copies' id='copies' value={copies} onChange={handleChange} />
//               </div>

//               {/* PRICE */}
//               <div className='flex justify-center items-center gap-6 mb-4'>
//                 <label htmlFor="price" className='text-2xl'><BsCurrencyDollar/></label>
//                 <input className='border-b-2 text-lg px-1 border-gray-300 outline-none focus:border-black' type="number" placeholder='Book Price in dollars' name='price' id='price' value={price} onChange={handleChange} />
//               </div>

//               {/* ERROR DIV */}
//               <div className={error ? "inline-block text-sm pl-1 mb-[3px]" : "hidden"}>
//                 <p className="text-red-500 font-bold">{error}</p>
//               </div>

//               {/* ADD BOOK BUTTON */}
//               <div className="w-full">
//                 <button type='submit' className="bg-gray-700 w-full text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">Update Book</button>
//               </div>
//               <div className="mt-2 w-full">
//                 <Link to={"/"}>
//                  <button onClick={() => setBook({})} className="bg-gray-700 w-full text-white py-1 px-3 rounded hover:bg-black transition-colors duration-500">Go Back</button>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Update
