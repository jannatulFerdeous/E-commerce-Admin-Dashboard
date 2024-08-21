import React from 'react'
import CustomersInfo from './partials/CustomerInfo/CustomersInfo'

const Customers = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>
      <div>
        <CustomersInfo/>
      </div>
    </div>
  )
}

export default Customers