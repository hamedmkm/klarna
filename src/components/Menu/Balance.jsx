import React,{useState} from "react";
import btc from '../../assets/img/btc.png'
import trx from '../../assets/img/trx.png'
import roble from '../../assets/img/roble.jpg'
import './Balance.css' 
import balanceimg from '../../assets/img/balanceimg.jpg'
import Flex from '../../shared/style/Flex'
import Back from '../../shared/style/Back'



const Balance = () => {
 
  return (
 
  <div className='Balance'>
     <img className='imgchasbide3' src={balanceimg}/>
<h1 className='textBalance'><br></br>balance</h1>

<l className='ldeposit'>
<input text='Read-only' value='0.0000' style={{background:'#fafafa'}} className='inputdeposit' readOnly= {true} />
<img  className='imgdeposit' src={btc} />

</l>
<l className='ldeposit'>
<input text='Read-only' value='0.0000' className='inputdeposit ' style={{background:'#fafafa'}} readOnly= {true} />
<img  className='imgdeposit' src={trx} />

</l>
<l className='ldeposit'>
<input text='Read-only' value='0.1000' style={{background:'#fafafa'}} className='inputdeposit'  readOnly= {true} />
<img  className='imgdeposit' style={{borderRadius:'50%',marginTop:'15px'}} src={roble} />

</l>
<Flex className='backParent'>
        <Back route='/'/>
      </Flex>
</div>


  )
};

export default Balance;
