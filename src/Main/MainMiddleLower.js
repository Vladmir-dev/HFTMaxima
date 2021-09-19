import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";


export default function MainMiddleLower() {
  const classes = useStyles();
  return (
    <main className={classes.middleBack}>
      
      <Grid container spacing={3}>
        <Grid item className={classes.gridMiddles}>
          <Customized.Middles />
        </Grid>
      </Grid>
    </main>
  );
}
