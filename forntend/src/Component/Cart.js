import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Cart() {
  const [list,setList] =useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:3002/cart').then(res=>{setList(res.data)}).catch(err=>{console.log(err)})
    
      },[])

  return (
    <div>
      {list.map((x,index)=>(
        <div>
        <h1 key={index}>
      <p> {x.mrp} </p>
      <p>{x.description} </p>
      <button>Place Order</button>
        </h1>
        </div>
      
  
   
      ))}
      
    </div>
  )
}

export default Cart
