import React from 'react'
import { Wrapper , Banner  , ShopSection , Loading} from '../components'
import { useContext } from 'react'
import StateContext from '../context/Context'

const Homepage = () => {

  const {isLoadingstate} = useContext(StateContext)

  return (
      <Wrapper>
        {isLoadingstate && (<Loading/>)}
        <Banner/>
        <ShopSection name  = "Trending 🔥"/>
        <ShopSection name  = "Latest 🤓"/>
        <ShopSection name = "Popular ❤️"/>
      </Wrapper>
  )
}

export default Homepage