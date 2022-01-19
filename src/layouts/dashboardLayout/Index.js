import React from "react";
import { Link } from "react-router-dom";

function DashboardLayout({ children }) {
  return (
    <div id="layout">
      <div id="sidebar">
        <h5 className="text-center">Sidebar</h5>
        <ul>
          <li>
            <Link to="/dashboard/user">User</Link>
          </li>
          <li>
            <Link to="/dashboard/account">Account</Link>
          </li>
        </ul>
        <Link to="/" className="text-center btn">
          Go to Home
        </Link>
      </div>
      <div id="main">{children}</div>
    </div>
  );
}

export default DashboardLayout;
