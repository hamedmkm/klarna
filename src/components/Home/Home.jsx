import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Flex from '../../shared/style/Flex'
import './Home.css'

const Home = () => {
    const [count]=useState({
        profit:'Daily profit 3% '
    
    })
    const chasbide1 = require ('../../assets/img/imgchasbide1.jpg')
    return (
 
        <div className='Home'  > 

        <div className="Homeimg"></div>
          <Link to='/login' className='HomeLogin'>Log-in</Link>
          <Link to='/signup' className='HomeSignup'>Sign-up</Link>
          <input className='Homepan' value={count.profit} readOnly={true}/>
<s>
<l className='text'><br></br>You get paid right away, in full,<br></br> while your customers get the option to pay later. When you team up with Klarna you get more than just aYou get paid right away, in full, while your customers get the option to pay later. When you team up with Klarn journey.<br></br> </l>
   <img className='imgchasbide1' src={chasbide1}/></s>
  <s>
  <img className='imgchasbide' src={chasbide1}/>
   <l className='text1'><br></br>You get paid right away, the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.

These excellant intentions were strengthed wh in full,<br></br> while your customers get the option to pay later. When you team up with Klarna you get more than just aYou get paid right away, in full, while your customers get the option to pay later. When you team up with Klarn journey.<br></br> </l>
 </s>
 <s>
 <img className='imgchasbide2' src={chasbide1}/>
<l className='text2'><br></br>You get paid right away, in full,<br></br> Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have."

He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.

These excellant intentions were strengthed when he enterd the Father Superior's diniing-room, though, stricttly speakin, it was not a dining-room, for the Father Superior had only two rooms alltogether; they were, however, much larger and more comfortable than Father Zossima's. But tehre was was no great luxury about the furnishng of these rooms eithar. The furniture was of mohogany, covered with leather, in the old-fashionned style of 1820 the floor was not even stained, but evreything was shining with cleanlyness, and there were many chioce flowers in the  while your customers get the option to pay later. When you team up with Klarna you get more than just aYou get paid right away, in full, while your customers get the option to pay later. When you team up with Klarn journey.<br></br> </l>
 </s>
          </div>
     
    )
}

export default Home;