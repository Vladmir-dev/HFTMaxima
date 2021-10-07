import * as React from "react";
import PropTypes from "prop-types";
import Account from "./Account";
import Profile from "./Profile";
import Security from "./Security";
import Payments from "./Payments";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainAccounts: {
    margin: theme.spacing(6),
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
  
      "& .MuiTab-root": {
        color: "#8e8e90",
        fontSize:17,
        textTransform: "none",
        "&:hover": {
          color: "#008900",
        },
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "#008900",
        color: "#008900",
      },
      "& .MuiTabs-root": {
        marginLeft:'5.4%'
      },
    },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Accounts() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Container className={classes.mainAccounts}>
      <div style={{margin:'0% 0% 1% 9%'}}>
      <Typography variant='h6' gutterBottom>Your Account</Typography>
      </div>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Account" {...a11yProps(0)} />
            <Tab label="Profile" {...a11yProps(1)} />
            <Tab label="Security" {...a11yProps(2)} />
            <Tab label="Payments" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Account />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Security />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Payments />
          </TabPanel>
        </Box>
      </Container>
    </main>
  );
}
