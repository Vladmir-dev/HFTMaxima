import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Item from "./Item";
import useStyles from "./styles";
import image1 from "../../images/image19.png";
import image2 from "../../images/image20.png";
import image3 from "../../images/image21.png";
import image4 from "../../images/image22.png";
import image5 from "../../images/image23.png";
import image6 from "../../images/image1.jpeg";
import image7 from "../../images/image24.png";
import image8 from "../../images/image25.png";
export default function MenuPaper() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paper} variant="outlined">
      <Container>
        <Grid container className={classes.papergrid1}>
          <Grid container xs={12} direction="row" spacing={3}>
            <Grid item>
              <div className={classes.paperdiv}>
                <Typography variant="subtitle2">Account Types</Typography>
              </div>
              <Item
                subTitle="Demo Account"
                captionTitle="Try out demo account trade"
                icon="Account Icon"
                image={image6}
                to="/"
              />
              <Item
                subTitle="Transfer Account"
                captionTitle="Do your real trade"
                icon="Account Icon"
                image={image4}
                to="/"
              />
            </Grid>
            <Grid item>
              <div className={classes.paperdiv}>
                <Typography variant="subtitle2">Top FAQs</Typography>
              </div>
              <Item
                subTitle="Why HFTMaxima"
                captionTitle="Best at its algorithm"
                ialt="HFMaxima Icon"
                image={image2}
                to="/"
              />
              <Item
                subTitle="Guidance"
                captionTitle="A D-tour of HFTMaxima"
                icon="Help Icon"
                image={image5}
                to="/support"
              />
            </Grid>
            <Grid item>
              <div className={classes.paperdiv}>
                <Typography variant="subtitle2">Platform</Typography>
              </div>
              <Item
                subTitle="Funding and Transfers"
                captionTitle="Check out your funds"
                icon="money Icon"
                image={image8}
                to="/"
              />
              <Item
                subTitle="News"
                captionTitle="what's hot"
                icon="news icon"
                image={image1}
                to="/"
              />
            </Grid>
          </Grid>
          <Grid container xs={12} direction="row" spacing={3}>
            <Grid item>
              <div className={classes.paperdiv}>
                <Typography variant="subtitle2">Features</Typography>
              </div>
              <Item
                subTitle="Algorithm"
                captionTitle="Alpaca"
                icon="Algorithm Icon"
                image={image7}
                to="/"
              />
              <Item
                subTitle="Charts"
                captionTitle="Currency calender and others"
                icon="charts Icon"
                image={image3}
                to="/"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
