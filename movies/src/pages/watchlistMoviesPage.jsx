import React, { Component } from "react";
import PageTemplate from "../components/templateMovieListPage";

class WatchlistMoviesPage extends Component {
  render() {
    const movies = []; 

    return (
      <PageTemplate
        title="Watchlist"
        movies={movies}
        action={() => null} 
      />
    );
  }
}

export default WatchlistMoviesPage;
