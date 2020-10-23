import React, { useReducer,useContext } from "react";
import SpLayout from "../../shared/layout/SpLayout";
import Flex from "../../shared/style/Flex";
import Back from "../../shared/style/Back";
import Input from "../../shared/input/Input";
import Context from '../../context/Context'
import {Button} from "@material-ui/core"
const Withdraw = () => {
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
  function handleClick() {
    console.log(state)
  }
  return (
    <SpLayout
      ContainerClass='listContainer'
      GridClass='listGrid'
      img='listImg withdrawImg'>
      <Flex className='backParent'>
        <Back route='/' />
      </Flex>
      <Flex marginTop='40px' fontSize='12px' className='withdrawParentInputs'>
        {/* <Input
          type='text'
          handleType='wallet'
          placeholder=' youre address wallet'
          className='withdrawInput'
          style={{ width: "200px", textAlign: "left", direction: "ltr" }}
        />
        <Input
          type='number'
          handleType='amount'
          className='withdrawInput'
          placeholder='amount'
          style={{ width: "80px", marginLeft: "10px" }}
        />
        <button onClick={handleClick}>Submit</button> */}
        <input
          placeholder=' youre address wallet'
          type='text'
          className='withdrawInput'
          style={{ width: "200px", textAlign: "left", direction: "ltr" }}
          onChange={(event) => dispatch({ type: "wallet", state: event.target.value })}
          value={state.wallet}
        />
        <input
          onChange={(event) => dispatch({ type: "amount", state: event.target.value })}
          value={state.amount}
          placeholder='amount'
          type='number'
          className='withdrawInput'
          style={{ width: "80px", marginLeft: "10px" }}
        />
        <Button onClick={handleClick} color='primary' variant="contained" style={{marginLeft: '10px'}} >Submit</Button> 
      </Flex>
    </SpLayout>
  );
};

export default Withdraw;
