import React from "react";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { Customized } from "../../Components/Customized/Customized";
import { Form, UseForm } from "../Customized/UseForm";
import { initialState } from "../../state";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "./styles";
import GoogleLogin from "react-google-login";
import { Image } from "../../images/Img";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import Forgot from "../forgot/Forgot";
export default function Login() {
  const [openPopup,setOpenPopup]= React.useState(false)
  const classes = useStyles();
  const {
    values,
    passwordShow,
    handleShowPassword,
    handleInputChange,
    setValues,
  } = UseForm(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const googleSuccess = () => {};
  const googleFailure = () => {};
  return (
    <Container className={classes.page}>
      <Grid container className={classes.Container} spacing={3}>
        <Grid item container direction="column" className={classes.left}>
          <div>
            <Typography variant="h4">Login</Typography>
            <Typography variant="body2" gutterBottom>
              By logging in, you agree to the terms and conditions for HFTmaxima
              application
            </Typography>
          </div>
          <GoogleLogin
            clientId=""
            render={(renderProps) => (
              <Customized.Button
                className={classes.google}
                startIcon={<Image />}
                text="Sign in with Google"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
          />
          <Customized.Button
            className={classes.facebook}
            startIcon={<FacebookIcon/>}
            text="Sign in with facebook"
            fullWidth
          />
        </Grid>
        <Grid item container direction="column" className={classes.right}>
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Customized.Input
              label="Email"
              value={values.email}
              name="email"
              type="email"
              onChange={handleInputChange}
              variant='filled'
            />
            <Customized.Input
              label="Password"
              value={values.password}
              name="password"
              type={passwordShow ? "text" : "password"}
              onChange={handleInputChange}
              variant='filled'
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div>
                <Typography 
                variant='subtitle2' 
                align='center'
                style={{cursor:'pointer'}}
                onClick={()=>setOpenPopup(true)}>Forgot password?</Typography>
            </div>
            <Customized.Button text="Submit" type="submit" />
          </Form>
        </Grid>
      </Grid>
      <Customized.Popup 
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}>
        <Forgot/>
      </Customized.Popup>
    </Container>
  );
}
