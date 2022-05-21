import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
    error: null
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, thunkAPI) => {
    try {
        const res = await  axios(url)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getCartItems.pending]: state => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
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
