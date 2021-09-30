import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: ({ slide }) => (slide ? "70px" : "223px"),
    left: "0px",
    alignItems: "center",
    top: "0px",
    position: "absolute",
  },
  logo: {
    height: 40,
    position: "relative",
    marginLeft: ({ slide }) => (!slide && theme.spacing(3)),
  },
  divLogo: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: "-.4px",
    },
  },
  item: {
    "& .MuiTypography-root": {
      display: ({ slide }) => (slide ? "none" : "block"),
    },
    "& .MuiSvgIcon-root": {
      marginLeft: ({ slide }) => slide && "13%",
      justifyContent: "flex-end",
    },
    "&:hover": {
      background: "#008900",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  collapse: {
    "& .MuiTypography-root": {
      display: ({ slide }) => slide && "block",
      fontSize:15,
    },
    "& .MuiSvgIcon-root": {
      display: ({ slide }) => slide && "none",
      justifyContent: "flex-end",
    }
  },
  top: {
    width: ({ slide }) => (slide ? "100%" : "calc(100% - 276px)"),
    borderRadius: "6px",
    margin: theme.spacing(3),
    background: ({ light }) => (light ? "#fff" : "#008900"),
    "& .MuiSvgIcon-root": {
      color: ({ light }) => (light ? "#008900" : "#fff"),
    },
  },
  flex: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "3%",
  },
  divSpace: {
    marginRight: "20%",
  },
  innerDivSpace: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
      "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          animation: "ripple 1.2s infinite ease-in-out",
          border: "1px solid currentColor",
          content: '""',
        },
      },
    },
  },
  text: {
    textAlign: "right",
    marginRight: "7%",
    display: "block",
    "& .MuiTypography-root": {
      clear:'both',
      overFlow:'hidden',
      display:'inline-block',
      whiteSpace:'nowrap'
    },
    "& .MuiTypography-body1": {
      marginBottom: "-4%",
      display: "flex",
    },
  },
  iconButton: {
    marginLeft: "-1%",
  },
  divLogoMenuFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  menu: {
    position: "absolute",
    bottom: 10,
    marginLeft: ({ slide }) => (slide ? "25%" : "42%"),
  },
  title: {
    marginLeft: "12%",
    "& .MuiSvgIcon-root": {
      marginLeft: ({ slide }) => slide && "6%",
    },
  },
  dashboardContainer: {
    background: ({ light }) => (light ? "#008900" : "#008900"),
  },
  avatarBadge:{
    marginRight:theme.spacing(4)
  }
}));
