import { makeStyles } from "@material-ui/core";
import image from "../../images/next.jpg";
export default makeStyles((theme) => ({
  form: {
    marginTop: "40px",
    position: "absolute",
    "& .MuiInputBase-root": {
      background: "#fff",
      color: "#000",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2),
      color: "#707075",
      marginTop: "40px",
      transition: "color 300ms",
      textTransform: "capitalize",
      width: "100%",
      "&:hover": {
        color: "#fff",
        background: "#008900",
      },
    },
  },
  google: {
    background: "#fff",
    "&:hover": {
      background: "#fff",
      "& .MuiButton-label": {
        color: "#164A41",
      },
    },
    width: "85%",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("sm")]: {
      marginTop: '-20%',
    },
  },
  facebook: {
    background: "#fff",
    "&:hover": {
      background: "#101357",
      color: "#fff",
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
    },
    "& .MuiSvgIcon-root": {
      color: "#101357",
    },
    width: "85%",
    [theme.breakpoints.only("sm")]: {
      marginTop: '-10%',
    },
  },

  logo: {
    height: 40,
    position: "relative",
    marginRight: theme.spacing(1),
  },
  divLogo: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(7),
    "& .MuiTypography-h5": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiTypography-h5": {
        color: "#008900",
      },
    },
  },
  divForm: {
    margin: "0px 0px 0px 26%",
    "& .MuiButton-root": {
      marginRight: "12%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10%",
    },
    [theme.breakpoints.up("md")]: {
      "& .MuiButton-root": {
        color: "#fff",
        background: "#008900",
      },
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "17%",
    },
  },
  divButton: {
    margin: theme.spacing(10),
    "& .MuiButton-root": {
      textTransform: "capitalize",
    },
    [theme.breakpoints.only("sm")]: {
      width: "85%",
      marginLeft:'13%',
    },
  },
  container: {
    background: "#000",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      background: "#fff",
      opacity: ".9  ",
    },
  },
  leftImage: {
    background: "#fff",
    height: "103vh",
    position: "relative",
    objectFit: "contain",
    backgroundSize: "cover",
    opacity: ".9",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  div: {
    margin: theme.spacing(10),
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(7),
    },
  },
  divTop: {
    bottom: 90,
    position: "absolute",
    marginLeft: "15%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  divRight: {
    marginTop: "8px",
    opacity: ".8",
    [theme.breakpoints.down("xs")]: {
      marginTop: "8px",
    },
  },
  xs: {
    "& .MuiTypography-h4": {
      fontWeight: "450",
      color: "#008900",
    },
    "& .MuiTypography-caption": {
      fontWeight: "450",
      color: "#d9d9d9",
    },
    "& .MuiTypography-subtitle2": {
      cursor: "pointer",
      color: "#008900",
      marginRight: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      color: "#000",
      "& .MuiTypography-root": {
        color: "#111",
      },
      "& .MuiTypography-subtitle2": {
        marginLeft: "10%",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& .MuiTypography-subtitle2": {
        marginLeft: "10%",
      },
    },
    [theme.breakpoints.only("sm")]: {
      "& .MuiTypography-subtitle2": {
        marginLeft: "10%",
      },
    },
  },
  rightImage: {
    background: "#fff",
    height: "103vh",
    opacity: ".9",
    position: "relative",
  },
  rightdivLogo: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
    "& .MuiTypography-h5": {
      color: "#000",
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiTypography-h5": {
        color: "#008900",
      },
    },
  },
  rightdivForm: {
    marginLeft: "26%",
    "& .MuiButton-root": {
      marginRight: "12%",
      background:'#008900',
      '&:hover':{
        background:'#fff',
        opacity:".9",
        color:'#008900'
      },
      color:'#fff'
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "9%",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "16%",
    },
    marginTop: "-4%",
  },
  rightXs: {
    "& .MuiTypography-h4": {
      fontWeight: "450",
      color: "#008900",
    },
    "& .MuiTypography-caption": {
      fontWeight: "450",
      color: "#d9d9d9",
    },
    "& .MuiTypography-subtitle2": {
      cursor: "pointer",
      color: "#008900",
      marginRight: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      color: "#000",
      "& .MuiTypography-root": {
        color: "#111",
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& .MuiTypography-subtitle1": {},
    },
  },
  rightDiv: {
    margin: theme.spacing(10),
    marginLeft: "15%",
    marginRight: "15%",
    "& .MuiTypography-body2": {
      color: "#fff",
    },
    "& .MuiTypography-subtitle2": {
      marginRight: "5%",
    },
    
    
  },
  rightDivRight: {
    marginTop: "8px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "8px",
    },
    background: `url(${image})`,
    height: "102vh",
    position: "relative",
    objectFit: "contain",
    backgroundSize: "cover",
    opacity: ".6",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rightDivButton: {
    margin: theme.spacing(10),
    "& .MuiButton-root": {
      textTransform: "capitalize",
      marginBottom: theme.spacing(4),
    },
    marginLeft: "15%",
    [theme.breakpoints.only('sm')]:{
      "& .MuiButton-root": {
        margin: "2% 0 0 2%",
        width:'100%',
        marginBottom: theme.spacing(4),
      },
    }
  },
  rightDiv1: {
    "& .MuiTypography-subtitle2": {
      marginRight: "24%",
    },
    "& .MuiTypography-body2": {
      color: "#fff",
    },
    marginTop: "-10%",
   
  },
  rightDiv2: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      bottom: 25,
      position: "absolute",
      marginLeft: "13%",
      "& .MuiTypography-body2": {
        color: "#000",
      },
    },
  },
}));
