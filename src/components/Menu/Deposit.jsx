import React from "react";
import btc from '../../assets/img/btc.png'
import trx from '../../assets/img/trx.png'
import roble from '../../assets/img/roble.jpg'
import './Deposit.css'
const Deposit = () => {
  return <div className='Deposita'>
 
    <div className='Deposit'>
      
<h1 className='textDeposit'>?Which currency do you deposit</h1>
<l className='ldeposit'>
<input placeholder='amount' className='btndeposit'/>
<input text='Read-only' value='0xd9145CCE52D386f254917e481eB44e9943F39138' className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={btc} />

</l>
<l className='ldeposit'>
<input placeholder='amount' className='btndeposit'/>
<input text='Read-only' value='0xd9145CCE52D386f254917e481eB44e9943F39138' className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={trx} />

</l>
<l className='ldeposit'>
<input placeholder='amount' className='btndeposit'/>
<input text='Read-only' value='0xd9145CCE52D386f254917e481eB44e9943F39138' className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={roble} />

</l>
<button className='btnsubwithdraw1' text='submit' value='submit'>submit</button>
</div>

  </div>
 
};

export default Deposit;
