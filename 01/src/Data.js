import React, { useState } from 'react'
import datas from './datas.json'

const Data = () => {
    const [nData, setnData] = useState(datas)
   /*  const handleClick=()=>{
        setnDate([])
    } */
   const handleRemove=(itemID)=>{
    setnData(nData.filter(items=>items.id!==itemID))
   }
   const handleUpdate=(itemID)=>{
    setnData(nData.map(items  =>{
        if(items.id === itemID){
            return{name:"newName"}
        }
        else{
            return items;
        }
    }))
   }
  return (
    <div>
      <ul>
        {
            nData.map(items =>
                <li key={items.id}>
                    {items.name} <br/>
                    <button onClick={() => handleRemove(items.id)}>Remove</button>
                    <button onClick={() => handleUpdate(items.id)}>Update</button>
                </li>
            )
        }
      </ul>
      <button onClick={()=>setnData([])}>Clear</button>
    </div>
  )
}

export default Data
