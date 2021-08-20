import {
    AppBar,
    Grid,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import AddIcon from "@material-ui/icons/Add";
  import React from "react";
  import { Customized } from "../Customized/Customized";
  import { Link } from "react-router-dom";
  import useStyles from "./styles";
  export default function Footer() {
    const classes = useStyles();
    return (
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item className={classes.leftButton} align='center'>
            <Customized.Button variant="text" startIcon={<AddIcon fontSize='large'/>} component={Link} to='/'/>
            <div className={classes.flex}>
                <Typography variant='subtitle2' align='center'>DOW</Typography>
                <Typography variant='subtitle2' align='center'>NASDAQ</Typography>
                <Typography variant='subtitle2' align='center'>S and P</Typography>
            </div>
            </Grid>
            <Grid item sm></Grid>
            <Grid item className={classes.rightButton}>
                <Customized.Button text='Open New Account' variant='text' component={Link} to='/'/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  