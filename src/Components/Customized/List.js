import {
  Collapse,
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
          Products
        </Typography>
      </ListItem>
      <ListItem divider onClick={handleClick}>
        <Typography variant="body1" component={Link} to="/">
          Account Types
        </Typography>
        {open ? <ExpandLess   /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Demo Account
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Transfer Account
            </Typography>
          </ListItem>
        </List>
      </Collapse>
      <ListItem divider onClick={handleClick1}>
        <Typography variant="body1" component={Link} to="/">
          Top FAQs
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              HFTMaxima Desktop
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Why HFTMaxima ?
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Guidance
            </Typography>
          </ListItem>
        </List>
      </Collapse>
      <ListItem divider>
        <Typography variant="body1" component={Link} to="/">
          Features
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Algorithm
            </Typography>
          </ListItem>
          <ListItem className={classes.nested}>
            <Typography variant="body1" component={Link} to="/">
              Charts
            </Typography>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
