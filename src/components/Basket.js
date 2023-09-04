import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Dropdown,Button } from 'semantic-ui-react'
export default function Basket({basket,cost,setBasket}) {
  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]
  const DropdownExampleClearable = () => (
    <Dropdown clearable options={options} placeholder='Temsilci Seçiniz' selection />
  )

  const ButtonExampleDisabled = () => <Button id="paybutton"><i class="fa-brands fa-whatsapp fa-xl"></i> SİPARİŞ VER</Button>

  const clearBasket = () => {
    setBasket([]);
  };
  const decreaseOrRemove = (productId, currentAmount) => {
    if (currentAmount > 1) {
      setBasket((prevBasket) => {
        return prevBasket.map((item) =>
          item.id === productId ? { ...item, amount: item.amount - 1 } : item
        );
      });
    } else {
      setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
    }
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setBasket((prevBasket) => {
      return prevBasket.map((item) =>
        item.id === productId ? { ...item, amount: item.amount + 1 } : item
      );
    });
  };

  return (
    <div>
    <div className='mainBasket'>
    <div className='showBasket'>
    <h2><i class="fa-solid fa-cart-shopping fa-xs"></i> SEPET</h2>
    {(basket.length === 0 && <p id='bossepet'><i className='fa-sharp fa-solid fa-basket-shopping' id='basketicon'></i> SEPETİNİZ BOŞ</p>) || null}
    {
     basket.map(item => (
       <div className='basketList'>
       <img alt='' width="100" src={item.img} id='addMenu' />
       <p>{item.name}</p>
       <p> $ {item.price * item.amount} </p>
       <button id='addReduce' onClick={() => increaseQuantity(item.id)}>+</button>
       <button id='adet'>{item.amount}</button>
       {item.amount > 1 ? (
                  <button id='addReduce' onClick={() => decreaseOrRemove(item.id, item.amount)}>-</button>
                ) : (
                  <button id='addReduce' onClick={() => removeFromBasket(item.id)}>-</button>
                )}
       </div>
       ))
     }
    <br/><br/>
     {(cost && <p align="left">Toplam Fiyat : &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; $ {cost} &nbsp; <i onClick={clearBasket} class="fa-solid fa-trash fa-sm" id='deleteicon'></i><br/><br/>
     <p>
      Temsilci Seçiniz : *<br/><br/>
      <DropdownExampleClearable/>
    </p>
    <p align="right">* Temsilci seçmek zorunludur.</p>
    <a href='https://vokzal.whatsapp-shop.com/tr'><ButtonExampleDisabled/></a></p>) || null}
     </div>
     </div>
     </div>
     )
   }
   
