import React from 'react'
import TotalOrder from './partials/Orders/TotalOrder'

const Oder = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>       
      <div className='mt-4'>
        <TotalOrder/> 
      </div>
    </div>
  )
}

export default Oder