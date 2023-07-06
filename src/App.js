import './App.css';
import Product from './Product';
import Navigation from './Navigation';
import Login from './Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductDetails from './ProductDetails';


function App() {
  return (
    <div >
     <Navigation/> 
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
       <Route path='/home' element={<Product/>}/>
       <Route path='/productDetails'element={<ProductDetails/>}/>

       

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;