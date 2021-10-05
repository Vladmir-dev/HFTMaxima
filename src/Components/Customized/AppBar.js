import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";
import logo from "../../images/price.png";
import {
  AppBar as MuiAppBar,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
  Paper,
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
      fontSize: "18px",
      borderRadius: "4px",
      background: theme.palette.background.paper,
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "99%",
      "&:hover": {
        opacity: ".6",
      },
      margin: "0 0 32px",
    },
    "& .MuiInputBase-root": {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      "& .MuiPaper-root": {
        width: "100%",
      },
      "& .MuiInputBase-input": {
        width: "100%",
      },
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
  input: {
    "& .MuiInputBase-input": {
      width: "50rem",
    },
  },
  logo: {
    height: 40,
    position: "relative",
    marginLeft: theme.spacing(3),
  },
  divLogo: {
    paddingLeft: theme.spacing(2),
    color: "#fff",
  },
  appbar:{
    background:'#008900'
  }
}));
export default function AppBar() {
  const classes = useStyles();
  return (
    <MuiAppBar position="fixed" className={classes.appbar}>
      <Container>
        <Toolbar>
          <Grid container className={classes.container}>
            <Grid item container direction="row" alignItems="center">
              <Grid item align="center">
                <div className={classes.divLogoMenuFlex}>
                  <div className={classes.divLogo}>
                    <Typography
                      component={Link}
                      to="/"
                      variant="h5"
                      align="center"
                      style={{ color: "#fff" }}
                    >
                      <img
                        src={logo}
                        alt="Maxima logo"
                        className={classes.logo}
                      />
                      Maxima
                    </Typography>
                  </div>
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
            <Grid item container direction="row">
              <Grid item>
                <Typography variant="body1">
                  How can we help you? Consider yourself lucky,answers to your
                  questions are here.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.input}>
              <Paper component="form">
                <Customized.InputBase placeholder="Search for articles..." />
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
