import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logout } from '../redux/features/user/userSlice'

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  
  return (
    <div className='user-page'>
      <div className="heading">
        <h3 className='heading'>Welcome <span>{user.username}</span></h3>
      </div>
      <button className="btn clear-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default User