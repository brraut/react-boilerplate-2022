import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeIndex from "./pages/home/Index";
import About from "./pages/home/About";
import DashboardIndex from "./pages/dashboard/Index";
import User from "./pages/dashboard/User";
import Account from "./pages/dashboard/Account";
import "./styles/globals.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashboardIndex />}>
          <Route path="user" element={<User />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
