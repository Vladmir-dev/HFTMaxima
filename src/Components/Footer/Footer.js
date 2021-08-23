import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo1 from "../../images/logo/logo1.png";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Container>
        <Toolbar>
          <Grid container>
            <Grid item container alignItems="center">
              <div className={classes.flex1}>
                <Typography align="center" component={Link} to='/'>
                  <img
                    src={logo1}
                    alt="HFTMaxima logo"
                  />
                </Typography>
              </div>
            </Grid>
            <Grid item container direction="row" alignItems='center'>
              <div className={classes.flex}>
                <Typography variant="subtitle1" align="center">
                  HFTMaxima.com, All rights reserved
                </Typography>
                <Typography variant="subtitle1" align="center">
                contact:0800014037
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
