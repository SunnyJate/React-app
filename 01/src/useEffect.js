import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("We are inState");
    return()=>{
      console.log("return the state")
    }//this return statement is worked as cleanup in the useeffect. As we run the code the return of useEffect will execute 1st the the other will.
  }, [clicked, count]);
  return (
    <div>
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("TO")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("My Channel")}>My Channel</button>
      <h1>{clicked}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
