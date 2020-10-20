import React, {useState,createContext,useAlert} from "react";
import SpLayout from "../../shared/layout/SpLayout";
import Flex from '../../shared/style/Flex'
import Back from '../../shared/style/Back'
import "./Withdraw.css";



const Withdraw = () => {
  const [count] = useState('your withdraw is pending');


  function handleAlertClick() {
    setTimeout(() => {
      alert(count);
    },100 );
  }

  return (
    <SpLayout
      ContainerClass='WithdrawContainer'
      button='buttonWith'
      GridClass='WithdrawGrid'
      input='inputWith'
      input='input2With'
      img='WithdrawImg'>
      <Flex className='backParentt'>
        <Back route='/'/>
      </Flex>
      <Flex  >
      <input placeholder=' youre address wallet' type="text" className='inputWith' />
       <input placeholder='amount' type="number" className='input2With' />
       <button className='buttonWith' type='submit' onClick={handleAlertClick}>SUBMIT</button>
        
      </Flex>
    </SpLayout>
  );
};

export default Withdraw;
