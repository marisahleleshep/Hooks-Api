import './App.css';
import Product from './Product';
import Navigation from './Navigation';
import Login from './Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div >
     <Navigation/> 
      <BrowserRouter>
      <Routes>
       <Route index element={<Product/>}/>
       <Route path='/home' element={<Product/>}/>
       {/* <Route path='/information/:productId' element={<ProductDetailsPage/>}/> */}
      
       <Route path='/login' element={<Login/>}/>

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;