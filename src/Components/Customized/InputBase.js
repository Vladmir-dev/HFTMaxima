import React from "react";
import {
  IconButton,
  InputBase as MuiInputBase,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
export default function InputBase({placeholder}) {
  return (
    <Paper component='form'>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <MuiInputBase placeholder={placeholder}/>
    </Paper>
  );
}
