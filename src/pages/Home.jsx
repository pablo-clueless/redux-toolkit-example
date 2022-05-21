import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Loading, Modal, Navbar } from '../components'
import { calculateTotal, getCartItems } from '../redux/features/cart/cartSlice'

const Home = () => {
  const { cartItems, isLoading, error } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  useEffect(() => {
    dispatch(calculateTotal())
  },[cartItems])

  const refreshPage = () => location.reload()

  if(isLoading) return <Loading />

  if(error) return (
  <div className='error'>
    <h3>{error}</h3>
    <button className='btn clear-btn' onClick={refreshPage}>Reload</button>
  </div>
  )

  return (
    <div>
      {isOpen && <Modal />}
      <CartContainer />
    </div>
  )
}

export default Home