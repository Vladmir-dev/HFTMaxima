import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Grid, Grow, Typography,Card,CardMedia} from "@material-ui/core";
import useStyles from "./styles";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Catogeries",
    info: "Business, Entertainment,General,Science,Health,Sports,Technology,War",
  },
  { color: "#4527a0", title: "News by Terms", info: "Bitcoin,PlayStation 5" },
  {
    color: "#283593",
    title: "News by sources",
    info: "CNN,Wired,BBC,Time,IGN, Buzzfeed,ABC News",
  },
];

export default function RowCard({articles}) {
 
    return (
      <Grow in>
        <Grid
          container
        >
            <Grid
              item
              xs={12}
            >
              <Card>
                  <CardMedia image={articles.urlToImage} style={{height:100,width:100}}/>
              </Card>
            </Grid>
        </Grid>
      </Grow>
    );
  }
  
