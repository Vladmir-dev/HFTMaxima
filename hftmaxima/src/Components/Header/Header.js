import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import { Customized } from "../Customized/Customized";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="fixed" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid container row alignItems="center">
            <Grid item sm></Grid>
            <Grid item sm></Grid>
            <Grid item>
              <div className={classes.div}>
                <Typography component={Link} to="/" variant="subtitle2">
                  Pricing
                </Typography>
                <Typography component={Link} to="/" variant="subtitle2">
                  Account Types
                </Typography>
                <Typography component={Link} to="/" variant="subtitle2">
                  Funding and Transfers
                </Typography>
                <Typography component={Link} to="/" variant="subtitle2">
                  Top FAQs
                </Typography>
                <Typography component={Link} to="/" variant="body1" style={{color:'#fff',fontWeight:'600'}}>
                  Open New Account
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container row className={classes.gridMid}>
            <Grid item sm>
              <div>
                <Typography component={Link} to="/">
                  <img src={logo} alt="HFTMaxima logo" />
                </Typography>
              </div>
            </Grid>
            <Grid item sm className={classes.gridIn}>
              <InputBase
                placeholder="keywords or stocks"
                startAdornment={<SearchIcon fontSize="small" />}
                endAdornment={
                  <IconButton>
                    <KeyboardArrowRightIcon fontSize="small" />
                  </IconButton>
                }
              />
            </Grid>
            <Grid item sm className={classes.gridB}>
              <Customized.Button
                text={<h4>Login in to HFTmaxima</h4>}
                variant="outlined"
              />
              <div className={classes.divT}>
                <Typography
                  component={Link}
                  to="/"
                  variant="body1"
                  style={{ borderBottom: "1px solid #9bc400" }}
                >
                  Need Login Help?
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container row alignItems="center">
            <Grid item sm></Grid>
            <Grid item sm></Grid>
            <Grid item>
              <div className={classes.div}>
                <Typography component={Link} to="/" variant="body1">
                  Why HFTmaxima?
                </Typography>
                <Typography component={Link} to="/" variant="body1">
                  Tools and Platforms
                </Typography>
                <Typography component={Link} to="/" variant="body1">
                  Investment Products
                </Typography>
                <Typography component={Link} to="/" variant="body1">
                  Guidance
                </Typography>
                <Typography component={Link} to="/" variant="body1">
                  Education
                </Typography>
                <Typography component={Link} to="/" variant="body1">
                  Research
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
