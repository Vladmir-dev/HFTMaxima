import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  //Logo Styles
  logo: {
    height: 40,
    position: "relative",
  },
  popLogo: {
    margin: " -3% 20% 10% 25%",
  },
  //profile
  profileContainer: {
    "& .MuiButton-root": {
      textDecoration: "capitilize",
    },
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
  profileTitle: {
    marginBottom: theme.spacing(4),
    marginLeft: "5%",
    fontWeight: "200",
    fontSize:10,
  },
  profileLeft: {
    marginRight: "0",
    marginLeft: "4%",
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
  leftUp: {
    marginBottom: theme.spacing(7),
    "& .MuiButton-root": {
      margin: "8% 8% 8% 4.5%",
      width: "90%",
      background: "#008900",
      color: "#fff",
    },
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
  leftDownFlex: {
    display: "block",
    "& .MuiButton-root": {
      borderRadius: "20px",
      background: "#ff1e00",
      color: "#fff",
      padding: "-2% 1rem -2% 1rem",
      fontWeight: " 600",
      position: "relative",
      marginTop: "4%",
    },
    "& .MuiPaper-root": {
      width: "100%",
    },
    "& .MuiTypography-body1": {
      fontWeight: "bold",
      borderBottom: "1px solid #008900",
      display: "inline-block",
    },
    margin: theme.spacing(2),
  },
  profilePaper: {
    marginBottom: theme.spacing(7),
  },
  leftDownTypo: {
    margin: theme.spacing(2),
    "& .MuiTypography-body2": {
      margin: "4% 0% 0% 1%",
    },
    "& .MuiSvgIcon-root": {
      color: "#f2d53c",
      marginRight: "2%",
    },
  },
  //security styles
  securityPaper: {
    marginBottom: theme.spacing(7),
    "& .MuiButton-root": {
      textTransform: "capitalize",
      marginTop: theme.spacing(4),
      marginLeft: "3%",
      "&:hover": {
        background: "#008900",
        color: "#fff",
      },
    },
  },
  // payments styles
  paymentsPaper: {
    marginBottom: theme.spacing(7),
    "& .MuiButton-root": {
      textTransform: "capitalize",
      marginTop: theme.spacing(4),
      marginLeft: "3%",
      "&:hover": {
        background: "#008900",
        color: "#fff",
      },
    },
  },
}));
