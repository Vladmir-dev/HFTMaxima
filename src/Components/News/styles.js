import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  grid: {
    background: "#fff",
  },
  container:{
    padding:'0 5%',
    width:'100%',
    margin:0,
  },
  media:{
    height:250,
  },
  border:{
    border:'solid',
  },
  fullHeightCard:{
    height:'100%',
  },
  card:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    borderBottom:'10px solid white'
  },
  activeCard:{
    borderBottom:'10px solid #008900',
  },
  grid:{
    display:'flex',
  },
  details:{
    display:'flex',
    justifyContent:'space-between',
    margin:'20px'
  },
  title:{
    padding:'0 16px'
  },
  cardActions:{
    padding:'0 16px 8px 6px',
    display:'flex',
    justifyContent:'space-between'
  },
  card1:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:'45vh',
    padding:'10%',
    borderRadius:'10px',
    color:'#fff'
  },
  infoCard:{
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
  }
}));
