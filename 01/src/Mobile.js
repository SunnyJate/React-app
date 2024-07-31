// Mobile.js
import React from 'react';
import MobileList from './MobileList';

const mob1 ={
     image : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
     title : 'Apple iPhone 15 (Black, 128 GB)',
     price : '65,000'
}
const mob2 ={
    image : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/c/s/-original-imagztn7sycc4h84.jpeg?q=70',
    title : 'SAMSUNG Galaxy S23 FE (Mint, 128 GB)',
    price : '34,000'
}

export default function Mobile() {
  return (
    <div>
      <MobileList image={mob1.image} title={mob1.title} price={mob1.price} />
      <MobileList image={mob2.image} title={mob2.title} price={mob2.price} />
    </div>
  );
}
