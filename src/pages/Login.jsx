import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login } from '../redux/features/user/userSlice.js'
import { LoginWithGoogle } from '../components'

const Login = () => {
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    let user = { username, password}
    dispatch(login(user))
    setUsername('')
    setPassword('')
    navigate('/user')
  }
  
  return (
    <main className='login-page'>
      <h3>Login/Signup</h3>

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='johndoe' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn" disabled={!username || !password}>
          Login
        </button>
      </form>

      <div className='stack'>
        <LoginWithGoogle />
      </div>
    </main>
  )
}

export default Login