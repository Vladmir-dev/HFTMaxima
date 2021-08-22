import React from "react";
import { Container, Grid, Menu, MenuItem, Typography } from "@material-ui/core";
import useStyles from "./styles";
import ProductMenus from "./ProductMenus";
export default function ProductMenu({ menuTitle, elevation, ...others }) {
  const classes = useStyles();
  return (
    <Menu className={classes.menu} elevation={elevation || 3} {...others}>
      <Container>
        <Grid container>
          <Grid container direction="row">
            <Grid container item xs={12} spacing={3}>
              <MenuItem>
                <div>
                  <Typography variant="subtitle1">{menuTitle}</Typography>
                </div>
                <ProductMenus
                  titleMiddle="Account Types"
                  middleSubtitle="Only two"
                />
              </MenuItem>
            </Grid>
            <Grid container item xs={12} spacing={3}></Grid>
            <Grid container item xs={12} spacing={3}></Grid>
          </Grid>
          <Grid container direction="row">
            <Grid container item xs={12} spacing={3}></Grid>
            <Grid container item xs={12} spacing={3}></Grid>
            <Grid container item xs={12} spacing={3}></Grid>
          </Grid>
        </Grid>
      </Container>
    </Menu>
  );
}
