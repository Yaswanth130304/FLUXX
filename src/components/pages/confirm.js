import React from 'react'
import Order from '../../images/order.jpg'
import '../card.css';
import CardItem from '../CardItem';


const confirm = () => {
  return (
    <div className='cards'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Order}
              text='Your order Ather1 as been placed successfully'
              label='Ather1'
              path='/products'
            />
            </ul>
            </div>
            </div>
        <h1>Your Order Is Confirmed</h1>
    </div>
  )
}

export default confirm