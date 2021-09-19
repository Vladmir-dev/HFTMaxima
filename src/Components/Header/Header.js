import {
  AppBar,
  Avatar,
  Container,
  Grid,
  Popover,
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

export default function Header({ user }) {
  const classes = useStyles();
  const [show, setShow] = useState(null);
  const [background, setBackground] = useState(false);

  const handleShow = (event) => {
    setShow(open ? null : event.target.current);
  };

  const handleClose = () => {
    setShow(null);
  };
  const open = Boolean(show);
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
                  <Typography
                    variant="subtitle2"
                    onMouseEnter={handleShow}
                    onMouseLeave={handleClose}
                  >
                    Products
                  </Typography>
                  <Popover
                    open={show}
                    placement="center"
                    className={classes.popper}
                  >
                    <Customized.MenuPaper />
                  </Popover>
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
