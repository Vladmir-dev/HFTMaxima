import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Customized } from "../../Components/Customized/Customized";
import logo from "../../images/price.png";
import { Link } from "react-router-dom";
import { tradingAccount, items } from "./arsenal";
export default function DashboardLeftSide() {
  const [slide, setSlide] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };
  const classes = useStyles({ slide });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper className={classes.paper} slide={slide} elevation={0}>
      <Grid container direction="column" spacing={3}>
        <div className={classes.divLogoMenuFlex}>
          <div className={classes.divLogo}>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              align="center"
              style={{ color: "#fff" }}
            >
              <img src={logo} alt="Maxima logo" className={classes.logo} />
              {slide ? "" : "Maxima"}
            </Typography>
          </div>
        </div>
        {slide ? (
          <MoreHorizIcon size={20} className={classes.more} />
        ) : (
          <div className={classes.leftSidedivbutton}>
            <Customized.Button
              text="Trading Accounts"
              endIcon={<AccountTreeRoundedIcon size={20} />}
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={0}
            >
              {tradingAccount.map((ac) => (
                <MenuItem onClick={handleClose} key={ac.id}>
                  {ac.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}

        <div>
          {items.map((item) => (
            <div className={classes.item}>
              <Typography variant="body1" key={item.id}>
                {item.label}
              </Typography>
              <div className={classes.icon}>{item.icon}</div>
            </div>
          ))}
        </div>
        <div className={classes.menu}>
          <IconButton onClick={handleSlide}>
            {slide ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
      </Grid>
    </Paper>
  );
}
