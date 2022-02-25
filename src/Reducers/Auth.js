import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_lOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_LOADING,
  AUTH_REGISTER_SUCCESS,
  GOOGLE_LOGIN,
  LOGOUT,
} from "../Actions/types";

const initialState = {
  users: null,
  auth_login_loading: false,
  message: null,
  error: null,
  auth_register_loading: false,
  token: localStorage.getItem("token"),
};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case GOOGLE_LOGIN:
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ ...action?.payload })
      );
      return {
        ...state,
        users: action?.payload,
      };
    case LOGOUT:
      localStorage.setItem("userProfile", JSON.stringify(null));
      return {
        ...state,
        users: action?.payload,
      };
    case AUTH_LOGIN_lOADING:
      return {
        ...state,
        auth_login_loading: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        auth_login_loading: false,
        user: action.payload,
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        auth_login_loading: false,
        error: action.payload,
      };
    case AUTH_REGISTER_LOADING:
      return {
        ...state,
        auth_register_loading: true,
      };
    case AUTH_REGISTER_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        auth_register_loading: false,
        user: action.payload,
      };
    case AUTH_REGISTER_FAIL:
      return {
        ...state,
        auth_register_loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
