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
    marginLeft: "11%",
    "& .MuiButton-root": {
      marginRight: "12%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2.5%",
    },
  },
  divButton: {
    margin: theme.spacing(10),
    "& .MuiButton-root": {
      textTransform: "capitalize",
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
  },
  divTop: {
    bottom: 90,
    position: "absolute",
    marginLeft: "6.5%",
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
    },
    [theme.breakpoints.up("sm")]: {
      "& .MuiTypography-subtitle1": {},
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
    marginLeft: "11%",
    "& .MuiButton-root": {
      marginRight: "12%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "3.5%",
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
    marginLeft:'15%',
    marginRight:'15%',
    '& .MuiTypography-body2':{
        color:'#fff',
    },
    '& .MuiTypography-subtitle2':{
      marginRight:'5%',
  }
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
    opacity:'.6',
    [theme.breakpoints.down("xs")]:{
      display:'none'
    }
  },
  rightDivButton: {
    margin: theme.spacing(10),
    "& .MuiButton-root": {
      textTransform: "capitalize",
      marginBottom:theme.spacing(4),
    },
    marginLeft:'15%',
  },
  rightDiv1: {
    '& .MuiTypography-subtitle2':{
      marginRight:'24%',
    },
    '& .MuiTypography-body2':{
      color:'#fff',
  },
    marginTop:'-10%',
},
rightDiv2: {
  [theme.breakpoints.up("sm")]: {
    display:'none',
  },
  [theme.breakpoints.down("xs")]: {
    display:'block',
    bottom:25,
    position:'absolute',
    marginLeft: "4.5%",
    '& .MuiTypography-body2':{
      color:'#000',
  },
  },
}
}));
