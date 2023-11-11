import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BookContextProvider } from "./contexts/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </BookContextProvider>
);
