import { useQuery } from '@tanstack/react-query';
import { getGenres } from "../../api/tmdb-api";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TextField from "@mui/material/TextField";
import Spinner from '../spinner';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const formControl = {
    margin: 1,
    backgroundColor: "rgb(255, 255, 255)",
  };

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const genres = data.genres;
  if (genres[0].name !== "All") genres.unshift({ id: "0", name: "All" });

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e) => handleChange(e, "name", e.target.value);

  const handleFilterClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleGenreSelect = (genreId) => {
    handleChange({ preventDefault: () => { } }, "genre", genreId);
    handleMenuClose();
  };

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingBottom: 1,
        marginBottom: 1,
        padding: "8px 12px",
      }}
    >

      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>

      <IconButton aria-label="home" onClick={() => navigate("/")}>
        <HomeIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>


      <IconButton
        aria-label="filter"
        onClick={handleFilterClick}
      >
        <FilterAltIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>


      <TextField
        id="filled-search"
        label="Search"
        type="search"
        variant="outlined"
        value={props.titleFilter}
        onChange={handleTextChange}
        sx={{
          ...formControl,
          minWidth: "50%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            backgroundColor: "#fff",
            "& fieldset": { borderColor: "#ccc" },
            "&:hover fieldset": { borderColor: "#cc0000" },
            "&.Mui-focused fieldset": { borderColor: "#cc0000" },
          },
        }}
      />

      <IconButton aria-label="sort">
        <SwapVertIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>


      <IconButton aria-label="favourities" onClick={() => navigate("movies/favorites")}>
        <FavoriteIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>

      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            selected={props.genreFilter === genre.id}
            onClick={() => handleGenreSelect(genre.id)}
          >
            {genre.name}
          </MenuItem>
        ))}
      </Menu>
    </Paper>
  );
};

export default Header;
