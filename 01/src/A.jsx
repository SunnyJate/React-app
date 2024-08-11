import React, { createContext } from 'react'

const GreetContext = createContext();

export default function A() {
    const greet = "Hello";
    const greet2 = "Hello2";
  return (

    <div>
      <GreetContext.Provider value={{greet,greet2}}>
      </GreetContext.Provider>
    </div>
  )
}
export {GreetContext}