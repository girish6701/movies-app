import React, { Component } from "react";
import axios from "axios";

export default class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      hoverID: "",
      pageArr: [1],
      movies: [],
      currPage: 1,
    };
  }

  async componentDidMount() {
    // const res = await axios.get(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=346d28f974e0de61538c2f2adc4796fe&language=en-US&page=1"
    // );
    // let movieData = res.data;
    // this.setState({ movies: [...movieData.results] });
    this.handleMovies();
  }

  handleMovies = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=346d28f974e0de61538c2f2adc4796fe&language=en-US&page=${
        page ? page : this.state.currPage
      }`
    );
    let movieData = res.data;
    this.setState({ movies: [...movieData.results] });
  };

  handleNext = () => {
    let tempArr = [];
    for (let i = 1; i <= this.state.pageArr.length + 1; i++) {
      tempArr.push(i);
    }

    this.setState(
      {
        currPage: tempArr.length,
        pageArr: [...tempArr],
      },
      this.handleMovies
    );
  };

  handlePrevious = () => {
    if (this.state.currPage != 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.handleMovies
      );
    }
  };

  handlePageClick = (e) => {
    this.handleMovies(e.currentTarget.textContent);
  };

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ marginTop: "1.5rem" }}>
          <strong>Trending</strong>
        </h1>
        <div className="movie-list">
          {this.state.movies.map((movie) => {
            return (
              <div
                className="card movie-card"
                onMouseEnter={() => this.setState({ hoverID: movie.id })}
                onMouseLeave={() => this.setState({ hoverID: "" })}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
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
                <a className="page-link" onClick={this.handlePrevious}>
                  Previous
                </a>
              </li>
              {this.state.pageArr.map((page) => {
                return (
                  <li className="page-item">
                    <a className="page-link" onClick={this.handlePageClick}>
                      {page}
                    </a>
                  </li>
                );
              })}
              <li className="page-item">
                <a className="page-link" onClick={this.handleNext}>
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
