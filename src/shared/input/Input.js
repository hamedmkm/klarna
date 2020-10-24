import React from "react";
const Input = ({type,change,value,name, ...props}) => {
  return (
      <input
        type={type}
        onChange={change}
        value={value}
        name={name}
        {...props}
      />
  );
};

export default Input;
