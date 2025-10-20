import React, { useContext } from "react";
import { getTrendingMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const TrendingMoviePage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingMovie,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
      }}
    />
  );
};
export default TrendingMoviePage;
