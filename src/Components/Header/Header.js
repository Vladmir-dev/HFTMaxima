import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import React from "react";
import { Customized } from "../Customized/Customized";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
import ProductMenu from "../Customized/ProductMenu";
import { ProductMenuiItem } from "../Customized/middle";
import ProductMenus from "../Customized/ProductMenus";
export default function Header() {
  const classes = useStyles();
  return (
    <Container>
      <AppBar className={classes.root} position="static" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid container row alignItems="center">
              <Grid item className='typo'>
                <div >
                  <Typography component={Link} to="/">
                    <img src={logo} alt="HFTMaxima logo" style={{position:'relative',display:'block'}}/>
                  </Typography>
                </div>
              </Grid>
              <Grid item sm></Grid>
              <Grid item className={classes.gridB}>
                <div className={classes.div}>
                  <Customized.Button text='Products' endIcon={<ExpandMoreOutlinedIcon/>} variant='text' disableRipple className='hoverShow'/>
                  <ProductMenu menuTitle='Account Types'/>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Featured In
                  </Typography>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Support
                  </Typography>
                  <Typography component={Link} to="/" variant="subtitle2">
                    Blog
                  </Typography>
                  <Customized.Button text='Open an Account' variant='contained'/>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
