import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login';
import Product from './Product';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';

function App(){
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productDetails/:productId' element={<ProductDetails />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='*' element={<Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


