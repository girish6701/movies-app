import React, { Component } from "react";
import { movies } from "../demo-data";

export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      activeGenre: "All Genres",
      favouriteMovies: [],
      genres: [],
      searchText: "",
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("favourite-movies")) || [];
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
    data.map((movie) => {
      if (!tempArr.includes(genreids[movie.genre_ids[0]])) {
        tempArr.push(genreids[movie.genre_ids[0]]);
      }
    });
    tempArr.unshift("All Genres");
    this.setState({ favouriteMovies: [...data], genres: [...tempArr] });
  }

  handleGenre = (e) => {
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
    let genreVal = e.currentTarget.textContent;
    this.setState({ activeGenre: genreVal });
    let data = JSON.parse(localStorage.getItem("favourite-movies")) || [];
    if (genreVal === "All Genres") {
      this.setState({ favouriteMovies: [...data] });
      return;
    }
    let temp = data.filter((movie) => {
      return genreids[movie.genre_ids[0]] == genreVal;
    });
    this.setState({ favouriteMovies: [...temp] });
  };

  handleSearch = (e) => {
    let searchVal = e.currentTarget.value;
    this.setState({ searchText: searchVal }, this.filterSearch);
  };

  filterSearch = () => {
    console.log(this.state.searchText);
    let data = JSON.parse(localStorage.getItem("favourite-movies")) || [];
    let temp = [];
    if (this.state.searchText === "") {
      temp = [...data];
      console.log(temp);
    } else {
      temp = data.filter((movie) => {
        let title = movie.original_title.toLowerCase();
        return title.includes(this.state.searchText.toLowerCase());
      });
      console.log(temp);
    }
    this.setState({ favouriteMovies: [...temp] });
  };

  sortDesc = (criteria) => {
    let data = JSON.parse(localStorage.getItem("favourite-movies")) || [];
    data.sort(function (objA, objB) {
      return objB[criteria] - objA[criteria];
    });
    this.setState({ favouriteMovies: [...data] });
  };

  sortAsc = (criteria) => {
    let data = JSON.parse(localStorage.getItem("favourite-movies")) || [];
    data.sort(function (objA, objB) {
      return objA[criteria] - objB[criteria];
    });
    this.setState({ favouriteMovies: [...data] });
  };
  
  handleDelete = (e) => {
    let id = e.currentTarget.dataset["id"];
    let data = JSON.parse(localStorage.getItem("favourite-movies")) || [];
    data = data.filter((movie) => {
      return movie.id != id;
    });
    this.setState({ favouriteMovies: data });
    localStorage.setItem("favourite-movies", JSON.stringify(data));
  };

  render() {
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

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="list-cont">
                <ul className="list-group">
                  {this.state.genres.map((genre) => {
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
                <input
                  type="text"
                  className="input-group-text col"
                  onChange={(e) => {
                    this.handleSearch(e);
                  }}
                />
                <input type="number" className="input-group-text col" />
              </div>
              <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">
                        <i
                          className="fa-solid fa-caret-up"
                          onClick={() => {
                            this.sortDesc("popularity");
                          }}
                        ></i>
                        Popularity
                        <i
                          className="fa-solid fa-caret-down"
                          onClick={() => {
                            this.sortAsc("popularity");
                          }}
                        ></i>
                      </th>
                      <th scope="col">
                        <i
                          className="fa-solid fa-caret-up"
                          onClick={() => {
                            this.sortDesc("vote_average");
                          }}
                        ></i>
                        Ratings
                        <i
                          className="fa-solid fa-caret-down"
                          onClick={() => {
                            this.sortAsc("vote_average");
                          }}
                        ></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.favouriteMovies.map((movie) => {
                      return (
                        <tr>
                          <th scope="row">
                            <img
                              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                              className="favourite-img"
                            />
                            {movie.title}
                          </th>
                          <td>{genreids[movie.genre_ids[0]]}</td>
                          <td>{movie.popularity}</td>
                          <td>{movie.vote_average}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={this.handleDelete}
                              data-id={movie.id}
                            >
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
