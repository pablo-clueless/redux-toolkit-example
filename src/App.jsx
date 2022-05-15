import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Modal, Navbar } from './components'
import { calculateTotal } from './redux/features/cart/cartSlice'

const App = () => {
  const { cartItems } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  },[cartItems])

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App