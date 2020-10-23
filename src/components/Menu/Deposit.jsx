
import btc from '../../assets/img/btc.png'
import trx from '../../assets/img/trx.png'
import roble from '../../assets/img/roble.jpg'
import './Deposit.css'
import depositimg from '../../assets/img/depositimg.jpg'
import React from "react";
import Flex from '../../shared/style/Flex'
import Back from '../../shared/style/Back'

const Deposit = () => {
  

  return <div className='Deposita'>
 
    <div className='Deposit'>
    <img className='imgdeposit11' src={depositimg}/>

<h1 className='textDeposit'><br></br>?Which currency do you deposit</h1>
<h1 className='textDeposit' style={{fontSize:'20px'}}><br></br>Minimum invest 10 dollor</h1>
<l className='ldeposit1'>
<input placeholder='amount' className='btndeposit'/>
<img  className='imgdeposit' src={btc} />
<input text='Read-only' value='0xd9145CCE52D386f254917e481eB44e9943F39138' className='inputdeposit' readOnly= {true} />


</l>
<l className='ldeposit2'>
  
<input placeholder='amount' className='btndeposit'/>
<img  className='imgdeposit' src={trx} />
<input text='Read-only' value='0xd9145CCE52D386f254917e481eB44e9943F39138' className='inputdeposit' readOnly= {true} />


</l >
<l className='ldeposit3'>
<input placeholder='amount' className='btndeposit'/>
<img  className='imgdeposit' src={roble} />
<input text='Read-only' value='0xd9145CCE52D386f254917e481eB44e9943F39138' className='inputdeposit' readOnly= {true} />


</l >
<button className='btnsubwithdraw1' text='submit' style={{margin:'10px',border:'hidden',padding:'5px',fontSize:'15px',background:'#3e6af5',color:'#fefefe' }} value='submit'>submit</button>
<Flex className='backParent'>
        <Back route='/'/>
      </Flex>
</div>

  </div>
 
};

export default Deposit;
