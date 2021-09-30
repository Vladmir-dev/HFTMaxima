import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import BookIcon from "@mui/icons-material/Book";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExtensionIcon from "@mui/icons-material/Extension";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  ListItemButton,
  Grid,
  Typography,
  Paper,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
  IconButton,
} from "@mui/material";
import logo from "../../images/price.png";
import useStyles from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function Leftbar() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleSlide = () => {
    setSlide(!slide);
  };
  const classes = useStyles({ slide });
  return (
    <Paper className={classes.paper}>
      <div className={classes.divLogoMenuFlex}>
        <div className={classes.divLogo}>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            align="center"
            style={{ color: "#111" }}
          >
            <img src={logo} alt="Maxima logo" className={classes.logo} />
            {slide ? "" : "Maxima"}
          </Typography>
        </div>
      </div>
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        disablePadding
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.title}
          >
            {slide ? <MoreHorizIcon /> : "Maxima Dashboard"}
          </ListSubheader>
        }
      >
        <ListItemButton className={classes.item} onClick={handleClick}>
          <ListItemText primary="Trading Accounts" />
          <ListItemIcon>
            <AccountTreeRoundedIcon size={20} />
          </ListItemIcon>
          {open}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          className={classes.collapse}
        >
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountBalanceWalletRoundedIcon size={20} />
              </ListItemIcon>
              <ListItemText primary="Paper Account" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountBalanceWalletRoundedIcon size={20} />
              </ListItemIcon>
              <ListItemText primary="Live Account" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton className={classes.item}>
          <ListItemText primary="Home" />
          <ListItemIcon>
            <AppsIcon size={20} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton className={classes.item}>
          <ListItemText primary="Documents" />
          <ListItemIcon>
            <BookIcon size={20} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton className={classes.item}>
          <ListItemText primary="Files" />
          <ListItemIcon>
            <InsertDriveFileIcon size={20} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton className={classes.item}>
          <ListItemText primary="Integrations" />
          <ListItemIcon>
            <ExtensionIcon size={20} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <div className={classes.menu}>
        <IconButton onClick={handleSlide}>
          {slide ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
    </Paper>
  );
}
