import React from 'react'
import {Link} from 'react-router-dom'
import Flex from '../../shared/style/Flex'
const Home = () => {
    return (
        <div className="">
        <Flex>
         <Link to='/login'>login</Link>
        </Flex>
        <Flex>
        <Link to='/signup'>signup</Link>
        </Flex>
        </div>
    )
}

export default Home;