import React from "react";
import { TextField, FormControl } from "@material-ui/core";
const AuthItems = ({ inputName, error, change,value }) => {
  const result = (
    <FormControl
    style={{ marginBottom: "10px", width: "100%", background: "white" }}
    key={inputName}>
    <TextField
      error={error}
      autoComplete='off'
      label={inputName}
      rowsMax={1}
      value={value}
      onChange={(event) => change(event, inputName)}
      dir='ltr'
    />
  </FormControl>
  )
  return result
};

export default AuthItems;
