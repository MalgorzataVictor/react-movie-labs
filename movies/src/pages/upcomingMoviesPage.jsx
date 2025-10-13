import React, { useContext } from "react";
import { getUpcomingMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviePage = (props) => {

  const { mustWatch, addToMustWatch } = useContext(MoviesContext);
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcomingMovie,
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
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return (
          <PlaylistAddIcon
            color="primary"
            fontSize="large"
            style={{ cursor: "pointer" }}
            onClick={() => addToMustWatch(movie.id)} 
          />
        );
      }}
    />
  );
};
export default UpcomingMoviePage;
