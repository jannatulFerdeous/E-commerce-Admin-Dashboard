import React from 'react'
import ProductDetails from './partials/ProductDetails/ProductDetails'

const Product = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>
      <div>
        <ProductDetails/>
      </div>
    </div>
  )
}

export default Product