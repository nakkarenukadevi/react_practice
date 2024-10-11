import React, { useState } from 'react'
import ReusableModle from './useresuableModle';

const ShowModel = () => {
    let [modle, setshowModle] = useState(false);
    return (
        <div>
            <div className='flex justify-center my-10'>
                <button onClick={() => { setshowModle(!modle) }} className='bg-blue-500 text-white rounded-lg shadow-lg px-4 py-4 '>showModle</button>

            </div>
            {modle ? <><ReusableModle value={modle} /></> : null}
        </div>
    )
}

export default ShowModel