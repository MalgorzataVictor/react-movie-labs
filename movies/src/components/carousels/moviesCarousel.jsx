import React from "react";
import GenericCarousel from "./GenericCarousel";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";

const MoviesCarousel = ({ movies }) => {
  return (
    <GenericCarousel
      items={movies}
      renderItem={(movie) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <div style={{ marginTop: 8 }}>
            <AddToFavoritesIcon movie={movie} />
          </div>
        </div>
      )}
    />
  );
};

export default MoviesCarousel;
