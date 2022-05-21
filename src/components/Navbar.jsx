import React from 'react'
import { Link } from 'react-router-dom'

import { CartIcon, User } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart)
    const { isLoggedIn } = useSelector(state => state.user)

  return (
    <nav>
        <div className="nav-center">
            <h3>redux toolkit</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
            <div className="nav-container">
                <Link to={isLoggedIn ? '/user' : '/login'}>
                    <User />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar