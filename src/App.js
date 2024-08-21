import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Ecommerce from "./modules/Dashboard/Ecommerce"; 
import Layout from "./common/components/Layout/Layout";
import Analytics from "./modules/Dashboard/Analytics";

import Customer from "./modules/Application/partials/Customer";
import Report from "./modules/Application/partials/Report";

import Product from "./modules/E-commerce/Product";
import Customers from "./modules/E-commerce/Customers";
import CustomerDetails from "./modules/E-commerce/CustomerDetails";
import Oder from "./modules/E-commerce/Oder";
import OrderDetails from "./modules/E-commerce/OrderDetails";
import Refunds from "./modules/E-commerce/Refunds";
import ProductInfo from "./modules/E-commerce/partials/ProductDetails/ProductInfo";
import AddOrder from "./modules/E-commerce/partials/Orders/AddOrder";
import AddProduct from "./modules/E-commerce/partials/ProductDetails/AddProduct";
import EditProduct from "./modules/E-commerce/partials/ProductDetails/EditProduct";
import EditOrder from "./modules/E-commerce/partials/Orders/EditOrder";
import AddCustomer from "./modules/E-commerce/partials/CustomerInfo/AddCustomer";
import EditCustomer from "./modules/E-commerce/partials/CustomerInfo/EditCustomer";
import AddPopularProduct from "./modules/Dashboard/partials/Ecom Component/Product/AddPopularProduct";
import EditPopularProduct from "./modules/Dashboard/partials/Ecom Component/Product/EditPopularProduct";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/ecommerce" element={<Layout><Ecommerce/></Layout>}/>
        <Route path="/analytics" element={<Layout><Analytics/></Layout>}/>
        <Route path="/customer" element={<Layout><Customer/></Layout>}/>
        <Route path="/reports" element={<Layout><Report/></Layout>}/>       
        <Route path="/addPopularProduct" element={<Layout><AddPopularProduct/></Layout>}/>
        <Route path="/editPopularProduct/:id" element={<Layout><EditPopularProduct/></Layout>}/>

        <Route path="/products" element={<Layout><Product/></Layout>}/>
        <Route path="/productInfo/:id" element={<Layout><ProductInfo/></Layout>} />       
        <Route path="/addProduct" element={<Layout><AddProduct/></Layout>}/>
        <Route path="/editProduct/:id" element={<Layout><EditProduct/></Layout>}/>

        <Route path="/totalOrders" element={<Layout><Oder/></Layout>}/>
        <Route path="/editOrder/:id" element={<Layout><EditOrder/></Layout>}/>
        <Route path="/addOrder" element={<Layout><AddOrder/></Layout>}/> 
              
        
        <Route path="/customerInfo" element={<Layout><Customers/></Layout>}/>
        <Route path="/addCustomer" element={<Layout><AddCustomer/></Layout>}/>
        <Route path="/customerDetails/:id" element={<Layout><CustomerDetails/></Layout>} />       
        <Route path="/editCustomer/:id" element={<Layout><EditCustomer/></Layout>}/>

        <Route path="/orderDetails" element={<Layout><OrderDetails/></Layout>}/>
        <Route path="/refunds" element={<Layout><Refunds/></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
