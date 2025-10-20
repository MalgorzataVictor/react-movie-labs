import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [countryFilter, setCountryFilter] = useState("0");
  const [sortType, setSortType] = useState("alphabetical-asc");


  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreFilter !== "0" ? m.genre_ids.includes(Number(genreFilter)) : true))
    .filter((m) =>
      countryFilter !== "0"
        ? m.production_countries?.some((c) => c.iso_3166_1 === countryFilter)
        : true
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
      case "country":
        setCountryFilter(value);
        break;
      case "sort":
        setSortType(value);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12} sx={{ width: "100%" }}>
        <Header
          title={title}
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
          countryFilter={countryFilter}
          movies={movies}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 4, mb: 2, fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ width: "100%" }}>
        <MovieList action={action} movies={displayedMovies} />
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
