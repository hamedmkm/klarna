import React from "react";
import { TextField, FormControl } from "@material-ui/core";
const AuthItems = ({ items, handleChange }) => {
  const inputs = items.map((item,index) => {
    return (
        <FormControl
        style={{ marginBottom: "10px", width: "100%", background: "white" }}
        key={item}>
        <TextField
          autoComplete='off'
          label={item}
          rowsMax={1}
          onChange={(event) => handleChange(event, item)}
          dir='ltr'
        />
      </FormControl>
    )
  });
  return inputs;
};

export default AuthItems;
