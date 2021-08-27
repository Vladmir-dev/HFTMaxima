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
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
export default function Register() {
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
        <Grid
          item
          container
          direction="column"
          className={classes.leftRegister}
        >
          <div>
            <Typography variant="h4" style={{fontWeight:'450'}}>Sign up to HFTMaxima</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              create your free account
            </Typography>
          </div>
          <div>
            <GoogleLogin
              clientId=""
              render={(renderProps) => (
                <Customized.Button
                  className={classes.google}
                  startIcon={<Image />}
                  text="Sign up with Google"
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
              startIcon={<FacebookIcon />}
              text="Sign up with facebook"
              fullWidth
            />
          </div>
          <div className={classes.divTop}>
            <Typography variant="body2" gutterBottom color="textSecondary">
              By Signing up, you agree to the terms and conditions for HFTmaxima
              application
            </Typography>
          </div>
          <div className={classes.divTop}>
            <Typography variant="body2" gutterBottom align="right">
              Already have an account?
              <Typography variant="subtitle2" component={Link} to="/auth/login">
                Sign in!
              </Typography>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.rightRegister}
        >
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Customized.Input
              label="First Name"
              value={values.email}
              name="email"
              type="email"
              onChange={handleInputChange}
            />
            <Customized.Input
              label="Last Name"
              value={values.email}
              name="email"
              type="email"
              onChange={handleInputChange}
            />
            <Customized.Input
              label="Email"
              value={values.email}
              name="email"
              type="email"
              onChange={handleInputChange}
            />
            <Customized.Input
              label="Password"
              value={values.password}
              name="password"
              type={passwordShow ? "text" : "password"}
              onChange={handleInputChange}
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
            <Customized.Button text="Sign up" type="submit" />
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}
