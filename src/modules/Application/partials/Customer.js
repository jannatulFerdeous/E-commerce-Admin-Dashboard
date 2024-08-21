import React from 'react'
import CustomerData from './CustomerInfo/CustomerData'
import CustomerGrowth from './CustomerInfo/CustomerGrowth'
import Twit from './ReportInfo/Twit'
import Google from './ReportInfo/Google'
import Instagram from './ReportInfo/Instagram'
import CustomerDetails from './CustomerInfo/CustomerDetails'

const Customer = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>       
        <div className="flex space-x-6">
          <div className="flex-2">
           <CustomerData/>
          </div>
          <div className="flex-1">
            <CustomerGrowth/>
          </div>
        </div>
        <div className="flex space-x-7 mt-6">
          <div className="flex-1 flex flex-col space-y-6">
          <Twit/>
          </div>
          <div className="flex-1 flex flex-col space-y-6">
          <Google/>
          </div>
          <div className="flex-1 flex flex-col space-y-6">
          <Instagram/>
          </div>
        </div>
        <div className='mt-6'>
          <CustomerDetails/>
        </div>
    </div>
  )
}

export default Customer