import React from 'react'
import { FaDiceD20 } from "react-icons/fa";
import google from "../../../../assets/image/google.png"

const Google = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md w-auto h-auto">

      <div className="flex justify-between items-center">       
        <div className="flex flex-col space-y-3 text-gray-600 font-semibold">
          <div className='text-black font-semibold '>Google</div>
          <div className='text-2xl text-blue-950'>2154 <span className='text-sm text-gray-400'>Click</span></div> 
        </div>
        <div className='w-14 '><img src={google} alt="google" /></div>
      </div>
   
      <hr className='mt-7 mb-2 border-dashed border-gray-300'/>
      
      <div className="flex justify-between items-center ml-7 mr-7 mt-6 text-justify">
        <div className="text-2xl font-semibold mb-2 text-blue-950">
          <p>159 <span className='text-green-500 text-xs'> 2.5%</span></p>
          <p className=" text-slate-400 text-sm">Audience</p>
        </div>
        <div className="text-2xl font-semibold mb-2 text-blue-950">
          <p>1245<span className='text-red-500 text-xs'> 0.7%</span></p>
          <p className=" text-slate-400 text-sm">Commission</p>
        </div>
      </div>
      
      <div className='flex justify-center w-full mt-4'>
        <button className='hover:bg-green-500 hover:text-white w-24 p-2 border border-green-500 rounded-lg'>Report</button>
      </div>
      
    </div>
  )
}

export default Google