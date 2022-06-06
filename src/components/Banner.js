import React, { Component } from "react";
// import { movies } from "../demo-data";
import axios from "axios";

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      movieEle: {},
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=346d28f974e0de61538c2f2adc4796fe&language=en-US&page=1"
    );
    let movieData = res.data;
    let movies = [...movieData.results];
    let movie = movies[Math.floor(Math.random() * movies.length)];
    this.setState({ movieEle: movie });
  }
  render() {
    let movieSrc = this.state.movieEle.backdrop_path;
    let movieTitle = this.state.movieEle.title;
    let movieOverview = this.state.movieEle.overview;
    return (
      <div className="card banner-card">
        <img
          src={`https://image.tmdb.org/t/p/original${movieSrc}`}
          className="card-img-top banner-img"
          alt="..."
        />
        <div className="card-body banner-cont">
          <h5 className="card-title">{movieTitle}</h5>
          <p className="card-text">{movieOverview}</p>
        </div>
      </div>
    );
  }
}
