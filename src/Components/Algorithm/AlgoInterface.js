import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGOUT } from "../../Actions/types";
import Header from "../Header/Header";
import Main from "./Main";
import SideBar from "./sideBar";
export default function AlgoInterface() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("userProfile")));
    console.log(user);
  }, [user]);
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };
  return (
    <React.Fragment>
      <Main user={user} logout={logout}/>
      
      <SideBar/>
    </React.Fragment>
  );
}
