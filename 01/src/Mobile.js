// Mobile.js
import React from "react";
import MobileList from "./MobileList";
import mobs from './mobs.json'

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
