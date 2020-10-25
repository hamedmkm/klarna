import React from "react";
import btc from '../../assets/img/btc.png'
import trx from '../../assets/img/trx.png'
import roble from '../../assets/img/roble.jpg'
import './Balance.css' 
const Balance = () => {
  return (
 
  <div className='Deposit'>
    
<h1 className='textDeposit'><br></br>:youre balance</h1>

<l className='ldeposit'>
<input text='Read-only' value='0.0000' className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={btc} />

</l>
<l className='ldeposit'>
<input text='Read-only' value='0.0000' className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={trx} />

</l>
<l className='ldeposit'>
<input text='Read-only' value='0.0000' className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={roble} />

</l>

</div>


  )
};

export default Balance;
