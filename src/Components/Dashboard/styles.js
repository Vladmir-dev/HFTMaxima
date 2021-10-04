import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  flexG: {
    flexGrow: 1,
  },
  // Dashboard Top styles
  appbar: {
    width: ({ slide }) => (slide ? "calc(100% - 70px)" : "calc(100% - 209px)"),
    borderBottom: "1px solid silver",
    background: "#111",
    "& .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiTypography-body1": {
      color: "#008900",
    },
    "& .MuiTypography-caption": {
      color: "#008900",
    },
    "& .MuiSvgIcon-root": {
      color: "#008900",
    },
  },
  avatarBadge: {
    marginRight: theme.spacing(4),
  },
  innerDivSpace: {
    display: "flex",
    justifyContent: "space-between",
    color: "#000",
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
  text: {
    textAlign: "right",
    marginRight: "7%",
    display: "block",
    "& .MuiTypography-root": {
      clear: "both",
      overFlow: "hidden",
      display: "inline-block",
      whiteSpace: "nowrap",
    },
    "& .MuiTypography-body1": {
      marginBottom: "-4%",
      display: "flex",
    },
    color: "#008900",
  },
  divSpace: {
    marginRight: "20%",
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "3%",
  },
  topText: {
    color: "#000",
  },
  // Dashboardleftside styles
  paper: {
    width: ({ slide }) => (slide ? "70px" : "210px"),
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    borderRight: "1px solid silver",
    background: "#111",
    color: "#fff",
    borderRadius: "none",
  },

  leftSidedivbutton: {
    "& .MuiButton-root": {
      textTransform: "capitalize",
      color: "#000",
      width: "100%",
      "&:hover": {
        background: "#008900",
        color: "#fff",
      },
      background: "#008900",
    },
    "& .MuiPaper-root": {
      marginTop: theme.spacing(5),
    },
    marginLeft: "7%",
    marginRight: "8%",
    "& .MuiSvgIcon-root": {
      marginLeft: ({ slide }) => slide && "6%",
    },
    marginTop: theme.spacing(2),
  },
  menu: {
    position: "absolute",
    bottom: 10,
    marginLeft: ({ slide }) => (slide ? "25%" : "42%"),
  },
  divLogoMenuFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: 40,
    position: "relative",
    marginLeft: ({ slide }) => !slide && theme.spacing(3),
  },
  divLogo: {
    paddingLeft: ({ slide }) => (slide ? theme.spacing(3) : theme.spacing(2)),
    paddingTop: theme.spacing(3),
    color: "#fff",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    margin: ({ slide }) => (slide ? theme.spacing(3) : theme.spacing(2)),
    padding: "4px 8px 4px 8px",
    "&:hover": {
      background: "#008900",
      color: "#fff",
      borderRadius: "4px",
      position: "relative",
      boxShadow: ({ slide }) =>
        slide &&
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      width: ({ slide }) => slide && "50%",
    },
    "& .MuiTypography-root": {
      display: ({ slide }) => (slide ? "none" : "block"),
    },
  },
  icon: {
    "& .MuiSvgIcon-root": {
      marginLeft: ({ slide }) => slide && "13%",
    },
  },
  sideNavbars: {
    display: "flex",
    justifyContent: "space-between",
  },
  more: {
    marginLeft: "35%",
    "& .MuiSvgIcon-root": {
      marginLeft: ({ slide }) => slide && "10%",
    },
    marginTop: theme.spacing(1),
  },
  // Home styles
  container: {
    background: "#000",
  },
  // topmenu styles
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));
