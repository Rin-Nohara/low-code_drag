import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './reducer/couterReducer'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})