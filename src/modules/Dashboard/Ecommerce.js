import React from 'react';
import { Chart } from './partials/Ecom Component/Chart/Chart';
import { Order } from './partials/Ecom Component/Order/Order';
import { Product } from './partials/Ecom Component/Product/Product';
import { Customer } from './partials/Ecom Component/Customer/Customer';
import Revenue from './partials/Ecom Component/Revenue/Revenue';
import TopSell from './partials/Ecom Component/Top sell/TopSell';
import Category from './partials/Ecom Component/CategoryData/Category';
import RecentOrder from './partials/Ecom Component/RecentOrder/RecentOrder';



const Ecommerce = () => {
  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-6">
          <div className="flex flex-col space-y-6">
            <Revenue />
            <Order />
          </div>
          <div className="flex-grow">
            <Chart />
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="flex-1">
            <Product />
          </div>
          <div className="flex-2">
            <Customer />
          </div>
        </div>
        
        <div className="flex space-x-7">
          <div className="flex-1 flex flex-col space-y-6">
            <TopSell />
          </div>
          <div className="flex-1 flex flex-col space-y-6">
            <Category />
          </div>
          <div className="flex-1 flex flex-col space-y-6">
            <RecentOrder/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
