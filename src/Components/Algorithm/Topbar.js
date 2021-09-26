import {
  AppBar,
  Toolbar,
  Container,
  makeStyles,
  Typography,
  Avatar,
  Grid,
} from "@material-ui/core";
import { Badge, IconButton } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from "react";
import { Customized } from "../Customized/Customized";
const useStyles = makeStyles((theme) => ({
  top: {
    width: "calc(100% - 238px)",
    borderBottom: "1px solid silver",
  },
  flex: {
    flexGrow: 1,
  },
  grid:{
      display:'flex',
      justifyContent:'space-between',
      marginRight:'2%',
      marginLeft:'2%',
  }
}));
export default function Topbar() {
  const classes = useStyles();
  return (
    <Container>
      <AppBar className={classes.top} color="inherit" elevation={0}>
        <Toolbar>
          <Grid item>
            <Typography variant="h6">Welcome! To Maxima</Typography>
          </Grid>
          <div className={classes.flex} />
          <Grid item className={classes.grid}>
            <IconButton size='small'>
              <Badge>
                <NotificationsNoneIcon fontSize='small'/>
              </Badge>
            </IconButton>
            <Avatar fontSize='small'></Avatar>
            <Customized.Button text='Account' size='small'/>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  );
}
