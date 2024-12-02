import React from 'react'
import Nevbar from './components/Nevbar'
import {styled} from 'styled-components'
const MAIN=styled.div`
width: 100%;
min-height: 150vh;


`

const Home = () => {
  return (
    <div>
        <Nevbar/>
        <MAIN>
          <img width={'100%'} src="https://www.egrovesys.com/blog/wp-content/uploads/sites/2/2020/05/Responsive-eCommerce-website.jpg" alt="" />
        </MAIN>
      
    </div>
  )
}

export default Home
