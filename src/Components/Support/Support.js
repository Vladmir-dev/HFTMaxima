import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Customized } from "../Customized/Customized";
import Footer from '../Footer/Footer';
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f4f5fd",
  },
}));
export default function Support() {
  const classes = useStyles();
  const id = "secondGrid";
  return (
    <Grid container className={id ? classes.root : null}>
      <Grid container direction="row">
        <Customized.AppBar />
      </Grid>
      <Grid container direction="row" id={id}>
        <Customized.Supports />
      </Grid>
      <Grid container direction="row">
        <Footer/>
      </Grid>
    </Grid>
  );
}
