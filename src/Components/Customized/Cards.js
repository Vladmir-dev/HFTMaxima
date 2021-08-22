import React from "react";
import Card from "./Card";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
export default function Cards() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridC1}>
      <Grid item className={classes.gridC}>
        <Card
          text="Login"
          image={image8}
          className={classes.cardMedia}
          textTitle="HFTmaxima Website"
          textSubtitle="Essential trading tools in a web-based platform"
        />
      </Grid>
      <Grid item className={classes.gridC}>
        <Card
          text="Download Now"
          image={image7}
          className={classes.cardMedia}
          textTitle="HFTmaxima Desktop"
          textSubtitle="A fully customized software-based trading platform"
        />
      </Grid>
      <Grid item className={classes.gridC}>
        <Card text="Watch Now" /> 
      </Grid>
    </Grid>
  );
}