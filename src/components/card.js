import React from 'react';
import './card.css';
import CardItem from './CardItem';
import image1 from '../images/img-1.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-8.jpg';
import image4 from '../images/img-3.jpeg';
import image5 from '../images/img-5.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Vehicle Batteries</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Unleash the Power of Freedom. Go Green with Replaceable Batteries'
              label='EcoSwift'
              path='/products'
            />
            <CardItem
              src={image2}
              text='Ride the Lightning. Charge Ahead with Our Swappable Battery System'
              label='VoltCruiser'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Revolutionize Your Commute. Swap, Charge, and Keep Riding'
              label='EcoRider'
              path='/products'
            />
            <CardItem
              src={image4}
              text='Unlimited Energy. Replace, Recharge, and Rediscover the City!'
              label='PowerCharge'
              path='/products'
            />
            <CardItem
              src={image5}
              text='Ignite Your Journey. Battery Swapping Made Effortless'
              label='SwiftSpark'
              path='/bookingform'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;