import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [dropdown, setDropDown] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    setDropDown(e.target.value)
    navigate(e.target.value)
  }
  return (
    <div>
      profile
      
    </div>
  )
}

export default Profile
