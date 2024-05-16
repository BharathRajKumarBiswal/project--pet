import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Form.css'
import log1 from '../Image/generatedtext.png'
import { useNavigate } from 'react-router-dom'



function Login() {
  const [number, setNumber] = useState('')
  const [petName, setPetName] = useState('')
  const [password, setPassword] = useState('')
  const [list, setList] = useState([])
  const [errMsg, setErrMsg] = useState('')

  const Nav = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/pet').then(res => { setList(res.data) }).catch(err => { console.log(err) })

  })
  const handleLogin = (e) => {
    e.preventDefault();
    const data = list.find(x => x.number === number)
    if (data) {
      if (data.password === password) {
        if (data.petName === petName) {
          Nav('/')
        } else {
          setErrMsg('Wrong Breed Name')
        }
      } else {
        setErrMsg('Wrong Password')
      }
    } else {
      setErrMsg('Wrong User Enter a Valid User ID')
    }

  }

  return (

    <div className='login'>
      <div className="text-center">
      {/* <h1 className="animated-heading">Welcome to Our Website</h1> */}
      <div className='animated-text'>
      <p><img src={log1} />
        <i class="fa-solid fa-dog" style={{color: "#f2b407"}}></i>
        <i class="fa-solid fa-paw" style={{color: "#0947d7"}}></i>
        <p className='para'>Pets care</p>
        </p>
        <div className='icon'>
        <i class="fa-solid fa-bone fa-flip-horizontal" style={{color: "#FFD43B"}}></i>
       <i class="fa-solid fa-bone fa-flip-horizontal" style={{color: "#FFD43B"}}></i>
       <i class="fa-solid fa-bone fa-flip-horizontal" style={{color: "#FFD43B"}}></i>
       <i class="fa-solid fa-bone fa-flip-horizontal" style={{color: "#FFD43B"}}></i>
       <i class="fa-solid fa-bone fa-flip-horizontal" style={{color: "#FFD43B"}}></i>
       <i class="fa-solid fa-bone fa-flip-horizontal" style={{color: "#FFD43B"}}></i>
       </div>
      </div>
     
    </div>
      <div className='form'>
        <form onSubmit={handleLogin} >
          <label> Number : </label>
          <input type='number' placeholder='Enter Your Number' value={number} onChange={(e) => { setNumber(e.target.value) }} /> <br></br>
          <label> Pet-Name : </label>
          <input type='text' placeholder='Enter Your Pet Name' value={petName} onChange={(e) => { setPetName(e.target.value) }} /> <br></br>
          <label> Password : </label>
          <input type='password' placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br></br>
          <button type='submit'> Submit </button>
          
        </form>
        {errMsg} <br></br>
        New User Please Sign Up? <button onClick={() => { Nav('/signup') }}> Sign Up </button>

      </div>
      
    </div>
  )
}

export default Login
