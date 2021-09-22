import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";

export default function MainMiddleLower() {
  const classes = useStyles();
  return (
    <main className={`${classes.middleBack} ${classes.gridMiddles} `}>
      <Customized.Middles />
    </main>
  );
}
