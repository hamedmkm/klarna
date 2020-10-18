import React from "react";
import { useForm } from "react-hook-form";
import imgaffiliate from '../../assets/img/imgaffiliate.jpg'


const Affiliate = () => {

  return <div className='affiliate'>
    <img  className='imgaffiliate' src={imgaffiliate} />
    <h1 className='linkaff' style={{fontStyle:"italic"}}>Your referal link</h1>
    <input text='Read-only' value='http://localhost:3000/hamedmkm' className='inputaff' readOnly= {true} />
<h2 className='textaff'  style={{fontStyle:"italic"}}><br></br>youre Ref:1</h2>

  </div>
 
};

export default Affiliate;
