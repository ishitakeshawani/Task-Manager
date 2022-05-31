import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  return (
    <nav class="navbar semibold-font-weight color">
      <Link class="nav-link link-no-style" to="/">
        Home
      </Link>
      <div class="nav-right-items">
        <i class="fas fa-download nav-link nav-icon"></i>
      </div>
    </nav>
  );
}
