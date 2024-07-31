// Mobile.js
import React from "react";
import MobileList from "./MobileList";

const mobs = [
  {
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
    title: "Apple iPhone 15 (Black, 128 GB)",
    price: "65,000",
  },
   {
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/c/s/-original-imagztn7sycc4h84.jpeg?q=70",
    title: "SAMSUNG Galaxy S23 FE (Mint, 128 GB)",
    price: "34,000",
  },
]


export default function Mobile() {
  return (
    <div>
        {mobs.map((ele)=>{
            return <MobileList 
            image={ele.image} 
            title={ele.title} 
            price={ele.price} 
            />
        })}
    </div>
  );
}
