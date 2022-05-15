import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Navbar } from './components'
import { calculateTotal } from './redux/features/cart/cartSlice'

const App = () => {
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  },[cartItems])

  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App