import React from 'react'
import TopCountry from './TopCountry/TopCountry'
import Metrics from './Metrics/Metrics'
import VisitDetails from './VisitDetails/VisitDetails'
import SocialMedia from './Social Media/SocialMedia'

const Report = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}> 
      <div className="flex space-x-6">
          <div className="flex-2">
           <TopCountry/>
          </div>
          <div className="flex-1">
            <Metrics/>
          </div>
        </div> 
        <div className="flex space-x-6 mt-6">
          <div className="flex-1">
           <VisitDetails/>
          </div>
          <div className="flex-1">
            <SocialMedia/>
          </div>
        </div> 


    </div>
  )
}

export default Report