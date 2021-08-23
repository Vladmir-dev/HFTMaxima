import {
  AppBar,
  Container,
  Grid,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import React, { useEffect, useState } from "react";
import { Customized } from "../Customized/Customized";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import logo1 from "../../images/logo/logo1.png";
import useStyles from "./styles";
export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [background, setBackground] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "MenuPaper" : undefined;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <AppBar
      className={`${classes.root} ${background && `${classes.newRoot}`} `}
      position="fixed"
      elevation={0}
    >
      <Container>
        <Toolbar>
          <Grid container alignItems="center"className={classes.margins}>
            <Grid container row alignItems="center">
              <Grid item>
                <div>
                  <Typography component={Link} to="/">
                    {!background ? (
                      <img
                        src={logo}
                        alt="HFTMaxima logo"
                        style={{ position: "relative", display: "block" }}
                      />
                    ) : (
                      <img
                        src={logo1}
                        alt="HFTMaxima logo"
                        style={{ position: "relative", display: "block" }}
                      />
                    )}
                  </Typography>
                </div>
              </Grid>
              <Grid item sm></Grid>
              <Grid item className={classes.gridB} align="center">
                <Customized.Button
                  text="Products"
                  endIcon={<ExpandMoreOutlinedIcon />}
                  variant="text"
                  disableRipple
                  onClick={handleClick}
                />
                <Popper
                  id={id}
                  open={open}
                  placement="left"
                  className={classes.popper}
                >
                  <Customized.MenuPaper />
                </Popper>
                <Grid item className={classes.div}>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Featured In
                  </Typography>
                  <Typography
                    component={Link}
                    to="/support"
                    variant="subtitle2"
                  >
                    Support
                  </Typography>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Blog
                  </Typography>
                  <Customized.Button
                    text="Open an Account"
                    variant="contained"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
