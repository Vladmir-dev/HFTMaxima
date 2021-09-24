import React from "react";
import { Middle, MiddleMid } from "./middle";
import Fade from "react-reveal/Fade";
import image12 from "../../images/image12.jpg";
import image14 from "../../images/image14.jpg";
export default function Middles() {
  return (
    <div>
      <Fade duration={3000} left>

      <Middle
        image={image12}
        titleTop=" Be an explorer! Explore the depth of Maxima"
        topSubtitle="Compare the unique features of our platform and discover how each can
            help you enhance your profits"
        titleMiddle="Maxima web "
        middleSubtitle=" Developed specifically with feedback from traders like you, the
            latest addition to the Maxima site is a web-based software that
            features a streamlined trading experiences. It's perfect for those
            who want to trade equities and derivatives while accessing essential
            tools from their everyday browser."/>

        </Fade>

        <Fade duration={3000} right>

      <MiddleMid
        image={image14}
        titleMiddle="Maxima mobile "
        middleSubtitle=" Developed specifically with feedback from traders like you, the
            latest addition to the Maxima site is a web-based software that
            features a streamlined trading experiences. It's perfect for those
            who want to trade equities and derivatives while accessing essential
            tools from their everyday browser."/>

          </Fade>
    </div>
  );
}
