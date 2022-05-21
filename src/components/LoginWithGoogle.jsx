import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import { login } from '../redux/features/user/userSlice'

const client_id = import.meta.env.VITE_CLIENT_ID
console.log(client_id)

const LoginWithGoogle = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const responseGoogle = (response) => {
      if(!response.ok) return alert(`Error: ${response.error}`)

      localStorage.setItem('user', response.profileObj)
    }

  return (
    <GoogleLogin clientId='289510755419-fngtpgk4k7mgruqspritp5ta2f5pcrdc.apps.googleusercontent.com' render={(renderProps) => (
        <button type='button' className='btn google-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <FcGoogle className='icon' />
            Sign in with Google
        </button>
    )} onSuccess={responseGoogle} onFailure={responseGoogle}  cookiePolicy='single_host_origin' />
  )
}

export default LoginWithGoogle