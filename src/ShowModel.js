import React, { useState } from 'react'
import ReusableModle from './useresuableModle';

const ShowModel = () => {
    let [isOpen, setIsOpen] = useState(false);
    const handlemodle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className='flex justify-center my-10'>
                <button onClick={handlemodle} className='bg-blue-500 text-white rounded-lg shadow-lg px-4 py-4 '>showModale</button>

            </div>

            <ReusableModle isOpen={isOpen} onClose={handlemodle} >
                <input text="type" name="name" />
                <button>submit</button>
            </ReusableModle>


        </div >
    )
}

export default ShowModel