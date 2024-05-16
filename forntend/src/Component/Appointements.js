import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Appointements() {
  const[list,setList] = useState([])

  useEffect(()=>{
axios.get('http://localhost:3000/Appdata').then(res=>{setList(res.data)}).catch(err=>{console.log(err)})

  },[])
  return (
    <div>
     <table>
     <thead>
      <tr>
        <th>Name :</th>
        <th>Number : </th>
        <th>Email :   </th>
        <th>Msg : </th>
        <th>Date :</th>
      </tr>
     </thead>
     <tbody>
     {list.map((x,index)=>(
        <tr key={index}>
      <td>{x.date} </td>
      <td>{x.name} </td>
      <td>{x.number} </td>
      <td>{x.email} </td>
      <td>{x.msg} </td>
      </tr>
   
      ))}
     </tbody>
     </table>
     

    </div>
  )
}

export default Appointements
