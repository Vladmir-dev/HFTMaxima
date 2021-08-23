import { Grid } from "@material-ui/core";
import React from "react";
import { ProductMenuiItem } from "./middle";
export default function Item({ subTitle, captionTitle, icon, title,image,to }) {
  return (
    <Grid container>
      <ProductMenuiItem
        subTitle={subTitle}
        captionTitle={captionTitle}
        icon={icon}
        title={title}
        image={image}
        to={to}
      />
    </Grid>
  );
}
