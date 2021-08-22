import React from "react";
import image14 from "../../images/image14.jpg";
import { ProductMenuiItem } from "./middle";

export default function ProductMenus({image,titleMiddle,middleSubtitle}) {
  return (
    <div>
      <ProductMenuiItem
        image={image}
        titleMiddle={titleMiddle}
        middleSubtitle={middleSubtitle}
      />
    </div>
  );
}
