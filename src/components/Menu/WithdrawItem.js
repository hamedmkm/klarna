import React, { useReducer,useEffect } from "react";
import Input from "../../shared/input/Input";
const WithdrawItem = ({parentState}) => {
  const initialState = { amount: "", wallet: "" };
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
  };
  useEffect(() => {
    parentState(state)

  },[state,parentState])
  const cond = (initialCond, ifCond, elseCond) => {
    return initialCond === "wallet" ? ifCond : elseCond;
  };
  return (
    <React.Fragment>
      {["wallet", "amount"].map((item) => {
        const val = Reflect.get(state, item);
        return (
          <Input
            key={item}
            type={cond(item, "text", "number")}
            placeholder={cond(item, "your wallet address", "amount")}
            className={`withdrawInput ${cond(item, "walletInp", "amountInp")}`}
            value={val}
            change={(e) => handleChange(e, item)}
          />
        );
      })}
    </React.Fragment>
  );
};

export default WithdrawItem;
