import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(0);
    const handledecrement = () => {
        if (counter <= 0) {
            setCounter(0)
        } else {
            setCounter(counter - 1)
        }

    }
    const handleincrement = () => {

        setCounter(counter + 1)


    }
    return (
        <div className='flex justify-center items-center my-32'>
            <button className='px-4 py-4 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-500 ' onClick={handledecrement}>Decrement</button>
            <div className='mx-5 font-bold'>CurrentCount:  {counter}</div>
            <button className='px-4 py-4 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-500 ' onClick={handleincrement}>Increment</button>

        </div>
    )
}

export default Counter