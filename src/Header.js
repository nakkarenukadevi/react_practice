import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-black text-white p-2 '>
            <div className='mx-5'>
                <ul className='flex justify-end'>
                    <li className='px-3 py-2 bg-white rounded-lg mx-4 text-black font-bold'>
                        <Link to='/showmodel'>Model</Link>
                    </li>
                    <li className='px-3 py-2 bg-white rounded-lg mx-4 text-black font-bold'>
                        <Link to='/'>rating</Link>
                    </li>
                    <li className='px-3 py-2 bg-white rounded-lg mx-4 text-black font-bold'>
                        <Link to='/carousel'>Carousel</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header