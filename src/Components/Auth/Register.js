import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Customized } from "../../Components/Customized/Customized";
import { Form, UseForm } from "../Customized/UseForm";
import { initialState } from "../../state";
import useStyles from "./styles";
import GoogleLogin from "react-google-login";
import { Image } from "../../images/Img";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, useHistory } from "react-router-dom";
import { GOOGLE_LOGIN } from "../../Actions/types";
import { useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import logo from "../../images/price.png";
export default function Register() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { values, handleInputChange, setValues } = UseForm(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const googleSuccess = (res) => {
    const results = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: GOOGLE_LOGIN, payload: { results, token } });
      history.push("/algorithm");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful, try again later");
  };
  const facebookLogin = (response) => {
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <main className={classes.container}>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} sm={6} className={classes.rightImage} align="center">
          <div className={classes.rightdivLogo}>
            <Typography component={Link} to="/" variant="h5" align="center">
              <img src={logo} alt="Maxima logo" className={classes.logo} />
              Maxima
            </Typography>
          </div>
          <div className={classes.rightXs}>
            <Typography variant="h4" gutterBottom>
              Sign Up to Maxima
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              Create a free account
            </Typography>
          </div>
          <div className={classes.rightdivForm}>
            <Form onSubmit={handleSubmit} className={classes.form}>
              <Customized.Input
                label="First Name"
                value={values.firstName}
                name="firstName"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Input
                label="Last Name"
                value={values.lastName}
                name="lastName"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Input
                label="Email"
                value={values.email}
                name="email"
                type="email"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Input
                label="Password"
                value={values.password}
                name="password"
                type="password"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Button text="Sign up" type="submit" />
            </Form>
          </div>
          <div className={classes.rightDiv2}>
            <Typography variant="body2" gutterBottom align="right">
              Already have an account?
              <Typography variant="subtitle2" component={Link} to="/auth/login">
                Sign in!
              </Typography>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightDivRight}>
          <div className={classes.rightDiv}>
            <Typography variant="body2" gutterBottom color="textSecondary">
              By Signing up, you agree to the terms and conditions for HFTmaxima
              application. For safe trading with our tools you must agree to the
              platform polices and terms of service. Any violation has a fine.
            </Typography>
          </div>
          <div className={classes.rightDivButton}>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENTID}
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
              cookiePolicy="single_host_origin"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_KEY}
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile"
              callback={facebookLogin}
              icon={<FacebookIcon fontSize="small" />}
              cssClass={classes.facebook}
            />
          </div>
          <div className={classes.rightDiv1}>
            <Typography variant="body2" gutterBottom align="right">
              Already have an account?
              <Typography variant="subtitle2" component={Link} to="/auth/login">
                Sign in!
              </Typography>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
