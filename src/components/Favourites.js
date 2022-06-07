import React, { Component } from "react";
import { movies } from "../demo-data";

export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      activeGenre: "All Genres",
    };
  }

  handleGenre = (e) => {
    this.setState({ activeGenre: e.currentTarget.textContent });
  };

  render() {
    let moviesArr = movies.results;

    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let tempArr = [];
    moviesArr.map((movie) => {
      if (!tempArr.includes(genreids[movie.genre_ids[0]])) {
        tempArr.push(genreids[movie.genre_ids[0]]);
      }
    });
    tempArr.unshift("All Genres");

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="list-cont">
                <ul className="list-group">
                  {tempArr.map((genre) => {
                    if (this.state.activeGenre == genre) {
                      return (
                        <li
                          onClick={this.handleGenre}
                          className="list-group-item active-genre"
                        >
                          {genre}
                        </li>
                      );
                    } else {
                      return (
                        <li
                          onClick={this.handleGenre}
                          className="list-group-item genre"
                        >
                          {genre}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <input type="text" className="input-group-text col" />
                <input type="number" className="input-group-text col" />
              </div>
              <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Ratings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {moviesArr.map((movie) => {
                      return (
                        <tr>
                          <th scope="row">
                            <img
                              src="https://img.fruugo.com/product/0/70/99799700_max.jpg"
                              className="favourite-img"
                            />
                            {movie.title}
                          </th>
                          <td>{genreids[movie.genre_ids[0]]}</td>
                          <td>{movie.popularity}</td>
                          <td>{movie.vote_average}</td>
                          <td>
                            <button type="button" className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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
        </div>
      </div>
    );
  }
}
