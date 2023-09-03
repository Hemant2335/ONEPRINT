import React from 'react'
import { Wrapper , Banner  , ShopSection , Loading} from '../components'
const Homepage = () => {

  
  return (
      <Wrapper>
        <Banner/>
        <ShopSection name  = "Trending 🔥" dataname = "trending"/>
        <ShopSection name  = "Latest 🤓" dataname = "latest"/>
        <ShopSection name = "Popular ❤️" dataname = "popular"/>
      </Wrapper>
  )
}

export default Homepage