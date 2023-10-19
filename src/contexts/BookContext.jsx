import React, { createContext, useState } from "react";

// CREATING BOOK CONTEXT
export const BookContext = createContext();

// BOOK CONTEXT PROVIDER
export const BookContextProvider = ({ children }) => {
  // BOOK ATTRIBURES
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    category: "",
    copies: "",
    price: ""
  });

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
};
