import React from 'react'
import { Wrapper , Banner  , ShopSection , Loading} from '../components'
import { useContext } from 'react'
import StateContext from '../context/Context'
import { useState , useEffect } from 'react'

const Homepage = () => {

  const {isLoadingstate} = useContext(StateContext)

  const [trending, settrending] = useState([]);
  const [latest, setlatest] = useState([]);
  const [popular, setpopular] = useState([]);

  const fetchtrending= async() => {
    const response = await fetch(`https://backend-zeta-seven-80.vercel.app/api/product/products/trending`);
    const data = await response.json();
    settrending(data)
    console.log(data)
  }
  const fetchpopular= async() => {
    const response = await fetch(`https://backend-zeta-seven-80.vercel.app/api/product/products/popular`);
    const data = await response.json();
    setpopular(data)
    console.log(data)
  }
  const fetchlatest= async() => {
    const response = await fetch(`https://backend-zeta-seven-80.vercel.app/api/product/products/latest`);
    const data = await response.json();
    setlatest(data)
    console.log(data)
  }

  useEffect(() => {
    fetchlatest();
    fetchpopular();
    fetchtrending();
  }, []);

  return (
      <Wrapper>
        {isLoadingstate && (<Loading/>)}
        <Banner/>
        <ShopSection name  = "Trending 🔥" data = {trending}/>
        <ShopSection name  = "Latest 🤓" data = {latest}/>
        <ShopSection name = "Popular ❤️" data = {popular}/>
      </Wrapper>
  )
}

export default Homepage