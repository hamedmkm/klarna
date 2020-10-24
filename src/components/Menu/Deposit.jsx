import React, { useState } from "react";
import SpLayout from "../../shared/layout/SpLayout";
import Flex from "../../shared/style/Flex";
import Back from "../../shared/style/Back";
import { DepositItem } from "./Deposititem";
import { Button } from "@material-ui/core";
const Deposit = () => {
  const [state, setState] = useState({});
  const callback = (childData) => {
    setState(childData);
  };
  const handleClicBtn = () => {
    console.log(state);
  };
  return (
    <SpLayout
      ContainerClass='listContainer listContainerDepo'
      GridClass='listGrid listGridDepo'>
      <Flex className='backParent'>
        <Back route='/' />
      </Flex>
      <Flex className='parentDeposit' marginTop='-50px'>
        <DepositItem
          parentCallback={callback}
          items={["bitcoin", "trx", "roble"]}
        />
      <Flex display='flex' flexDirection='row-reverse'>
      <Button type='submit' onClick={handleClicBtn} variant='contained' color='primary'>
          Sumbit!
        </Button>
      </Flex>
      </Flex>
    </SpLayout>
  );
};

export default Deposit;
