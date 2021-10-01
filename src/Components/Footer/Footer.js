import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../../images/price.png";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Container>
        <Toolbar>
          <Grid container>
            <Grid
              item
              container
              alignItems="center"
              direction="row"
              xs={12}
              className={classes.flex1}
            >
              <div className={classes.xs}>
                <Typography
                  component={Link}
                  to="/"
                  variant="h5"
                  align="center"
                  style={{ color: "#fff" }}
                >
                  <img
                    src={logo}
                    alt="HFTMaxima logo"
                    className={classes.logo}
                  />
                  Maxima
                </Typography>
              </div>
              <div className={classes.flex}>
                <Typography variant="subtitle1" align="center">
                  Products
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Featured In
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Support
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Blog
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Terms of Service
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              xs={12}
              className={classes.flex}
            >
              <div>
                <Typography variant="subtitle2" align="center">
                  @2021 Maxima.com, All rights reserved
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2" align="center">
                  Trade is available on working days
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2" align="center">
                  Follow us:
                  <FacebookIcon />
                  <TwitterIcon />
                  <GitHubIcon />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
