import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'

export interface CounterState {
    counter: number
}

const initialState: CounterState = { counter: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter: (state:Draft<typeof initialState>,action: PayloadAction<{counter: number}>) => {
state.counter = action.payload.counter
        }
    }
})

export const { setCounter } = counterSlice.actions

export default counterSlice.reducer