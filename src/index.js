import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import "./server"
import Layout from './components/Layout';
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanLayout from './components/HostVanLayout';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanDescription from './pages/Host/HostVanDescription';
import HostVanPhotos from './pages/Host/HostVanPhotos';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans-list" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanLayout />} >
                <Route index element={< HostVanDescription />} />
                <Route path='pricing' element={< HostVanPricing />} />
                <Route path='photos' element={< HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />);




