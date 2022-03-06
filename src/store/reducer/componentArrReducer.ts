import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ReactElement } from 'react'

type ComponentType = ReactElement | HTMLElement

interface IAttr {
    component: ComponentType
}

export const counterSlice = createSlice({
    name: 'component',
    initialState: {
        value: [],
    },
    reducers: {
        push: (state, action: PayloadAction<IAttr>) => {
            const { payload } = action;
            state.value.push(payload.component as never)
        },
        pop: (state) => {},
    },
})

// Action creators are generated for each case reducer function
export const { push, pop } = counterSlice.actions

export default counterSlice.reducer