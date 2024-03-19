import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./general/About";
import Home from "./general/Home";
import Services from "./general/Services";
import Blog from "./general/Blog";
import PageNotFound from "./general/PageNotFound";
import Register from "./general/Auth/Register";
import Login from "./general/Auth/Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
