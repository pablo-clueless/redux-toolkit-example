import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { CartItems } from '../../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: CartItems,
    amount: 0,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getCartItems.pending]: state => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            // console.log(action)
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: state => {
            state.isLoading = false
        }
    },
    reducers: {
        clearCart: state => {
            state.cartItems = []
        },
        removeItem: (state, { payload }) => {
            const itemId = payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: state => {
            let amount = 0
            let total = 0
            state.cartItems.forEach(item => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    }
})

export const { clearCart, removeItem, increase, decrease,calculateTotal } = cartSlice.actions
export default cartSlice.reducer
