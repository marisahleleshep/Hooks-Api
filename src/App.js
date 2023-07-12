// import './App.css';
// import Product from './Product';
// import Navigation from './Navigation';
// import Login from './Login';
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import ProductDetails from './ProductDetails';
// import ViewProduct from './ViewProduct';


// function App() {
//   return (
//     <div >
//      <Navigation/> 
//       <BrowserRouter>
//       <Routes>
//       <Route path='/' element={<Login/>}/>
//        <Route path='/home' element={<Product/>}/>
//        <Route path='/productDetails'element={<ProductDetails/>}/>
//        <Route path='/ViewProduct'element={<ViewProduct/>}/>

    

//         </Routes>
//         </BrowserRouter> 
//     </div>
//   ); 
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductsPage from './Hooks/Product';
import ProductDetailsPage from './Hooks/ProductDetails';
import AddProductForm from './Hooks/ViewProduct';
import LoginPage from './Hooks/LoginPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
};

export default App;
