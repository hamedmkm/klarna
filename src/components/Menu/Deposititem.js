import React, { useEffect, useReducer } from "react";
import Input from "../../shared/input/Input";
import Flex from "../../shared/style/Flex";

const DepositItem = ({ parentCallback, items }) => {
  const initialState = {
    bitcoin: { value: "x04594608539wefs89sd98f7s938u29j23d", amount: "" },
    trx: { value: "x04594608539wefs89sd98f7s938u29j23d", amount: "" },
    roble: { value: "x04594608539wefs89sd98f7s938u29j23d", amount: "" },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "bitcoin":
        return {
          ...state,
          bitcoin: { ...state.bitcoin, amount: action.amount },
        };
      case "trx":
        return { ...state, trx: { ...state.trx, amount: action.amount } };
      case "roble":
        return { ...state, roble: { ...state.roble, amount: action.amount } };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({ type: name, amount: value });
  };
  useEffect(() => {
    parentCallback(state);
  }, [state, parentCallback]);
  return (
    <React.Fragment>
      {items.map((item) => {
        const getItems = Reflect.get(state, item);
        const getItemValue = Reflect.get(getItems, "value");
        const getItemAmount = Reflect.get(getItems, "amount");
        return (
          <React.Fragment key={item}>
            <div className='titleDepoItems'>{item}</div>
            <Flex className='parentDepositBox'>
              <p className='depositReadOnly'>{getItemValue}</p>
              <Input
                type='number'
                className='withdrawInput'
                placeholder='amount'
                name={item}
                change={(e) => handleChange(e)}
                value={getItemAmount}
                style={{ width: "80px", marginLeft: "10px" }}
              />
            </Flex>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export { DepositItem };
