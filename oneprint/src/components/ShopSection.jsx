import React from 'react'
import ProductCard from './ProductCard'

const ShopSection = () => {
  return (
    <div className='mt-5 p-4 mb-10'>
        <h1 className='text-2xl font-poppins font-semibold text-[#F9F6EE] '>Trending 🔥</h1>

        <div className='grid grid-cols-3 px-4'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default ShopSection