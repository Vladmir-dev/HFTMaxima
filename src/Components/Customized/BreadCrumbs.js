import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import useStyles from "./styles";

export default function BreadCrumbs({ separator }) {
  const classes = useStyles();
  return (
    <Breadcrumbs separator={separator} className={classes.breadC}>
      <Typography variant="subtitle1" component={Link} to="/">
        Home
      </Typography>
      <Typography variant="subtitle1" component={Link} to="/">
        Tools and Platforms
      </Typography>
      <Typography variant="subtitle2">HFTMaxima Trading Platform</Typography>
    </Breadcrumbs>
  );
}
