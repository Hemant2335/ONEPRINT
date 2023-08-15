import React from 'react'
import { Wrapper , Banner  , ShopSection} from '../components'

const Homepage = () => {
  return (
      <Wrapper>
        <Banner/>
        <ShopSection name  = "Trending 🔥"/>
        <ShopSection name  = "Latest 🤓"/>
        <ShopSection name = "Popular ❤️"/>
      </Wrapper>
  )
}

export default Homepage