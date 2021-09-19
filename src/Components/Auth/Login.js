import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Customized } from "../../Components/Customized/Customized";
import { Form, UseForm } from "../Customized/UseForm";
import {initialState } from "../../state";
import useStyles from "./styles";
import GoogleLogin from "react-google-login";
import { Image } from "../../images/Img";
import FacebookIcon from "@material-ui/icons/Facebook";
import Forgot from "../forgot/Forgot";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GOOGLE_LOGIN } from "../../Actions/types";
export default function Login() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { values, handleInputChange, setValues } = UseForm(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const googleSuccess = (res) => {
    const results = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: GOOGLE_LOGIN, payload: { results, token } });
      history.push('/algorithm')
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful, try again later");
  };
  return (
    <Container className={classes.page}>
      <Grid container className={classes.Container} spacing={3}>
        <Grid
          item
          container
          direction="column"
          className={classes.left}
          xs={12}
          md={6}
        >
          <div className={classes.div}>
            <Typography variant="h4" style={{ fontWeight: "450",color:'#000' }} component={Link} to='/'>
              Sign in to HFTMaxima
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              Enter your details to access your account
            </Typography>
          </div>

          <div className={classes.div}>
            <GoogleLogin
              clientId={process.env.CLIENTID}
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
              cookiePolicy="single_host_origin"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <Customized.Button
              className={classes.facebook}
              startIcon={<FacebookIcon />}
              text="Sign in with facebook"
              fullWidth
            />
          </div>

          <div className={`${classes.divTop} ${classes.div}`}>
            <Typography variant="body2" gutterBottom align="right">
              Don't have an account?
              <Typography
                variant="subtitle2"
                component={Link}
                to="/auth/register"
              >
                Sign up
              </Typography>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.right}
          xs={12}
          md={6}
        >
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Customized.Input
              label="Email"
              value={values.email}
              name="email"
              type="email"
              onChange={handleInputChange}
              variant="filled"
            />
            <Customized.Input
              label="Password"
              value={values.password}
              name="password"
              type="password"
              onChange={handleInputChange}
              variant="filled"
            />
            <div>
              <Typography
                variant="subtitle2"
                align="center"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenPopup(true)}
              >
                Forgot password?
              </Typography>
            </div>
            <Customized.Button text="Login" type="submit" />
          </Form>
        </Grid>
      </Grid>
      <Customized.Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <Forgot />
      </Customized.Popup>
    </Container>
  );
}
