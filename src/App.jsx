import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Loading, Modal, Navbar } from './components'
import { calculateTotal, getCartItems } from './redux/features/cart/cartSlice'

const App = () => {
  const { cartItems, isLoading } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  useEffect(() => {
    dispatch(calculateTotal())
  },[cartItems])

  if(isLoading) return <Loading />

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App