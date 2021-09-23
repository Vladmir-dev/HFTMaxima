import React from "react";
import Main from "../../Main/Main";
import MainLow from "../../Main/MainLow";
import MainMiddle from "../../Main/MainMiddle";
import MainMiddleLower from "../../Main/MainMiddleLower";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <MainMiddle />
      <MainMiddleLower />
      <MainLow />
      <Footer/>
    </React.Fragment>
  );
}
