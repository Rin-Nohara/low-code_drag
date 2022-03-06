import React from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../store/reducer'

const Testing: React.FC = () => {

    const count = useSelector((state: {counter: {value: number}}) => state.counter.value)
    const dispatch = useDispatch()

    return <>
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    </>
}

export default Testing
