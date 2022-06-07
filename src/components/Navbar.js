import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="main-heading">Movies App</h1>
        </Link>
        <Link to="/favourites" style={{ textDecoration: "none" }}>
          <h1 className="favourite">Favourites</h1>
        </Link>
      </div>
    );
  }
}
