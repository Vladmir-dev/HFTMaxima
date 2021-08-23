import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";
import logo2 from "../../images/logo2.png";
import {
  AppBar as MuiAppBar,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Customized } from "./Customized";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "1.7em",
    marginRight: "9em",
    marginLeft: "9em",
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      fontWeight: "600",
      position: "relative",
      display: " block",
      lineHeight: "1",
      marginRight: "3em",
      color: theme.palette.background.paper,
    },
    "& .MuiTypography-body1": {
      margin: "0 0 28px",
      fontSize: "28px",
      fontWeight: "250",
      position: "relative",
      display: " block",
      lineHeight: "1",
      marginRight: "3em",
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: "300",
    },

    "& .MuiPaper-root": {
      border: "none",
      outline: "none",
      fontSize: "18px",
      borderRadius: "4px",
      background: theme.palette.background.paper,
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 900,
      "&:hover": {
        opacity: ".6",
      },
      margin: "0 0 32px",
    },
    "& .MuiInputBase-root": {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  },
  flex: {
    display: "flex",
    "& .MuiSvgIcon-root": {
      marginTop: "0.7em",
      color: "#fff",
      marginRight: "-0.5em",
      padding: "0.1em",
    },
  },
}));
export default function AppBar() {
  const classes = useStyles();
  return (
    <MuiAppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Grid container className={classes.container}>
            <Grid container direction="row" alignItems="center">
              <Grid item align="center">
                <div>
                  <Typography>
                    <img src={logo2} alt="HFTMaxima logo" />
                  </Typography>
                </div>
              </Grid>
              <Grid item sm></Grid>
              <Grid item align="center">
                <div className={classes.flex}>
                  <LaunchIcon fontSize="small" />
                  <Typography variant="subtitle2" component={Link} to="/">
                    Go to HFTmaxima
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item>
                <Typography variant="body1">
                  How can we help you? Consider yourself lucky,answers to your
                  questions are here.
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item>
                <Customized.InputBase placeholder="Search for articles..." />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
