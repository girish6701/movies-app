import React, { Component } from "react";
import { movies } from "../demo-data";

export default class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      hoverID: "",
    };
  }

  render() {
    const moviesArr = movies.results;
    return (
      <div>
        <h2 className="text-center" style={{ marginTop: "1.5rem" }}>
          <strong>Trending</strong>
        </h2>
        <div className="movie-list">
          {moviesArr.map((movie) => {
            return (
              <div
                className="card movie-card"
                onMouseEnter={() => this.setState({ hoverID: movie.id })}
                onMouseLeave={() => this.setState({ hoverID: "" })}
              >
                <img
                  src="https://marketplace.canva.com/EAE4sZqehD4/1/0/1131w/canva-gray-%26-black-monochrome-blind-forest-movie-present-poster-PRZ-uOOwgf0.jpg"
                  className="card-img-top movie-img"
                  alt="..."
                />
                <div className="card-body movie-cont">
                  <h5 className="card-title">{movie.title}</h5>
                </div>
                {this.state.hoverID == movie.id && (
                  <div className="btn-wrapper">
                    <a href="#" className="btn btn-primary movie-btn">
                      Add to Favourites
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="page-cont">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
