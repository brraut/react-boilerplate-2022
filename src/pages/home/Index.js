import React from "react";
import { Link } from "react-router-dom";

export default function HomeIndex() {
  return (
    <div className="home">
      <div className="logo-wrapper">
        <img src="/logo.png" alt="Scodus Innovations Logo" />
      </div>
      <h4 className="mb-3">Basic Boiler Plate to Begin With</h4>
      <ul>
        <li>React Router 6</li>
        <li>Bootstrap 5</li>
        <li>Auth Setup</li>
      </ul>
      <Link to="/dashboard" className="btn">
        Go to Dashboard
      </Link>
    </div>
  );
}
