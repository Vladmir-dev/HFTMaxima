import React from "react";
import { Button as MuiButton, Grid } from "@material-ui/core";
export default function Button({
  name,
  value,
  onChange,
  variant,
  label,
  size,
  text,
  color,
  ...others
}) {
  return (
    <Grid item xs={12} >
      <MuiButton
      name={name}
      value={value}
      onChange={onChange}
      variant={variant || "contained"}
      label={label}
      size={size || "medium"}
      color={color || "default"}
      {...others}
    >
      {text}
    </MuiButton>
    </Grid>
  );
}
