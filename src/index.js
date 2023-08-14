import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import "./server"



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans-list" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)




