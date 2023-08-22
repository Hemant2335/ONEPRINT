import React from 'react'
import { Wrapper  , CartproductCard} from '../components'

const Cart = () => {
  return (
    <div>
        <Wrapper>
            <div className='p-4'>
            <h1 className='md:text-[6vh] m-2 text-[8vh] font-poppins text-[#F9F6EE] font-bold'>Cart</h1>
                {/* Products part */}
                <div className='p-4'>
                    <CartproductCard/>
                </div>
            </div>
            
        </Wrapper>
    </div>
  )
}

export default Cart