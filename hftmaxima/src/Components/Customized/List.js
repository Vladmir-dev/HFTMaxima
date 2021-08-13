import {
  Collapse,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import useStyles from "./styles";

export default function Lists({ separator }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  return (
    <List component="nav" className={classes.root}>
      <ListItem divider>
        <Typography variant="body1" component={Link} to="/">
          Trading Offerings
        </Typography>
      </ListItem>
      <ListItem divider onClick={handleClick}>
        <Typography variant="body1" component={Link} to="/">
          Investing Platforms
        </Typography>
        {open ? <ExpandLess   /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Investing Web Platforms
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              HFTmaxima mobile App
            </Typography>
          </ListItem>
        </List>
      </Collapse>
      <ListItem divider onClick={handleClick1}>
        <Typography variant="body1" component={Link} to="/">
          HFTmaxima Trading Platforms
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              HFTmaxima Desktop
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              HFTmaxima web
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              HFTmaxima Mobile App
            </Typography>
          </ListItem>
        </List>
      </Collapse>
      <ListItem divider>
        <Typography variant="body1" component={Link} to="/">
          Mobile Trading Apps
        </Typography>
      </ListItem>
      <ListItem divider>
        <Typography variant="body1" component={Link} to="/">
          Compare Platform
        </Typography>
      </ListItem>
      <ListItem divider>
        <Typography variant="body1" component={Link} to="/">
          24/5 Trading
        </Typography>
      </ListItem>
      <ListItem divider>
        <Typography variant="body1" component={Link} to="/">
          Order Execution
        </Typography>
      </ListItem>
    </List>
  );
}
