import {
  AppBar,
  Avatar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import React, { useEffect, useState } from "react";
import { Customized } from "../Customized/Customized";
import { Link } from "react-router-dom";
import logo from "../../images/price.png";
import logo1 from "../../images/logo/logo1.png";
import useStyles from "./styles";
import Popover from "@mui/material/Popover";

export default function Header({ user }) {
  const classes = useStyles();
  const [background, setBackground] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
          <Grid container alignItems="center">
            <Grid container row alignItems="center">
              <Grid item align="center">
                <div style={{marginBottom:'12%'}}>
                  {!background ? (
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
                    <Typography
                      variant="h2 "
                      align="center"
                      style={{ color: "#fff" }}
                    >
                      HFT
                    </Typography>
                    Maxima
                  </Typography>
                  ) : (
                    <Typography
                      component={Link}
                      to="/"
                      variant="h5"
                      align="center"
                      style={{ color: "#000",marginBottom:'20%' }}
                    >
                      <img
                        src={logo}
                        alt="HFTMaxima logo"
                        className={classes.logo}
                      />
                      <Typography
                        variant="h2 "
                        align="center"
                        style={{ color: "#000" }}
                      >
                        HFT
                      </Typography>
                      Maxima
                    </Typography>
                  )}
                </div>
              </Grid>
              <div style={{ flexGrow: 1 }} />
              {user ? (
                <Grid item>
                  <Avatar
                    src={user.results.imageUrl}
                    alt={user.results.name}
                  ></Avatar>
                  <Typography variant="subtitle2">
                    {user.results.name}
                  </Typography>
                </Grid>
              ) : (
                <Grid
                  item
                  className={`${classes.gridB} ${classes.div} `}
                  align="center"
                >
                  <Grid item className={classes.div}>
                    <Typography
                      aria-owns={open ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                      style={{ position: "relative" }}
                    >
                      Products
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Customized.MenuPaper />
                    </Popover>
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
                      component={Link}
                      to="auth/register"
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
