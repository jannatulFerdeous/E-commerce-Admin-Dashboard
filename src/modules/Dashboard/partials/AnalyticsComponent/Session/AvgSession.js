import React from 'react'

import { PiClockBold } from "react-icons/pi";

const AvgSession = () => {
  return (

    <div className="bg-white rounded-lg p-5 shadow-md w-auto h-auto">
      <div className="flex justify-between items-center">       
        <div className="flex flex-col space-y-3 text-gray-600 font-semibold">
          <div className='text-black font-semibold '>Avg.Sessions</div>
          <div className='text-2xl text-blue-950'>00.18</div> 
        </div>
        <div className=' bg-gray-100 rounded-full p-3 mb-2 text-4xl mr-1 text-gray-400'><PiClockBold /></div>
      </div>
   
    <hr className='mt-4 mb-2'/>
    <div className="flex justify-between items-center">
      <div className="text-2xl font-semibold mb-2 text-blue-950">
        <span className=" text-slate-400 text-sm"><span className='text-green-500'>1.5%</span> Weekly Avg.Sessions</span>
      </div>
    </div>
  </div>
  )
}

export default AvgSession