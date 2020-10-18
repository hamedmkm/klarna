import React from "react";
import imgWithdraw from '../../assets/img/imgWithdraw.jpg'

const Withdraw = () => {
  return (<div className='withdraw'>
     <img  className='imgWithdraw' src={imgWithdraw} />
     <h1 className='textWithdraw'> : Removable inventory</h1>
     <button className='btnsubwithdraw' text='submit' value='submit'>submit</button>
<input placeholder='amount' className='btnWithdraw'/>
<input placeholder='                                  youre address wallet' className='btn2Withdraw'/>

  </div>
  )
};

export default Withdraw;
