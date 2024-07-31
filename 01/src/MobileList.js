import React from "react";
import "./MobileList.css";

export default function MobileList(props) {
  

    return (
        <div className="main">
            <img className="image" src={props.image} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <p>₹ {props.price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}
