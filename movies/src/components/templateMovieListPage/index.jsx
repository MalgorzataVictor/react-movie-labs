import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true));

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12} sx={{ width: "100%" }}>
        <Header
          title={title}
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 4, fontWeight: "bold" }}
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
