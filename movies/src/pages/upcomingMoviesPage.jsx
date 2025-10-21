import React, { useContext, useState } from "react";
import { getUpcomingMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { MoviesContext } from "../contexts/moviesContext";
import { Box } from "@mui/material";
import Pagination from "../components/pagination";

const UpcomingMoviePage = (props) => {
  const [page, setPage] = useState(1);

  const { mustWatch, addToMustWatch } = useContext(MoviesContext);
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['upcoming', page],
    queryFn: () => getUpcomingMovie(page),
    keepPreviousData: true,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  return (

    <Box sx={{ p: 2 }}>
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

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Box>

    </Box>

  );
};
export default UpcomingMoviePage;
