import React from 'react'
import acc1 from '../Image/acc1.jpg'
import { useState } from 'react'
import axios from 'axios'

function Accesories() {
    const[mrp,setMrp] =useState('1549')
    const[description,setDescription]=useState('All in One Dogs Things')
    const onAddToCart =()=>{
        axios.post('http://localhost:3002/cart',{mrp,description}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
  return (
    <div>
      <h1> Acceseries </h1>
      <div className="card2">
      <img src={acc1} className="card-img-top" alt="Product" />
      <div className="card-body">
        <h5 className="card-title" onChange={(e)=>{setDescription(e.target.value)}}>{description}</h5>
        <p className="card-text" onChange={(e)=>{setMrp(e.target.value)}}>MRP: ${mrp}</p>
        <button className="btn btn-primary" onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>

    </div>
  )
}

export default Accesories
