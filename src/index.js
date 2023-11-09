import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Product from "./Page/Product";
// SPA ---> single page application
const log = false;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);
