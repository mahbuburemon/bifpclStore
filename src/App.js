import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Product1 from './components/Product1/Product1';
import Products from './components/Products/Products';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Error from './components/Error/Error';

function App() {
  return (
    <>
      
      {/* <Products></Products> */}


      <BrowserRouter>

            <Header></Header>
            <Routes>


                  <Route path="/product" element={<Products/>}/>
                  <Route path="/review" element={<OrderReview/>}/>
                  <Route path="/inventory" element={<Inventory/>}/>
                  <Route path="*" element={<Error/>}/>
              


            </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
