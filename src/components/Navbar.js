import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <h1 className="main-heading">Movies App</h1>
        <h1 className="favourite">Favourites</h1>
      </div>
    );
  }
}
