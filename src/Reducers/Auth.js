import { GOOGLE_LOGIN, LOGOUT } from "../Actions/types";

const initialState = {
  users: [],
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
      localStorage.setItem(
        "userProfile",
        JSON.stringify(null)
      );
      return {
        ...state,
        users: action?.payload,
      };
    default:
      return state;
  }
}
