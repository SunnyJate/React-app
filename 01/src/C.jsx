import React,{useContext} from 'react'
import {GreetContext} from './A'

export default function C() {

    const useCon = useContext(GreetContext); 
      
  return (
    <div>
      <h1>Greet:{useCon.greet}{useCon.greet2}</h1>

    </div>
  )
}
