import React from 'react'
import { useDispatch } from 'react-redux'

import { clearCart } from '../redux/features/cart/cartSlice'
import { closeModal } from '../redux/features/modal/modalSlice'

const Modal = () => {
    const dispatch = useDispatch()

  return (
    <aside className='overlay'>
        <div className="modal">
            <h4>Remove all items from your cart?</h4>
            <div className="btn-container">
                <button type='button' className="btn confirm-btn" onClick={() => { dispatch(clearCart()); dispatch(closeModal()) }}>
                    confirm
                </button>
                <button type='button' className="btn clear-btn" onClick={() => dispatch(closeModal())}>
                    cancel
                </button>
            </div>
        </div>
    </aside>
  )
}

export default Modal