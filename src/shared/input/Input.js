import React, { useReducer } from "react";
import Context from "../../context/Context"
const Input = ({ handleType, type,...props}) => {
  const initialState = {
    amount: "",
    wallet: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "wallet":
        return { ...state, wallet: action.state };
      case "amount":
        const amount = Number(action.state);
        return {
          ...state,
          amount: amount === 0 ? "" : amount,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e, type) => {
    const { value } = e.target;
    dispatch({ type: type, state: value });
    console.log(state.amount);
  };
  return (
    <Context.Provider value={state}>
      <input
        type={type}
        onChange={(e) => handleChange(e, handleType)}
        value={Reflect.get(state, handleType)}
        {...props}
      />
    </Context.Provider>
  );
};

export default Input;
