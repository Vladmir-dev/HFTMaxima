import React from "react";
import Main from "../../Main/Main";
import MainLow from "../../Main/MainLow";
import MainMiddle from "../../Main/MainMiddle";
import MainMiddleLower from "../../Main/MainMiddleLower";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <MainMiddle />
      <MainMiddleLower />
      <MainLow />
      <Footer />
    </React.Fragment>
  );
}
