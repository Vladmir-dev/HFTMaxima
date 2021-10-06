import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Pulse from "react-reveal/Pulse";
import { Customized } from "../Components/Customized/Customized";
import { Link } from "react-router-dom";

export default function Main() {
  const classes = useStyles();
  return (
    <main className={classes.back}>
      <div className={classes.toolbar} />
      <Container>
        <Grid container spacing={3}>
          <Grid item container className={classes.grid} xs={12}>
            <div className={classes.div}>
              <Pulse>
                <Typography variant="h6" gutterBottom>Maxima Trading Platforms</Typography>
                <Typography variant="h3" gutterBottom>Have power over your Trading</Typography>
                <Typography variant="body2" gutterBottom>Enrich your Trading skills with the Maxima Algorithm and accomplish your goals</Typography>
              </Pulse>
              </div>
            <div className={classes.div1}>
              <Customized.Button
                text="Create new Account"
                component={Link}
                to="auth/register"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
