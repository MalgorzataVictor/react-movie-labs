import React, { useContext } from "react";
import { useNavigate, Link } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png';


export default function ActorCard({ actor, action }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.03)", cursor: "pointer" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center", whiteSpace: "normal" }}
          >
            {actor.name}
          </Typography>
        }
        sx={{
          height: 64,
          padding: 1,
        }}
      />

      <Link to={`/actors/${actor.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          image={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : img}
          alt={actor.name}
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
          }}
        />
      </Link>


      {/* <CardActions sx={{ justifyContent: "space-between", paddingX: 2, paddingBottom: 2 }}>
        {action(movie)}
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#cc0000",
              color: "#fff",
              "&:hover": { backgroundColor: "#b30000" },
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            More Info
          </Button>
        </Link>
      </CardActions> */}
    </Card>
  );
}
