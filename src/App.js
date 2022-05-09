import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Index from "./components/Index/index";
import Dashboard from "./components/Dashboard/dashboard";
import TopBar from "./components/TopBar/topBar";
import NavBar from "./components/NavBar/navBar";
import RightDrawer from "./components/RightDrawer/rightDrawer";
import Footer from "./components/Footer/footer";
import "./App.scss";

function App() {
  const toggle = useSelector((state) => state.topBar.toggle);
  return (
    <div className="wrapper">
      <TopBar />
      <div className="app">
        <NavBar />
        <RightDrawer />
        <div
          className={
            toggle ? "content-page-toggle col-12" : "content-page col-12"
          }
        >
          <Routes>
            <Route path="/" exac element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
