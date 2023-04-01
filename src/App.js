import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Colors from "./Components/Colors";
import Borders from "./Components/Borders";
import Animations from "./Components/Animations";
import Other from "./Components/Other";
import Login from "./Components/Login";
import Charts from "./Components/Chart";

export default function App() {
  return (
    <>
      {/* <div id="wrapper" className="sidebar-toggled">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Nav />
            <div className="container-fluid">
              <Dashboard />
            </div>
          </div>
        </div>
      </div> */}
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Nav />
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/buttons" element={<Buttons />} />
                  <Route path="/colors" element={<Colors />} />
                  <Route path="/borders" element={<Borders />} />
                  <Route path="/animations" element={<Animations />} />
                  <Route path="/other" element={<Other />} />
                  {/* <Route path="/charts" element={<Charts />} /> */}
                  {/* <Route path="/login" element={<Login />} /> */}
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
