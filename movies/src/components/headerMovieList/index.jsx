import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";


const Header = (props) => {
  const title = props.title
  const navigate = useNavigate();


  const formControl =
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)"
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingBottom: 1,
        marginBottom: 8,
      }}
    >
      
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>

      <IconButton aria-label="filter" >
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
            "& fieldset": {
              borderColor: "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#cc0000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#cc0000",
            },
          }

        }}
      />

      <IconButton aria-label="filter" >
        <SwapVertIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>

      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon sx={{ color: "#cc0000" }} fontSize="large" />
      </IconButton>

    </Paper>
  );
};

export default Header;
