import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
}
const initialState: CounterState = {
  counter: 0,
} as CounterState

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    },
  },
})

// Action Creators Functions:
export const { increment, decrement, incrementBy } = counterSlice.actions

export default counterSlice.reducer