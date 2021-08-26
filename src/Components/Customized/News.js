import React from "react";
import { Middle, MiddleMid } from "./middle";
import image12 from "../../images/image3.jpg";
import image14 from "../../images/image5.jpg";
export default function News() {
  return (
    <div>
      <Middle
        styles={{ marginBottom: "9em" }}
        image={image12}
        titleTop="Up-to-the-minute news and the analysis to help you interpret it"
        topSubtitle="Stay on the top of the market and execute with the confidence of a well-informed trader"
        titleMiddle="Daily Market Update with Wycoff strategies"
        middleSubtitle="Get a daily intelligence briefing from Wycoff strategies. To predict how the market
        trends, latest news on stocks, bonds and commodities"
      />
      <MiddleMid
        image={image14}
        titleMiddle="HFTmaxima trade network"
        middleSubtitle="Live stream with the industry news from our media affiliate, with exclusive insights from
        industry props that help you interpret the market events and put them to work in your portfolio"
        to='/news'
      />
    </div>
  );
}
