import React from 'react'

import { TbCoinTaka } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

import gif  from "../../../../assets/image/icons8-celebrate.gif"

const Asset = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md h-full w-full">
      <div className='grid grid-cols-2 gap-6'>

        <div className="p-6 border-2 border-gray-100 rounded-lg w-full flex items-center gap-3 ">
          <TbCoinTaka className='text-3xl text-blue-500'/>
          <div >
            <h6 className='text-blue-950 text-sm font-semibold' >Total Cost</h6>
            <div className='inline-flex gap-1'>
                <h3 className="text-xl font-semibold text-blue-950">27,215k </h3>
                <span className="text-xs font-medium text-gray-500 mt-3"> New 365 Days</span>
            </div>
          </div>
        </div>

    
        <div className="p-6 border-2 border-gray-100 rounded-lg w-full flex items-center gap-3 ">
          <HiOutlineShoppingCart className='text-3xl text-blue-500'/>
          <div >
            <h6 className='text-blue-950 text-sm font-semibold' >Total Order</h6>
            <div className='inline-flex gap-1'>
                <h3 className="text-xl font-semibold text-blue-950">190 </h3>
                <span className="text-xs font-medium text-gray-500 mt-3"> Order 365 Days</span>
            </div>
          </div>
        </div>

        <div className="p-6 border-2 border-gray-100 rounded-lg w-full flex items-center gap-3 ">
          <AiOutlineLike className='text-3xl text-green-400'/>
          <div >
            <h6 className='text-blue-950 text-sm font-semibold' >Completed</h6>
            <div className='inline-flex gap-1'>
                <h3 className="text-xl font-semibold text-blue-950">165</h3>
                <span className="text-xs font-medium text-gray-500 mt-3">Comp. Order 365 Days</span>
            </div>
          </div>
        </div>

        <div className="p-6 border-2 border-gray-100 rounded-lg w-full flex items-center gap-3 ">
          <ImCancelCircle className='text-3xl text-red-600'/>
          <div >
            <h6 className='text-blue-950 text-sm font-semibold' >Canceled</h6>
            <div className='inline-flex gap-1'>
                <h3 className="text-xl font-semibold text-blue-950">25 </h3>
                <span className="text-xs font-medium text-gray-500 mt-3">Canc.Order 365 Days</span>
            </div>
          </div>
        </div>
      </div>

       <div className="p-6 border-2 border-dashed border-green-300 rounded-lg w-full mt-5 bg-green-100 inline-flex gap-2">
            <img className='w-7 h-7 -mt-1' src={gif}/> 
          <p className="text-sm font-medium text-green-700 ">Karen Savage's best performance from last year</p>
        </div>
    </div>
  )
}

export default Asset