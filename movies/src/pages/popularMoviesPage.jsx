import React, { useState } from "react";
import { getPopularMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import { Box, Pagination } from "@mui/material";


const PopularMoviePage = (props) => {
	const [page, setPage] = useState(1);

	const { data, error, isPending, isError } = useQuery({
		queryKey: ['popular', page],
		queryFn: () => getPopularMovie(page),
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
				title="Popular Movies"
				movies={movies}
				action={(movie) => { }}
			/>

			<Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
				<Pagination
					count={10}
					page={page}
					onChange={(e, value) => setPage(value)}
					size="large"
					sx={{
						"& .MuiPaginationItem-root": {
							fontWeight: "bold",        
							fontSize: "1.5rem",        
						},
						"& .Mui-selected": {
							backgroundColor: "#cc0000", 
							color: "white",
							fontWeight: "bold",
						},
						"& .MuiPaginationItem-root:hover": {
							backgroundColor: "rgba(204,0,0,0.3)", 
						},
					}}
				/>
			</Box>
		</Box>
	);
};

export default PopularMoviePage;
