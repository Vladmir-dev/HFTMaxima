import { Grid, TextField } from "@material-ui/core";
import React from "react";
export default function Input({
  name,
  value,
  onChange,
  variant,
  label,
  size,
  ...others
}) {
  return (
    <Grid item xs={12}>
      <TextField
      name={name}
      value={value}
      onChange={onChange}
      variant={variant || "outlined"}
      label={label}
      size={size || "small"}
      {...others}
      fullWidth
    />
    </Grid>
  );
}
