import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import React, { useEffect, useState } from "react";
import { Customized } from "../Customized/Customized";
import { Link } from "react-router-dom";
import logo from "../../images/price.png";
import useStyles from "./styles";
import Popover from "@mui/material/Popover";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  const [xsMenuOpen, setXsMenuOpen] = useState(false);
  const [background, setBackground] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles({ xsMenuOpen });
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleClick = () => {
    setXsMenuOpen(true);
  };
  const handleClose = () => {
    setXsMenuOpen(false);
  };
  const open = Boolean(anchorEl);
  const openMenu = Boolean(xsMenuOpen);
  const id = openMenu ? "simple-popover" : undefined;
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
      xs={12}
    >
      <Container>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid container alignItems="center">
              <Grid item align="center">
                <div style={{ marginBottom: "12%" }}>
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
                        alt="Maxima logo"
                        className={classes.logo}
                      />
                      Maxima
                    </Typography>
                  ) : (
                    <Typography
                      component={Link}
                      to="/"
                      variant="h5"
                      align="center"
                      style={{ color: "#000", marginBottom: "20%" }}
                    >
                      <img
                        src={logo}
                        alt="Maxima logo"
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
              {xs ? (
                <Grid item>
                  <div className={classes.menu}>
                    <IconButton onClick={handleSmallDevice && handleClick}>
                      {!xsMenu ? <MenuIcon /> : <CloseIcon />}
                    </IconButton>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      dura
                    >
                      <Customized.Lists/>
                    </Popover>
                  </div>
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
                      <ExpandMoreOutlinedIcon/>
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
                      className={classes.popper}
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
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
