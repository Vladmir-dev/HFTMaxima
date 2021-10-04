import {
  AppBar,
  Avatar,
  Badge,
  Divider,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { ListItemIcon, MenuItem } from "@mui/material";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Settings from "@material-ui/icons/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { LOGOUT } from "../../Actions/types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function DashboardTop() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };
  return (
    <AppBar
      position="fixed"
      className={classes.appbar}
      color="inherit"
      elevation={0}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item className={classes.topText}>
            <div>
              <Typography variant="subtitle2" align="center" noWrap>
                Welcome!
              </Typography>
            </div>
          </Grid>
          <div className={classes.flexG} />
          <Grid item className={classes.grid}>
            <div className={classes.divSpace} align="center">
              <IconButton>
                <Badge>
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </div>
            <div className={classes.innerDivSpace}>
              <div className={classes.text}>
                <Typography variant="body1" align="center" noWrap>
                  {user.results.name}
                </Typography>
                <Typography variant="caption" align="center" noWrap>
                  PaperAccount
                </Typography>
              </div>
              <div className={classes.avatarBadge}>
                <Badge
                  variant="dot"
                  overlap="circular"
                  anchorOrign={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      <Avatar
                        fontSize="small"
                        src={user.results.imageUrl}
                        alt={user.results.name}
                        sx={{ width: 32, height: 32 }}
                      >
                        {user.results.name}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Badge>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  className={classes.sx}
                  elevation={0}
                >
                  <MenuItem>{user.results.email}</MenuItem>
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}