import React, { useState } from 'react'
import axios from 'axios'
import './Form.css'
import log1 from '../Image/generatedtext.png'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('')
  const [petName, setPetName] = useState('')
  const [breed, setBreed] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  const Navg = useNavigate()

  const handleSubmit = () => {
    axios.post('http://localhost:3001/users/post', { name, petName, breed, number, password }).then(res => { console.log(res) }).catch(err => { console.log(err) })
    Navg('/login')
  }

  return (
    <div className='login'>
      <div className="text-center">
        {/* <h1 className="animated-heading">Welcome to Our Website</h1> */}
        <div className='animated-text'>
          <p>  <img src={log1} />
            <i class="fa-solid fa-dog" style={{ color: "#f2b407" }}></i>
            <i class="fa-solid fa-paw" style={{ color: "#0947d7" }}></i>
            <p className='para'>Pets care</p>
          </p>
          <i class="fa-solid fa-bone fa-flip-horizontal" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-bone fa-flip-horizontal" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-bone fa-flip-horizontal" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-bone fa-flip-horizontal" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-bone fa-flip-horizontal" style={{ color: "#FFD43B" }}></i>
          <i class="fa-solid fa-bone fa-flip-horizontal" style={{ color: "#FFD43B" }}></i>
        </div>

      </div>
      <form onSubmit={handleSubmit} className='form'>
        <label> Owner-Name : </label>
        <input type='text' placeholder='Owner-Name' value={name} onChange={(e) => { setName(e.target.value) }} /><br></br>
        <label> Pet-Name : </label>
        <input type='text' placeholder='Pet-name' value={petName} onChange={(e) => { setPetName(e.target.value) }} /><br></br>
        <label> Breed : </label>
        <select value={breed} onChange={(e) => { setBreed(e.target.value) }} className='form-select'>
          <option>Choose Your Breed</option>
          <option>Dog</option>
          <option>Cat </option>
          <option> Others </option>
        </select>   <br></br>
        <label>Number : </label>
        <input type='number' placeholder='Enter Your Number' value={number} onChange={(e) => { setNumber(e.target.value) }} /> <br></br>
        <label> Password : </label>
        <input type='password' placeholder='Set your password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br></br>
        <button type='submit'> Submit </button>
      </form>
     
    </div>
  )
}

export default Signup
