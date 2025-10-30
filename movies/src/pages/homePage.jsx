import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import MoviesCarousel from "../components/carousels/moviesCarousel";
import Header from "../components/headerMovieList";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const HomePage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["discover"],
    queryFn: getMovies,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <Box sx={{ width: "100%" }}>
      <Header title="Home Page" movies={movies} />

      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, mb: 4, fontWeight: "bold", width: "100%" }}
      >
        Home Page
      </Typography>
      <Paper
        elevation={3}
        sx={{
          ml: 4,
          mr: 4,
          pb: 4,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{pt:2, fontWeight: "bold" }}
        >
          Discover Movies
        </Typography>

        <MoviesCarousel
          movies={movies}
          action={(movie) => <AddToFavoritesIcon movie={movie} />}
        />
      </Paper>
    </Box>
  );
};

export default HomePage;
