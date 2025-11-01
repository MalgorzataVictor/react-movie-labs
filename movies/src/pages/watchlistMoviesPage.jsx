import React, { Component } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { Helmet } from "react-helmet-async";


class WatchlistMoviesPage extends Component {
  render() {
    const movies = [];

    return (
      <>
        <Helmet>
          <title>{"My Watchlist"}</title>
        </Helmet>
        <PageTemplate
          title="Watchlist"
          movies={movies}
          action={() => null}
        />
      </>
    );
  }
}

export default WatchlistMoviesPage;
