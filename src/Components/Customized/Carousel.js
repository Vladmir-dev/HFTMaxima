import React from "react";
import { Carousel as CarouselComponet } from "react-responsive-carousel";
import { Customized } from "./Customized";
export default function Carousel() {
  return (
    <CarouselComponet
      autoPlay
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      <Customized.Images />
    </CarouselComponet>
  );
}
