// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/Header"
import Books from "./components/Book/Books";
import Home from "./components/Home"
import AddBook from "./components/AddBook";
import BooksAvail from "./components/Book/BooksAvail";
import BooksUnAvail from "./components/Book/BooksUnAvail";
import BookDetail from "./components/Book/BookDetail";


import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Header />
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element ={<Home />} exact />
          <Route path="/add" element ={<AddBook />} exact/>
          <Route path="/books" element ={<Books />} exact/>
          <Route path="/books_avail" element={<BooksAvail />} exact/>
          <Route path="/books_unavail" element={<BooksUnAvail />} exact/>
          {/* <Route path="/book" element ={<Book />} exact/> */}
          <Route path= "/books/:id" element={<BookDetail />} exact/>
        </Routes>
      </main>

    </React.Fragment>

  );
}

export default App;
