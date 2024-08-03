import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  //usestate is a hook.
  //in usestate retues array which has 2 elemensts in there.
  //one is current state value and other is function
  console.log(count);
  console.log(setCount);

  const hanldeClickInc = () =>{
    setCount(count+1);
  }
  const hanldeClickDec = () =>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={hanldeClickInc}>+</button>
      <button onClick={hanldeClickDec}>-</button>
    </div>
  );
};

export default App;
