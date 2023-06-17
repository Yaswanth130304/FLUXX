import React from 'react';
import Ather1 from '../../assests/Ather1.png';
import Atria from '../../assests/Atria.png';
import FLASH from '../../assests/Flash.png';
import NYX from '../../assests/NYX.png';
import goeddy from '../../assests/goeddy.png';
import GOGORO from '../../assests/gogoro.png';
import Hero1 from '../../assests/hero1.png';
import Optima from '../../assests/hero2.png';
import Okinawa from '../../assests/okinawa.png';
import Simpleone from '../../assests/simpleone.png';
import '../card';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className='cards'>
      <h1>Check out these Vehicle Batteries</h1>  
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
               src={Ather1} alt='Atherev' width={'50px'} height={'50px'}
              text='Unleash the Power of Freedom. Go Green with Replaceable Batteries'
              label='Ather1'
              
              
              />
            <CardItem
              src={Simpleone} 
              text='Ride the Lightning. Charge Ahead with Our Swappable Battery System'
              label='Simpleone'
            
            />
          </ul>
          
          <ul className='cards__items'>

            <CardItem
              src={GOGORO}
              text='Revolutionize Your Commute. Swap, Charge, and Keep Riding'
              label='GOGORO'
             
            />
            <CardItem
              src={Okinawa}
              text='Unlimited Energy. Replace, Recharge, and Rediscover the City!'
              label='Okinawa'
           
            />
            <CardItem
              src={Hero1}
              text='Ignite Your Journey. Battery Swapping Made Effortless'
              label=' Vida'
             
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={Optima}
              text='Unleash the Power of Freedom. Go Green with Replaceable Batteries'
              label='Optima'
             
            />
            <CardItem
              src={goeddy}
              text='Ride the Lightning. Charge Ahead with Our Swappable Battery System'
              label='GoEddy'
             
            />
            <CardItem
              src={NYX}
              text='Unleash the Power of Freedom. Go Green with Replaceable Batteries'
              label='NYX HS500'
              
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={FLASH}
              text='Unleash the Power of Freedom. Go Green with Replaceable Batteries'
              label='Hero Flash'
              
            />
            <CardItem
              src={Atria}
              text='Ride the Lightning. Charge Ahead with Our Swappable Battery System'
              label='Hero Atria'
            
            />
          </ul>
        </div>
      </div>
      <Link to="/BookForm"><button id='book'>Book Now</button></Link>
    </div>
  );
}

export default Product;