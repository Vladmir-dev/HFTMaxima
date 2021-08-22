import {
  AppBar,
  Container,
  Grid,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import React, { useState } from "react";
import { Customized } from "../Customized/Customized";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) =>{
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const open = Boolean(anchorEl);
  const id = open ? 'MenuPaper' : undefined;
  return (
    <Container>
      <AppBar className={classes.root} position="static" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid container row alignItems="center">
              <Grid item className="typo">
                <div>
                  <Typography component={Link} to="/">
                    <img
                      src={logo}
                      alt="HFTMaxima logo"
                      style={{ position: "relative", display: "block" }}
                    />
                  </Typography>
                </div>
              </Grid>
              <Grid item sm></Grid>
              <Grid item className={classes.gridB} align='center'>
              <Customized.Button
                  text="Products"
                  endIcon={<ExpandMoreOutlinedIcon />}
                  variant="text"
                  disableRipple
                  onClick={handleClick}
                />
                <Popper id={id} open={open} placement='left' className={classes.popper}>
                  <Customized.MenuPaper/>
                </Popper>
                <div className={classes.div}>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Featured In
                  </Typography>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Support
                  </Typography>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Blog
                  </Typography>
                  <Customized.Button
                    text="Open an Account"
                    variant="contained"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
