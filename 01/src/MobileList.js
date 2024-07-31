import React from "react";
import "./MobileList.css";

export default function MobileList(props) {
  const {image, title, price} = props;

    return (
        <div className="main">
            <img className="image" src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>₹ {price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}
