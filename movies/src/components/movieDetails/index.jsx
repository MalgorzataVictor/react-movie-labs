import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie, recommendations }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip
          icon={<LanguageIcon />}
          label={`Original Language: ${movie.original_language}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      {movie.production_countries && movie.production_countries.length > 0 && (
        <Paper component="ul" sx={{ ...root }}>
          <li>
            <Chip
              label="Production Countries"
              sx={{ ...chip }}
              color="primary"
            />
          </li>
          {movie.production_countries.map((c) => (
            <li key={c.name}>
              <Chip label={c.name} sx={{ ...chip }} />
            </li>
          ))}
        </Paper>
      )}

      {recommendations && recommendations.length > 0 && (
        <>
          <Typography variant="h5" component="h3" sx={{ mt: 4 }}>
            Recommended Movies
          </Typography>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "16px",
              marginTop: "10px",
            }}
          >
             {recommendations.slice(0, 8).map((recMovie) => (
              <Link
                key={recMovie.id}
                to={`/movies/${recMovie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    textAlign: "center",
                    background: "#f5f5f5",
                    borderRadius: "10px",
                    padding: "8px",
                    transition: "transform 0.2s",
                  }}
                >
                  <img
                    src={
                      recMovie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${recMovie.poster_path}`
                        : "/no-image.png"
                    }
                    alt={recMovie.title}
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      marginBottom: "8px",
                    }}
                  />
                  <Typography variant="subtitle1" noWrap>
                    {recMovie.title}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
