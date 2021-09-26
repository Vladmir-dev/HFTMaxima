import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Paper,
  Divider,
  IconButton,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import React, { useState } from "react";
import logo from "../../images/price.png";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import BookIcon from "@mui/icons-material/Book";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExtensionIcon from "@mui/icons-material/Extension";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ListItemButton } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: (slide) => (slide ? '238px' :'60px'),
    left: "0px",
    alignItems: "center",
    top: "0px",
    position: "absolute",
    borderRight: "1px solid silver",
  },
  logo: {
    height: 40,
    position: "relative",
    marginRight: theme.spacing(1),
  },
  divLogo: {
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: "-.4px",
    },
  },

  divArrow: {
    bottom: 10,
    position: "absolute",
    borderTop: "1px solid silver",
    "& .MuiIconButton-root": {
      marginTop: theme.spacing(1),
      marginLeft: "80%",
    },
    width: "100%",
  },
  item: {
    background:'#008900'
  },
}));
export default function Leftbar() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(false);
  const classes = useStyles({ slide });

  const handleClick = () => {
    setOpen(!open);
  };
  const handleSlide = () => {
    setSlide(!slide);
  };
  return (
    <Paper className={classes.paper} elevation={0} open={slide}>
      <div className={classes.divLogo}>
        <Typography
          component={Link}
          to="/"
          variant="h5"
          align="center"
          style={{ color: "#111" }}
        >
          <img src={logo} alt="HFTMaxima logo" className={classes.logo} />
          Maxima
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <List sx={{ width: "100%", maxWidth: 360 }} component="nav">
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Trading Accounts" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemText primary="Demo Account" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemText primary="Live Account" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider  />

        <ListItemButton className={classes.item}>
          <ListItemText primary="Home" />
          <ListItemIcon>
            <AppsIcon fontSize="small" />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Documentation" />
          <ListItemIcon>
            <BookIcon fontSize="small" />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Templates" />
          <ListItemIcon>
            <InsertDriveFileIcon fontSize="small" />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Integrations" />
          <ListItemIcon>
            <ExtensionIcon fontSize="small" />
          </ListItemIcon>
        </ListItemButton>
      </List>

      <div className={classes.divArrow}>
        <IconButton onClick={handleSlide}>
          {slide ? (
            <ChevronRightIcon fontSize="small" />
          ) : (
            <ChevronLeftIcon fontSize="small" />
          )}
        </IconButton>
      </div>
    </Paper>
  );
}
