import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import logo from "../../../images/price.png";
export default function Notification({ user }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <div className={classes.popLogo}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            align="center"
            style={{ color: "#000" }}
          >
            <img src={logo} alt="Maxima logo" className={classes.logo} />
            Maxima
          </Typography>
        </div>
        <Typography variant="body2">
          Welcome! To Maxima {user}, your trading platform.
        </Typography>
      </Grid>
    </Grid>
  );
}
