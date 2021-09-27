import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
import {Customized }from "../Customized/Customized"
export default function NewsCard({ article:{description,publishedAt,url,urlToImage,source,title },i }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia image={urlToImage} alt={title} className={classes.media}/>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">{new Date(publishedAt).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary">{source.name}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{title}</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary">{description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Customized.Button text='Learn More'/>
            <Typography variant="body2" color="textSecondary">{i + 0}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
