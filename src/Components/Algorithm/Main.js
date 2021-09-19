import React from "react";
import {AppBar,Toolbar } from "@material-ui/core";


import useStyles from "./styles";

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color='inherit'
        
      >
        <Toolbar></Toolbar>
      </AppBar>
      
      <main className={classes.content}></main>
    </div>
  );
}
