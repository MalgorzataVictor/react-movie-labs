	import React, { useContext } from "react";
	import { getPopularMovie } from "../api/tmdb-api";
	import PageTemplate from '../components/templateMovieListPage';
	import { useQuery } from '@tanstack/react-query';
	import Spinner from '../components/spinner';
	
	const PopularMoviePage = (props) => {
	
	  const { data, error, isPending, isError } = useQuery({
	    queryKey: ['popular'],
	    queryFn: getPopularMovie,
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
	      title="Popular Movies"
	      movies={movies}
	      action={(movie) => {
	      }}
	    />
	  );
	
	};
	export default PopularMoviePage;
