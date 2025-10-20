import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MovieList = (props) => {
  return (
    <Box sx={{ px: { xs: 4, sm: 6, md: 12 }, py: 8 }}> 
      <Grid container spacing={4} justifyContent="center">
        {props.movies.map((m) => (
          <Grid
            key={m.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <Movie movie={m} action={props.action} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
