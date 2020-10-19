import React, {useState} from "react";
import SpLayout from "../../shared/layout/SpLayout";
import Flex from '../../shared/style/Flex'
import Back from '../../shared/style/Back'
import "./Affiliate.css";
const Affiliate = () => {
  const [ref,setRef] = useState({
    count: 1,
    link: 'http://localhost:3000/hamedmkm'
  });
  return (
    <SpLayout
      ContainerClass='affiliateContainer'
      GridClass='affiliateGrid'
      img='affiliateImg'>
      <Flex className='backParent'>
        <Back route='/'/>
      </Flex>
      <Flex marginTop='40px' fontSize='12px' >
        <span>Your referal link: </span>
        <span className='refLink'>{ref.link}</span>
        <Flex display='flex' flexDirection='row-reverse' marginTop='15px'>your Refs : {ref.count}</Flex>
      </Flex>
    </SpLayout>
  );
};

export default Affiliate;
