import Basket from './components/Basket';
import Product from './components/Product';
import './index.css';
import products from './products.json';
import {useState,useEffect} from 'react';
function App() {  
  const [basket,setBasket] = useState([]);
  const [cost,setCost] = useState("");

  useEffect( () => {
    const totalPrice = basket.reduce((pre,basket) => pre +(basket.amount*basket.price),0);
    setCost(totalPrice);

  },[basket])

  return (
    <>
    <div className='header'>
    <i class="fa-solid fa-shop"></i> SEPET UYGULAMASI
    </div>
    <div className='productContainer'>
      
    <div className='productBoxs'>

    {
      products.map(product => (
        <Product key = {product.id} basket={basket} setBasket={setBasket}  product={product} />
        ))
    }

    </div>
    <Basket cost={cost} basket={basket} setBasket={setBasket} />
    </div>

    </>
    
    );
}

export default App;
