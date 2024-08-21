import React from 'react'

import Session from './partials/AnalyticsComponent/Session/Session'
import AvgSession from './partials/AnalyticsComponent/Session/AvgSession'
import Bounce from './partials/AnalyticsComponent/BounceRate/Bounce'
import Overview from './partials/AnalyticsComponent/Overview/Overview'
import Visitor from './partials/AnalyticsComponent/Visitor/Visitor'
import TotalVisit from './partials/AnalyticsComponent/Visitor/TotalVisit'
import Report from './partials/AnalyticsComponent/TrafficReport/Report'
import Traffic from './partials/AnalyticsComponent/TrafficSource/Traffic'
import OrganicTraffic from './partials/AnalyticsComponent/TrafficSource/OrganicTraffic'


const Analytics = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>
      <div className="flex flex-col space-y-6">
          <div className="flex space-x-7">
          <div className="flex-1 flex flex-col space-y-6">
          <Session/>
          </div>
          <div className="flex-1 flex flex-col space-y-6">
          <AvgSession/>
          </div>
          <div className="flex-1 flex flex-col space-y-6">
          <Bounce/>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex-1">
            <Overview/>
          </div>
          <div className="flex-2">
            <Visitor />
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex-1">
            <Report/>
          </div>
          <div className="flex-1">
            <TotalVisit/>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex-2">
            <Traffic/>
          </div>
          <div className="flex-1">
            <OrganicTraffic/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics 