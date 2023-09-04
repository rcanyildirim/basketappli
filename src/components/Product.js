import React from 'react'
import { Card, Image } from 'semantic-ui-react';
export default function Product({product,basket,setBasket}) {

  function addBasket(){
    const addFind = basket.find(item => item.id === product.id);
    if(addFind)
    {
      addFind.amount += 1;
      setBasket([...basket.filter(item => item.id !== product.id),{
        id : product.id,
        name: product.name,
        img : product.img,
        price  : product.price,
        amount : addFind.amount
      }])

    }
    else 
    {
      setBasket([...basket,{
        id : product.id,
        name: product.name,
        price  : product.price,
        img : product.img,
        amount : 1
      }])
    }
  }
  return (
    <div>
    <div className='product'>
    <div className='countProduct'>
    </div>
    <Card className='card'>
      <Image src={product.img} onClick={addBasket} />
      <Card.Content>
        <Card.Header className='cardHeader'>{product.name}</Card.Header>
        <Card.Meta id="meta"><br/>${product.price}</Card.Meta>
      </Card.Content>
    </Card>
    </div>
    </div>
    )
  }
