import React, { useState } from "react";
import SpLayout from "../../shared/layout/SpLayout";
import Flex from "../../shared/style/Flex";
import Back from "../../shared/style/Back";
import { Button } from "@material-ui/core";
import WithdrawItem from "./WithdrawItem";
const Withdraw = () => {
  const [state, setState] = useState({});
  const callback = (childParam) => {
    setState(childParam);
  };
  function handleClick() {
    console.log(state);
  }
  return (
    <SpLayout
      ContainerClass='listContainer'
      GridClass='listGrid'
      img='listImg withdrawImg'>
      <Flex className='backParent'>
        <Back route='/' />
      </Flex>
      <Flex display='flex' flexDirection='row-reverse' width='319px'>
        <Button
          onClick={handleClick}
          color='primary'
          variant='contained'
          style={{ marginLeft: "10px" }}>
          Submit
        </Button>
      </Flex>
      <Flex marginTop='40px' fontSize='12px' className='withdrawParentInputs'>
        <WithdrawItem parentState={callback} />
      </Flex>
    </SpLayout>
  );
};

export default Withdraw;
