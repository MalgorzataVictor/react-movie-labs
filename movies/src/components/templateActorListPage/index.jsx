import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActorList from "../actorList";
import Box from "@mui/material/Box";

function ActorListPageTemplate({ actors, title, action }) {

  return (
    <Grid container direction="column" alignItems="center" sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
      </Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, mb: 2, fontWeight: "bold", width: "100%" }}
      >
        {title}
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ActorList action={action} actors={actors} />
      </Box>
    </Grid>
  );
}

export default ActorListPageTemplate;