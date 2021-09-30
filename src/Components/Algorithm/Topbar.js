import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Avatar,
  Grid,
} from "@material-ui/core";
import { Badge, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import useStyles from "./styles";
import { themeConfig } from "../../Config/themeConfig";
export default function Topbar() {
  const [light, setLight] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userProfile")));
  const handleLight = () => {
    setLight(!light);
  };
  const classes = useStyles({light});

  return (
    <Container>
      <AppBar className={classes.top} color="inherit" position='fixed'>
        <Toolbar>
          <Grid item className={classes.iconButton}>
            <IconButton onClick={handleLight}>
              {light ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />}
            </IconButton>
          </Grid>
          <div className={classes.flex} />
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
                  <Avatar fontSize="small" 
                  src={user.results.imageUrl} 
                  alt={user.results.name}
                 >{user.results.name}</Avatar>
                </Badge>
              </div>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
