import axios from "axios";
import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_lOADING,
  AUTH_LOGIN_SUCCESS,
} from "./types";
const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const loginUser = (loginValues) => (dispatch) => {
  //   const body = JSON.stringify(userData);
  console.log(loginValues);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch({
    type: AUTH_LOGIN_lOADING,
  });

  if (loginValues) {
    if (loginValues.email && loginValues.password) {
      // check if password === confirm_password
      const object = {
        email: loginValues.email,
        password: loginValues.password,
        // firstname: loginValues.first_name,
        // address: loginValues.address,
        // contact: loginValues.contact,
      };
      console.log(object);
      api
        .post(`/auth/login`, object, config)
        .then(({ data }) => {
          console.log(data);

          dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: data,
          });
        })
        .catch((err) => {
          if (err.response) {
            dispatch({
              type: AUTH_LOGIN_FAIL,
              payload: err.response,
            });
          }
        });
    }
  }
};

export const registerUser = (registerValues) => (dispatch) => {
  //   const body = JSON.stringify(userData);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch({
    type: AUTH_LOGIN_lOADING,
  });

  if (registerValues) {
    if (
      registerValues.email &&
      registerValues.password &&
      registerValues.username
    ) {
      const object = {
        username: registerValues.username,
        email: registerValues.email,
        password: registerValues.password,
      };
      console.log(object);
      api
        .post(`/auth/register`, object, config)
        .then(({data}) => {
          console.log(data);

          dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: data.token,
          });
        })
        .catch((err) => {
          if (err.response) {
            dispatch({
              type: AUTH_LOGIN_FAIL,
              payload: err.response.message,
            });
          }
        });
    }
  }
};
