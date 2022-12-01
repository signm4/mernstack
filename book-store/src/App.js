// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/Header"
import { Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element ={<Home />} exact />
        </Routes>
      </main>

    </React.Fragment>

  );
}

export default App;
