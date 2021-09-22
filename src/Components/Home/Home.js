import React from "react";
import Main from "../../Main/Main";
import MainLow from "../../Main/MainLow";
import MainMiddle from "../../Main/MainMiddle";
import MainMiddleLower from "../../Main/MainMiddleLower";


export default function Home() {
  return (
    <React.Fragment>
      <Main />
      <MainMiddle />
      <MainMiddleLower />
      <MainLow />
    </React.Fragment>
  );
}
