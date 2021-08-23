import React from "react";
import {
  Grid,
  IconButton,
  InputBase as MuiInputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
export default function InputBase({placeholder}) {
  return (
    <Grid item align='center'>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <MuiInputBase placeholder={placeholder}/>
   </Grid>
  );
}
