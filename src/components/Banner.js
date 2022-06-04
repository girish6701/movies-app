import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="card banner-card">
        <img
          src="https://marketplace.canva.com/EAE4sZqehD4/1/0/1131w/canva-gray-%26-black-monochrome-blind-forest-movie-present-poster-PRZ-uOOwgf0.jpg"
          className="card-img-top banner-img"
          alt="..."
        />
        <div className="card-body banner-cont">
          <h5 className="card-title">The Blind Forest</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}
