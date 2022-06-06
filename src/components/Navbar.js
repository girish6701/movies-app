import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <h1 className="main-heading">
          <a>Movies App</a>
        </h1>
        <h1 className="favourite">
          <a>Favourites</a>
        </h1>
      </div>
    );
  }
}
