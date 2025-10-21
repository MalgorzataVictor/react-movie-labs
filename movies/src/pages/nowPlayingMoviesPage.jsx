	import React, { useContext } from "react";
	import { getNowPlayingMovie } from "../api/tmdb-api";
	import PageTemplate from '../components/templateMovieListPage';
	import { useQuery } from '@tanstack/react-query';
	import Spinner from '../components/spinner';
	
	const NowPlayingMoviePage = (props) => {
	
	  const { data, error, isPending, isError } = useQuery({
	    queryKey: ['nowPlaying'],
	    queryFn: getNowPlayingMovie,
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
	      title="Now Playing Movies"
	      movies={movies}
	      action={(movie) => {
	      }}
	    />
	  );
	
	};
	export default NowPlayingMoviePage;
