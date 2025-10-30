import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MovieList from "../movieList"; // default grid layout
import GenericCarousel from "../carousels/GenericCarousel";
import Movie from "../movieCard";

function MovieListPageTemplate({ movies, title, action, useCarousel = false }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [languageFilter, setLanguageFilter] = useState("0");
  const [sortType, setSortType] = useState("alphabetical-asc");

  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreFilter !== "0" ? m.genre_ids.includes(Number(genreFilter)) : true))
    .filter((m) =>
      languageFilter !== "0" ? languageFilter === "all" || m.original_language.includes(languageFilter) : true
    );

  switch (sortType) {
    case "alphabetical-asc":
      displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "alphabetical-desc":
      displayedMovies.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "rating-desc":
      displayedMovies.sort((a, b) => b.vote_average - a.vote_average);
      break;
    case "rating-asc":
      displayedMovies.sort((a, b) => a.vote_average - b.vote_average);
      break;
    default:
      break;
  }

  const handleChange = (type, value) => {
    switch (type) {
      case "name":
        setNameFilter(value);
        break;
      case "genre":
        setGenreFilter(value);
        break;
      case "language":
        setLanguageFilter(value);
        break;
      case "sort":
        setSortType(value);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="column" alignItems="center" sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Header
          sx={{ width: "100%" }}
          title={title}
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
          languageFilter={languageFilter}
          movies={movies}
        />
      </Box>

      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, mb: 2, fontWeight: "bold", width: "100%" }}
      >
        {title}
      </Typography>

      <Box sx={{ width: "100%" }}>
        {useCarousel ? (
          <GenericCarousel
            items={displayedMovies}
            renderItem={(movie) => <Movie movie={movie} action={action} />}
          />
        ) : (
          <MovieList movies={displayedMovies} action={action} />
        )}
      </Box>
    </Grid>
  );
}

export default MovieListPageTemplate;
