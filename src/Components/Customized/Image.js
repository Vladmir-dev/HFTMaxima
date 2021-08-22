import React from "react";
import useStyles from "./styles";
export default function Image({ src, alt }) {
   const classes = useStyles();
  return (
    <div className={classes.img}>
      <img src={src} alt={alt} />
    </div>
  );
}
