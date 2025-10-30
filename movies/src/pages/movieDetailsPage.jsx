import React from "react";
import { useParams } from "react-router";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieRecommendations, getMovieCredits } from "../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";

const MoviePage = () => {
  const { id } = useParams();

  const { data: movie, error, isPending, isError } = useQuery({
    queryKey: ["movie", { id }],
    queryFn: getMovie,
  });

  const {
    data: recommendations, error: recError, isPending: recPending, isError: recIsError} = useQuery({
    queryKey: ["movieRecommendations", { id }],
    queryFn: getMovieRecommendations,
  });

   const {
    data: credits, error: creError, isPending: crePending, isError: creIsError} = useQuery({
    queryKey: ["movieCredits", { id }],
    queryFn: getMovieCredits,
  });

  if (isPending || recPending || crePending ) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;
  if (recIsError) return <h1>{recError.message}</h1>;
   if (creIsError) return <h1>{creError.message}</h1>;

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails
            movie={movie}
            recommendations={recommendations?.results || []}
            credits={credits || null}
          />
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
