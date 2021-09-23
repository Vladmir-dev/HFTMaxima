import { Collapse, List } from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import useStyles from "./styles";

export default function Lists() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItemButton onClick={handleClick} alignItems='center'>
        <ListItemText primary="Products" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            <ListItemText primary="Account Types" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Top FAQs" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Features" />
          </ListItemButton>

           <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Platform" />
          </ListItemButton>                                                                                                                                                                                                                                       
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Featured In" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Support" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Blog" />
      </ListItemButton>
    </List>
  );
}
