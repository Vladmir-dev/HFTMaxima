import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
export default function Select({
  name,
  label,
  value,
  error = null,
  onChange,
}) {
  return (
    <FormControl
      variant="outlined"
      size="small"
      fullWidth
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">none</MenuItem>
        <MenuItem></MenuItem>
      </MuiSelect>
  
    </FormControl>
  );
}
