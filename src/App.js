import './App.css';
import Product from './Product';
import Navigation from './Navigation';
import Login from './Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';


function App() {
  return (
    <div >
     <Navigation/> 
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/productDetails/:productId'element={<ProductDetails/>}/>
       <Route path='/addProduct'element={<AddProduct/>}/>

    

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;

