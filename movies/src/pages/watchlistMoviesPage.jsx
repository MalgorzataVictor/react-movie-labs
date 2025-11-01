import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import { Helmet } from "react-helmet-async";


const WatchlistMoviesPage = () => {
  const { watchlist: movieId} = useContext(MoviesContext);


  const watchlistMovieQueries = useQueries({
    queries: movieId.map((movieId) => {
      return {
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      }
    })
  });


  const isPending = watchlistMovieQueries.find((m) => m.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const movies = watchlistMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  console.log(movies)

  return (
    <>
      <Helmet>
        <title>My Watchlist</title>
      </Helmet>
      <PageTemplate
        title="Watchlist"
        movies={movies}
        action={(movie) => {
          return (
            <>
              {/* <RemoveFromFavorites movie={movie} /> */}
              
            </>
          );
        }}

      />
    </>
  );

};

export default WatchlistMoviesPage;
